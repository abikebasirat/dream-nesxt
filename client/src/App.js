import { BrowserRouter, Routes, Route , } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import TripList from "./pages/TripList";
import WishList from "./pages/WishList";
import PropertyList from "./pages/PropertyList";
import ReservationList from "./pages/ReservationList";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import StripePage from "./components/StripePage"
import About from "./components/About";
import { toast } from "react-toastify";
import Map from './components/Map'

import Customers from "./pages/customers/Customers";
import Products from "./components/product/Product";
import Featured from "./components/featured/Featured";





function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/properties/:listingId" element={<ListingDetails />} />
          <Route path="/properties/category/:category" element={<CategoryPage />} />
          <Route path="/properties/search/:search" element={<SearchPage />} />
          <Route path="/:userId/trips" element={<TripList />} />
          <Route path="/:userId/wishList" element={<WishList />} />
          <Route path="/:userId/properties" element={<PropertyList />} />
           <Route path="/:userId/reservations" element={<ReservationList />} />
           <Route path="/about" element={<About />} /> 
          <Route path="/stripe" element={<StripePage />} /> 
          
         
          
          
           
    
          <Route path="/map" element={<Map />} /> 


          
    <Route  path="users"
    element={< Customers/>} />,
         <Route path="/products" element={<Products />} />
         <Route path="/featured" element={<Featured />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
};




export default App;
