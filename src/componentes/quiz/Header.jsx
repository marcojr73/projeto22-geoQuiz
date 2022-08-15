import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import { GiLaurelsTrophy } from "react-icons/gi"
import { authContext } from "../../provider/authProvider"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export function Header(){
    const {viewRank, setViewRank} = useContext(authContext)
    const {viewProfile, setViewProfile} = useContext(authContext)
    const picture = localStorage.getItem("picture")
    const navigate = useNavigate()

    function togleVisibilityRank(){
        if(viewRank === "visible"){
            setViewRank("")
        }else {
            setViewRank("visible")
        }
    }

    function togleVisibilityProfile(){
        if(viewProfile === "visible"){
            setViewProfile("")
        }else {
            setViewProfile("visible")
        }
    }

    function goHome(){
        navigate("/home")
    }

    return(
        picture !== undefined ?
        <ContainerHeader>
            <GiLaurelsTrophy className="podium" onClick={()=>togleVisibilityRank()}/>
            <img src={logo} className="home" onClick={()=>goHome()}/>
            <img className="pic" src={picture} onClick={()=>togleVisibilityProfile()}/>
        </ContainerHeader>
        : <></>
    )
}

const ContainerHeader = styled.header`
    width: 100vw;
    height: 150px;
    background-color: var(--cor-principal);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;

    .home{
        width: 120px;
        cursor: pointer; 
    }

    .pic{
        display: none;
    }
    .podium{
        display: none;
    }

    @media only screen and (max-width: 914px){
        height: 100px;
        
        .home{
            width: 80px;
        }

        .pic{
            display: flex;
            width: 50px;
            height: 50px;
            border-radius: 50%;

        }

        .podium{
            display: flex;
            font-size: 50px;
            color: #d3b220;
        }
    }

`