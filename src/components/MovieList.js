import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";

export default function MovieList() {

  const [movies, setMovies] = useState([]);
  console.log("fui renderizado!");

  // este código seja executado uma única vez
  useEffect(() => {
    console.log("ativando efeitos especiais!");
    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    promise.then((response) => {
      const {data} = response; // const data = response.data
      console.log("terminei a requisição", data);
      setMovies(data);
    })
    promise.catch(err => console.log(err.response));
  }, []);
  
  return movies.length > 0 ? (
    <PageExplore>
      <div className="title">Selecione o filme</div>
      <div className="wrapper">
        <div className="images">
          {
            movies.map(movie => {
              const {id, title, posterURL } = movie;
              return <div className="image" key={id}>
                  <Link to={`/sessoes/${id}`}>
                  <img src={posterURL} alt={title} />
                  </Link>
                </div>
            })
          }
        </div>         
      </div>
    </PageExplore>
  ) : <p>Loading...</p>
}

const PageExplore = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .title {
  font-family: 'Roboto';
  font-style: normal;
  height: 110px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #293845;
  }

  .images {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .image {
  padding: 10px;
  width: 100%;
  max-width: 145px;
  height: 209px;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 11px;
  margin-right: 15px;
  margin-left: 15px;
  position: relative;
  cursor: pointer;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
}

  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
}
`;
