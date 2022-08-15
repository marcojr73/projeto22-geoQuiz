import react, { useState } from "react";

export const authContext = react.createContext({})

export const AuthProvider = (props) => {

    const [signin, setSignin] = useState("")
    const [signup, setSignup] = useState("")
    const [ data, setData ] = useState({})
    const [ viewRank, setViewRank ] = useState("")
    const [ viewProfile, setViewProfile ] = useState("")
    

    return(
        <authContext.Provider value={{signin, setSignin, signup, setSignup, 
                                      data, setData, viewRank, setViewRank, 
                                      viewProfile, setViewProfile}}>
            {props.children}
        </authContext.Provider>         
    )
}
