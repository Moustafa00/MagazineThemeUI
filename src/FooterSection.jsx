const menuItems = ["ABOUT", "CONTACT", "SHOP", "LATEST", "TRENDING"];
const socialMediaIcons = ["facebook.svg", "instagram.svg", "twitter.svg", "Be.png", "linkedin.svg"];

const FooterSection = () => (
  <div className="px-4 md:px-0">
    {/* Headline */}
    <h1 className="uppercase border-b py-2 border-t text-center text-4xl md:text-5xl lg:text-7xl w-full md:w-[90%] mx-auto my-10 md:my-20">
      Henrik is a design magazine henr
    </h1>

    {/* Navigation Menu */}
    <nav className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-6 text-base md:text-sm font-medium w-fit mx-auto py-5 border-b-2 border-black">
      {menuItems.map((item) => (
        <a key={item} href="#" className="hover:text-gray-600 transition-colors">
          {item}
        </a>
      ))}
    </nav>

    {/* Social Icons */}
    <div className="flex justify-center items-center gap-x-4 my-5 flex-wrap">
      {socialMediaIcons.map((icon, index) => (
        <img 
          key={index} 
          src={`images/${icon}`} 
          alt="social-icon" 
          className="w-8 h-8 md:w-6 md:h-6 hover:opacity-75 transition-opacity"
        />
      ))}
    </div>

    {/* Copyright */}
    <p className="text-center text-xs md:text-sm uppercase mb-3">
      <span className="text-gray-500">@ copyright</span>{" "}
      <span className="border-b hover:text-gray-600 transition-colors cursor-pointer">
        qodeinteractive
      </span>
    </p>
  </div>
);

export default FooterSection;