"use client";

import React from "react";
import {
  GraduationCap,
  Search,
  Moon,
  Users,
  Building2,
  Target,
  FileText,
  ShieldCheck,
  BarChart3,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
  MapPinned,
  ArrowUp,
} from "lucide-react";

// lucide-react dropped brand/social icons, so simple inline SVGs are used instead
const Facebook = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={14}
    height={14}
    {...props}
  >
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
  </svg>
);
const Twitter = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={14}
    height={14}
    {...props}
  >
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3.7 4.7a4 4 0 0 0 1.2 5.3c-.6 0-1.3-.2-1.8-.5v.1a4 4 0 0 0 3.2 3.9c-.6.1-1.2.2-1.8.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.4a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2.1z" />
  </svg>
);
const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={14}
    height={14}
    {...props}
  >
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4 0 4.8 2.6 4.8 6v6.3H18v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H10V9Z" />
  </svg>
);
const Instagram = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={14}
    height={14}
    {...props}
  >
    <path d="M12 2c2.7 0 3.1 0 4.1.06 1.1.05 1.8.2 2.4.45.66.26 1.2.6 1.75 1.15.5.5.85 1.1 1.1 1.75.25.6.4 1.3.45 2.4.06 1 .06 1.4.06 4.1s0 3.1-.06 4.1c-.05 1.1-.2 1.8-.45 2.4-.26.66-.6 1.2-1.15 1.75a4.7 4.7 0 0 1-1.75 1.1c-.6.25-1.3.4-2.4.45-1 .06-1.4.06-4.1.06s-3.1 0-4.1-.06c-1.1-.05-1.8-.2-2.4-.45a4.7 4.7 0 0 1-1.75-1.15 4.7 4.7 0 0 1-1.1-1.75c-.25-.6-.4-1.3-.45-2.4C2 15.1 2 14.7 2 12s0-3.1.06-4.1c.05-1.1.2-1.8.45-2.4.26-.66.6-1.2 1.15-1.75A4.7 4.7 0 0 1 5.4.6c.6-.25 1.3-.4 2.4-.45C8.9 2.06 9.3 2.06 12 2Zm0 1.8c-2.65 0-3 0-4 .06-.9.05-1.4.18-1.72.3-.43.17-.74.37-1.06.7-.33.32-.53.63-.7 1.06-.12.32-.25.82-.3 1.72-.06 1-.06 1.35-.06 4s0 3 .06 4c.05.9.18 1.4.3 1.72.17.43.37.74.7 1.06.32.33.63.53 1.06.7.32.12.82.25 1.72.3 1 .06 1.35.06 4 .06s3 0 4-.06c.9-.05 1.4-.18 1.72-.3.43-.17.74-.37 1.06-.7.33-.32.53-.63.7-1.06.12-.32.25-.82.3-1.72.06-1 .06-1.35.06-4s0-3-.06-4c-.05-.9-.18-1.4-.3-1.72a2.9 2.9 0 0 0-.7-1.06 2.9 2.9 0 0 0-1.06-.7c-.32-.12-.82-.25-1.72-.3-1-.06-1.35-.06-4-.06Zm0 3.7a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm4.7-2a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
  </svg>
);
const Youtube = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={14}
    height={14}
    {...props}
  >
    <path d="M23 12s0-3.4-.4-5a2.9 2.9 0 0 0-2-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.6.5a2.9 2.9 0 0 0-2 2C1 8.6 1 12 1 12s0 3.4.4 5a2.9 2.9 0 0 0 2 2c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.9 2.9 0 0 0 2-2c.4-1.6.4-5 .4-5ZM9.8 15.4V8.6l6 3.4-6 3.4Z" />
  </svg>
);

