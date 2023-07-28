import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NavigationBar(props) {
    const nav = useNavigate()
    const [login, setLogin] = useState(false);
    const [data,setData] = useState(props.visible);
    const [color1,setColor1] = useState(props.menu)
    const [color2,setColor2] = useState(props.about)
    const [color3,setColor3] = useState(props.contact)
    const [color4,setColor4] = useState(props.posts)
    const [bg1,setBg] = useState()
    const [bg2,setBg2] = useState()
    const [bg3,setBg3] = useState()
    const [bg4,setBg4] = useState()
    const[mail,setMail]=useState()
    const [password,setPassword]= useState()
    useEffect(() =>{
        setMail(localStorage.getItem('user'));
        setPassword(localStorage.getItem('pass'))
        if(data){
            setLogin(true);
        }
        if(color1==="blue"){
            setColor1("blue")
            setBg("white")
        }
        if(color2==="blue"){
            setColor2("blue")
            setBg2("white")
        }
        if(color3==="blue"){
            setColor3("blue")
            setBg3("white")
        }
        if(color4==="blue"){
            setColor4("blue")
            setBg4("white")
        }
    },[login])
    const logout = () =>{
        setLogin(false);
        localStorage.setItem('user',"")
        localStorage.setItem('pass',"")
        nav('/');

    }
    return (
        <div className="navigation-header">
            {
        login 
                    ? <><div className="navigation-bar" onClick={()=>nav('/menu')} style={{color:`${color1}`,backgroundColor:`${bg1}`}}>Menu</div>
                        <div className="navigation-bar" onClick={()=>nav('/about')} style={{color:`${color2}`,backgroundColor:`${bg2}`}}>About</div>
                        <div className="navigation-bar" onClick={()=>nav('/Contact')} style={{color:`${color3}`,backgroundColor:`${bg3}`}}>Contact</div>
                        <div className="navigation-bar" onClick={()=>nav('/posts',{state:{mail:mail,password:password}})} style={{color:`${color4}`,backgroundColor:`${bg4}`}}>Posts</div>
                        <div className="navigation-bar" onClick={logout}>logout</div></>
                    :
                    <><div className="navigation-bar" onClick={()=>nav("/home")}>login</div>
                    {/* <div className="navigation-bar" onClick={()=>nav("/reg")}>Regester</div> */}
                    </>
            }

        </div>
    )
}