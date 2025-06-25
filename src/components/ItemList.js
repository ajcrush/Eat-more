import { useDispatch } from "react-redux";
import { ITEM_IMG_CDN_URL } from "../utils/constants";
import { addItem, incrementItem, decrementItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };
  return (
    <div>
      <div>
        {items.map((cartItem) => {
          // Support both {item, quantity} and plain item for backward compatibility
          const item = cartItem.item || cartItem;
          const quantity = cartItem.quantity || 0;
          return (
            <div
              data-testid="foodItems"
              key={item?.card?.info?.id}
              className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between items-center"
            >
              <div className="w-9/12 ">
                <div className="py-2">
                  <span>{item?.card?.info?.name}</span>
                  <span>
                    {" "}
                    - ₹
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
              <div className="w-3/12 p-4 flex flex-col items-center">
                {quantity > 0 ? (
                  <div className="flex items-center justify-center">
                    <button
                      className="flex items-center bg-black text-white shadow-lg rounded-lg px-3 py-1 text-lg font-bold gap-2"
                      style={{ minWidth: 80 }}
                    >
                      <span
                        className="px-2 cursor-pointer select-none"
                        onClick={() => handleDecrement(item?.card?.info?.id)}
                      >
                        -
                      </span>
                      <span className="px-2 select-none">{quantity}</span>
                      <span
                        className="px-2 cursor-pointer select-none"
                        onClick={() => handleIncrement(item?.card?.info?.id)}
                      >
                        +
                      </span>
                    </button>
                  </div>
                ) : (
                  <button
                    className="p-2 bg-black text-white shadow-lg rounded-lg mb-2"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                )}
                <img
                  src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                  className="w-16 h-16 rounded-md object-cover mt-2 mx-auto shadow"
                  alt={item?.card?.info?.name}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ItemList;
