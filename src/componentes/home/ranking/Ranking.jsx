import { ContainerRanking } from "./ContainerRanking";
import logo from "../../../assets/images/logo.png"
import { useEffect } from "react";

export function Ranking(){

    async function getWeekScore(){
        
    }


    useEffect(()=>{

    },[])

    return(
        <ContainerRanking>
            <img src={logo}/>
            <h1>The best players of the week</h1>
        </ContainerRanking>
    )
}