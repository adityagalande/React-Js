import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

// Outlet uses this layout as base (eg. Hrader & Footer) and change in between of these two component tags
// React Outlet is a component provided by React Router that serves as a placeholder for child routes within a parent route.

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