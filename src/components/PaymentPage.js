import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [method, setMethod] = useState("cod");
  const [form, setForm] = useState({
    upi: "",
    card: "",
    cardExpiry: "",
    cardCvv: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake validation, always succeed
    navigate("/order-success");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="font-semibold">Select Payment Method:</label>
          <div className="flex flex-col gap-2 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="method"
                value="cod"
                checked={method === "cod"}
                onChange={() => setMethod("cod")}
              />
              Cash on Delivery (COD)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="method"
                value="upi"
                checked={method === "upi"}
                onChange={() => setMethod("upi")}
              />
              UPI
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="method"
                value="card"
                checked={method === "card"}
                onChange={() => setMethod("card")}
              />
              Card
            </label>
          </div>
        </div>
        {method === "upi" && (
          <div className="mb-4">
            <label className="block mb-1">UPI ID</label>
            <input
              type="text"
              name="upi"
              value={form.upi}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="example@upi"
              required
            />
          </div>
        )}
        {method === "card" && (
          <div className="mb-4">
            <label className="block mb-1">Card Number</label>
            <input
              type="text"
              name="card"
              value={form.card}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mb-2"
              placeholder="1234 5678 9012 3456"
              required
            />
            <div className="flex gap-2">
              <input
                type="text"
                name="cardExpiry"
                value={form.cardExpiry}
                onChange={handleChange}
                className="w-1/2 border rounded px-3 py-2"
                placeholder="MM/YY"
                required
              />
              <input
                type="text"
                name="cardCvv"
                value={form.cardCvv}
                onChange={handleChange}
                className="w-1/2 border rounded px-3 py-2"
                placeholder="CVV"
                required
              />
            </div>
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg mt-4"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};
export default PaymentPage;
