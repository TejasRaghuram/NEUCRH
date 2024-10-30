import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './UserContext';
import Layout from './pages/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Donate from './pages/Donate';
import Receive from './pages/Receive';
import Error from './pages/Error';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState(null);
  return (
    <UserContext.Provider value={{ username: username, setUsername: setUsername }}>
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
    </UserContext.Provider>
  );
}

export default App;
