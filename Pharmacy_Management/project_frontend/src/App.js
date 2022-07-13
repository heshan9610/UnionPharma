// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/hesh_components/HomeCusHeader';
import Footer from './components/hesh_components/HomeCusFooter';
import Slide from './components/hesh_components/HomeCusSlide';
import AddCustomer from './components/hesh_components/AddCustomer';
import CusRegistration from './components/hesh_components/SignUp';
import CusLogin from './components/hesh_components/Login';
import Orderpath from './components/hesh_components/Orderpath';
import PostDetails from './components/hesh_components/CurrentOrder';
import EditOrder from './components/hesh_components/EditOrderD';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    
     <Router>
      <div>
        
        <Route path="/addslide" exact component={Slide} />
        <Route path="/add" exact component={AddCustomer} />
        <Route path="/" exact component={CusRegistration} />
        <Route path="/addlog" exact component={CusLogin} />
        <Route path="/addedit/:id" exact component={EditOrder} />
        <Route path="/addpath" exact component={Orderpath} />
        <Route path="/addview" exact component={PostDetails} />
        
      </div>
    </Router>
    
  );
}

export default App;
