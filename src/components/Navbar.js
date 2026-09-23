"use client"

import { useState } from "react"
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Founder", path: "/about-founder" },
    { 
      label: "Programs", 
      path: "/plans",
      dropdown: [
        { label: "I Want to Get Fit", path: "/plans/get-fit" },
        { label: "Become an Elite Coach", path: "/plans/elite-coach" },
      ]
    },
    { 
      label: "Gallery", 
      path: "/gallery",
      dropdown: [
        { label: "Transformations", path: "/gallery/transformations" },
        { label: "Testimonials", path: "/gallery/testimonials" },
        { label: "Candids & BTS", path: "/gallery/candids" },
      ]
    },
    { label: "Resources", path: "/resources" },
  ]

  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(label)
    }
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[68px] md:h-20">

          {/* Logo: mark + wordmark sized independently so text stays readable */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-3 shrink-0 min-w-0 mr-2 sm:mr-4">
            <img
              src="/logo-mark.png"
              alt=""
              aria-hidden="true"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain shrink-0"
            />
            <img
              src="/logo-wordmark.png"
              alt="Fit Body Culture"
              className="h-8 sm:h-10 md:h-12 w-auto max-w-[118px] xs:max-w-[140px] sm:max-w-none object-contain object-left"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8 items-center">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center cursor-pointer text-gray-700 hover:text-[#1142D4] font-medium font-manrope py-5">
                    {item.label} <FaChevronDown className="ml-1 text-xs" />
                    {/* Dropdown Menu */}
                    <div className="absolute top-16 left-0 w-56 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1142D4]/10 hover:text-[#1142D4] font-medium border-b border-gray-100 last:border-none"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="text-gray-700 hover:text-[#1142D4] font-medium font-manrope py-5"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Get Started */}
          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className="bg-[#1142D4] text-white px-5 py-2 rounded-2xl hover:bg-blue-800 transition font-manrope"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 -mr-2"
            >
              {isOpen ? (
                <FaTimes className="text-2xl text-gray-700" />
              ) : (
                <FaBars className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col items-start px-4 pt-2 pb-6 space-y-2">

            {menuItems.map((item) => (
              <div key={item.label} className="w-full">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-md text-gray-700 hover:bg-[#1142D4]/10 hover:text-[#1142D4] font-medium text-lg font-manrope text-left"
                    >
                      {item.label} <FaChevronDown className={`text-sm transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-6 flex flex-col space-y-1 mt-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className="block px-3 py-2 text-md text-gray-600 hover:text-[#1142D4]"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-[#1142D4]/10 hover:text-[#1142D4] font-medium text-lg font-manrope"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 w-full flex justify-center">
              <Link
                href="/contact-us"
                className="w-[90%] text-center bg-[#1142D4] text-white px-3 py-3 rounded-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  )
}