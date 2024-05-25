import { useState, useEffect } from "react";
const useOnline = () => {
  // Initialize the state with the current online status
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    // Define event handler for online and ofline services
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    //Add Event Listener
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};
export default useOnline;
