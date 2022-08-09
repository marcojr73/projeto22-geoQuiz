import react, { useEffect, useState } from "react"
import { authContext } from "../../provider/authProvider"
import axiosInstance from "../../instances/axiosInstance"
import { Header } from "./Header"
import { ContainerQuiz } from "./ContainerQuiz"

export function Quiz(){

    const token = localStorage.getItem("token")
    const { level, quiz } = react.useContext(authContext)
    
    const [ position, setPosition ] = useState(0)
    const [ questions, setQuestions ] = useState([])
    
    async function getQuiz(){
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

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

    return(
        questions.length > 0 ?
        <>
            <Header/>
            <ContainerQuiz>
            <h1>what is the {quiz}</h1>
            <section className="single-quiz">
                <h2>{questions[position].name}</h2>
                <section className="options">
                    {questions[position].options.map(option => {
                        return(
                            <div onClick={()=>setPosition( position + 1 )} className="single-option">{option}</div>
                        )
                    })}
                </section>
            </section>
        </ContainerQuiz>
        </>: <></>
    ) 
}