import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  // const [showItem,SetShowItem] = useState(false);
  const handleClick = () => {
    // SetShowItem(!showItem);
    setShowIndex();
  };
  return (
    <div>
      {/* {Header} */}
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* {Accordion header} */}
    </div>
  );
};
export default RestaurantCategory;
