import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Donate from './pages/Donate';
import Receive from './pages/Receive';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route index element={<Donate/>}/>
            <Route path='receive' element={<Receive/>}/>
            <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
