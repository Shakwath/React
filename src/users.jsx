
import { useEffect ,useState} from "react";
export default function Users(){
    const [users,setUsers] = useState([]);
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return(
        <div>
            <h3>Users : {users.length}</h3>
        </div>
    )
}
/**
 * 1 - declear a state to hold data
 * 2 - useeffect er call back function dibo
 * 3 - defendency array
 * 4 - fetch.then agula krbo
 */