import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Card />
      </Container>
    </div>
  );
}

export default App;
