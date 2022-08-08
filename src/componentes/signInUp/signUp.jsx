import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../instances/axiosInstance";
import { ContainerLogin } from "./ContainerLogin"

import logo from "../../assets/images/logo.png"

export function SignUp(){
    const navigate = useNavigate()

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [ picture, setPicture ] = useState("")
    const url = "/sign-up"

    function togleSignInUp(){
        navigate("/")
    }


    async function logInUser(e){
        e.preventDefault()
        const data = {
            name,
            email,
            password,
            confirmPassword,
            picture: "https://img.olhardigital.com.br/wp-content/uploads/2018/09/20180903133856-860x450.jpg"
        }
        try {
            const response = await axiosInstance.post(url, data)
            console.log(response.data)
            navigate("/")
        } catch (error) {
            console.log(error)
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
                <h2>Teste os seus conhecimentos sobre os <br/>mais diversos países do mundo</h2>
            </section>
            <section>
                <div className="togle">
                    <p id="signin" onClick={togleSignInUp}>Sign-in</p>
                    <p id="signup" onClick={togleSignInUp}>Sign-up</p>
                </div>
                <form onSubmit={logInUser}>
                    <p id="description">Faça o seu cadastro!</p>
                    <div className="single-input">
                        <input  type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                        ></input>
                        <label>Nome</label>
                    </div>
                    <div className="single-input">
                        <input  type="text" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <label>email</label>
                    </div>
                    <div className="single-input">
                        <input  type="text" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <label>Senha</label>
                    </div>
                    <div className="single-input">
                        <input  type="text" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                        ></input>
                        <label>Confirme sua senha</label>
                    </div>
                    <div>
                        <input  type="file" 
                                onChange={(e)=>setPicture(e.target.files[0])} 
                                placeholder="sua foto"
                        ></input>
                    </div>
                    <button type="submit" className="button">Criar</button>
                </form>
            </section>
        </ContainerLogin>
    )
}