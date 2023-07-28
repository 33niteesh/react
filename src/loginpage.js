import React, { useState } from "react";
import NavigationBar from "./home";
import { useNavigate } from "react-router-dom";
// import {
//     LinearProgress
//   } from "@material-ui/core";
import Footer from "./footer";
export default function All(){
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [exist,setExist] = useState();
    const nav = useNavigate();
    const  checkker = ()=>{
        // const d = await axios.post("http://localhost:3001/exist",{mail:user,password:password})
        // setExist(d)
        localStorage.setItem('user',user);
        localStorage.setItem('pass',password);
        //  axios.post("http://localhost:3001/exist",{mail:user,password:password}).then(e=>setExist(e))
        // console.log(exist)
        if(user=="niteesh"&&password=="NITeesh@33"){
            console.log(user,password)
            nav("/posts",{state:{mail:user,password:password}});
        }
        else{
            alert("Please Try again");
        }
    }
    return (
        <>
        <NavigationBar/>
        <div className="login-page">
            <div className="login-details">
                <input type="text" className="name" placeholder="Name" required onChange={(e)=>{setUser(e.target.value)}}/>
                {/* <LinearProgress className="progress_password"/> */}
                <input type="password" className="password" placeholder="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                {/* <LinearProgress className="progress_password"/> */}
                <button className="btn" onClick={()=>checkker()}>Submit</button>
            </div>
            {/* <p className="user-name">{user}</p> */}
        </div>
        <Footer/></>
    )
}