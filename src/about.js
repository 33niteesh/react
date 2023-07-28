import React,{useEffect} from "react";
import NavigationBar from './home.js'
import { useNavigate } from "react-router-dom";
import Footer from "./footer.js";
export default function About(){
    return(
        <>
        <NavigationBar visible={true} about={"blue"}/>
    <div className="page-1">About Page. JSON Placeholder
Free fake API for testing and prototyping.
Powered by JSON Server + LowDB. Tested with XV.</div>
<Footer/>
    </>
    )
}