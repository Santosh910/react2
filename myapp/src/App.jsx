// import logo from './logo.svg';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './componet/Homepage';

import Register from './componet/Register';
import Profile from './componet/Profile';
import Login1 from './componet/Login1';
import Counter from './componet/Counter';
import Effect01 from './componet/13-09/Effect01';
import Effect2 from './componet/13-09/Effect2';
import Effect3 from './componet/13-09/Effect3';
import Effect4 from './componet/13-09/Effect4';
import Params from './componet/15-09/Params';
import SingleProduct from './componet/15-09/SingleProduct';
import Mapping from './componet/16-09/Mapping';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />

        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login1' element={<Login1 />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route exact path='/effect01' element={<Effect01 />} />
        <Route exact path='/effect2' element={<Effect2 />} />
        <Route exact path='/effect3' element={<Effect3 />} />
        <Route exact path='/effect4' element={<Effect4 />} />
        <Route exact path='/params' element={<Params />} />
        <Route exact path='/singleProduct/:id' element={<SingleProduct />} />
        <Route exact path='/mapping' element={<Mapping kuchbhi={'hii'} names={["Rahul", "Rohit", "virat"]} />} />
      </Routes>
    </div>
  );
}

export default App;
