const Header = () => {
    return (
<header className="flex justify-between items-center py-4 px-8 border-b border-gray-400 w-[90%] mx-auto">
      
    {/* Left Side*/}
        <div>
            <span className="text-xl font-semibold flex items-center -ml-7">
                <svg className="w-6 h-12 mr-1" fill="black" viewBox="1 0 20 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M11 2L2 7V17L11 22L20 17V7L11 2Z"/>
                </svg>
                    HENRIK
            </span>
        </div>
      

    {/* Center*/}
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <a href="#" className="underline underline-offset-4">HOME</a>
        <a href="#">PAGES</a>
        <a href="#">SHOP</a>
        <a href="#">BLOG</a>
        <a href="#">VIDEO</a>
        <a href="#">NEW</a>
    </nav>


    {/* Right Side */}
    <div className="flex items-center space-x-2 -mr-7">
        <span className="text-xl font-semibold flex items-center">
                INFO
            <svg className="w-6 h-6 ml-1" fill="black" viewBox="1 0 20 21">
                <circle cx="11" cy="11" r="10" />
            </svg>
        </span>
    </div>


</header>
    );
  };
export default Header;