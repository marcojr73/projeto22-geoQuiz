import styled from "styled-components"

export const ContainerQuiz = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 50px;
        font-size: 40px;
    }

    h2{
        font-size: 30px;
        margin: 30px 0px 30px 0px;
    }

    .flag{
        font-size: 75px;
    }

    .options, .single-quiz{
        display: flex;
        flex-direction: column;
    }
    .single-quiz{
        margin-top: 50px;
        width: 500px;
        min-height: 500px;
        margin-bottom: 50px;
        background-color: var(--cor-secundaria);
        border-radius: 25px;
        align-items: center;
        justify-content: space-around;
    }

    .single-option{
        font-size: 25px;
        margin-bottom: 15px;
        width: 450px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        background-color: #FFFFFF;
    }

    footer{
        width: 80%;
        height: 40px;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }

    .wrong{
        font-size: 40px;
        color: red;
    }

    .hit{
        font-size: 40px;
        color: green;
    }

    button{
        color: #FFFFFF;
        font-size: 17px;
        width: 150px;
        height: 45px;
        background-color: var(--cor-principal);
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 15px;
    }

    .map{
        width: 400px;
        height: 350px;
        margin: 15px 0px 15px 0px;
    }

    @media only screen and (max-width: 914px){
        .single-quiz{
            width: 85vw;
        }
        .single-option{
            width: 80vw;
        }
        h1{
            font-size: 35px;
        }
    }


`