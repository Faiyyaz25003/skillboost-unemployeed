"use client";
import "../../../app/globals.css";
import { useState } from "react";
import { Search, Moon, ArrowRight, GraduationCap, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Trainers", href: "/trainers" },
  { label: "Recruiters", href: "/recruiters" },
  { label: "Jobs", href: "/jobs" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-[1720px] mx-auto flex items-center justify-between px-6 lg:px-10 h-[92px]">
        {/* Logo */}
        <a href="" className="flex items-center gap-3 shrink-0">
          <GraduationCap
            size={40}
            strokeWidth={2}
            className="text-[#1E40AF]"
            fill="#1E40AF"
          />

          <div className="leading-tight">
            <p className="text-2xl font-bold tracking-tight">
              <span className="text-[#1E40AF]">Skill</span>
              <span className="text-[#F59E0B]">Up</span>
            </p>

            <p className="text-[11px] text-gray-500 -mt-1 whitespace-nowrap">
              Digital Skills Bootcamp
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`relative text-[15px] font-medium pb-2 transition-colors ${
                active === link.label
                  ? "text-[#1E40AF]"
                  : "text-gray-700 hover:text-[#1E40AF]"
              }`}
            >
              {link.label}

              {active === link.label && (
                <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-[#1E40AF] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden xl:flex items-center gap-5">
          <button
            aria-label="Search"
            className="text-gray-700 hover:text-[#1E40AF] transition-colors"
          >
            <Search size={20} />
          </button>

          <span className="h-6 w-px bg-gray-300" />

          <button
            aria-label="Toggle dark mode"
            className="text-gray-700 hover:text-[#1E40AF] transition-colors"
          >
            <Moon size={20} />
          </button>

          <a
            href="/login"
            className="border border-[#1E40AF] text-[#1E40AF] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#1E40AF] hover:text-white transition-colors"
          >
            Login
          </a>

          <a
            href="/enroll"
            className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-sm pl-6 pr-2 py-2 rounded-full transition-colors"
          >
            Enroll Now
            <span className="bg-white/25 rounded-full p-1.5 flex items-center justify-center">
              <ArrowRight size={14} />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-[#1E40AF]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-gray-100 px-6 py-5 bg-white flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMobileOpen(false);
              }}
              className={`text-[15px] font-medium ${
                active === link.label ? "text-[#1E40AF]" : "text-gray-700"
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="flex gap-3 pt-3">
            <a
              href="/login"
              className="flex-1 text-center border border-[#1E40AF] text-[#1E40AF] font-semibold text-sm py-2.5 rounded-full"
            >
              Login
            </a>

            <a
              href="/enroll"
              className="flex-1 text-center bg-[#F59E0B] text-white font-semibold text-sm py-2.5 rounded-full"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
