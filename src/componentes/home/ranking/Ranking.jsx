import { ContainerRanking } from "./ContainerRanking";
import logo from "../../../assets/images/logo.png"

export function Ranking(){
    return(
        <ContainerRanking>
            <img src={logo}/>
            <h1>The best players of the week</h1>
        </ContainerRanking>
    )
}