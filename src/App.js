import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <header className="Home-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Nav />
              <p>
                NBranz
              </p>
          
            </header>
          </div>
    </BrowserRouter>
   
  );
}

export default App;
