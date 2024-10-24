import { useEffect } from "react";

export default function Users(){
    const[users,setUsers]= useState([]);

    // use effects with call back
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res  => res.json())
        .then(data =>console.log(data))
    },[])
    
    return(
        <div>

        </div>
    )
}