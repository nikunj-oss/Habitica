import { useState } from "react"

const SleepTracker=()=>{
    const [showform,Setshowform]=useState(false)
    const handleSleep=()=>{
        Setshowform(!showform)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Data stored Successfully")
        Setshowform(false);
    }
    return(
        <div>
            <h1>Sleep Tracker</h1>
            <button onClick={handleSleep}>{showform?"cancel":"add sleep"}</button>
           <div>
                {showform && ( <form action="" onSubmit={handleSubmit}>
                    <h1>How Was your sleep last night?</h1>
                    <label htmlFor="">How many hours did you sleep?</label>
                    <input type="number"/>
                    
                    <label htmlFor="">How much will you rate your sleep?</label>
                    <input type="range" min={1} max={10}/>

                    <button type="submit">Submit Details</button>
                </form>)}
           </div>
           <div>
                {/* Trackers and graphs */}
           </div>
        </div>
    )
}

export {SleepTracker}