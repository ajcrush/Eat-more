// rafce
import { useState } from "react";
import contact from "../images/Contact-Us.png";
const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact-container flex flex-col md:flex-row flex-wrap justify-evenly items-center overflow-y-hidden p-4 gap-6 md:gap-0">
      <div className="contact-left w-full md:w-3/5 flex justify-center mb-4 md:mb-0">
        <img
          src={contact}
          className="max-w-xs md:max-w-full w-full h-auto object-contain"
        />
      </div>
      <div className="contact-right flex flex-col content-center justify-center m-0 w-full md:w-2/5">
        <h1 className="text-2xl text-center font-bold mb-4">Contact Us</h1>
        <form
          className="flex flex-col p-4 md:p-10 justify-center content-center w-full"
          onSubmit={handleSubmit}
        >
          <input
            className="p-3 m-2 border-2 border-solid border-[#aabcca] rounded w-full"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="p-3 m-2 border-2 border-solid border-[#aabcca] rounded w-full"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="p-3 m-2 border-2 border-solid border-[#aabcca] rounded w-full"
            placeholder="Type your Message Here..."
            required
          ></textarea>
          <button
            type="submit"
            className="py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 rounded w-full md:w-32 self-center transition-all duration-150"
          >
            submit
          </button>
          {message && (
            <span className="text-green-600 text-center mt-2">
              Thanks for contacting FoodFire, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
