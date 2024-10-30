import { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../redux/state";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer"
import { useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import ConverterPage from "../components/ConverterPage";

const TripList = () => {
  
  function onToken(token){
    console.log(token)
    }

  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState(null); 
  const userId = useSelector((state) => state.user._id);
  const tripList = useSelector((state) => state.user.tripList);
  const customerId = useSelector((state) => state?.user?._id)
  const dispatch = useDispatch();



  const getTripList = async () => {
    
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}/trips`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setTripList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Trip List failed!", err.message);
    }
  };

  useEffect(() => {
    getTripList();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Trip List</h1>
      <div className="list">
        {tripList?.map(({ listingId, hostId, startDate, endDate, totalPrice, booking = true }) => (
          <ListingCard
            listingId={listingId._id}
            creator={hostId._id}
            listingPhotoPaths={listingId.listingPhotoPaths}
            city={listingId.city}
            province={listingId.province}
            country={listingId.country}
            category={listingId.category}
            startDate={startDate}
            endDate={endDate}
            totalPrice={totalPrice}
            booking={booking}
          />
        ))}
      </div>
      {/* <div style ={{textAlign: 'center', marginTop: '15rem'}} onClick={handleSubmit}>
       <StripeCheckout 
        amount={listing?.price * 100}
        token={onToken}
        
        currency='USD'
        stripeKey="pk_test_51PsppnISCf6RR6ChEPMTT0M0DTfRdPYTUuuqNJw7GYNv7g6QDFBwtQgp8w5HHuoAg1mFqNqovsGEbjPKKydM877000c9bmuuEz"
          ></StripeCheckout> 
     </div>  */}
     <ConverterPage/>
      
      <Footer />
    </>
  );
};

export default TripList;
