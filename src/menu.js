import React,{useEffect} from "react";
import NavigationBar from './home.js'
import { useNavigate } from "react-router-dom";
import Footer from "./footer.js";
export default function Menu(){
    return(
        <>
        <NavigationBar visible={true} menu={"blue"}/>
    <div className="page-1">welcome to Menu</div>
    <Footer/>
    </>
    )
}