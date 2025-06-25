import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You could save address to Redux or context here if needed
    navigate("/payment");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Delivery Address</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          placeholder="Full Name"
          required
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          placeholder="Phone Number"
          required
        />
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          placeholder="City"
          required
        />
        <input
          type="text"
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          placeholder="Pincode"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg mt-2"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
};
export default AddressPage;
