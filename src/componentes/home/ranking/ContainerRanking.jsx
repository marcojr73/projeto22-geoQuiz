import styled from "styled-components"

export const ContainerRanking = styled.section`
    position: absolute;
    left: 0;
    background-color: var(--cor-secundaria);
    width: 25vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    ul{
        display: flex;
        justify-content: center;
    }
    p{
        margin: 30px 30px 15px 30px;
        font-size: 22px;
    }
    .podium{
        font-size: 100px;
        color: #d3b220;
        margin-top: 15%;
        margin-bottom: 35px;
        margin-top: 200px;
    }
    h1{
        font-size: 25px;
        margin-bottom: 20px;
    }
` 