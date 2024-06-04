import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Authprovider } from './utils/auth';
import Todoapp from './Components/todo';
import Login from './Components/login'
import Navbar from './Components/navbar';
import Profile from './Components/profile';
import { RequireAuth } from './utils/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
    <Authprovider>
    <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<RequireAuth ><Todoapp/></RequireAuth>}/>
        <Route path='/profile' element={<RequireAuth ><Profile/></RequireAuth>}/>
      </Routes>
    </Authprovider>
    </BrowserRouter>
  );
}

export default App;
