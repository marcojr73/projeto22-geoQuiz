import styled from "styled-components"
import logo from "../../assets/images/logo.png"

export function Header(){
    return(
        <ContainerHeader>
            <img src={logo}/>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.header`
    width: 100vw;
    height: 150px;
    background-color: var(--cor-principal);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    img{
        width: 120px;
    }

`