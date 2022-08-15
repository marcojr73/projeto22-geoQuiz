import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../instances/axiosInstance";
import { authContext } from "../../provider/authProvider";
import { Header } from "../quiz/Header";
import { ContainerHome } from "./ContainerHome";
import { Profile } from "./profile/Profile";
import { Quizzes } from "./quizzes/Quizzes";
import { Ranking } from "./ranking/Ranking";

export function Home(){

    const token = localStorage.getItem("token")
    const {data, setData} = useContext(authContext)

    async function getWeekScore(){
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axiosInstance.get("/users/ranking", config)
            localStorage.setItem("picture", response.data.user.picture)
            console.log(response.data.user.picture)
            setData(response.data)
        } catch (error) {
            toast.error(error.response.data)
        }
    }

    useEffect(()=>{
        getWeekScore()
    },[])
    return(
        data.user !== undefined ?
        <ContainerHome>
            <Header/>
            <Ranking ranking={data.weekScore}>

            </Ranking>
            <Quizzes>

            </Quizzes>
            <Profile user={data.user}>

            </Profile>
        </ContainerHome>
        : <></>
    )
}