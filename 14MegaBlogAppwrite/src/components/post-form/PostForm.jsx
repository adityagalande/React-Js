import React, { useCallback, useEffect } from "react";
import { useForm } from 'react-hook-form'
// import { Button, Input, Select, RTE } from "../container"
import RTE from "../RTE.jsx";
import Input from "../Input.jsx";
import Select from "../Select.jsx";
import Button from "../Button.jsx";
import databasesservice from '../../appwrite/config.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function PostForm({ post }) {

    //here watch used to continue monitor value changes in form][in react-hook-form we need to use setValue to set value in form] [control used to get control of form]
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        //if edit button pressed then use previous value else create new post then empty vlaue.
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    //check here state.user || auth.userData***************************************
    const userData = useSelector(state => state.auth.userData);

    const submit = async (data) => {
        //if we have post (means edit post)
        if (post) {
            const file = data.image[0] ? await databasesservice.uploadFile(data.image[0]) : null;

            //if file successfully uploaded then delete existing img file from appwrite using post id
            if (file) {
                databasesservice.deleteFile(post.featuredImage)
            }

            const dbPost = await databasesservice.updatePost(post.$id, { ...data, featuredImage: file ? file.$id : undefined });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        } else {
            //user waht to create now form(post)
            const file = await databasesservice.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId; //means img url id in appwrite db
                // console.log("---->", file)
                // console.log(userData.$id)
                const dbPost = await databasesservice.createPost({ ...data, userId: userData.$id });

                //if you got post then redirect user to post
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-") //excluding a to z, A to Z and spaces and digits everything will be converted to - dash
                .replace(/\s/g, "-");

        return "";
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true });
            }
        });


        return () => {
            subscription.unsubscribe();
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className='mb-4'
                    {...register("title", { required: true })} />

                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className='mb-4'
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content: " name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className='mb-4'
                    accept="image/png image/jpeg image/jpg image/gif"
                    {...register("image", { required: !post })} />

                {post && (
                    <div className="w-full mb-4">
                        <img src={
                            databasesservice.getFilePreview(post.featuredImage)
                        }
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register('status', { required: true })}
                />
                <Button
                    type="submit"
                    bgColor={post ? "bg-green-500" : undefined}
                    className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
