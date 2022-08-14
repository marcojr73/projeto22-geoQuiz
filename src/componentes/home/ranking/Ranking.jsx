import { ContainerRanking } from "./ContainerRanking";
import { GiLaurelsTrophy } from "react-icons/gi"

export function Ranking({ranking}){

    return(
        ranking !== undefined ?
        <ContainerRanking>
            <GiLaurelsTrophy className="podium"/>
            <h1>The best players of the day</h1>
            {ranking.map((rank, index) => {
                return (
                    <ul>
                        <p>#{index+1}</p><p>{rank.name}</p><p>{rank.weekScore} pontos</p>
                    </ul>
                )
            })}
        </ContainerRanking>
        : <>carregando</>
    )
}