import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Menubar from './components/menubar/Menubar';
import Orders from './components/Orders/Orders';
import RequiarAuth from './components/RequiarAuth/RequiarAuth';
import Shop from './components/shop/Shop';
import SignUp from './components/SignUp/SignUp';
import auth from './firebase.init';



function App() {
  return (
    <div >
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Shop></Shop>} ></Route>
        <Route path='/shop' element={<Shop></Shop>} ></Route>
        <Route path='/orders' element={<Orders></Orders>} ></Route>
        <Route path='/inventory' element={
          <RequiarAuth>
            <Inventory></Inventory>
          </RequiarAuth>
        } ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
