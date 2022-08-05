import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import axios from "axios"
import { ContainerLogin } from "./ContainerLogin";

export function SignUp(){
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [ picture, setPicture ] = useState("")

    const url = "http://localhost:5000"

    const navigate = useNavigate()

    async function logInUser(e){
        e.preventDefault()

        const data = {
            email,
            password,
        }
        try {
            const response = await axios.post(`${url}/sign-up`, data)
            navigate("/")
        } catch (error) {
            alert(error.response.data)
        }

    }
    return(
        <ContainerLogin>
            <form onSubmit={logInUser}>
                <input  type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome"
                ></input>
                <input  type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                ></input>
                <input  type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Passsword"
                ></input>
                <input  type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirme a sua senha"
                ></input>
                <input  type="file" 
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)}
                        placeholder="sua foto"
                ></input>
                <button type="submit" className="button">Criar</button>
                <Link className="button back" to="/">Já tem uma conta? faça o login!</Link>
            </form>
        </ContainerLogin>
    )
}