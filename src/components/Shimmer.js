import { shimmer_card_unit, shimmer_menu_card_unit } from "../utils/constants";

export const MenuShimmer = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      {/* Restaurant summary shimmer */}
      <div className="flex items-center gap-4 mb-8 animate-pulse">
        <div className="bg-gray-300 rounded-lg h-24 w-24"></div>
        <div className="flex-1">
          <div className="h-6 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      {/* Menu item shimmers */}
      <div className="flex flex-col gap-6">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="flex items-center gap-4 animate-pulse">
              <div className="flex-1">
                <div className="h-5 bg-gray-300 rounded w-2/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-1"></div>
                <div className="h-3 bg-gray-100 rounded w-3/4"></div>
              </div>
              <div className="bg-gray-300 rounded-lg h-16 w-16"></div>
            </div>
          ))}
      </div>
    </div>
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
