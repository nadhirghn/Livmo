import { useEffect } from 'react';

//Protected Routes Imports
import ProtectedRoute from './components/route/ProtectedRoutes';
import HostProtectedRoute from './components/route/HostProtectedRoutes';
import TraderProtectedRoutes from './components/route/TraderProtectedRoutes';


import { loadUser } from './actions/userActions';
import { store } from './store';
import { ThemeProvider } from "@mui/material/styles";
import { withBreadcrumbs } from 'react-router-breadcrumbs-hoc';
import theme from '../src/components/shared/theme'
import './App.scss';
import './index.css';

import {BrowserRouter as Router , Switch, Route  } from 'react-router-dom';


import Home from './components/userPages/Home';
import ServicesExperience from './components/userPages/Service_Experience';
import BecomeAccounts from './components/userPages/BecomeAccount';

import HostForm from './components/host/hostPages/newHost/HostForm';

import LodgingDetails from './components/lodging/lodgingDetails';






import ForgotPassword from './components/userAuth/Login/ForgotPassword'
import NewPassword from './components/userAuth/Login/NewPassword';
import Check from './components/userAuth/Signup/Check';
import Login from './components/userAuth/Login/Loginpage';
import Signup from './components/userAuth/Signup/SignupPage';
import TraderForm from './components/trader/TraderForm';

import Test1View from './components/host/hostPages/newHost/test1View';
import Test2View from './components/host/hostPages/newHost/test2View';


import AllExperiences from './components/experience/allExperiences';
import ExperienceDetails from './components/experience/experienceDetails';

import NewRestaurant from './components/restaurant/newRestaurant';


import NewLodging from './components/lodging/newLodging';
import NewTransport from './components/transport/newTransport';
import AllRestaurants from './components/restaurant/allRestaurants';
import AllLodgings from './components/lodging/allLodgings'
import AllTransport from './components/transport/allTransport';

import AddRemoveMultipleInputFields from './test'

//Host pages
import Host from './components/userAuth/Profile/host/Host';

import Merchant from './components/userAuth/Profile/merchant/Merchant'

import User from './components/userAuth/Profile/user/User'


import RestaurantDetails from './components/restaurant/restaurantDetails';
import TransportDetails from './components/transport/transportDetails';
import ExperienceForm from './components/experience/ExperienceForm';


//Profile
import UserProfile from './components/userAuth/Profile/UserProfile';

//Reservation 
import Reservation from "./components/reservation/Reservation";


//Contact
import Contact from './components/userPages/Contact';
import DefaultPage from './components/DefaultPage';
//Dialog 
import CustomizedDialogs from './Dialog/dialog1'


import UserSettings from './components/userAuth/Profile/userSettings/UserSettings'


//Update services
import LogdingForm from './components/lodging/updateLodging'
import DishForm from './components/restaurant/updateRestaurant'
import TransportForm from './components/transport/updateTransport'

//update experiences
import EditExperience from "./components/experience/editExperience/EditExperience";
import Activation from './components/userAuth/Signup/Activation';

import Breadcrumb from './components/Breadcrumb';



