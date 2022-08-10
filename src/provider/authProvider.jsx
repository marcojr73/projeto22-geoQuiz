import react, { useState } from "react";

export const authContext = react.createContext({})

export const AuthProvider = (props) => {

    const [ level, setLevel ] = useState("pudim")
    const [ quiz, setQuiz ] = useState()
    

    return(
        <authContext.Provider value={{level,setLevel, quiz, setQuiz}}>
            {props.children}
        </authContext.Provider>
    )
}
