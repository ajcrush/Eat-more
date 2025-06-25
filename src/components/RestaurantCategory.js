import ItemList from "./ItemList";
import { useState } from "react";
import { useSelector } from "react-redux";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItem,SetShowItem] = useState(false);
  const handleClick = () => {
    // SetShowItem(!showItem);
    setShowIndex();
  };
  // Get cart items from Redux
  const cartItems = useSelector((store) => store.cart.items);
  // Map menu items to include quantity from cart
  const menuItemsWithQty = data.itemCards.map((itemCard) => {
    const cartEntry = cartItems.find(
      (c) => c.item.card.info.id === itemCard.card.info.id
    );
    return cartEntry ? { ...cartEntry } : { item: itemCard, quantity: 0 };
  });
  return (
    <div>
      {/* {Header} */}
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={menuItemsWithQty} />}
      </div>

      {/* {Accordion header} */}
    </div>
  );
};
export default RestaurantCategory;
