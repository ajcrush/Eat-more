import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantName from "../utils/useRestaurantName";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant , filteredRestaurant] = useRestaurantName();
  console.log(listOfRestaurant);
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="flex  ">
        <div className="flex">
          <input 
            type="text"
            className="inline  rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm w-60" 
            placeholder="Seach a restaurant you want..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-0.5"
            onClick={() => {
              // Filter the restraunt cards and update it
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 rounded"
          onClick={() => {
            const filteredList = filteredRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap m-4 ">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
            <RestaurantCard  {...restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
