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
          className="absolute inset-0 w-full h-full object-cover lg:hidden"
        />
        <img
          src="/src/assets/desktop/image-footer.jpg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover hidden lg:block "
        />
        <div className="absolute inset-0 bg-cyan-600/70"></div>
        <div className="relative z-10 w-full flex justify-center flex-col items-center">
          <div className="md:w-3/4 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-16 lg:text-start lg:w-5/6">
            <h2 className="header-2 lg:w-96">Experience more together</h2>
            <p className="text-content md:w-124 lg:w-96">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <Button
              text="Download"
              textSpecial="v1.3"
              bgColor="bg-purple-600"
              txtSpecialColor="text-purple-300"
            />
          </div>
          <div className="mt-2 text-content">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              className="text-blue-600 visited:text-purple-600"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://www.frontendmentor.io/profile/gotlnwza182"
              target="_blank"
              className="text-blue-600 visited:text-purple-600"
            >
              Denpong Khetpong
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
