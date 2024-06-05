import { useEffect, useState } from "react";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const baseUrl = "https://mohit-food-server.onrender.com/RestaurantMenu";

  useEffect(() => {
    fetchData();
  }, [resId]); // Add resId as a dependency to useEffect

  const fetchData = async () => {
    try {
      if (!resId) {
        throw new Error("resId is required");
      }

      const response = await axios.get(baseUrl, {
        params: { resId },
      });
      setResInfo(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResInfo(null); // Reset resInfo if an error occurs
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
