import React, { useState,useEffect } from "react";
import NavigationBar from './home.js';
import axios from "axios";
import collections from "./store/api.js";
import Load  from "./loading.gif"
import Allposts from "./allposts.js";
import { useNavigate ,useLocation} from "react-router-dom";
import Footer from "./footer.js"; 
export default function Login(){
    const [data,setData]=useState([{id:"network error",body:"try later"}]);
    const nav = useNavigate();
    const loc = useLocation();
    const [mail,setMail] = useState(loc.state.mail);
    const [pass,setPassword] = useState(loc.state.password);
    const [loading,setLoading] =useState(false);
    useEffect(()=>{
        var u = localStorage.getItem('user')
        var p = localStorage.getItem('pass')
        if(u!==mail,p!==pass,mail==undefined){
            nav("/")
        }
       },[])
    const remove =()=>{
        setLoading(false);
    }
    useEffect(   ()=>{
        // setLoading(true);
        const fetcheddata = collections()
        fetcheddata.then(e=>setData(e))
        //   axios.get("http://localhost:3001/collections").then((e)=>setData(e.data)).
        // catch((e)=>setData([{id:1,title:"network error",body:"try later"}])).then(setTimeout(remove,4000))
    },[])
    return(
        <div className="parent">
        <NavigationBar visible={true} posts={"blue"}/>
    <div className="page-1-welcome">welcome Niteesh. Hear are few posts for you</div>
    <br></br>
        <div className="animation"><h1>posts</h1></div>
    <div className="page-data">
       {loading ? <img src={Load} className="loading"/>:<Allposts data={data} gmail={loc.state.mail}/>}
    </div>
    <Footer/>
    </div>
    )
}