const menuItems = ["ABOUT", "CONTACT", "SHOP", "LATEST", "TRENDING"];
const socialMediaIcons = ["facebook.svg", "instagram.svg", "twitter.svg","Be.png","linkedin.svg"];
const FooterSection= () => (
    
<div>
<h1 class="uppercase border-b py-2 border-t text-center text-7xl w-[90%] ml-15 my-20 ">Henrik is a design magazine henr</h1>

<nav className="flex justify-center items-center gap-x-6 text-sm font-medium w-fit mx-auto my-1 0 py-5 border-b-2 border-black">
  {menuItems.map((item) => (
    <a key={item} href="#">
      {item}
    </a>
  ))}
</nav>
<div className="flex justify-center items-center gap-x-4 my-5">
  {socialMediaIcons.map((icon, index) => (
    <img key={index} src={`images/${icon}`} alt="social-icon" className="w-6 h-6" />
  ))}
</div>

<p class="text-center text-sm uppercase mb-3"> <span class="text-gray-500">@ copyright</span> <span class="border-b">qodeinteractive</span></p>

</div>

)


export default FooterSection;