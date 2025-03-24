import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 border-b border-gray-400">
            <div>
                <span className="text-xl font-semibold flex items-center">
                    <svg className="w-6 h-12 mr-1" fill="black" viewBox="1 0 20 22">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 2L2 7V17L11 22L20 17V7L11 2Z" />
                    </svg>
                    <Link to="/" className="">HENRIK</Link>

                </span>
            </div>

            {/* Center*/}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <Link to="/" className="hover:underline underline-offset-4">HOME</Link>
                <Link to="/pages" className="hover:underline underline-offset-4">PAGES</Link>
                <Link to="/shop" className="hover:underline underline-offset-4">SHOP</Link>
                <Link to="/blog" className="hover:underline underline-offset-4">BLOG</Link>
                <Link to="/video" className="hover:underline underline-offset-4">VIDEO</Link>
                <Link to="/new" className="hover:underline underline-offset-4">NEW</Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-2">
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