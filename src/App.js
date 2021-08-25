import './App.css';
import { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51JOlicBpVWy1C2YFt6rOtQwTh1U9E0mYYZKK9I4lFlqN1wJ0OLZiLqkTBjItrX8Zp6sYLJ2IvdyLrwebnGwXBVMZ00DeAy47Zt');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("USER", authUser);

      if(authUser){
        //login
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //logout
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    <Router> 
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
       <Route path="/checkout">
          <Header />
          <Checkout />
       </Route>
       <Route path="/login">
          <Login />
       </Route>
       <Route path="/payment">
         <Header/>
         <Elements stripe ={promise}>
          <Payment />
          </Elements>
       </Route>
       <Route path="/orders">
          <Header/>
          <Orders />
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
