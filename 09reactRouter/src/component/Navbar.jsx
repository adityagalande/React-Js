import React from "react";
import { Link } from "react-router-dom";

function Navabar() {
    return (
        <>
        <nav>
            <Link to="/home"><li>Home</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/About"><li>About</li></Link>
        </nav>
        </>
    );
}

export default Navabar;