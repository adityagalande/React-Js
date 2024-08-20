import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//way to protect pages or routes
export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate()
    const [loeader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    // Where I have to loging/logout or to any other page decided by this useEffect
    useEffect(() => {

        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)

    }, [authStatus, navigate, authentication])

    return (
        loeader ? <h1>Loading...</h1> : <>{children}</>
    );
}