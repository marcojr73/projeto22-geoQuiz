import { ContainerProfile } from "./ContainerProfile";

export function Profile({user}){
    return(
        user !== undefined ?
        <ContainerProfile>
            <img src={user.picture}/>
            <h1>name: {user.name}</h1>
            <h1>Hits: {user.hits}</h1>
            <h1>Mistakes: {user.mistakes}</h1>
        </ContainerProfile>
        : <></>
    )
}