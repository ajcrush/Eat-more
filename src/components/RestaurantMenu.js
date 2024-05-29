import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);
  const [showIndex , setShowIndex] = useState(null);

  if (restaurant === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restaurant?.data?.cards[2]?.card?.card?.info;
  // console.log(restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" ,")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category,index) => (
        //Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ?  true : false}
          setShowIndex = {() => setShowIndex(index)}
          
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
