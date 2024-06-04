import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Routing from './30-05/Routing';
import UserDetail from './30-05/UserDetail';
import Mapping from './02-06/Mapping';
import Allproducts from './02-06/Allproducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/use-navigate" element={<Routing />} />
        <Route path="/user/:username" element={<UserDetail />} />
        {/* <Route path="/user/:username/:id" element={<UserDetail />} /> */}
        
        <Route path="/mapping" element={<Mapping  students={["Hinata", "Soyo", "Oikawa"]} />} />
        <Route path="/all-products" element={<Allproducts />} />
      </Routes>
    </div>
  );
}

export default App;
