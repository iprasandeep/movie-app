import React from 'react'
import styled from 'styled-components';


const MovieContainer = styled.div`
    margin-top: 40px;
    display:flex;
    flex-direction: column;
    padding:10px;
    widdth: 280px;
    box-shadow: 0 3px 10px 0 #aaa;
    cursor: pointer;
    border-radius: 5px; 
`;

const CoverImage = styled.img`
    object-fit: cover;
    height: 350px;
    width: 250px;
`;

const MovieName = styled.span`
    font-size: 18px;
    font-weight: 600px;
    color: black;
    margin: 15px 0;
    whie-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-directon: row;
    justify-content: space-between;

`;
const MovieInfo = styled.div`
    font-size: 16px;
    font-wieght: 500px;
    color: black;
    text-transform: capitalize;
`;

const MovieList = (props) => {
    const {Title, Year, imdbID, Type, Poster} = props.movie;
 
  return (
    <MovieContainer onClick={() =>{
        props.onMovieSelect(imdbID);
    }}>
        <CoverImage src={Poster} />
            <MovieName>{Title}</MovieName>
            <InfoColumn>
            
                <MovieInfo> Year: {Year}</MovieInfo>
                <MovieInfo>Type: {Type}</MovieInfo>
            </InfoColumn>
    </MovieContainer>
  )
}

export default MovieList