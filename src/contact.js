import React,{useEffect} from "react";
import NavigationBar from './home.js'
import { useNavigate } from "react-router-dom";
import Footer from "./footer.js";
export default function Contact(){
    return(
        <>
        <NavigationBar visible={true} contact={"blue"}/>
    <div className="page-1">Contact Us</div>
    <Footer/>
    </>
    )
}