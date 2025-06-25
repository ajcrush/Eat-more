import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // Calculate total bill
  const total = cartitems.reduce((sum, cartItem) => {
    const item = cartItem.item;
    const price =
      item?.card?.info?.price || item?.card?.info?.defaultPrice || 0;
    return sum + (cartItem.quantity * price) / 100;
  }, 0);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-full md:w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartitems.length === 0 && <h1>Add some items</h1>}
        <ItemList items={cartitems} />
        {cartitems.length > 0 && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-right">
            <h2 className="text-xl font-semibold mb-2">Bill Details</h2>
            <div className="flex justify-between mb-1">
              <span>Total Items:</span>
              <span>{cartitems.reduce((sum, c) => sum + c.quantity, 0)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total Amount:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button
              className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-150"
              onClick={() => navigate("/address")}
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
