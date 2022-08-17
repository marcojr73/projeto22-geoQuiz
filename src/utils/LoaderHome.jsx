import React from "react";
import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";

export default function LoaderHome() {
    return (
        <Container>
            <TailSpin
                align="center"
                heigth="300"
                width="300"
                color='#EA6363'
                ariaLabel='loading'
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--cor-back);
`