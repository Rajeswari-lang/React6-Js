

import RestaurantDetails from './components/RestaurantDetails';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import Restaurantupdate from './components/Restaurantupdate';
import Home from './components/Home';
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  
    <div className="App">
      <BrowserRouter>
      <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/list"}>List</Link></li>
          <li><Link to={"/search"}>Search</Link></li>
          <li><Link to={"/details"}>Details</Link></li>
          <li><Link to={"/update"}>Update</Link></li>
          <li><Link to={"/signIn"}>Login</Link></li>
          <li><Link to={"/signUp"}>Logout</Link></li>
        </ul>
        <Routes>
        <Route path="/list" element={<RestaurantList/>} />
         
        <Route path="/search" element={<RestaurantList />}/>
       
       
        <Route path="/details" element={<RestaurantDetails/>}/>
         
       
        <Route path="/upate" element={<Restaurantupdate/>}/>
         
       
        <Route exact path="/" element={ <Home/>}/>  
     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
