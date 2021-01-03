
import './App.css';
import styled, {css} from 'styled-components'
import SearchMovie from './SerchMovie'; 
import Main from './Main';


function App() {
  return (
    <AppContainer>
        <Main />
        <SearchMovie />
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
    position:relative;

`;


