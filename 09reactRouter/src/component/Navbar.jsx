import React from "react";
import { NavLink } from "react-router-dom";

function Navabar() {
    return (
        <>
        <nav>
            <NavLink className={(e) => {return e.isActive ? 'changeRed' : ''}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e) => {return e.isActive ? 'changeRed' : ''}} to="/login"><li>Login</li></NavLink>
            <NavLink className={(e) => {return e.isActive ? 'changeRed' : ''}} to="/About"><li>About</li></NavLink>
        </nav>
        </>
    );
}

export default Navabar;