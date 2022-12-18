import { ContainerQuizzes } from "./ContainerQuizzes"
import mapCity from "../../../assets/images/mapcity.jpeg"
import flags from "../../../assets/images/flags.jpeg"
import mapCountry from "../../../assets/images/mapCountry.jpeg"
import { useNavigate } from "react-router-dom"

export function Quizzes(){

    const navigate = useNavigate()

    function selectQuiz(quiz, level){
        localStorage.setItem("quiz", quiz)
        localStorage.setItem("level", level)
        navigate("/quiz")
    }

    return(
        <ContainerQuizzes>
            <div className="box">
                <img className="banner" src={mapCity}/>
                <div className="settings">
                    <h1>How many capitals <br/> can you hit?</h1>
                    <button id="capitals-easy" onClick={()=> selectQuiz("capitals", "easy")} className="button easy">Easy</button>
                    <button id="capitals-medium" onClick={()=> selectQuiz("capitals", "medium")} className="button medium">Medium</button>
                    <button id="capitals-hard" onClick={()=> selectQuiz("capitals", "hard")} className="button hard">Hard</button>
                </div>
            </div>
            <div className="box">
                <img className="banner" src={flags}/>
                <div className="settings">
                    <h1>How many flags <br/> can you hit?</h1>
                    <button id="flags-easy" onClick={()=> selectQuiz("flags", "easy")} className="button easy">Easy</button>
                    <button id="flags-medium" onClick={()=> selectQuiz("flags", "medium")} className="button medium">Medium</button>
                    <button id="flags-hard" onClick={()=> selectQuiz("flags", "hard")} className="button hard">Hard</button>
                </div>
            </div>
            <div className="box">
                <img className="banner" src={mapCountry}/>
                <div className="settings">
                    <h1>How many territories <br/> can you hit?</h1>
                    <button id="territories-easy" onClick={()=> selectQuiz("territories", "easy")} className="button easy">Easy</button>
                    <button id="territories-medium" onClick={()=> selectQuiz("territories", "medium")} className="button medium">Medium</button>
                    <button id="territories-hard" onClick={()=> selectQuiz("territories", "hard")} className="button hard">Hard</button>
                </div>
            </div>
        </ContainerQuizzes>
    )
}