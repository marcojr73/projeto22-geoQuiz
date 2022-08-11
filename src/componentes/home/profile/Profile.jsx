import { useEffect, useState } from "react";
import { ContainerProfile } from "./ContainerProfile";
import axiosInstance from "../../../instances/axiosInstance"


export function Profile(){
    
    const token = localStorage.getItem("token")
    const [ dataUser, setDataUser ] = useState([])

    async function getUser(){
        try {
            const config = {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }
            const response = await axiosInstance.get("/user", config)
            setDataUser(response.data)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(()=>{
        getUser()
    }, [])

    return(
        <ContainerProfile>
            <img src={dataUser.picture}/>
            <h1>Hits: {dataUser.hits}</h1>
            <h1>Mistakes: {dataUser.mistakes}</h1>
            <h1>Week score: {dataUser.weekScore}</h1>
        </ContainerProfile>
    )
}