import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Mens from './Components/Mens';
import Product from './Components/Product';
import Register from './Components/Register';
import NotFound from './26-05/NotFound';
import UseState2 from './26-05/UseState2';
import UseEffect from './26-05/UseEffect1';
import UseEffect2 from './26-05/UseEffect2';
import UseEffect3 from './29-05/UseEffect3';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<NotFound />}/>
        <Route path="/" element = {<Home />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/Register" element = {<Register />} />
        <Route path="/Mens" element = {<Mens />} />
        <Route path="/Product" element = {<Product />} />
        <Route path='/use-state2' element={<UseState2 />}/>
        <Route path='/use-effect' element={<UseEffect />}/>
        <Route path='/use-effect2' element={<UseEffect2 />}/>
        <Route path='/use-effect3' element={<UseEffect3 />}/>
      </Routes>
    </div>
  );
}

export default App;
