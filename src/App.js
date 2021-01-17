
import './App.css';
import styled, {css} from 'styled-components'
import { BrowserRouter as Router, Route, useHistory , Link } from "react-router-dom";
import SearchMovie from './SerchMovie'; 
import Main from './Main';
import MoviePage from './MoviePage';


function App() {
  return (
    <>
      <AppContainer>
          <Main />
          <SearchMovie />
      <>
      </>
      </AppContainer>
    </>
  );
}

export default App;


const AppContainer = styled.div`
    position:relative;

`;



