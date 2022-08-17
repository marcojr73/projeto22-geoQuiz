import styled from "styled-components"

export const ContainerRanking = styled.section`
    aside{
        position: absolute;
        left: 0;
        background-color: var(--cor-secundaria);
        width: 25vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
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

    @media only screen and (max-width: 914px){
        aside{
            display: none;
        }

        .visible{
            display: flex;
            margin-top: 100px;
            height: 100vh;
            width: 100vw;
            z-index: 1;

            .podium{
                margin-top: 50px;
                margin-bottom: 35px;
            }
        }
        p{
            font-size: 18px;
        }
    }
` 