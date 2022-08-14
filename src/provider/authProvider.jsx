import react, { useState } from "react";

export const authContext = react.createContext({})

export const AuthProvider = (props) => {

    const [ level, setLevel ] = useState("pudim")
    const [ quiz, setQuiz ] = useState()
    const [signin, setSignin] = useState("")
    const [signup, setSignup] = useState("")
    

    return(
        <authContext.Provider value={{level,setLevel, quiz, setQuiz, signin, setSignin, signup, setSignup}}>
            {props.children}
        </authContext.Provider>
    )
}
