import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext, useRef } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_NAME_API } from "../utils/constants";
import { withPromptedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef(null);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    // try {
    const response = await fetch(
      "https://mohit-food-server.onrender.com/swiggy"
    );
    // if (!response.ok) {
    // console.log(response.data);
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    const json = await response.json();
    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setFilteredRestaurant(restaurants);
    setListOfRestaurant(restaurants);
    // } catch (error) {
    // console.error("failed to fetch restaurant data:", error);
    // }
  }

  useEffect(() => {
    if (searchText === "") {
      setFilteredRestaurant(listOfRestaurant);
      setSuggestions([]);
      setShowSuggestions(false);
      setActiveSuggestion(-1);
    } else {
      const filtered = listOfRestaurant.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filtered);
      // Suggestions for autocomplete
      const sugg = listOfRestaurant
        .map((res) => res.info.name)
        .filter((name) => name.toLowerCase().includes(searchText.toLowerCase()))
        .slice(0, 5);
      setSuggestions(sugg);
      setShowSuggestions(sugg.length > 0);
      setActiveSuggestion(-1);
    }
  }, [searchText, listOfRestaurant]);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText("");
    inputRef.current?.focus();
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;
    if (e.key === "ArrowDown") {
      setActiveSuggestion((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      if (activeSuggestion >= 0 && activeSuggestion < suggestions.length) {
        setSearchText(suggestions[activeSuggestion]);
        setShowSuggestions(false);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  const RestaurantCardPromoted = withPromptedLabel(RestaurantCard);
  const { setUserName, loggedInUser } = useContext(UserContext);
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl px-2 md:px-8 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-center mt-2 mb-2 w-full gap-2 md:gap-4">
          <div className="flex-1 relative w-full md:w-auto">
            <input
              type="text"
              data-testid="searchInput"
              ref={inputRef}
              className="w-full rounded-lg border border-gray-300 bg-white py-1.5 pl-3 pr-10 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm shadow transition-all duration-150"
              placeholder="Search a restaurant you want..."
              value={searchText}
              onChange={handleInputChange}
              onFocus={() => setShowSuggestions(suggestions.length > 0)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
            />
            {searchText && (
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 text-lg focus:outline-none"
                onClick={handleClear}
                aria-label="Clear search"
                tabIndex={-1}
                type="button"
              >
                ×
              </button>
            )}
            {showSuggestions && (
              <ul className="absolute z-20 left-0 top-10 w-full bg-white border border-gray-200 rounded-lg shadow max-h-40 overflow-auto mt-1 animate-fade-in text-sm">
                {suggestions.map((sugg, idx) => (
                  <li
                    key={sugg}
                    className={`px-3 py-2 cursor-pointer transition-colors duration-100 rounded-md ${
                      idx === activeSuggestion
                        ? "bg-indigo-100 text-indigo-700"
                        : "hover:bg-gray-100"
                    }`}
                    onMouseDown={() => handleSuggestionClick(sugg)}
                  >
                    {sugg}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            data-testid="filterButton"
            className="w-full md:w-auto px-4 py-1.5 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-all duration-150 text-sm"
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 items-start justify-center self-stretch mt-2">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
              className="w-full"
            >
              <RestaurantCard {...restaurant.info} highlight={searchText} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
