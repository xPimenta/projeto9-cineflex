import styled from "styled-components";
import { useLocation } from 'react-router-dom';



export default function Success() {
    const location = useLocation();

    const { movieData, selectedSeats, name, cpf } = location.state;




    return (
        <>
            <Title>
                <Title1> Pedido feito com sucesso! </Title1>
            </Title>

            <Infos>
                <Title2 >Filme e sessão</Title2>
                <Info> {movieData.movie.title} </Info>
                <Info> {movieData.day.date}  {movieData.name} </Info>

                <Title2 >Ingressos </Title2>

                {selectedSeats.map(seat => {
                    return <Info> Assento {seat} </Info>
                })
                }

                <Title2 >Comprador </Title2>
                <Info> Nome: {name} </Info>
                <Info> CPF: {cpf} </Info>
            </Infos>

        </>
    );
}

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    `;

const Title = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Title1 = styled.h2`
    margin-top: 70px;
    margin-bottom: 20px;
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
margin-top: 50px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;

`;

const Info = styled.h2`

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;
`;
