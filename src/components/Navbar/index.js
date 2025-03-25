"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ImMobile } from "react-icons/im";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
 
export default function Navbar() {
  const pathname = usePathname(); // Get current route
  const [isOpen, setIsOpen] = useState(false);
 
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Features", path: "/features" },
    // { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
 
  return (
    <nav className="bg-white w-full mx-auto sticky top-0 z-50 shadow-md dark:bg-gray-900">
      <div className="max-w-screen-xl flex justify-between items-center mx-auto">
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="w-14 h-15 cursor-pointer rounded-lg py-2"
          />
        </Link>
 
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-white focus:outline-none"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
 
        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ name, path }) => (
            <Link key={name} href={path}>
              <span
                className={`${
                  pathname === path
                    ? "text-white bg-blue-500 px-3 py-2 text-white rounded-md"
                    : "text-gray-700 px-3 py-2 text-white"
                } hover:text-white hover:bg-blue-500 rounded-md`}
              >
                {name}
              </span>
            </Link>
          ))}
        </div>
 
        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="tel:+919876543210" className="mx-3 rounded-md">
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-600 transition duration-200">
              <ImMobile />
              <span>Contact</span>
            </button>
          </Link>
        </div>
      </div>
 
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md flex flex-col items-center py-4 space-y-4">
          {navLinks.map(({ name, path }) => (
            <Link key={name} href={path}>
              <span
                className={`${
                  pathname === path
                    ? "text-white bg-blue-500 px-3 py-2 rounded-md"
                    : "text-gray-700 px-3 py-2"
                } hover:text-white hover:bg-blue-500 rounded-md`}
              >
                {name}
              </span>
            </Link>
          ))}
          <Link href="tel:+919876543210">
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-600 transition duration-200">
              <ImMobile />
              <span>Contact</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}