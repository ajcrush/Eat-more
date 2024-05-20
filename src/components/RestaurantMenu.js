import { useParams } from "react-router-dom";
import {
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
import { MenuShimmer } from "./Shimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItems] = useRestaurantMenu(resId);
  const isOnline = useOnline();
  if(!isOnline){
    return(
      <Offline/>
    )
  }
  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu mt-[80px] w-auto min-h-[80vh]">
      <div className="restaurant-summary flex h-[200px] justify-center bg-black text-white">
        <img
          className="restaurant-img w-[250px] h-[170px] rounded mt-5 "
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details flex flex-col m-[20px] basis-[520px]">
          <h2 className="restaurant-title text-[40px] weigh font-light m-w-xl">{restaurant?.name}</h2>
          <p className="restaurant-tags whitespace-nowrap text-inherit opacity-70 font-[15px] m-w-xl">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details flex mt-4 justify-between items-center font-[16px] font-semibold pb-2 text-inherit m-w-80">
            <div
              className="restaurant-rating flex items-center py-1 px-1 bg-green-950 rounded "
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "red" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>
      <div className="menu-items-list flex flex-col justify-center">
        {menuItems.map((item) => (
          <div className="menu-item flex justify-between p-[20px]" key={item?.id}>
            <div className="menu-item-details flex flex-col self-start overflow-hidden">
              <h3 className="item-title w-[60%]">{item?.name}</h3>
              <p className="item-cost text-base font-normal text-[#3e4152] w-2/5 mt-1;">
                {item?.price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item?.price / 100)
                  : " "}
              </p>
              <p className="item-desc  leading-[1.3] text-[rgba(40,44,63,0.45)] w-3/5 tracking-[-0.3px] text-base mt-3.5; ">{item?.description}</p>
            </div>
            <div className="menu-img-wrapper flex flex-col justify-center items-end w-[200px] overflow-hidden;">
              {item?.imageId && (
                <img
                  className="menu-item-img h-[100px] w-[100px] rounded-[5px]"
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item?.name}
                />
              )}
              <button className="add-btn bg-orange-500 text-[color:var(--text-color)] cursor-pointer border-[color:var(--dark-orange)] mt-2.5 px-[25px] py-2 rounded-[5px];
  outline: none">ADD +</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
