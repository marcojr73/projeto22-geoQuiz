import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContainerLogin } from "./ContainerLogin";
import axiosInstance  from "../../instances/axiosInstance.jsx"
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
import { authContext } from "../../provider/authProvider"

export function SignIn(){
    const [ password, setPassword ] = useState("")
    const [email, setEmail] = useState("")
    const [ activeEmail, setActiveEmail ] = useState("")
    const [ activePass, setActivePass ] = useState("")
    const url = "/sign-in"
    
    const {signin, setSignin, signup, setSignup} = useContext(authContext)
    
    setSignin("sign")
    setSignup("")

    useEffect(()=>{
        if(email !== "") setActiveEmail("active")
        if(password !== "") setActivePass("active")
    },[email, password])

    const navigate = useNavigate()

    async function logInUser(e){
        e.preventDefault()

        const data = {
            email,
            password,
        }
        try {
            const response = await axiosInstance.post(url, data)
            localStorage.setItem("token", response.data)
            navigate("/home")
        } catch (error) {
            alert(error.response.data)
        }
    }

    
    return(
        <ContainerLogin>
            <section className="banner">
                <div className="title">
                    <h1>GeoQ<span>uiz</span></h1>
                </div>
                <img src = {logo}/>
                <h2>test your knowledge about the<br/> geography of countries </h2>
            </section>
            <section className="form">
                <div className="togle">
                    <Link to="/" className={signin}>Sign-in</Link>
                    <Link to="/sign-up" className={signup} >Sign-up</Link>
                </div>
                <form onSubmit={logInUser}>
                    <p id="description">enter and play now!</p>
                    <div className="single-input">
                        <input  type="text" 
                                id="nome"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <label className={activeEmail}>email</label>
                    </div>
                    <div className="single-input">
                        <input  type="password" 
                                id="sobrenome"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <label className={activePass}>senha</label>
                    </div>
                    <button type="submit" className="button">Log In</button>
                </form>
            </section>
        </ContainerLogin>
    )
}
