export function Question({name}){

    return(
        name.length > 40 ?
        <img className="map" src={name}/>
        :<h2>{name}</h2>
    )
}