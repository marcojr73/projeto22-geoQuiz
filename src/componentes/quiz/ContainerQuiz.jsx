import styled from "styled-components"

export const ContainerQuiz = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 5%;
        font-size: 40px;
    }

    h2{
        font-size: 30px;
    }

    .options, .single-quiz{
        display: flex;
        flex-direction: column;
    }
    .single-quiz{
        margin-top: 5%;
        width: 500px;
        height: 500px;
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

    .wrong{
        font-size: 30px;
        color: red;
    }

    .hit{
        font-size: 30px;
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


`