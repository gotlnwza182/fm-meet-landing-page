import Button from "./Button";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mb-8 md:mb-16  ">
      <div className="overflow-hidden mt-16 mb-12 w-full center md:mb-18">
        <img
          src="/src/assets/tablet/image-hero.png"
          alt="hero-tablet"
          className="w-full scale-x-115 md:scale-x-107 lg:hidden"
        />
      </div>
      <div className=" overflow-hidden lg:h-90 text-center w-8/10 md:w-1/2 flex justify-center items-center  lg:w-full lg:gap-8">
        <div className=" w-82">
          <img
            src="/src/assets/desktop/image-hero-left.png"
            alt="image-hero-left"
            className="hidden lg:block -translate-x-26 -translate-y-8 overflow-hidden"
          />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-mobile-1 md:text-tablet-1 text-slate-900 md:px-3 lg:w-96">
            Group Chat for Everyone
          </h1>
          <p className="text-content text-slate-600 my-6 lg:w-108">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
            <Button
              text="Download"
              textSpecial="v1.3"
              bgColor="bg-cyan-600"
              txtSpecialColor="text-cyan-300"
            />
            <Button text="What is it?" bgColor="bg-purple-600" size="md" />
          </div>
        </div>
        <div className=" w-82 ">
          <img
            src="/src/assets/desktop/image-hero-right.png"
            alt="image-hero-right"
            className="hidden lg:block translate-x-26 translate-y-8  overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
