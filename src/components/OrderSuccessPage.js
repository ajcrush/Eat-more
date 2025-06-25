import { useNavigate } from "react-router-dom";

const OrderSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Order Successful!
      </h1>
      <p className="mb-6 text-lg">
        Thank you for your order. Your food is on its way!
      </p>
      <button
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};
export default OrderSuccessPage;
