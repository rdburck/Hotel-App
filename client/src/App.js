import React from 'react';
import './App.css';
//import Test from './components/Test';
import Homepage from './pages/index';
import Login from './pages/login';
import Register from './pages/register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "materialize-css/dist/css/materialize.min.css";

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login}/>
        </Switch>
      </Router>
      <Footer />  
    </div>
  );
}

export default App;
