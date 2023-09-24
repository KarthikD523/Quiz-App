import logo from './logo.svg';
import './App.css';
import QuestionScreen from './components/QuestionScreen';
import Navbar from './components/navbar';
import styled from 'styled-components';
import Footer from './components/Footer';


const Container=styled.div`
  height: 150%;
  background-color: rgb(84, 153, 199  );
`

function App() {
  return (
    <Container>
    <Navbar/>
    <QuestionScreen/>
    <Footer/>
    </Container>
    
  );
}

export default App;
