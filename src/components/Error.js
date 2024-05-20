import { Link, useRouteError } from "react-router-dom";
import errorImage from "../images/404-Error.jpg"

const Error = () =>{
 const err = useRouteError();
 return(
  <div className="error-page text-center  h-[100vh] w-auto bg-[#FFF5E8] ">
    <img src={errorImage} alt="Error Image" className="mx-auto"/>
    <h1>Oops! The restaurant you are looking for can't be found.</h1>
    <h3 className="error-data p-2">{err.data}</h3>
    <h3 className="error-back-home p-5">
     <Link to="/" className="no-underline bg-orange-500 text-black py-[10px] px-[15px] rounded-md">Back Home</Link>
    </h3>
  </div>
 )
}

export default Error;