const routes = [
  { path: '/', breadcrumb: 'Home' },
  { path: '/settings', breadcrumb: 'UserSettings' },
  { path: '/dialog1', breadcrumb: 'CustomizedDialogs' },
  { path: '/service-experience', breadcrumb: 'ServicesExperience' },
  { path: '/become-account', breadcrumb: 'BecomeAccounts' },
  { path: '/t1', breadcrumb: 'AddRemoveMultipleInputFields' },
  { path: '/password/forgot', breadcrumb: 'ForgotPassword' },
  { path: '/password/reset/:token', breadcrumb: 'NewPassword' },
  { path: '/confirm/:activationcode', breadcrumb: 'Activation' },
  { path: '/check', breadcrumb: 'Check' },
  { path: '/login', breadcrumb: 'Login' },
  { path: '/signup', breadcrumb: 'Signup' },
  { path: '/test2', breadcrumb: 'Test1View' },
  { path: '/test3', breadcrumb: 'Test2View' },
  { path: '/become-host', breadcrumb: 'HostForm' },
  { path: '/new-experience', breadcrumb: 'ExperienceForm' },
  { path: '/all-experiences', breadcrumb: 'AllExperiences' },
  { path: '/experience/:id', breadcrumb: 'ExperienceDetails' },
  { path: '/update-experience', breadcrumb: 'EditExperience' },
  { path: '/become-trader', breadcrumb: 'TraderForm' },
  { path: '/merchant/me', breadcrumb: 'Merchant' },
  { path: '/new-restaurant', breadcrumb: 'NewRestaurant' },
  { path: '/new-lodging', breadcrumb: 'NewLodging' },
  { path: '/new-transport', breadcrumb: 'NewTransport' },
  { path: '/merchant/lodging/:id', breadcrumb: 'LogdingForm' },
  { path: '/merchant/restaurant/:id', breadcrumb: 'DishForm' },
  { path: '/merchant/transport/:id', breadcrumb: 'TransportForm' },
  { path: '/all-restaurants', breadcrumb: 'AllRestaurants' },
  { path: '/all-lodgings', breadcrumb: 'AllLodgings' },
  { path: '/all-transports', breadcrumb: 'AllTransport' },
  { path: '/lodging/:id', breadcrumb: 'LodgingDetails' },
  { path: '/restaurant/:id', breadcrumb: 'RestaurantDetails' },
  { path: '/transport/:id', breadcrumb: 'TransportDetails' },
  { path: '/contact-us', breadcrumb: 'Contact' },
  { path: '/reservation', breadcrumb: 'Reservation' },
  { path: '/me/user', breadcrumb: 'User' },
];



function App ()  {
  
  <Breadcrumb links={routes} />  // code file d'aliane
  // code seo  : const = App ({breadcrumb}) => {}
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  

  return (
    <div className="App">
      
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>

   
      <Route exact path='/settings' component={UserSettings} />
      <Route exact path='/dialog1' component={CustomizedDialogs} />



    <Route exact path='/' component={Home} />
    <Route exact path='/service-experience' component={ServicesExperience} />
    <Route exact path='/become-account' component={BecomeAccounts} />
    <Route exact path='/t1' component={AddRemoveMultipleInputFields} />

    <Route exact path='/password/forgot' component={ForgotPassword} />
    <Route exact path='/password/reset/:token' component={NewPassword} />

    <Route exact path='/confirm/:activationcode' component={Activation} />
    <Route exact path='/check' component={Check} />

    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />

    <Route exact path='/test2' component={Test1View} />
    <Route exact path='/test3' component={Test2View} />








   {/* Host Routes */}
  
    <Route exact path='/become-host' component={HostForm} />
    <HostProtectedRoute exact path='/new-experience' component={ExperienceForm} />
    {/* <HostProtectedRoute exact path='/new-experience' component={DefaultPage} /> */}
    <Route exact path='/all-experiences' component={AllExperiences} />
    <Route  path="/experience/:id" component={ExperienceDetails} />
    <HostProtectedRoute exact path='/host/me' component={Host} />
    <Route exact path='/update-experience' component={EditExperience} />




   {/* Trader Routes */}
    <Route exact path='/become-trader' component={TraderForm} />

    <TraderProtectedRoutes exact path='/merchant/me' component={Merchant} />

  {/* Add Services */}
    <TraderProtectedRoutes exact path='/new-restaurant' component={NewRestaurant} />
    <TraderProtectedRoutes exact path='/new-lodging' component={NewLodging} />
    <TraderProtectedRoutes exact path='/new-transport' component={NewTransport} />

  {/* Update Services */}
    <TraderProtectedRoutes exact path='/merchant/lodging/:id' component={LogdingForm} />
    <TraderProtectedRoutes exact path='/merchant/restaurant/:id' component={DishForm} />
    <TraderProtectedRoutes exact path='/merchant/transport/:id' component={TransportForm} />




    <Route exact path='/all-restaurants' component={AllRestaurants} />
    <Route exact path='/all-lodgings' component={AllLodgings} />
    <Route exact path='/all-transports' component={AllTransport} />

    <Route  path="/lodging/:id" component={LodgingDetails} />
    <Route  path="/restaurant/:id" component={RestaurantDetails} />
    <Route  path="/transport/:id" component={TransportDetails} />





    






   {/* Reservation Routes */}
    <Route exact path='/contact-us' component={Contact} />






   {/* Reservation Routes */}
   <Route exact path='/reservation' component={Reservation}  />

   {/* User Profile Routes */}

  <ProtectedRoute exact path='/me/user' component={User}  />





    </Switch>



    </Router>
    </ThemeProvider>
</div>

  );
}

export default App;

