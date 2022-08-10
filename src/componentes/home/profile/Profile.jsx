import { useEffect } from "react";
import { ContainerProfile } from "./ContainerProfile";
import axiosInstance from "../../../instances/axiosInstance"


export function Profile(){
    
    async function getUser(){
        // const response = await axiosInstance.get()

    } 

    useEffect(()=>{
        getUser()
    }, [])

    return(
        <ContainerProfile>
            <img src="https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4e67d5c984816196/5f7f721bc1be730f80a84ab2/jax_skin01.jpg"/>
            <h1>Hits: </h1>
            <h1>Mistakes: </h1>
            <h1>Week score:</h1>
        </ContainerProfile>
    )
}