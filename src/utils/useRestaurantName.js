import { useState, useEffect } from "react";
import { RESTRAUNT_NAME_API } from "./constants";

const useRestaurantName = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData(){
   try{
    const response = await fetch(RESTRAUNT_NAME_API);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setFilteredRestaurant(restaurants);
    setListOfRestaurant(restaurants);
   }
   catch(error){
    console.error("failed to fetch restaurant data:",error);
   }
  }
  return [listOfRestaurant,filteredRestaurant];
};
export default useRestaurantName;
