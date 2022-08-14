import react, { useEffect, useState } from "react"
import { authContext } from "../../provider/authProvider"
import axiosInstance from "../../instances/axiosInstance"
import { Header } from "./Header"
import { ContainerQuiz } from "./ContainerQuiz"
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
import { Question } from "./Question"

export function Quiz(){

    const token = localStorage.getItem("token")
    const localLevel = localStorage.getItem("level")
    const localQuiz = localStorage.getItem("quiz")
    const navigate = useNavigate()
    
    const [ position, setPosition ] = useState(0)
    const [ questions, setQuestions ] = useState([])
    const [ scoreBoard, setScoreBoard ] = useState([])
    const [ level, setLevel ] = useState(localLevel)
    const [ quiz, setQuiz ] = useState(localQuiz)
    const [ score, setScore ] = useState(0)
    
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    async function getQuiz(){
        try {
            const response = await axiosInstance.get(`/${quiz}/${level}`, config)
            setQuestions(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getQuiz()
    },[])

    async function validateQuestion(quizId, answer){
        try {
            const response = await axiosInstance.post(`/validate/${quiz}`, {quizId, answer}, config)
            const isCorrect = response.data
            setPosition(position + 1)
            if(isCorrect) {
                setScore(score + 1)
                setScoreBoard([...scoreBoard ,true])
            } else {
                setScoreBoard([...scoreBoard, false])
            }
        } catch (error) {
            alert(error)
        }
    }

    return(
        position < 10 ?
            questions.length > 0 ?
            <>
            <Header/>
            <ContainerQuiz>
            <h1>what is the {quiz}</h1>
            <section className="single-quiz">
                <Question name={questions[position].name} />
                <section className="options">
                    {questions[position].options.map(option => {
                        return(
                            <div onClick={()=>validateQuestion(questions[position].id, option)} className="single-option">{option}</div>
                        )
                    })}
                </section>
                <footer>
                    {scoreBoard.map(e => {
                        return(
                            e === true ?
                            <AiFillCheckCircle className="hit" />
                            :
                            <AiFillCloseCircle className="wrong" />
                        )
                    })} 
                </footer>
            </section>
            </ContainerQuiz>
            </>: <></>
        :   
        <>
        <Header/>
        <ContainerQuiz>
        <h1>Congratulations</h1>
        <section className="single-quiz">
            <h2>you got it right {score}/10</h2>
            <button onClick={()=> navigate("/home")}>Back to home</button>
            <footer>
                {scoreBoard.map(e => {
                    return(
                        e === true ?
                        <AiFillCheckCircle className="hit" />
                        :
                        <AiFillCloseCircle className="wrong" />
                    )
                })}
            </footer>
        </section>
        </ContainerQuiz>
        </>
    ) 
}