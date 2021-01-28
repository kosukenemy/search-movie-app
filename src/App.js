
import './App.css';
import styled, {css} from 'styled-components'
import { BrowserRouter, Route, Router } from "react-router-dom";



// component
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Main from './components/Main';

import MoviePage from './MoviePage';
import SearchMovie from './SerchMovie';
import ViewMore from './ViewMore';






function App() {
  return (
    <>
      <BrowserRouter>
        <AppContainer>
          <Header />
          <>
            <SideBar />
            <>
              <MainColmun>
              <Route exact path="/" component={Main} />
              <Route exact path="/ViewMore" component={ViewMore} />
              <>
              <Route path="/MENU2" component={MoviePage} />
              </>
              <>
              <Route path="/MENU3" component={SearchMovie} />
              </>
              </MainColmun>
            </>
          </>
          <Footer />
        </AppContainer>
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
    grid-template-rows: 70px 1fr 100px; 
    grid-template-columns: 240px 1fr;    
    min-height:100vh;
    column-gap: 12px;
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





