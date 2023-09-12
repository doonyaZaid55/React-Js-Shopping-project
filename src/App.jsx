

import './App.css';
import { Navbar } from './Components/Navbar';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Shop } from './Pages/Shop/Shop';
import { Cart } from './Pages/Cart/Cart';



export default function App(){
  return(
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>}  />
        </Routes>
      </Router>





    </div>
  );
}