import styled from "styled-components"

export const ContainerProfile = styled.section`
    aside{
        position: absolute;
        right: 0;
        background-color: var(--cor-secundaria);
        width: 25vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        margin-bottom: 40px;
        margin: 30px 30px 15px 30px;
        font-size: 22px;
    }

    img{
        margin-bottom: 5vh;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        margin-top: 200px;
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
        }
        img{
            margin-top: 100px;
        }
    }

` 
