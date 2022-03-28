import styled from "styled-components";
import { useLocation } from 'react-router-dom';



export default function Success() {
    const location = useLocation();



    return (
        <Result>
            <Title1> Pedido feito com sucesso! </Title1>

            <Title2 >Filme e sessão</Title2>
            <Info> {location.state.sessionId} </Info>

            <Title2 >Ingressos </Title2>
            <Info> {location.state.selectedSeats} </Info>

            <Title2 >Comprador </Title2>
            <Info> {location.state.name} </Info>
            <Info> {location.state.cpf} </Info>
        </Result>
    );
}

const Result = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;


const Title1 = styled.h2`
    height: 100px;
    margin-top: 60px;
    margin-bottom: 0px;
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;
letter-spacing: 0.04em;

color: #247A6B;

`;

const Title2 = styled.h2`

    margin-bottom: 0px;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.04em;

color: #293845;
`;

const Info = styled.h2`

    margin-bottom: 0px;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.04em;

color: #293845;
`;
