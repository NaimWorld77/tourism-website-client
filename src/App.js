import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Booking from './components/Booking/Booking';
import BookingInfo from './components/BookingInfo/BookingInfo';
import AuthProvider from './components/ConText/AuthProvider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div>

     <AuthProvider>
     <Router>
       <Header></Header>
      <Slider></Slider> 
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <PrivateRoute path="/showdetails/:detailsId">
          <ShowDetails></ShowDetails>
        </PrivateRoute>
        <Route path="/booking">
          <Booking></Booking>
          </Route>
          <Route path="/about">
            <About></About>

          </Route>
       
        <Route path="/bookinginfo">
          <BookingInfo></BookingInfo>
          </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        
      </Switch>
       <Footer></Footer>
      </Router>
     </AuthProvider>






     
      
    </div>
  );
}

export default App;
