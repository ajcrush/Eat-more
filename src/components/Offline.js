import image from "../images/offline.png";
import React from "react";
const Offline = () => {
  return (
    <div className="user-offline-container">
      <h1 className="user-offline-heading">🔴 Offline!</h1>
      <img src={image} alt="offline-image" />
      <p className="user-offline-message">
        Sorry, it seems that you are currently offline.
      </p>
    </div>
  );
};
export default Offline;
