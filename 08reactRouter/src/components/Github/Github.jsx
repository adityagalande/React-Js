import { useState } from "react";
import { useEffect } from "react";


function Github() {

    const [data, setData] = useState("");

    useEffect(() => {
        fetch(`https://api.github.com/users/adityagalande`)
        .then((res) => (res.json()))
        .then((data) => {
            setData(data)
        })
    }, [])

    return (
        <>
            <div className="flex-col justify-center items-center">
                <div className="text-center p-10 font-bold text-xl" >GitHub Following: {data.following} </div>
                <img src={data.avatar_url} alt="Git picture" className="m-auto rounded-2xl mb-8 w-[14%]" />
            </div>
        </>
    );
}

export default Github;