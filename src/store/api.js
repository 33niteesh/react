import axios from "axios";
export default function collections(){
    var data; 
    data=axios.get("http://localhost:3001/collections")
    data=data.then(e=>e.data)
    console.log(data)
    return data; 
}