export default function Recruiter() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <span className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              For Recruiters & Companies
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Hire Top Digital Talent,
              <br />
              <span className="text-emerald-400">Faster &amp; Smarter</span>
            </h1>
            <p className="text-blue-100 mt-4 max-w-md text-sm md:text-base">
              Connect with thousands of pre-trained, job-ready students and hire
              the perfect talent for your organization.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Verified & Job-Ready Candidates",
                "AI Powered Talent Matching",
                "Easy Job Posting",
                "On-Campus Hiring Support",
                "End-to-End Placement Assistance",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-white border border-white/25 rounded-md px-3 py-2 bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-md text-sm flex items-center gap-2">
                Post a Job Now <ChevronRight size={16} />
              </button>
              <button className="border border-white text-white font-semibold px-5 py-3 rounded-md text-sm hover:bg-white/10">
                Explore Candidates
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-blue-900/30 aspect-[4/3] flex items-center justify-center text-blue-200 text-sm">
              <img src="HomeHero.jpeg" />
            </div>

            <div className="hidden md:flex absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 items-center gap-2">
              <Users className="text-blue-700" size={20} />
              <div>
                <p className="font-bold text-sm leading-none">5000+</p>
                <p className="text-[11px] text-slate-500">Job Ready Students</p>
              </div>
            </div>

            <div className="hidden md:flex absolute top-24 -right-8 bg-white rounded-xl shadow-lg px-4 py-3 items-center gap-2">
              <Building2 className="text-emerald-600" size={20} />
              <div>
                <p className="font-bold text-sm leading-none">200+</p>
                <p className="text-[11px] text-slate-500">Hiring Partners</p>
              </div>
            </div>

            <div className="hidden md:flex absolute bottom-6 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 items-center gap-2">
              <BarChart3 className="text-blue-700" size={20} />
              <div>
                <p className="font-bold text-sm leading-none">95%</p>
                <p className="text-[11px] text-slate-500">Placement Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-md px-8 py-6">
          <p className="text-center text-xs text-slate-400 mb-4">
            Trusted by 200+ Leading Companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 font-semibold text-sm">
            <span>Google</span>
            <span>Microsoft</span>
            <span>TCS</span>
            <span>Wipro</span>
            <span>Infosys</span>
            <span>Airtel</span>
            <span>IBM</span>
            <span>Accenture</span>
            <span>Capgemini</span>
          </div>
        </div>
      </section>

      {/* WHY RECRUIT */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Why Recruit with <span className="text-blue-700">SkillUp</span>?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 mt-10">
          {[
            {
              icon: Users,
              color: "bg-blue-700",
              title: "Access to Job Ready Talent",
              desc: "Hire skilled students trained on industry-relevant technologies.",
            },
            {
              icon: Target,
              color: "bg-emerald-500",
              title: "AI-Powered Talent Matching",
              desc: "Get the best candidate recommendations using smart AI algorithms.",
            },
            {
              icon: FileText,
              color: "bg-orange-500",
              title: "Easy & Quick Hiring",
              desc: "Post jobs, filter applicants, and hire faster with our intuitive platform.",
            },
            {
              icon: Building2,
              color: "bg-violet-500",
              title: "On-Campus Hiring Support",
              desc: "We help you conduct drives, assessments and interviews seamlessly.",
            },
            {
              icon: BarChart3,
              color: "bg-rose-500",
              title: "Placement Assistance",
              desc: "End-to-end support until you find the right candidate for your company.",
            },
            {
              icon: ShieldCheck,
              color: "bg-teal-600",
              title: "Verified & Trained Candidates",
              desc: "All candidates are verified and trained by industry experts.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-sm border border-slate-100 px-5 py-8 hover:shadow-md transition-shadow"
            >
              <div
                className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-4`}
              >
                <item.icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-blue-800">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {[
            { icon: Users, value: "5000+", label: "Job Ready Students" },
            { icon: Building2, value: "200+", label: "Hiring Partners" },
            { icon: FileText, value: "1500+", label: "Active Job Openings" },
            { icon: Users, value: "98%", label: "Recruiter Satisfaction" },
            { icon: MapPin, value: "30+", label: "Cities Covered" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-white"
            >
              <s.icon size={22} className="mb-2 text-blue-200" />
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-blue-200 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POST JOBS + RECENT OPENINGS */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-8">
        {/* Left card */}
        <div className="bg-blue-50 rounded-2xl p-8">
          <span className="text-xs font-semibold text-blue-700">
            For Recruiters
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-5">
            Post Jobs &amp; Hire the Best Talent
          </h3>

          <ul className="space-y-3 mb-6">
            {[
              "Create job openings in minutes",
              "Receive applications from relevant students",
              "Shortlist and schedule interviews",
              "Track placement and hiring status",
              "Build your employer brand",
            ].map((li) => (
              <li
                key={li}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                  ✓
                </span>
                {li}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <button className="bg-blue-800 hover:bg-blue-900 text-white text-sm font-semibold px-5 py-3 rounded-md flex items-center gap-2">
              Post a Job Now <ChevronRight size={16} />
            </button>
            <a
              href="#"
              className="text-blue-700 text-sm font-semibold flex items-center gap-1"
            >
              View Pricing Plans <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* Right list */}
        <div className="bg-white rounded-2xl border border-slate-100 p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">
              Recent Job Openings
            </h3>
            <a
              href="/jobs"
              className="text-blue-700 text-sm font-semibold flex items-center gap-1"
            >
              View All Jobs <ChevronRight size={14} />
            </a>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              {
                title: "Frontend Developer",
                company: "Tech Solutions Pvt. Ltd.",
                location: "Bangalore",
                posted: "Posted 2 days ago",
              },
              {
                title: "Python Developer",
                company: "DataByte Technologies",
                location: "Hyderabad",
                posted: "Posted 3 days ago",
              },
              {
                title: "UI/UX Designer",
                company: "Creative Minds",
                location: "Pune",
                posted: "Posted 4 days ago",
              },
              {
                title: "Data Analyst",
                company: "Insight Analytics",
                location: "Mumbai",
                posted: "Posted 5 days ago",
              },
            ].map((job) => (
              <div
                key={job.title}
                className="flex items-center justify-between py-4 first:pt-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-blue-700 font-bold text-xs">
                    {job.title.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {job.title}
                    </p>
                    <p className="text-xs text-slate-400">{job.company}</p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400">
                  <MapPin size={13} /> {job.location}
                </div>

                <span className="hidden md:inline-block text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                  Full Time
                </span>

                <p className="hidden lg:block text-xs text-slate-400">
                  {job.posted}
                </p>

                <ChevronRight size={16} className="text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKING FOR TALENT BANNER */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-50 rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Looking for the right talent?
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Let us help you find skilled, trained and job-ready candidates who
              fit your requirements.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button className="bg-blue-800 hover:bg-blue-900 text-white text-sm font-semibold px-6 py-3 rounded-md">
              Request Talent
            </button>
            <a
              href="#"
              className="text-blue-700 text-xs font-semibold flex items-center gap-1"
            >
              Talk to Our Team <ChevronRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* TOP CANDIDATES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Top Candidates for You
          </h2>
          <a
            href="#"
            className="text-blue-700 text-sm font-semibold flex items-center gap-1"
          >
            View All Candidates <ChevronRight size={14} />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex w-9 h-9 rounded-full border border-slate-200 items-center justify-center text-slate-400 hover:text-blue-700 shrink-0">
            <ChevronLeft size={16} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 flex-1">
            {[
              {
                name: "Aman Verma",
                role: "Full Stack Developer",
                skills: "React, Node.js, MongoDB",
                exp: "Fresher",
                loc: "Bangalore",
              },
              {
                name: "Neha Sharma",
                role: "UI/UX Designer",
                skills: "Figma, Adobe XD, Sketch",
                exp: "1 Year",
                loc: "Pune",
              },
              {
                name: "Rohit Kumar",
                role: "Python Developer",
                skills: "Python, Django, Flask",
                exp: "1 Year",
                loc: "Hyderabad",
              },
              {
                name: "Sneha Yadav",
                role: "Data Analyst",
                skills: "SQL, Python, Power BI",
                exp: "Fresher",
                loc: "Delhi",
              },
              {
                name: "Vikram Singh",
                role: "DevOps Engineer",
                skills: "AWS, Docker, Jenkins",
                exp: "2 Years",
                loc: "Mumbai",
              },
            ].map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-slate-100 mx-auto mb-3" />
                <p className="text-sm font-semibold text-center text-slate-900">
                  {c.name}
                </p>
                <p className="text-xs text-center text-slate-500 mb-1">
                  {c.role}
                </p>
                <p className="text-[11px] text-center text-slate-400 mb-1">
                  {c.skills}
                </p>
                <p className="text-[11px] text-center text-slate-400 mb-4">
                  Experience: {c.exp} &middot; {c.loc}
                </p>
                <button className="w-full border border-emerald-500 text-emerald-600 text-xs font-semibold rounded-md py-2 hover:bg-emerald-50">
                  View Profile
                </button>
              </div>
            ))}
          </div>

          <button className="hidden md:flex w-9 h-9 rounded-full border border-slate-200 items-center justify-center text-slate-400 hover:text-blue-700 shrink-0">
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* BECOME HIRING PARTNER */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-800 rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 rounded-full p-3">
              <GraduationCap className="text-white" size={26} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Become a Hiring Partner Today!
              </h3>
              <p className="text-sm text-blue-200">
                Join 200+ companies who trust SkillUp to hire top digital
                talent.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-3 rounded-md">
              Post a Job Now
            </button>
            <button className="border border-white text-white text-sm font-semibold px-5 py-3 rounded-md hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-xs text-slate-400">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
