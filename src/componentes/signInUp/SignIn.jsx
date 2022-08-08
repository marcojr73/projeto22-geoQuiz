import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContainerLogin } from "./ContainerLogin";
import axiosInstance  from "../../instances/axiosInstance.jsx"
import logo from "../../assets/images/logo.png"


export function SignIn(){
    const [ password, setPassword ] = useState("")
    const [email, setEmail] = useState("")
    const url = "/sign-in"

    const navigate = useNavigate()

    function togleSignInUp(){
        navigate("/sign-up")
    }
    

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
                <h2>Teste os seus conhecimentos sobre os <br/> mais diversos países do mundo</h2>
            </section>
            <section className="form">
                <div className="togle">
                    <p id="signin" onClick={togleSignInUp}>Sign-in</p>
                    <p id="signup" onClick={togleSignInUp}>Sign-up</p>
                </div>
                <form onSubmit={logInUser}>
                    <p id="description">Entre agora e jogue!</p>
                    <div className="single-input">
                        <input  type="text" 
                                id="nome"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <label>email</label>
                    </div>
                    <div className="single-input">
                        <input  type="password" 
                                id="sobre   nome"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <label>senha</label>
                    </div>
                    <button type="submit" className="button">Acessar</button>
                </form>
            </section>
        </ContainerLogin>
    )
}
