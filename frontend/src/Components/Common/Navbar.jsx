import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href, offset) => {
    e.preventDefault();
    console.log("href", href);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        shadow-lg p-4 sticky top-0 z-50 rounded-b-lg transition-colors duration-300
        bg-primary-bg dark:bg-secondary-bg
      `}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <Link to="v1">
          <div
            className={`
            lg:text-xl md:text-xl sm:text-3xl font-extrabold transition-colors duration-300
            text-primary-accent dark:text-secondary-text flex flex-row md:flex-col gap-2 md:gap-0
          `}
          >
            <span>BHARAT </span>{" "}
            <span
              className={`
              transition-colors duration-300
              text-accent-color
            `}
            >
              BHOOMI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Hidden on small screens */}
        <ul className="hidden md:flex space-x-4 md:space-x-2 lg:space-x-8 px-4">
          <li>
            <Link
              to={"v1"}
              className={`
                transition duration-300 text-lg md:text-xs lg:text-lg font-semibold
                text-primary-text dark:text-secondary-text
                hover:text-accent-color relative group
              `}
            >
              Home
              <span className="absolute w-0 h-0.5 bg-accent-color left-0 bottom-0 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
          <li>
            <a
              href="#uttar-pradesh"
              onClick={(e) => handleLinkClick(e, "#uttar-pradesh", -200)}
              className={`
                transition duration-300 text-lg md:text-xs lg:text-lg font-semibold
                text-primary-text dark:text-secondary-text
                 hover:text-accent-color relative group
              `}
            >
              Uttar Pradesh
              <span className="absolute w-0 h-0.5 bg-accent-color left-0 bottom-0 group-hover:w-full transition-all duration-300" />
            </a>
          </li>

          <li>
            <a
              href="#hindi"
              onClick={(e) => handleLinkClick(e, "#hindi", -300)}
              className={`
                transition duration-300 text-lg md:text-xs lg:text-lg font-semibold
                text-primary-text dark:text-secondary-text
                 hover:text-accent-color relative group
              `}
            >
              Hindi News
              <span className="absolute w-0 h-0.5 bg-accent-color left-0 bottom-0 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`
                transition duration-300 text-lg md:text-xs lg:text-lg font-semibold
                text-primary-text dark:text-secondary-text
                 hover:text-accent-color relative group
              `}
            >
              Business
              <span className="absolute w-0 h-0.5 bg-accent-color left-0 bottom-0 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`
                transition duration-300 text-lg md:text-xs lg:text-lg font-semibold
                text-primary-text dark:text-secondary-text
                 hover:text-accent-color relative group
              `}
            >
              Technology
              <span className="absolute w-0 h-0.5 bg-accent-color left-0 bottom-0 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`
                transition duration-300 text-lg md:text-xs lg:text-lg font-semibold
                text-primary-text dark:text-secondary-text
                 hover:text-accent-color relative group
              `}
            >
              Science
              <span className="absolute w-0 h-0.5 bg-accent-color left-0 bottom-0 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Icon & Mobile ThemeToggle (visible only on small screens) */}
        <div className="flex items-center md:hidden">
          {/* ThemeToggle for mobile, with margin */}

          <button
            onClick={toggleMobileMenu}
            className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {/* Hamburger lines with animation */}
            <div
              className={`relative w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ease-in-out `}
            >
              {/* Top bar */}
              <span
                className={`block w-6 h-0.5  transition-all duration-300 ease-in-out absolute
                            ${
                              isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
                            } // Rotates to form cross / moves up for hamburger
                            ${
                              isMobileMenuOpen
                                ? "bg-accent-color"
                                : "bg-accent-color"
                            }
                          `}
              ></span>
              {/* Middle bar */}
              <span
                className={`block w-6 h-0.5  transition-all duration-300 ease-in-out absolute
                          ${
                            isMobileMenuOpen ? "opacity-0" : "opacity-100"
                          } // Fades out for cross / visible for hamburger
                          ${
                            isMobileMenuOpen
                              ? "bg-primary-text dark:bg-secondary-text"
                              : "bg-primary-text dark:bg-secondary-text"
                          }
                        `}
              ></span>
              {/* Bottom bar */}
              <span
                className={`block w-6 h-0.5  transition-all duration-300 ease-in-out absolute
                            ${
                              isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
                            } // Rotates to form cross / moves down for hamburger
                            ${
                              isMobileMenuOpen
                                ? "bg-primary-text dark:bg-secondary-text"
                                : "bg-primary-text dark:bg-secondary-text"
                            }
                          `}
              ></span>
            </div>
          </button>
        </div>

        <Link
          to={"v1/register"}
          className="hidden md:block px-4 py-2 font-semibold text-secondary-text bg-accent-color rounded-md shadow-md transition-colors duration-300 hover:shadow-lg hover:bg-orange-800"
        >
          Sign Up
        </Link>

        {/* ThemeToggle for Desktop (visible only on larger screens) */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Overlay - Appears below the Navbar */}
      <div
        className={`
          absolute top-full left-0 w-full z-30 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          bg-primary-bg dark:bg-secondary-bg md:hidden 
          flex flex-col items-start p-8 space-y-6
          shadow-lg
          overflow-y-auto 
          max-h-[calc(100vh-64px)]
        `}
      >
        {/* The close button has been removed as per your request */}

        <ul className="flex flex-col space-y-6" onClick={toggleMobileMenu}>
          <li>
            <a
              href="/v1"
              className={`
                transition duration-300 text-lg font-semibold
                text-primary-text dark:text-secondary-text
                hover:text-primary-hover dark:hover:text-secondary-hover
                hover:bg-accent-color
              `}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#uttar-pradesh"
              onClick={(e) => handleLinkClick(e, "#uttar-pradesh", -80)}
              className={`
                transition duration-300 text-lg font-semibold
                text-primary-text dark:text-secondary-text
                hover:text-primary-hover dark:hover:text-secondary-hover
              `}
            >
              Uttar Pradesh
            </a>
          </li>
          <li>
            <a
              href="#hindi"
              onClick={(e) => handleLinkClick(e, "#hindi", -150)}
              className={`
                transition duration-300 text-lg md:text-sm lg:text-lg font-semibold
                text-primary-text dark:text-secondary-text
                 hover:text-accent-color
              `}
            >
              Hindi News
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`
                transition duration-300 text-lg font-semibold
                text-primary-text dark:text-secondary-text
                hover:text-primary-hover dark:hover:text-secondary-hover
              `}
            >
              Business
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`
                transition duration-300 text-lg font-semibold
                text-primary-text dark:text-secondary-text
                hover:text-primary-hover dark:hover:text-secondary-hover
              `}
            >
              Technology
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`
                transition duration-300 text-lg font-semibold
                text-primary-text dark:text-secondary-text
                hover:text-primary-hover dark:hover:text-secondary-hover
              `}
            >
              Science
            </a>
          </li>
        </ul>
        {/* ThemeToggle inside mobile menu */}
        <div
          className="flex gap-4 justify-between w-full"
          onClick={toggleMobileMenu}
        >
          <Link
            to={"v1/register"}
            className=" px-4 py-2 font-semibold text-secondary-text bg-accent-color rounded-md shadow-md transition-colors duration-300 hover:shadow-lg"
          >
            Sign Up
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
