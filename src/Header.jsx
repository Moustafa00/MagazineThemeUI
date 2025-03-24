import { Link } from "react-router-dom";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center py-4 border-b border-gray-400 relative">
            {/* Logo */}
            <div>
                <span className="text-xl font-semibold flex items-center">
                    <svg className="w-6 h-12 mr-1" fill="black" viewBox="1 0 20 22">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 2L2 7V17L11 22L20 17V7L11 2Z" />
                    </svg>
                    <Link to="/" className="">HENRIK</Link>
                </span>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <Link to="/" className="hover:underline underline-offset-4">HOME</Link>
                <Link to="/pages" className="hover:underline underline-offset-4">PAGES</Link>
                <Link to="/shop" className="hover:underline underline-offset-4">SHOP</Link>
                <Link to="/blog" className="hover:underline underline-offset-4">BLOG</Link>
                <Link to="/video" className="hover:underline underline-offset-4">VIDEO</Link>
                <Link to="/new" className="hover:underline underline-offset-4">NEW</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2"
                onClick={() => setIsOpen(true)}
            >
                <Bars3Icon className="w-6 h-6" />
            </button>

            {/* Right Side */}
            <div className="hidden md:flex items-center space-x-2">
                <span className="text-xl font-semibold flex items-center">
                    INFO
                    <svg className="w-6 h-6 ml-1" fill="black" viewBox="1 0 20 21">
                        <circle cx="11" cy="11" r="10" />
                    </svg>
                </span>
            </div>

            {/* Mobile Sidebar Navigation */}
            <div className={`fixed inset-y-0 right-0 w-64 bg-white z-50 shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex justify-end p-4">
                    <button
                        className="p-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <nav className="flex flex-col space-y-4 p-6 text-sm font-medium">
                    <Link to="/" className="hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>HOME</Link>
                    <Link to="/pages" className="hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>PAGES</Link>
                    <Link to="/shop" className="hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>SHOP</Link>
                    <Link to="/blog" className="hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>BLOG</Link>
                    <Link to="/video" className="hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>VIDEO</Link>
                    <Link to="/new" className="hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>NEW</Link>
                </nav>
            </div>

            {/* Overlay when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    );
};

export default Header;