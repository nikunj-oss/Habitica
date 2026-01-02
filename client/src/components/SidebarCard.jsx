const SidebarCard=({image,heading,onclick})=>{
    return(
        <div className="flex-1 p-4 text-center" onClick={onclick?onclick:undefined}>
            <img src={image} alt={heading} className="w-6 h-6"/>
            <p>{heading}</p>
        </div>
    )
}

export {SidebarCard}