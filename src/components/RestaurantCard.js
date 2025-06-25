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
    highlight = "",
  } = props;
  // Helper to highlight match
  const getHighlightedName = () => {
    if (!highlight) return name;
    const idx = name.toLowerCase().indexOf(highlight.toLowerCase());
    if (idx === -1) return name;
    return (
      <>
        {name.substring(0, idx)}
        <span className="bg-yellow-200 font-bold">
          {name.substring(idx, idx + highlight.length)}
        </span>
        {name.substring(idx + highlight.length)}
      </>
    );
  };
  return (
    <div
      data-testid="resCard"
      className="w-full bg-white rounded-lg shadow-sm m-0 mb-3 p-3 flex flex-col transition-transform duration-150 hover:scale-[0.98]"
    >
      <img
        className="w-full h-32 object-cover rounded-md mb-2"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="whitespace-nowrap overflow-hidden text-ellipsis font-bold text-base leading-6 mb-1">
        {getHighlightedName()}
      </h3>
      <h5 className="font-light whitespace-nowrap overflow-hidden text-ellipsis text-xs leading-5 mb-0.5">
        {cuisines.join(", ")}
      </h5>
      <h5 className="font-light whitespace-nowrap overflow-hidden text-ellipsis text-xs leading-5 mb-1">
        {areaName}
      </h5>
      <span className="flex flex-wrap justify-between text-center mt-1 text-xs leading-5">
        <h4
          className="flex items-center rounded text-white px-2 py-0.5 mt-1 text-xs"
          style={
            avgRating < 4
              ? { backgroundColor: "red", color: "white" }
              : { backgroundColor: "green", color: "white" }
          }
        >
          <i className="fa-solid fa-star text-[10px] pt-0.25 pr-[5px] pb-[3px] pl-0"></i>
          {avgRating}
        </h4>
        <h4 className="font-[bolder] text-xs mt-2 px-1 py-0 text-gray-400">
          .
        </h4>
        <h4 className="font-[bolder] text-xs mt-2 px-1 py-0 text-gray-700">
          {sla?.deliveryTime + " minutes"}
        </h4>
        <h4 className="font-[bolder] text-xs mt-2 px-1 py-0 text-gray-400">
          .
        </h4>
        <h4 className="font-[bolder] text-xs mt-2 px-1 py-0 text-gray-700">
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
