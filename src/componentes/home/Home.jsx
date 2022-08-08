import { ContainerHome } from "./ContainerHome";
import { Profile } from "./profile/Profile";
import { Quizzes } from "./quizzes/Quizzes";
import { Ranking } from "./ranking/Ranking";

export function Home(){
    return(
        <ContainerHome>
            <Ranking>

            </Ranking>
            <Quizzes>

            </Quizzes>
            <Profile>

            </Profile>
        </ContainerHome>
    )
}