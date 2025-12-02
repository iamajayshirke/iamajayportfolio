
import ContactForm from "./ui/ContactForm";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 px-5" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading text-white lg:max-w-[45vw]">
        Let's Discuss Your <span className="text-purple">Project</span>
        </h1>
        <p className="text-white-200 md:mt-10 md:mb-10 my-5 text-center">
        Always available for freelancing if the right project comes along, Feel free to contact me.
        </p>
        <ContactForm />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-white text-sm md:font-normal font-light">
          Copyright © 2024 Ajay Shirke
        </p>
      </div>
    </footer>
  );
};

export default Footer;
