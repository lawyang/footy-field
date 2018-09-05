import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// Components
// import Header from './components/Header/Header';


//Pages
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import FormationPage from './pages/Formation/Formation';
import ResourcePage from './pages/Resource/Resource';
import AddFormation from './pages/AddFormation/AddFormation';
import Canvas from './pages/Paper/Paper';


import './styles/main.css';

const App = () => (
  <div>
    {/* <Header/> */}
    <Router>
      <Switch>
        <Redirect exact from="/" to="/user" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/addFormation"
          component={AddFormation}
        />
        <Route
          path="/formation"
          component={FormationPage}
        />
        <Route 
          path="/resource"
          component={ResourcePage}
        />
        <Route 
          path="/draw"
          component={Canvas}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Router>
  </div>
);

export default App;
