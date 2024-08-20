import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SignUp() {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const signUp = async (data) => {
        setError("");

        try {
            const userData = await authService.createAccount()

            if (userData) {
                const userdata = await authService.getCurrentUser();

                if (userdata) {
                    dispatch(login(userdata));
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }


    return (
        <div className="flex item-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-ceneter">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight">Sign-Up to Create Account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have account?&nbsp;
                    <Link to='/login' className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign In
                    </Link>
                </p>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleSubmit(signUp)} className="mt-8">
                    <div className="space-y-5">
                        {/* this is custom Input which created in components folder */}
                        <Input
                            label="Name: "
                            placeholder="Enter your name"
                            type="text"
                            {...register("name", {
                                required: true,
                            })}
                        />

                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(value) || "Please enter valid email"
                                }
                            })}
                        />


                        <Input
                            label="password: "
                            placeholder="Enter your password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <Button
                            type="submit"
                            className="w-full"
                        >Sign Up</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;