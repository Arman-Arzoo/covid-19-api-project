import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Header} from './component/Header';
import {Info} from './component/Info';


function App() {
  return (
    <BrowserRouter>
    <div >
      <Header/>
      <Info/>
    </div>
    </BrowserRouter>
  );
}

export default App;
