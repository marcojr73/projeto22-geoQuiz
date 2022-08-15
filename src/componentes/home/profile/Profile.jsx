import { useContext } from "react";
import { authContext } from "../../../provider/authProvider";
import { ContainerProfile } from "./ContainerProfile";

export function Profile({user}){
    const {viewProfile} = useContext(authContext)
    return(
        user !== undefined ?
        <ContainerProfile>
            <aside className={viewProfile}>
                <img src={user.picture}/>
                <h1>name: {user.name}</h1>
                <h1>Hits: {user.hits}</h1>
                <h1>Mistakes: {user.mistakes}</h1>
            </aside>
        </ContainerProfile>
        : <></>
    )
}