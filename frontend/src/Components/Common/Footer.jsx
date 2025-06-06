import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "@remixicon/react";
import React from "react";
// You would import social icons here if you use a library like react-icons
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-8 bg-primary-bg text-primary-text dark:bg-secondary-bg dark:text-secondary-text shadow-inner transition-colors duration-300 border border-secondary-accent/20 dark:border-secondary-text/20">
      <div className="container mx-auto">
        {/* Branding & Tagline */}
        <div className="flex flex-col justify-between items-center pb-8 border-b border-primary-text/10 dark:border-secondary-text/10 mb-8">
          <div className="text-3xl sm:text-4xl font-extrabold tracking-wider mb-4 md:mb-0">
            <span className="text-primary-accent dark:text-secondary-text transition-colors duration-300">
              BHARAT{" "}
            </span>
            <span className="text-accent-color transition-colors duration-300">
              BHOOMI
            </span>
          </div>
          <p className="text-primary-text/80 dark:text-secondary-text/80 text-center md:text-right text-lg leading-relaxed">
            Your trusted source for the latest news and updates from around the
            globe.
          </p>
        </div>

        {/* Links & Categories & Social Media */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-x-12 mb-8">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-4 text-primary-text dark:text-secondary-text">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300 text-primary-text/90 dark:text-secondary-text/90"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300 text-primary-text/90 dark:text-secondary-text/90"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300 text-primary-text/90 dark:text-secondary-text/90"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300 text-primary-text/90 dark:text-secondary-text/90"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-4 text-primary-text dark:text-secondary-text">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300 text-primary-text/90 dark:text-secondary-text/90"
                >
                  Politics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300 text-primary-text/90 dark:text-secondary-text/90"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300 text-primary-text/90 dark:text-secondary-text/90"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300 text-primary-text/90 dark:text-secondary-text/90"
                >
                  Sports
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left col-span-2">
            <h3 className="font-bold text-xl mb-4 text-primary-text dark:text-secondary-text">
              Connect With Us
            </h3>
            <ul className="flex justify-center md:justify-start space-x-6 text-lg md:text-2xl">
              <li>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300"
                >
                  <RiFacebookBoxFill className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300"
                >
                  <RiTwitterXFill className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300"
                >
                  <RiInstagramFill className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-primary-hover dark:hover:text-secondary-hover transition duration-300"
                >
                  <RiLinkedinBoxFill className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-primary-text/70 dark:text-secondary-text/70 mt-4 pt-4 border-t border-primary-text/10 dark:border-secondary-text/10">
          © {new Date().getFullYear()} Bharat Bhoomi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
