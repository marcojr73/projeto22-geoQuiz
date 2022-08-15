import { ContainerRanking } from "./ContainerRanking";
import { GiLaurelsTrophy } from "react-icons/gi"
import { authContext } from "../../../provider/authProvider";
import { useContext } from "react";

export function Ranking({ranking}){

    const {viewRank} = useContext(authContext)
    console.log(viewRank)
    return(
        ranking !== undefined ?
        <ContainerRanking>
            <aside className={viewRank}>
                <GiLaurelsTrophy className="podium"/>
                <h1>The best players of the day</h1>
                {ranking.map((rank, index) => {
                    return (
                        <ul>
                            <p>#{index+1}</p><p>{rank.name}</p><p>{rank.weekScore} pontos</p>
                        </ul>
                    )
                })}
            </aside>
        </ContainerRanking>
        : <></>
    )
}