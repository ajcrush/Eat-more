const Footer = () => {
 const year = new Date().getFullYear();
 return (
   <div className="footer">
     Created By
     <i className="fa-solid fa-heart"></i>
     <a href="https://github.com/ajcrush" target="blank">
       Mohit Sharma
     </a>
     <i className="fa-solid fa-copyright"></i>
     {year}
     <strong>
       Food<span>Fire</span>
     </strong>
   </div>
 );
};
export default Footer;