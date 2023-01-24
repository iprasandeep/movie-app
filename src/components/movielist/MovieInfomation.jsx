import {useState, useEffect} from 'react'
import styled from 'styled-components';
import Axios from 'axios';
import { API_KEY } from '../../App';

const Container =  styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 30px;
    justify-content: center;
    border-bottom: 1px solid lightgray;
    @media (max-width: 768px) {
        flex-direction: column;
      }
`;

const CoverImage =  styled.img`
    
    margin-top: 30px
    height: 230px;
    width: 250px;
    object-fit: cover;
    border: 1px solid black;
    padding: 4px;
`;

const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;
const MovieName = styled.span`
    font-size: 22px;
    font-weight: 600;
    color: black;
    margin: 15px 0;
    white-space: nowrap;
    overflow: hidden;
    text-transform: capitalize;
    text-overflow: ellipsis;
`;

const MovieInfo =  styled.span`
    font-size: 16px;
    font-weight: 500px;
    color: black;
    overflow: hidden;
    margin: 4px 0;
    text-transform: capitalize:
    text-overflow: ellispsis;
    & span {
        opacity: 0.8;
    }
`;
const Close =  styled.span`
    font-size: 16px;
    font-weight: 600px;
    color: black;
    background: lightgray;
    height: fit-content;
    padding: 8px;
    border-radius: 50%;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.8;
    @media (max-width: 768px) {
        flex-direction: row;
        border-radius: 5%;
        width: 10px;
        color: red;
      }

`
const MovieInfomation = (props) => {

    const [movieInfo, setMovieInfo] = useState();
    const {selectedMovie}  = props;

    useEffect(() => {
        Axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
          ).then((response)=>
            setMovieInfo(response.data));
        
    }, [selectedMovie])

  return (

    <Container>
        { movieInfo? (
        <>
        <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
        <InfoCard>
            <MovieName>{movieInfo?.Type} : <span> {movieInfo?.Title} </span>
            </MovieName>
            <MovieInfo>IMDB Rating: <span>{movieInfo?.imdbRating}</span></MovieInfo>
            <MovieInfo>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </MovieInfo>
            <MovieInfo>
              Year: <span>{movieInfo?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Language: <span>{movieInfo?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Rated: <span>{movieInfo?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released: <span>{movieInfo?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre: <span>{movieInfo?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director: <span>{movieInfo?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors: <span>{movieInfo?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot: <span>{movieInfo?.Plot}</span>
            </MovieInfo>
        </InfoCard>
        <Close onClick={()=> props.onMovieSelect()}>X</Close>
        </>
        ):( 
            "Loading..." 
           )}
        </Container>
        
  )
}

export default MovieInfomation