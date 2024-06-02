import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

// Outlet uses this layout as base (eg. Hrader & Footer) and change in between of these two component tags

function Root(){
    return(
        <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    );
}

export default Root;