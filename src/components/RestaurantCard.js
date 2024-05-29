import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    props;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[230px]  bg-gray-100 rounded-lg "
    >
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{sla?.deliveryTime + " minutes"}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};
export const withPromptedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-md m-2 p-2">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
