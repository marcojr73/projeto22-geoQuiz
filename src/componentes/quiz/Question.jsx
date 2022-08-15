export function Question({name, quiz}){
    if(quiz === "capitals"){
        return (
            <h2 className="capitals">{name}</h2>
        )
    }
    if(quiz === "flags"){
        return (
            <h2 className="flag">{name}</h2>
            )
    }
    if(quiz === "territories"){
        return(
            <img className="map" src={name}/>
        )
    } 
}