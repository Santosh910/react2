// import logo from './logo.svg';

import './App.css';
import { Routes,Route } from 'react-router-dom'; 
import  Homepage  from './componet/Homepage';

import Register from './componet/Register';
import Profile from './componet/Profile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        
        <Route path='/register' element={<Register/>} />
        
        <Route path='/profile' element={<Profile/>} />
        </Routes>  
    </div> 
  );
}

export default App;
