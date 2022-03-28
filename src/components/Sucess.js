import styled from "styled-components";
import { useLocation, useNavigate} from 'react-router-dom';





export default function Success() {
    const location = useLocation();

    const { movieData2, selectedSeats, name, cpf } = location.state;



    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  let seatsNumbersList = []
  movieData2.seats.map(({ id, name }) => selectedSeats.includes(id) ? seatsNumbersList.push(name) : "")
    return (
        console.log(movieData2),
   
        <>
            <Title>
                <Title1> Pedido feito com sucesso! </Title1>

            <Infos>
                <Title2 >Filme e sessão</Title2>
                <Info> {movieData2.movie.title} </Info>
                <Info> {movieData2.day.date}  {movieData2.name} </Info>

                <Title2 >Ingressos </Title2>

                {console.log(seatsNumbersList)}

                {seatsNumbersList.map(seat => {
                    return <Info key={seat}> Assento {seat} </Info>
                })
                }

                <Title2 >Comprador </Title2>
                <Info> Nome: {name} </Info>
                <Info> CPF: {cpf} </Info>
            </Infos>

            <Button onClick={routeChange} className="submit">Voltar para Home</Button>
            </Title>

        </>
    );
}


const Button = styled.button`
margin-top:62px;
margin-bottom:100px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items:center;
    justify-content:center;
    height:42px;
    width:225px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
`;

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
