
import React, { useState ,useEffect } from "react";
export default function Allposts({ data , gmail}) {
    // const [blur, setBlur] = useState();
    // const [mail,setEmail] = useState();
    // const [name,setName] = useState();
    // const [mbl,setMobile] = useState();
    // const [x,setX]=useState(0);
    // const [y,setY]=useState(0)

    // const blurring =async (id)=>{
    //     setBlur(id)
    //     await axios.post("http://localhost:3001/buy",{mail:gmail}).then(e=>console.log(e))
    // }
    // const getLoc = async ()=>{
    //     await  navigator.geolocation.getCurrentPosition((position)=>{
    //         setX(position.coords.latitude);
    //         setY(position.coords.longitude);
    //     });
    // }
    // useEffect(()=>{
    //     getLoc()
    // },[])
    // const order = async (id) =>{
    //     const loc = await getLoc();
    //     await axios.post("http://localhost:3001/order",{id:id.id,name:name,location:x+","+y,mobile:mbl,mail:mail})
    //     alert("order placed sucessfully")
    // }
    // const closeAll =()=>{
    //     setBlur(0);
    //     setEmail(null);
    //     setMobile(null);
    //     setName(null);
    //     setX(null);
    //     setY(null)
    // }
    return (
        data?.map((id, data) => {
                return (
                    <div key={id.id}>
                        <div className="posts" >
                            <h1 className="title">{id.title}</h1>
                            <br></br>
                            <img src={id.image} className="image" />
                            <h2 className="description">Description : {id.body}</h2>
                            <br />
                            <div className="buy">
                                <h1 className="price">Rs.{id.price}/-</h1>
                                <button className="buy-btn">Buy</button>
                                <div className="nopopup">
                                    <div className="pop">
                                            <input placeholder="name" className="name" required />
                                            <input placeholder="phn" className="password"  type="tel" required />
                                            <input placeholder="gmail" type="mail" className="name" required /><br/>
                                            <div className="order-cancel">
                                            <button className="pop-close">order now</button><br/>
                                    <button className="pop-close">close</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                )
            
        })
    )
}