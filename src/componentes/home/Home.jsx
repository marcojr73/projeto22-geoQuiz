import { useEffect, useState } from "react";
import axiosInstance from "../../instances/axiosInstance";
import { Header } from "../quiz/Header";
import { ContainerHome } from "./ContainerHome";
import { Profile } from "./profile/Profile";
import { Quizzes } from "./quizzes/Quizzes";
import { Ranking } from "./ranking/Ranking";

export function Home(){

    const token = localStorage.getItem("token")
    const [ data, setData ] = useState([])

    async function getWeekScore(){
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axiosInstance.get("/users/ranking", config)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getWeekScore()
    },[])

    return(
        data !== undefined ?
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