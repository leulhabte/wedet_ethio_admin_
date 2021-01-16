import React, { useState, useEffect } from 'react';
import './App.css';
import AppBars from './partial/AppBars';
import Login from './user/Login';
import useStyles from './config/Styling';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

//------------------------------------

import Dashboard from './routes/Dashboard/Dashboard';
import NewRestaurnat from './routes/NewRestaurant/NewRestaurant';
import EditRestaurants from './routes/EditRestaurant/EditRestaurant';
import Restaurants from './routes/EditRestaurant/SubRoute/Restaurants';
import EditRestaturant from './routes/EditRestaurant/SubRoute/EditRestaurant/EditRestaurant';
import RestaurantPhoto from './routes/EditRestaurant/SubRoute/RestaurantPhoto/RestaurantPhoto';
import Photos from './routes/EditRestaurant/SubRoute/RestaurantPhoto/Photos/Photos';
import ReviewBusiness from './routes/ReviewBusiness/ReviewBusiness';
import Informations from './routes/ReviewBusiness/Information/Information';
import AddMenu from './routes/EditRestaurant/SubRoute/AddMenu/AddMenu';
import Comment from './routes/ReviewBusiness/Comment/Comment';
import Routing from './routes/EditRestaurant/SubRoute/RestaurantPhoto/Photos/route';

function App() {
  const classes = useStyles();
  const [userData, setData] = useState({});
  const [auth, setAuth] = useState(false);

  const handleUserLogin = (data) => {
    setData(data);
    console.log(data);
    Cookies.set('user', data);
    Cookies.set('jwt', data.token);
    setAuth(true);
  }

  const readToken = () => {
    const user = Cookies.get('jwt');
    if (user) {
      setAuth(true);
    } else {
      setAuth(false)
    }
  }

  useEffect(() => {
    readToken()
  }, []);

  return (
    <div style={{background: '#ECF0F3'}}>
    <BrowserRouter>
      <div className={classes.root}>
        <AppBars />
        <div className={classes.content}  style={{background: '#ECF0F3'}}>
          <div className={classes.toolBar} />
          <Switch>
            <ProtectedLogin path="/" exact component={Login} handleUserLogin={handleUserLogin} auth={auth} />
            <ProtectedRoute path="/dash" exact component={Dashboard} auth={auth} />
            <ProtectedRoute path="/add" exact component={NewRestaurnat} auth={auth} />
            <ProtectedRoute path="/edit" exact component={EditRestaurants} auth={auth} />
            <ProtectedRoute path="/review" exact component={ReviewBusiness} auth={auth} />

            <ProtectedRoute path="/photos" exact component={Photos} auth={auth} />
            <ProtectedRoute path="/info" exact component={Informations} auth={auth} />
            <ProtectedRoute path="/comm" exact component={Comment} auth={auth} />
            <ProtectedRoute path="/resPhoto" exact component={RestaurantPhoto} auth={auth} />
            <ProtectedRoute path="/resList" exact component={Restaurants} auth={auth} />
            <ProtectedRoute path="/editRes" exact component={EditRestaturant} auth={auth} />
            <ProtectedRoute path="/editRes" exact component={EditRestaturant} auth={auth} />
            <ProtectedRoute path="/addMenu" exact component={AddMenu} auth={auth} />
            <ProtectedRoute path="/route" exact component={Routing} auth={auth} />
            
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

const ProtectedLogin = ({ handleUserLogin, auth, component: Component, ...rest }) => {
  return <Route
    {...rest}
    render={(props) => !auth ? (<Component handleUserLogin={handleUserLogin} {...props} />) :
      (<Redirect to={{
        pathname: `/dash`
      }} />)
    }
  />
}

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return <Route
    {...rest}
    render={(props) => auth ? (<Component {...props} />) : (<Redirect to="/" />)}
  />
}

export default App; 