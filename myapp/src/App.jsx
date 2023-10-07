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
import Ternary from './componet/16-09/Ternary';
import { Children, useState } from 'react';
import StyledComponent from './componet/16-09/StyledComponent';
import Counterse from './componet/16-09/Counterse';
import DynamicStyles from './componet/20-09/DynamicStyles';
import ChildrenProp from './componet/22-09/ChildrenProp';
import Register2 from './componet/22-09/Register2';
import PageNotFound from './componet/29-09/PageNotFound';
import { ClassComponent } from './componet/29-09/ClassComponent';
import Products from './componet/30-09/Products';
import SingleProductNew from './componet/1-10/SingleProductNew';
import AddProduct from './componet/4-10/AddProduct';
import UseMemo from './componet/6-10/UseMemo';





function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route exact path='/*' element={<PageNotFound />} />
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
        <Route exact path='/ternary' element={<Ternary isUserLoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />} />
        <Route exact path='/styled-components' element={<StyledComponent />} />
        <Route exact path='/counterse' element={<Counterse />} />
        <Route exact path='/dynamic-styles' element={<DynamicStyles />} />
        <Route exact path='/children-prop' element={<ChildrenProp />} />
        <Route exact path='/register2' element={<Register2 />} />
        <Route exact path='/classComponent ' element={<ClassComponent />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/single-product/:id' element={<SingleProductNew />} />
        <Route exact path='/add-product' element={<AddProduct/>}/>
        <Route exact path='/usememo'  element={<UseMemo/>} />
      </Routes>
    </div>
  );
}

export default App;
