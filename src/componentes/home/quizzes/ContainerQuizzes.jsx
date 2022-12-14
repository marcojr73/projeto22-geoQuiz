import styled from "styled-components"

export const ContainerQuizzes = styled.main`
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25vh;

    h1{
        text-align: center;
    }

    .settings{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        font-size: 20px;
    }

    .button{
        color: #FFFFFF;
        width: 150px;
        height: 30px;
        background-color: var(--cor-principal);
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 20px;
    }

    .box{
        margin-bottom: 45px;
        width: 550px;
        height: 200px;
        background-color: var(--cor-secundaria);
        border-radius: 20px;
        display: flex;
    }

    .banner{
        width: 50%;
        height: 100%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    @media only screen and (max-width: 914px){
        margin-top: 15vh;
        .box{
            width: 80vw;
        }
        .settings{
            font-size: 15px;
        }
    }

    @media only screen and (max-width: 514px){
        .button{
            width: 120px;
        }
        .box{
            margin-top: 20px;
            margin-bottom: 0px;
            height: 165px;
        }
    }
` 