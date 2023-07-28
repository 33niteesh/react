import React, { useState } from "react";
import NavigationBar from "./home";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import axios from "axios";
export default function Regester(){
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [otp,setOTP] = useState(0);
    const [rand,setRand] = useState();
    const nav = useNavigate();
    const  checkker = async ()=>{
        var random=Math.floor(1000 + Math.random() * 9000)
        await axios.post("http://localhost:3001/verification",{mail:user,otp:random}).then(e=>setRand(e.data.data))
        alert("otp sent")
    }
    const regestraion = async ()=>{
        console.log(otp==rand)
        if(otp==rand){
            await axios.post("http://localhost:3001/regester",{mail:user,password:password})
        nav("/")
        }
        else{
            alert("wrong otp")
        }
    }
    return (
        <>
        <NavigationBar/>
        <div className="login-page">
            <div className="login-details">
                <input type="text" className="name" placeholder="Name" required onChange={(e)=>{setUser(e.target.value)}}/>
                <input type="password" className="password" placeholder="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className="btn" onClick={()=>checkker()}>send otp</button>
                <input type="number" className="password" placeholder="otp" required onChange={(e)=>{setOTP(e.target.value)}}/>
                {/* <LinearProgress className="progress_password-on-reg"/> */}
                <button className="btn" onClick={()=>regestraion()}>Submit</button>
            </div>
        </div>
        <Footer/></>
    )
}