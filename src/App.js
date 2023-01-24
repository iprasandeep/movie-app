import {useState} from 'react'
import styled from 'styled-components';
import './app.css'
import MovieList from './components/movielist/MovieList';
import axios from 'axios';
import MovieInfomation from './components/movielist/MovieInfomation';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export const API_KEY = 'bfdb3a8b';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #0a1a0d;
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  position: sticky;
  top: 0px;
  z-index: 1;
  
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #0a1a0d;
`;
// const MovieImg = styled.div`
//   width: 30px;
//   height: 30px;
//   margin: 15px;
//   background-color: #0a1a0d;

// `
const SearchBox = styled.div`
  flex-direction: row;
  padding: 7px 7px;
  background-color: #bcccbf;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  jsutify-content: center;
  aign-items: center;

`;

const SearchInput = styled.input`

 color: black;
 font-size: 16px;
 font-weight: 300px;
 border: none;
 outline: none;
 margin-left: 15px;
 background-color: #bcccbf;
 justify-content: center;
 align-items: center;
`;


const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  pading: 30px;
  justify-content: space-evenly;
  gap: 24px;
`;


const App = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect ] = useState();
  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) =>{

    const res = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    console.log(res.data);
    updateMovieList(res.data.Search);
  };
  const onTextChange = (event) =>{

    clearTimeout(timeoutId)
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(()=> fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  const NoData =  styled.div`
    margin-top: 40px;
    font-weight: 300px;
    font-size: 18px;
  `

  return (
    <Container>
     <Header>
     <AppName>
      Movie Search
      </AppName>
      <SearchBox>
        <SearchOutlinedIcon />
        <SearchInput value={searchQuery} onChange={onTextChange} />        
      </SearchBox>
     </Header>
    {selectedMovie && <MovieInfomation selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
     <MovieListContainer>
     {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieList
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) :(<NoData><div>No Movie Data</div></NoData>)
      }

      </MovieListContainer>
    </Container>
    
  );
}

export default App;
