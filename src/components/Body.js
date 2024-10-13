import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isTopRated, setTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  async function fetchRestaurantsData() {
    const RESTAURANT_DATA_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.659835&lng=78.090838&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const data = await fetch(RESTAURANT_DATA_URL);
    const jsonData = await data.json();
    const restaurants =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantsList(restaurants);
    setFilteredRestaurants(restaurants);
    console.log(restaurants);
  }
  useEffect(() => {
    fetchRestaurantsData();
  }, []);
  if (onlineStatus === false) {
    return <h1>Looks like you are offline!</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      id="body-container"
      className="flex flex-col items-center min-h-[100vh]"
    >
      <div className="my-8">
        <input
          type="search"
          className="border-red-200 border-2 outline-none px-2 py-1 rounded-md w-[240px] mr-6 text-slate-500 text-sm"
          placeholder="Search Dishes, Restaurants"
          value={searchText}
          onChange={(e) => {
            const filteredRestaurants = listOfRestaurants.filter(
              (eachRestaurant) => {
                return eachRestaurant.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase());
              }
            );
            setFilteredRestaurants(filteredRestaurants);
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-red-100 px-2 py-1 rounded-md text-red-400 mr-6"
          onClick={() => {
            const filteredRestaurantsList = listOfRestaurants.filter(
              (eachRestaurant) => eachRestaurant.info.avgRating > 4.3
            );
            setFilteredRestaurants(filteredRestaurantsList);
            setTopRated(!isTopRated);
            if (isTopRated) {
              setFilteredRestaurants(listOfRestaurants);
            }
          }}
        >
          {isTopRated ? "Top Rated x" : "Top rated"}
        </button>
        <button className="bg-red-100 px-2 py-1 rounded-md text-red-400 mr-6">
          Sort by name
        </button>
      </div>
      <h2 className="text-2xl font-semibold">Top Restaurant's in Nizamabad</h2>
      <ul className="flex flex-wrap gap-4 w-[80%] mt-12">
        {filteredRestaurants.map((restaurantInfo) => {
          return (
            <Link to={"/restaurant/" + restaurantInfo.info.id}>
              <RestaurantCard
                restaurantInfo={restaurantInfo.info}
                key={restaurantInfo.info.id}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Body;
