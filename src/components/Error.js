import { Link, useRouteError } from "react-router-dom";
import errorImage from "../images/404-Error.jpg"

const Error = () =>{
 const err = useRouteError();
 return(
  <div className="error-page">
    <img src={errorImage} alt="Error Image"/>
    <h1>Oops! The restaurant you are looking for can't be found.</h1>
    <h3 className="error-data">{err.data}</h3>
    <h3 className="error-back-home">
     <Link to="/">Back Home</Link>
    </h3>
  </div>
 )
}

export default Error;