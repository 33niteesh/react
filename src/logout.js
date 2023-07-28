import React from "react";
import NavigationBar from './home.js'
import Footer from "./footer.js";

export default function Login(){

    return(
        <>
        <NavigationBar visible={false}/>
        <div className="page-1">
            please press log in on navigation to know about.
        </div>
        <Footer/>
    </>
    )
}