import React, { useState, useEffect } from 'react';
import './App.css';
import AppBars from './partial/AppBars';
import Login from './user/Login';
import useStyles from './config/Styling';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

// -----------------------------------

import Home from './Home/Home';

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
import AddMenu from './routes/EditRestaurant/SubRoute/AddMenu/MenuForm/AddMenu';
import RestaurantAddMenu from './routes/EditRestaurant/SubRoute/AddMenu/Restaurants';
import Comment from './routes/ReviewBusiness/Comment/Comment';
import Routing from './routes/EditRestaurant/SubRoute/RestaurantPhoto/Photos/route';
import RestaurantEditMenu from './routes/EditRestaurant/SubRoute/Edit Menu/Restaurants';
import EditMenu from './routes/EditRestaurant/SubRoute/Edit Menu/MenuForm/EditMenu';
import EditPhoto from './routes/EditRestaurant/SubRoute/Edit Menu/EditPhoto/EditMenuPhotos';
import Menus from './routes/EditRestaurant/SubRoute/Edit Menu/Menus/Menus';
import Discover from './routes/Discover/Discover'
import Posts from './routes/Posts/Posts'
import GRoute from './partial/route';
import HOC from './HOC';


// -------------------------------------------------------
// -------------------Hospital----------------------------
// -------------------------------------------------------
import Hospital_Dashboard from './routes_hospital/Dashboard/Dashboard';
import Hospital_NewBusiness from './routes_hospital/NewRestaurant/NewRestaurant';
import Hospital_EditBusiness from './routes_hospital/EditRestaurant/EditRestaurant';
import Hospital_Business from './routes_hospital/EditRestaurant/SubRoute/Restaurants';
import Hospital_EditBusinesses from './routes_hospital/EditRestaurant/SubRoute/EditRestaurant/EditRestaurant';
import Hospital_BusinessPhoto from './routes_hospital/EditRestaurant/SubRoute/RestaurantPhoto/RestaurantPhoto';
import Hospital_Photos from './routes_hospital/EditRestaurant/SubRoute/RestaurantPhoto/Photos/Photos';
import Hospital_BusinessBusiness from './routes_hospital/ReviewBusiness/ReviewBusiness';
import Hospital_Informations from './routes_hospital/ReviewBusiness/Information/Information';
import Hospital_Comment from './routes_hospital/ReviewBusiness/Comment/Comment';
import Hospital_Routing from './routes_hospital/EditRestaurant/SubRoute/RestaurantPhoto/Photos/route';


// -------------------------------------------------------
// -------------------Hotel----------------------------
// -------------------------------------------------------
import Hotel_Dashboard from './routes_hotel/Dashboard/Dashboard';
import Hotel_NewBusiness from './routes_hotel/NewRestaurant/NewRestaurant';
import Hotel_EditBusiness from './routes_hotel/EditRestaurant/EditRestaurant';
import Hotel_Business from './routes_hotel/EditRestaurant/SubRoute/Restaurants';
import Hotel_EditBusinesses from './routes_hotel/EditRestaurant/SubRoute/EditRestaurant/EditRestaurant';
import Hotel_BusinessPhoto from './routes_hotel/EditRestaurant/SubRoute/RestaurantPhoto/RestaurantPhoto';
import Hotel_Photos from './routes_hotel/EditRestaurant/SubRoute/RestaurantPhoto/Photos/Photos';
import Hotel_BusinessBusiness from './routes_hotel/ReviewBusiness/ReviewBusiness';
import Hotel_Informations from './routes_hotel/ReviewBusiness/Information/Information';
import Hotel_Comment from './routes_hotel/ReviewBusiness/Comment/Comment';
import Hotel_Routing from './routes_hotel/EditRestaurant/SubRoute/RestaurantPhoto/Photos/route';


// -------------------------------------------------------
// -------------------Garage----------------------------
// -------------------------------------------------------
import Garage_Dashboard from './routes_garage/Dashboard/Dashboard';
import Garage_NewBusiness from './routes_garage/NewRestaurant/NewRestaurant';
import Garage_EditBusiness from './routes_garage/EditRestaurant/EditRestaurant';
import Garage_Business from './routes_garage/EditRestaurant/SubRoute/Restaurants';
import Garage_EditBusinesses from './routes_garage/EditRestaurant/SubRoute/EditRestaurant/EditRestaurant';
import Garage_BusinessPhoto from './routes_garage/EditRestaurant/SubRoute/RestaurantPhoto/RestaurantPhoto';
import Garage_Photos from './routes_garage/EditRestaurant/SubRoute/RestaurantPhoto/Photos/Photos';
import Garage_BusinessBusiness from './routes_garage/ReviewBusiness/ReviewBusiness';
import Garage_Informations from './routes_garage/ReviewBusiness/Information/Information';
import Garage_Comment from './routes_garage/ReviewBusiness/Comment/Comment';
import Garage_Routing from './routes_garage/EditRestaurant/SubRoute/RestaurantPhoto/Photos/route';



