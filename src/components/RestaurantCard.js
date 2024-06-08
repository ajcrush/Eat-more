import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
  } = props;
  return (
    <div
      data-testid="resCard"
      className=" w-60 shadow-[-1px_5px_10px_5px_rgba(112,112,112,0.2)] cursor-pointer m-5 p-2.5 rounded-[5px] hover:scale-[0.98] "
    >
      <img
        className="w-[100%] rounded-[10px]"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="whitespace-nowrap overflow-hidden text-ellipsis font-xl font-bold">
        {name}
      </h3>
      <h5 className="font-light whitespace-nowrap overflow-hidden text-ellipsis">
        {cuisines.join(", ")}
      </h5>
      <h5 className="font-light whitespace-nowrap overflow-hidden text-ellipsis">
        {areaName}
      </h5>
      <span className="flex justify-between text-center mt-[8px]">
        <h4
          className="flex items-center rounded text-white p-1 mt-1"
          style={
            avgRating < 4
              ? { backgroundColor: "red", color: "white" }
              : { backgroundColor: "green", color: "white" }
          }
        >
          <i className="fa-solid fa-star text-[10px] pt-0.25 pr-[5px] pb-[3px] pl-0"></i>
          {avgRating}
        </h4>
        <h4 className="font-[bolder] text-sm mt-2.5 px-0.5 py-0 text-[color:var(--light-text-title)]">
          .
        </h4>
        <h4 className="font-[bolder] text-sm mt-2.5 px-0.5 py-0 text-[color:light-black]">
          {sla?.deliveryTime + " minutes"}
        </h4>
        <h4 className="font-[bolder] text-sm mt-2.5 px-0.5 py-0 text-[color:var(--light-text-title)]">
          .
        </h4>
        <h4 className="font-[bolder] text-sm mt-2.5 px-0.5 py-0 text-[color:var(--light-text-title)]">
          {costForTwo}
        </h4>
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
