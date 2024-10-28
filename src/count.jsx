import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);

    const handleAdd = () =>{
                const newCount = count + 1;
                setCount(newCount) 
            }
    const handleAdd2 = () =>{
                const newCount = count - 1;
                setCount(newCount) 
            }

    return(
        <div style={{border:'2px solid black' ,borderRadius:'15px',margin: '15px',
            padding : '15px'}}>
            <h3>Count : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleAdd2}>Remove</button>
        </div>
    )
}


// 1 -Even Handling
// 2 - distructure kibabe kori.
//const [first ,second]= [12.30]

//function getSomething(){
// return [24,30]
// }
// getSomething()

//const[a,b]=getSomething();

//function useState(num){
//    function updateNum(value){
//     num = value;
//    }
//    return [num,updateNum] array retrun
// }
// const[a,b]=useState(6)


// 3 -counter.jsx banabo 
// export deafualt function Counter(){
//     return(
//         <div>
//         <h3>Count:</h3>
//         </div>
//     )
// } krbo
//app.jsx e seta import krte hbe.


//4 - Team.jsx banabo
//export krbo uporer moto
//import app.jsx
//kutai use krbo ata dekabo
//counter er moto css apply
//const nteamstykle ={ bordr: or anything}

//declear useState const[team,setteam]=useState(11) style er upore jeiakne h3 eikane dekabo players: {team} 
//state change kora jabe nah.
//useEffect{} -- User.jsx normal import export json placeholder teke users tkee data load krbo result pawar jnnnop useState krte hbe


