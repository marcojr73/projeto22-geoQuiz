import { ContainerQuizzes } from "./ContainerQuizzes";
import mapCity from "../../../assets/images/mapcity.jpeg"
import flags from "../../../assets/images/flags.jpeg"
import mapCountry from "../../../assets/images/mapCountry.jpeg"
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import react from "react";
import { authContext } from "../../../provider/authProvider";

export function Quizzes(){
    const { setQuiz, setLevel } = react.useContext(authContext)

    const navigate = useNavigate()

    function selectQuiz(quiz, level){
        
        setQuiz(quiz)
        setLevel(level)
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
                    <button onClick={()=> selectQuiz("capitals", "easy")} className="button easy">Easy</button>
                    <button onClick={()=> selectQuiz("capitals", "medium")} className="button medium">Medium</button>
                    <button onClick={()=> selectQuiz("capitals", "hard")} className="button hard">Hard</button>
                </div>
            </div>
            <div className="box">
                <img className="banner" src={flags}/>
                <div className="settings">
                    <h1>How many flags <br/> can you hit?</h1>
                    <button onClick={()=> selectQuiz("flags", "easy")} className="button easy">Easy</button>
                    <button onClick={()=> selectQuiz("flags", "medium")} className="button medium">Medium</button>
                    <button onClick={()=> selectQuiz("flags", "hard")} className="button hard">Hard</button>
                </div>
            </div>
            <div className="box">
                <img className="banner" src={mapCountry}/>
                <div className="settings">
                    <h1>How many territories <br/> can you hit?</h1>
                    <button onClick={()=> selectQuiz("territories", "easy")} className="button easy">Easy</button>
                    <button onClick={()=> selectQuiz("territories", "medium")} className="button medium">Medium</button>
                    <button onClick={()=> selectQuiz("territories", "hard")} className="button hard">Hard</button>
                </div>
            </div>
        </ContainerQuizzes>
    )
}