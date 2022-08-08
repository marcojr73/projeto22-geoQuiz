import styled from "styled-components";

export const ContainerLogin = styled.main`
    display: flex;

    .banner, form{
        background-color: var(--cor-principal);
        width: 50vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
    }

    form{
        background-color: var(--cor-back);
    }

    .title{
        font-size: 80px;
    }

    h2{
        font-size: 30px;
        text-align: center;
    }
    
    img{
        margin: 50px 0px 50px 0px;
        width: 500px;
    }

    .togle{
        position: absolute;
        font-size: 25px;
        padding: 25px;
        top: 15px;
        right: 15px; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #signin{
        background-color: red;
        border-radius: 30px;
    }

    #signup{
        background-color: blue;
        border-radius: 30px;
    }
    .single-input{
        position: relative;
    }

    label{
        position: absolute;
        bottom: 45px;
        left: 40px;
        color: #363131;
        cursor: text;
        transition: all 0.5s ease-in-out;
    }

    input{
        background-color: var(--cor-back);
        width: 500px;
        height: 40px;
        margin: 25px;
        border: 0;
        border-bottom: 3px solid #727272;
        outline: 0;
        font-size: 16px;
        transition: all 0.5s ease-in-out;
    }

    input:focus{
        border-bottom: 3px solid var(--cor-principal);
    }

    input:focus ~ label{
        transform: translateY(-25px);
    }

    #description{
        font-size: 30px;
        margin-bottom: 50px;
        color: #363131;
    }

    button{
        color: #FFFFFF;
        font-size: 30px;
        width: 500px;
        height: 50px;
        background-color: var(--cor-principal);
        border-radius: 20px;
        border: 0px;
    }
    
`
