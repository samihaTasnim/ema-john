import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import Review from './components/Review';
import Manage from './components/Manage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import Shipment from './components/Shipment';
import Login from './components/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

export const UserContext = createContext()

function App() {
  
const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {console.log("user", loggedInUser.email)}
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <h4>Page not found!! 404 error</h4>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
