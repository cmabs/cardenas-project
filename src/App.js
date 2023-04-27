import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar.jsx/index.js';
import Homepage from './pages/Homepage';  
import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <>
      <Navbar/>
    </>
  );
}

export default App;
