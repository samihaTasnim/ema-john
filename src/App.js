import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import Review from './components/Review';
import Manage from './components/Manage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
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
          <Route path="*">
            <h4>Page not found!! 404 error</h4>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
