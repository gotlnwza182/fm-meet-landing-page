import Button from "./Button";
import Number from "./Number";

const Footer = () => {
  return (
    <footer className="w-full relative text-center pt-27 flex items-center justify-center ">
      <div className=" absolute top-0 z-10">
        <Number number={2} />
      </div>
      {/* <div className="relative overflow-hidden w-full px-8 py-16"> */}
      {/* <img
          src="/src/assets/tablet/image-footer.jpg"
          alt="background"
          className="absolute inset-0 object-cover h-auto w-full"
        /> */}
      {/* <div className=" absolute inset-0 bg-cyan-600/70"></div> */}
      <div className=" text-white flex flex-col items-center justify-center">
        <div className="md:w-3/4 ">
          <h2 className="header-2">Experience more together</h2>
          <p className="text-content my-6 px-6">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <Button text="Download" textSpecial="v1.3" bgColor="bg-purple-600" />
        </div>
        {/* </div> */}
      </div>
    </footer>
  );
};
export default Footer;

import Button from "./Button";
import Number from "./Number";

const Footer = () => {
  return (
    <footer className="w-full relative text-center pt-27 flex items-center justify-center">
      <div className=" absolute top-0 z-10">
        <Number number={2} />
      </div>
      <div className="relative py-16 px-8 text-white w-full">
        <img
          src="/src/assets/tablet/image-footer.jpg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cyan-600/70"></div>
        <div className="relative  z-10">
          <h2 className="header-2">Experience more together</h2>
          <p className="text-content my-6">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <Button text="Download" textSpecial="v1.3" bgColor="bg-purple-600" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
