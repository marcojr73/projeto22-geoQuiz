import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import axios from "axios"
import { ContainerLogin } from "./ContainerLogin";

export function SignIn(){
    const [ password, setPassword ] = useState("")
    const [email, setEmail] = useState("")
    const url = "http://localhost:5000"

    const navigate = useNavigate()

    async function logInUser(e){
        e.preventDefault()

        const data = {
            email,
            password,
        }
        try {
            const response = await axios.post(`${url}/sign-in`, data)
            localStorage.setItem("token", response.data)
            navigate("/home")
        } catch (error) {
            alert(error.response.data)
        }
    }
    return(
        <ContainerLogin>
            <form onSubmit={logInUser}>
                <p>Usuário (e-mail)</p>
                <input  type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                ></input>
                <p>Senha</p>
                <input  type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Passsword"
                ></input>
                <button type="submit" className="button">Acessar</button>
                <Link to="/sign-up">Primeiro acesso? Crie sua conta!</Link>
            </form>
        </ContainerLogin>
    )
}