function App() {
  const classes = useStyles();
  const [userData, setData] = useState({});
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState("");
  const [ip, setIp] = useState('192.168.43.180:8082');

  const handleUserLogin = (data) => {
    setData(data);
    console.log(data);
    Cookies.set('user', data);
    Cookies.set('jwt', data.token);
    setAuth(true);
  }

  const handleLogout = ()=>{
    Cookies.remove('jwt');
    Cookies.remove('user');
    setAuth(false);
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
    <div>
      <HOC.Provider value={{ name: "" }}>
        <BrowserRouter>
          <div className={classes.root}>
            {auth && <AppBars role={role} handleLogout={handleLogout}/>}
            <div className={classes.content}>
              <div className={classes.toolBar} />
              <Switch>
                <ProtectedLogin path="/" exact component={Login} handleUserLogin={handleUserLogin} auth={auth} ip={ip} />
                <ProtectedRouteHome path="/home" exact component={Home} handleUserLogin={handleUserLogin} auth={auth} ip={ip} setRole={setRole} />

                {/* ------------------------------------Restaurant---------------------------------------------------- */}
                <ProtectedRoute path="/dash" exact component={Dashboard} auth={auth} ip={ip} />
                <ProtectedRoute path="/add" exact component={NewRestaurnat} auth={auth} ip={ip} />
                <ProtectedRoute path="/edit" exact component={EditRestaurants} auth={auth} ip={ip} />
                <ProtectedRoute path="/review" exact component={ReviewBusiness} auth={auth} ip={ip} />
                <ProtectedRoute path="/photos" exact component={Photos} auth={auth} ip={ip} />
                <ProtectedRoute path="/info" exact component={Informations} auth={auth} ip={ip} />
                <ProtectedRoute path="/comm" exact component={Comment} auth={auth} ip={ip} />
                <ProtectedRoute path="/resPhoto" exact component={RestaurantPhoto} auth={auth} name ip={ip} />
                <ProtectedRoute path="/resList" exact component={Restaurants} auth={auth} ip={ip} />
                <ProtectedRoute path="/editRes" exact component={EditRestaturant} auth={auth} ip={ip} />
                <ProtectedRoute path="/editRes" exact component={EditRestaturant} auth={auth} ip={ip} />
                <ProtectedRoute path="/addMenu" exact component={AddMenu} auth={auth} ip={ip} />
                <ProtectedRoute path="/resMenu" exact component={RestaurantAddMenu} auth={auth} ip={ip} />
                <ProtectedRoute path="/resEdit" exact component={RestaurantEditMenu} auth={auth} ip={ip} />
                <ProtectedRoute path="/editMenu" exact component={EditMenu} auth={auth} ip={ip} />
                <ProtectedRoute path="/menus" exact component={Menus} auth={auth} ip={ip} />
                <ProtectedRoute path="/editPhoto" exact component={EditPhoto} auth={auth} ip={ip} />
                <ProtectedRoute path="/posts" exact component={Posts} auth={auth} ip={ip} />
                <ProtectedRoute path="/discover" exact component={Discover} auth={auth} ip={ip} />
                <ProtectedRoute path="/route" exact component={Routing} auth={auth} ip={ip} />
                <ProtectedRoute path="/gRoute" exact component={GRoute} auth={auth} ip={ip} />

                {/* ------------------------------------Hospital---------------------------------------------------- */}
                <ProtectedRoute path="/dash_hospital" exact component={Hospital_Dashboard} auth={auth} ip={ip} />
                <ProtectedRoute path="/add_hospital" exact component={Hospital_NewBusiness} auth={auth} ip={ip} />
                <ProtectedRoute path="/edit_hospital" exact component={Hospital_EditBusiness} auth={auth} ip={ip} />
                <ProtectedRoute path="/review_hospital" exact component={Hospital_BusinessBusiness} auth={auth} ip={ip} />
                <ProtectedRoute path="/photos_hospital" exact component={Hospital_Photos} auth={auth} ip={ip} />
                <ProtectedRoute path="/info_hospital" exact component={Hospital_Informations} auth={auth} ip={ip} />
                <ProtectedRoute path="/comm_hospital" exact component={Hospital_Comment} auth={auth} ip={ip} />
                <ProtectedRoute path="/resPhoto_hospital" exact component={Hospital_BusinessPhoto} auth={auth} name ip={ip} />
                <ProtectedRoute path="/resList_hospital" exact component={Hospital_Business} auth={auth} ip={ip} />
                <ProtectedRoute path="/editRes_hospital" exact component={Hospital_EditBusinesses} auth={auth} ip={ip} />
                <ProtectedRoute path="/route_hospital" exact component={Hospital_Routing} auth={auth} ip={ip} />

                {/* ------------------------------------Hotel---------------------------------------------------- */}
                <ProtectedRoute path="/dash_hotel" exact component={Hotel_Dashboard} auth={auth} ip={ip} />
                <ProtectedRoute path="/add_hotel" exact component={Hotel_NewBusiness} auth={auth} ip={ip} />
                <ProtectedRoute path="/edit_hotel" exact component={Hotel_EditBusiness} auth={auth} ip={ip} />
                <ProtectedRoute path="/review_hotel" exact component={Hotel_BusinessBusiness} auth={auth} ip={ip} />
                <ProtectedRoute path="/photos_hotel" exact component={Hotel_Photos} auth={auth} ip={ip} />
                <ProtectedRoute path="/info_hotel" exact component={Hotel_Informations} auth={auth} ip={ip} />
                <ProtectedRoute path="/comm_hotel" exact component={Hotel_Comment} auth={auth} ip={ip} />
                <ProtectedRoute path="/resPhoto_hotel" exact component={Hotel_BusinessPhoto} auth={auth} name ip={ip} />
                <ProtectedRoute path="/resList_hotel" exact component={Hotel_Business} auth={auth} ip={ip} />
                <ProtectedRoute path="/editRes_hotel" exact component={Hotel_EditBusinesses} auth={auth} ip={ip} />
                <ProtectedRoute path="/route_hotel" exact component={Hotel_Routing} auth={auth} ip={ip} />

                {/* ------------------------------------Ggarage---------------------------------------------------- */}
                <ProtectedRoute path="/dash_garage" exact component={Garage_Dashboard} auth={auth} ip={ip} />
                <ProtectedRoute path="/add_garage" exact component={Garage_NewBusiness} auth={auth} ip={ip} />
                <ProtectedRoute path="/edit_garage" exact component={Garage_EditBusiness} auth={auth} ip={ip} />
                <ProtectedRoute path="/review_garage" exact component={Garage_BusinessBusiness} auth={auth} ip={ip} />
                <ProtectedRoute path="/photos_garage" exact component={Garage_Photos} auth={auth} ip={ip} />
                <ProtectedRoute path="/info_garage" exact component={Garage_Informations} auth={auth} ip={ip} />
                <ProtectedRoute path="/comm_garage" exact component={Garage_Comment} auth={auth} ip={ip} />
                <ProtectedRoute path="/resPhoto_garage" exact component={Garage_BusinessPhoto} auth={auth} name ip={ip} />
                <ProtectedRoute path="/resList_garage" exact component={Garage_Business} auth={auth} ip={ip} />
                <ProtectedRoute path="/editRes_garage" exact component={Garage_EditBusinesses} auth={auth} ip={ip} />
                <ProtectedRoute path="/route_garage" exact component={Garage_Routing} auth={auth} ip={ip} />

              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </HOC.Provider>
    </div>
  );
}

const ProtectedLogin = ({ handleUserLogin, auth, component: Component, name, ip, ...rest }) => {
  return <Route
    {...rest}
    render={(props) => !auth ? (<Component handleUserLogin={handleUserLogin} ip={ip} {...props} />) :
      (<Redirect to={{
        pathname: `/home`
      }} />)
    }
  />
}

const ProtectedRouteHome = ({ auth, component: Component, name, ip, setRole, ...rest }) => {
  return <Route
    {...rest}
    render={(props) => auth ? (<Component {...props} name={name} ip={ip} setRole={setRole} />) : (<Redirect to="/" />)}
  />
}

const ProtectedRoute = ({ auth, component: Component, name, ip, ...rest }) => {
  return <Route
    {...rest}
    render={(props) => auth ? (<Component {...props} name={name} ip={ip} />) : (<Redirect to="/" />)}
  />
}

export default App; 