"use client";

import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 text-white flex justify-center items-center">
      <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8 text-center">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Σχετικά με εμάς</h3>
            <p className="text-sm">Εργολάβος Οικοδομών - Κατασκευαστικά Έργα</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Σύνδεσμοι</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#services" className="hover:underline">
                  Υπηρεσίες
                </a>
              </li>
              <li>
                <a href="#our-work" className="hover:underline">
                  Τα Projects μας
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Η εταιρία
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Επικοινωνία
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Επικοινωνία</h3>
            <ul className="text-sm space-y-2">
              <li>
                Τηλέφωνο:{" "}
                <a className="mt-2 text-white" href="tel:+306948152634">
                  +30 6948152634
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  className="mt-2 text-white"
                  href="mailto:Nikospriftis504@gmail.com"
                >
                  Nikospriftis504@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-4 flex justify-center space-x-5">
              <a
                href="https://www.facebook.com/sokin.priftis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>

              <a
                href="https://www.instagram.com/nikos__priftis/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Priftis Nikos Construction. All rights
            reserved.
          </p>
          <p className="text-sm mt-2">
            Developed by{" "}
            <a href="https://www.webc.gr" target="_blank" aria-label="web.gr">
              webc.gr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
