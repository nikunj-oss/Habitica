import { SideBarContent } from "../constants/values"
import { SidebarCard } from "./SidebarCard"
import logout from "../assets/logout.png"
import { useNavigate } from "react-router-dom"


const Sidebar=()=>{
    const navigate=useNavigate();
    
    const handleClick=(path)=>{
        navigate(path)
    }
    return(
        <div className="w-64 h-screen flex flex-col justify-between">
            <div className="flex flex-col p-4">
                {SideBarContent.map((e)=>{
                    return <SidebarCard image={e.image} heading={e.heading} key={e.heading} onclick={()=>handleClick(e.path)}/>
                })}
            </div>
            <div className="flex-1 text-center p-4">
                <h2>Vision Board</h2>
            </div>
            <div className="flex1 text-center">
                <SidebarCard image={logout} heading="Log Out"/>
            </div>
        </div>
    )
}

export {Sidebar}