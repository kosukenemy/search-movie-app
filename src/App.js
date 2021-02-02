
import './App.css';
import styled, {css} from 'styled-components'
import { BrowserRouter, Route, Router , Switch, useParams } from "react-router-dom";



// component
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import SearchMovie from './SerchMovie';
import MovieDetail from './page/MovieDetail';





function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
        <AppContainer>
          <Header/>
          <>

            <>
              <MainColmun>
              <Route exact path="/" component={Main} />
              <>
              <Route path="/movie/:id" component={MovieDetail} />
              </>
              <>
              <Route path="/MENU3" component={SearchMovie} />
              </>
              </MainColmun>
            </>
          </>
          <Footer />
        </AppContainer>
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;


// メディアクエリ
export const media = {
  desktop: (...args) => css`
  @media (min-width: 1300px) {
      ${ css(...args)}
  }
  `,
    mid: (...args) => css`
    @media (min-width: 1025px) {
        ${ css(...args)}
    }
    `,
  phone: (...args) => css`
  @media (max-width: 768px) {
      ${ css(...args)}
  }
  `
}


const AppContainer = styled.div`
    position:relative;
    overflow: hidden;
    width:100%;
    margin:0 auto;
    display:grid;
    grid-template-rows: 60px 1fr 100px; 
    grid-template-columns: 1fr;
    min-height:100vh;
`;


const MainColmun = styled.main`
  grid-row:2;
  grid-column:2;
  width:100%;
  overflow-x:hidden;
  ${media.phone`
    grid-column: 1;
    `}
`;





