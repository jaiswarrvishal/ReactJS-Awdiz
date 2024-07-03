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
import Reducer from './15-06/Reducer';
import Login from './08-06/Login';
import Counter from './15-06/useState';
import ReduxCounter from './20-06/ReduxCounter';
import UseCallbackComponent from './29-06/MemoComponent';
import UseCallbackComponents from './29-06/UseCallbackComponents';
import UseMemoComponent from './29-06/UseMemoComponent';
import CounterPrac from './30-06/CounterPrac';
import Counter1 from './30-06/Counter1';
import Count from './30-06/Count';
import UseRefComponent from './30-06/UseRefComponent';
import UseRef2 from './30-06/UseRef2';
// import Counter from './15-06/Counter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
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
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/redux-counter" element={<ReduxCounter />} />

        
        <Route path="/memo" element={<UseCallbackComponent />} />
        
        <Route path="/use-callback" element={<UseCallbackComponents />} />
        <Route path="/use-memo" element={<UseMemoComponent />} />
        
        <Route path="/counter-prac" element={<CounterPrac />} />
        <Route path="/counter1" element={<Counter1 />} />
        <Route path="/count" element={<Count />} />
        <Route path="/use-ref" element={<UseRefComponent />} />
        <Route path="/use-ref2" element={<UseRef2 />} />

        

      </Routes>
    </div>
  );
}

export default App;
