import { useParams } from "react-router-dom";
import "../styles/List.scss"
import { useSelector,useDispatch  } from "react-redux";
import { setListings } from "../redux/state";
import { useEffect, useState } from "react";
import Loader from "../components/Loader"
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer"
import MapApi from "../components/MapApi";

const SearchPage = ({searchResults}) => {
  // const{location, startDate, noOfGuests} = router.query;
  const [loading, setLoading] = useState(true)
  const { search } = useParams()
  const listings = useSelector((state) => state.listings)
  // const {props.searchResults = getServerSideProps()
  const dispatch = useDispatch()

  const getSearchListings = async () => {
    try {
      const response = await fetch(`http://localhost:3001/properties/search/${search}`, {
        method: "GET"
      })

      const data = await response.json()
      dispatch(setListings({ listings: data }))
      setLoading(false)
    } catch (err) {
      console.log("Fetch Search List failed!", err.message)
    }
  }

  useEffect(() => {
    getSearchListings()
  }, [search])
  
  return loading ? <Loader /> : (
    <>
      <Navbar />
      <h1 className="title-list">{search}</h1>
      <div className="list">
        {listings?.map(
          ({
            _id,
            creator,
            listingPhotoPaths,
            city,
            province,
            country,
            category,
            type,
            price,
            booking = false,
          }) => (
            <ListingCard
              listingId={_id}
              creator={creator}
              listingPhotoPaths={listingPhotoPaths}
              city={city}
              province={province}
              country={country}
              category={category}
              type={type}
              price={price}
              booking={booking}
              
            />
          )
        )}
      </div>
      {/* <section style={{mixWidth: '50px', maxHeight: '50px'}}>
        <MapApi searchResults={searchResults} />
      </section> */}
      <Footer />
    </>
  );
}

export default SearchPage;

export async function getServerSideProps(){
  const searchResults = await fetch("https://links.papareact.com/isz")
  .then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}