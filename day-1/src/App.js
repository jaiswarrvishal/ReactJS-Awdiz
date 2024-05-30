import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Mens from './Components/Mens';
import Product from './Components/Product';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element = {<Product />} />
        <Route path="/" element = {<Home />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/Register" element = {<Register />} />
        <Route path="/Mens" element = {<Mens />} />
        <Route path="/Product" element = {<Product />} />
      </Routes>
    </div>
  );
}

export default App;
