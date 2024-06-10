import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Routing from './30-05/Routing';
import UserDetail from './30-05/UserDetail';
import Mapping from './02-06/Mapping';
import Allproducts from './02-06/Allproducts';
import FunctionProp from './04-06/FunctionProp';
import StyledComponent from './04-06/StyledComponent';
import InlineStyling from './04-06/InlineStyling';
import Todo from './06-06/Todo';
import Register from './08-06/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/use-navigate" element={<Routing />} />
        <Route path="/user/:username" element={<UserDetail />} />
        {/* <Route path="/user/:username/:id" element={<UserDetail />} /> */}
        
        <Route path="/mapping" element={<Mapping  students={["Hinata", "Shoyo", "Oikawa"]} />} />
        <Route path="/all-products" element={<Allproducts />} />

        <Route path="/function-prop" element={<FunctionProp />} />
        <Route path="/styled-component" element={<StyledComponent />} />
        <Route path="/inline-styling" element={<InlineStyling />} />
        <Route path="/to-do" element={<Todo />} />
        <Route path="/register" element={<Register />} />
        

      </Routes>
    </div>
  );
}

export default App;
