"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Building2,
  IndianRupee,
  GraduationCap,
} from "lucide-react";

const placedStudents = [
  {
    name: "Ananya Sharma",
    course: "Full Stack Web Development",
    company: "Amazon",
    package: "12.5 LPA",
    photo: "https://i.pravatar.cc/600?img=47",
  },
  {
    name: "Rohan Verma",
    course: "Data Science & AI",
    company: "TCS",
    package: "7.8 LPA",
    photo: "https://i.pravatar.cc/600?img=12",
  },
  {
    name: "Priya Nair",
    course: "Cloud & DevOps",
    company: "Infosys",
    package: "9.2 LPA",
    photo: "https://i.pravatar.cc/600?img=32",
  },
  {
    name: "Karan Mehta",
    course: "Java Backend Development",
    company: "Microsoft",
    package: "15 LPA",
    photo: "https://i.pravatar.cc/600?img=51",
  },
];

const Login = () => {
  const [slide, setSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % placedStudents.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const current = placedStudents[slide];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F2F5F9] p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[640px]">
        {/* Left: rotating placed-student showcase */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-[#0B2333]">
          {placedStudents.map((student, i) => (
            <img
              key={student.name}
              src={student.photo}
              alt={student.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                i === slide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* darken for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2333]/90 via-[#0B2333]/10 to-[#0B2333]/40" />

          {/* Institute mark, top-left */}
          <div className="absolute top-5 left-5 flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded-lg bg-[#E8A33D] flex items-center justify-center">
              <GraduationCap size={18} className="text-[#0B2333]" />
            </div>
            <span className="font-semibold tracking-wide text-sm">
              CLASSBUZZ INSTITUTE
            </span>
          </div>

          {/* Placement badge card, bottom */}
          <div className="absolute bottom-6 left-5 right-5 text-white">
            <p className="text-xs uppercase tracking-widest text-[#7FD1C6] mb-2">
              Recently placed
            </p>
            <h3 className="text-2xl font-semibold leading-tight mb-1">
              {current.name}
            </h3>
            <p className="text-sm text-white/70 mb-4">{current.course}</p>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3 w-fit">
              <div className="flex items-center gap-2 pr-4 border-r border-white/20">
                <Building2 size={16} className="text-[#E8A33D]" />
                <span className="text-sm font-medium">{current.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <IndianRupee size={16} className="text-[#7FD1C6]" />
                <span className="text-sm font-semibold">{current.package}</span>
              </div>
            </div>

            {/* dots */}
            <div className="flex gap-1.5 mt-5">
              {placedStudents.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Show placed student ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === slide ? "w-6 bg-[#E8A33D]" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: login form */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 sm:px-12 py-10">
          <div className="w-full max-w-sm">
            <div className="flex flex-col items-center mb-7">
              <div className="w-14 h-14 rounded-2xl bg-[#0E7C86]/10 flex items-center justify-center mb-4">
                <GraduationCap size={26} className="text-[#0E7C86]" />
              </div>
              <h1 className="text-2xl font-bold text-[#0B2333]">
                Welcome back
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Sign in to continue your learning journey
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0B2333] mb-1.5">
                  Email address
                </label>
                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F6F8FB] border border-gray-200 text-sm text-[#0B2333] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0E7C86]/40 focus:border-[#0E7C86] transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0B2333] mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-11 py-3 rounded-xl bg-[#F6F8FB] border border-gray-200 text-sm text-[#0B2333] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0E7C86]/40 focus:border-[#0E7C86] transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm pt-1">
                <label className="flex items-center gap-2 text-gray-500">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-[#0E7C86] focus:ring-[#0E7C86]/40"
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-[#0E7C86] font-medium hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0B2333] to-[#0E7C86] text-white font-semibold text-sm hover:opacity-95 active:scale-[0.99] transition"
              >
                Sign in
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Dont have an account?{" "}
              <a
                href="#"
                className="text-[#0E7C86] font-semibold hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
