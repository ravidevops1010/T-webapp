import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserProfile from './components/Profile/UserProfile';
import SellerProfile from './components/Seller/SellerProfile';
import SellerUpload from './components/Seller/SellerUpload';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/user/profile" component={UserProfile} />
        <Route path="/seller/profile" component={SellerProfile} />
        <Route path="/seller/upload" component={SellerUpload} />
      </Switch>
    </Router>
  );
}

export default App;
