
import './App.css';
import styled, {css} from 'styled-components'
import SearchMovie from './SerchMovie'; 

function App() {
  return (
    <AppContainer>
    <>
      <Header>
        <h1>React Movie Search</h1>
        <SearchMovie />
      </Header>
    </>
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
    position:relative;

`;

const Header = styled.header`
    
`;