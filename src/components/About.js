//

import food from "../images/burger-image.png";

const About = () => {
  return (
    <div className="about-container flex flex-wrap flex-col justify-center content-center h-[72vh] mt-[100px] mx-auto mb-[0px]">
      <div className="about-left pl-[10px]">
        <h1 className="text-7xl">
          Welcome to <br />
          The world of
          <br />
          <span className="py-[0] px-[10] text-[#e85449]">
            Tasty& fresh food
          </span>
        </h1>
        <h4 className="pt-[10px] italic text-2xl">
          "Better you will feel if you eat a Food
          <span className="text-orange-400">Fire</span> healthy meal"
        </h4>
      </div>
      <div
        className="about-right pl-3
       "
      >
        <img className="w-[500] pr-70" src={food} alt="food-img" />
      </div>
    </div>
  );
};

export default About;
