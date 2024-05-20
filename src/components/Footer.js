const Footer = () => {
 const year = new Date().getFullYear();
 return (
   <div className=" bg-blue-300 shadow-lg m-[10px] w-auto text-center p-10">
     Created By
     <i className="fa-solid fa-heart p-2"></i>
     <a href="https://github.com/ajcrush" target="_blank" rel="noopener noreferrer">
       Mohit Sharma
     </a>
     <i className="fa-solid fa-copyright p-2"></i>
     {year}
     <strong className="p-5">
       Food<span>Fire</span>
     </strong>
   </div>
 );
};
export default Footer;