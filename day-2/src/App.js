import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Routing from './30-05/Routing';
import UserDetail from './30-05/UserDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/use-navigate" element={<Routing />} />
        <Route path="/user/:username" element={<UserDetail />} />
        {/* <Route path="/user/:username/:id" element={<UserDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
