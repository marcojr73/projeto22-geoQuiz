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
        top: 15px;
        right: 15px; 
        background-color: gray;
    }
    
    .togle, .sign, a{
        font-size: 25px;
        height: 50px;
        width: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        color: #000000;
    }
    
    .sign{
        background-color: var(--cor-principal);
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

    .active{
        transform: translateY(-25px);
    }

    label:active{
        transform: translateY(-25px);
    }

    #description{
        font-size: 30px;
        margin-bottom: 7%;
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

    @media only screen and (max-width: 914px){
        flex-direction: column;

        .banner{
            width: 100vw;
            height: 50vh;
        }

        img{
            width: 100px;
            margin: 25px 0px 25px 0px;
        }

        .title{
            font-size: 50px;
        }

        form{
            width: 100vw;
            height: 50vh;
        }

        input{
            width: 75vw;
            margin: 10px;
        }

        button{
            width: 75vw;
        }

        .sign{
            height: 40px;
            margin: 5px 5px 5px 5px;
        }

        label{
            bottom: 20px;
            left: 15px;
        }
    }

    @media only screen and (max-width: 514px){
        .title{
            font-size: 30px;
            margin-top: 80px;
        }
        img{
            width: 100px;
            margin: 5px 0px 5px 0px;
        }
        h2{
            display: none;
        }
        button{
            margin-top: 20px;
        }
        .banner{
            height: 35vh;
        }
        form{
            height: 65vh;
        }
        #description{
            font-size: 20px;
            margin-top: 0;
            margin-bottom: 0;
        }
    }
    
`
