import { useEffect, useState } from "react"
import { Habbits } from "../components/Habbits"
import { HabbitData } from "../constants/mock"

const Dashboard=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        //data fetch
        setData(HabbitData)
    },[])

    const HandleAddHabbit=()=>{

    }
    return(
        <div>
            <div>
                <h2>Welcome back {}</h2>
                <h1>Current Streak: {} days</h1>
                <></>
            </div>
            <div>
                <h2>Daily Habbits</h2>

                {/* habbits card */}
                <Habbits data={data}/>
                <button onClick={HandleAddHabbit}>Add Habbit</button>
            </div>
            <div>
                <h2>Sleep Tracker</h2>
                <></>
            </div>
            <div>
                <h2>Progess Overview</h2>
                <></>
                <></>
            </div>
        </div>
    )
}

export {Dashboard}