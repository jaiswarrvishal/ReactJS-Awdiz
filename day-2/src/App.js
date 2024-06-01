import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
