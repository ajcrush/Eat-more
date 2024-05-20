import { shimmer_card_unit, shimmer_menu_card_unit } from "../utils/constants";
export const MenuShimmer = () => {
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary  bg-[#777] animate-pulse">
        <img className="shimmer-img h-[200px] w-[300] bg-[#777] stroke animate-pulse" />
        <div className="restaurant-summary-details h-[14px] bg-[#777] animate-pulse">
          <h2 className="shimmer-w40 w-[40%] mt-2.5 stroke animate h-[14px] bg-[#777] animate-pulse"></h2>
          <p className="shimmer-w20 w-[20%] mt-2.5 stroke animate h-[14px] bg-[#777] animate-pulse"></p>
          <div className="shimmer-w60 w-[60%] mt-2.5  stroke animate h-[14px] bg-[#777] animate-pulse"></div>
        </div>
      </div>
    </div>,
    <div className="sf">{<Shimmer/>}</div>
   
  );
};

const CardShimmer = () => {
  return (
    <div className="shimmer-card basis-[250px] p-2.5 mb-2.5 border-[#d3d5df] shadow-[0_4px_7px_0_rgb(218_220_230_/_60%)]">
      <div className="shimmer-img h-[144px] w-[230px] bg-[#777] animate-pulse"></div>
      <div className="shimmer-title w-[60%] mt-2.5"></div>
      <div className="shimmer-tags w-[80%] mt-1"></div>
      <div className="shimmer-details w-[100%] mt-[18px]"></div>
    </div>
  );
};
const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap gap-[25px] justify-center ">
      {Array(shimmer_card_unit)
        .fill("")
        .map((element, index) => {
          return <CardShimmer key={index} />;
        })}
    </div>
  );
};
/* <div className="shimmer-card w-[150px] h-[300px] bg-[#f0f0f0] m-[20px]"></div>
    
    <div className="shimmer-card w-[150px] h-[300px] bg-[#f0f0f0] m-[20px]"></div> */
export default Shimmer;
