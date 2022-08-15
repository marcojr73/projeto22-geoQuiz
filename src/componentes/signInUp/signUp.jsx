import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../instances/axiosInstance";
import { ContainerLogin } from "./ContainerLogin"
import { Link } from "react-router-dom";
import Loader from "./Loader";

import logo from "../../assets/images/logo.png"
import { authContext } from "../../provider/authProvider";
import { toast } from "react-toastify";

export function SignUp(){
    const navigate = useNavigate()

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [ picture, setpicture ] = useState("")
    const [ activeName, setActiveName ] = useState("")
    const [ activeEmail, setActiveEmail ] = useState("")
    const [ activePass, setActivePass ] = useState("")
    const [ activeConfirmPass, setActiveConfirmPass ] = useState("")
    const [ activePic, setActivePic ] = useState("")
    const [ loader, setLoader ] = useState("Create")
    
    const url = "/sign-up"

    const {signin, setSignin, signup, setSignup} = useContext(authContext)
    
    setSignin("")
    setSignup("sign")

    useEffect(()=>{
        if(name !== "") setActiveName("active")
        if(email !== "") setActiveEmail("active")
        if(password !== "") setActivePass("active")
        if(confirmPassword !== "") setActiveConfirmPass("active")
        if(picture !== "") setActivePic("active")
    },[name, email, password, confirmPassword, picture])


    async function logInUser(e){
        e.preventDefault()

        const data = {
            name,
            email,
            password,
            confirmPassword,
            picture
        }
        
        try {
            setLoader(<Loader/>)
            await axiosInstance.post(url, data)
            navigate("/")
        } catch (error) {
            setLoader("Create")
            toast.error(error.response.data)
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
            <section>
                <div className="togle">
                    <Link to="/" className={signin}>Sign-in</Link>
                    <Link to="/sign-up" className={signup} >Sign-up</Link>
                </div>
                <form onSubmit={logInUser}>
                    <p id="description">Create your account!</p>
                    <div className="single-input">
                        <input  type="text" 
                                disabled={loader !== "Create" ? true : false}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                        ></input>
                        <label className={activeName}>Name</label>
                    </div>
                    <div className="single-input">
                        <input  type="text" 
                                disabled={loader !== "Create" ? true : false}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <label className={activeEmail}>email</label>
                    </div>
                    <div className="single-input">
                        <input  type="password" 
                                disabled={loader !== "Create" ? true : false}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <label className={activePass}>Password</label>
                    </div>
                    <div className="single-input">
                        <input  type="password" 
                                disabled={loader !== "Create" ? true : false}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                        ></input>
                        <label className={activeConfirmPass}>Confirm your password</label>
                    </div>
                    <div className="single-input">
                        <input  type="text" 
                                disabled={loader !== "Create" ? true : false}
                                onChange={(e)=>setpicture(e.target.value)} 
                        ></input>
                        <label className={activePic}>Picture</label>
                    </div>
                    <button type="submit" className="button">{loader}</button>
                </form>
            </section>
        </ContainerLogin>
    )
}