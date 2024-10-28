import { useState } from "react"
export default function Team(){

    const[team,setTeam] = useState(11);
    const handleAddd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const teamStyle = {
        border : '2px solid blue',
        margin : '15px',
        padding : '15px',
        borderRadius : '15px'
    }
    return(
        <div style={teamStyle} >
            <h3>Players: {team}</h3>
            <button onClick={handleAddd}>Add</button>
        </div>
    )

}