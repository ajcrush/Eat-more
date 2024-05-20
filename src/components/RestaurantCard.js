import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
 cloudinaryImageId,
 name,
 cuisines,
 avgRating,
 costForTwo,
 sla,
}) => {
 return (
   <div className="m-4 p-4 w-[230px]  bg-gray-100 rounded-lg ">
     <img
       className="res-logo"
       src={
         CDN_URL +
         cloudinaryImageId
       }
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
export default RestaurantCard;