"use client";
import { useState } from "react";
import {
  Search,
  Bookmark,
  BookmarkCheck,
  Briefcase,
  Users,
  Target,
  Bell,
  Upload,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Clock,
  Calendar,
  IndianRupee,
  GraduationCap,
  Moon,
  Sun,
} from "lucide-react";

const POPULAR_SEARCHES = [
  "Web Developer",
  "Data Analyst",
  "UI/UX Designer",
  "Python Developer",
  "Digital Marketer",
];

const STATS = [
  {
    icon: Briefcase,
    value: "2500+",
    label: "Active Jobs",
    color: "text-teal-700 bg-teal-50 dark:bg-teal-500/10 dark:text-teal-300",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Job Seekers",
    color:
      "text-emerald-700 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-300",
  },
  {
    icon: Upload,
    value: "200+",
    label: "Top Companies",
    color:
      "text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-300",
  },
  {
    icon: Target,
    value: "95%",
    label: "Placement Support",
    color: "text-sky-700 bg-sky-50 dark:bg-sky-500/10 dark:text-sky-300",
  },
];

const PARTNERS = [
  "Google",
  "Microsoft",
  "TCS",
  "Infosys",
  "Wipro",
  "Accenture",
  "IBM",
  "Capgemini",
];

const JOB_TYPES = [
  { label: "Full Time", count: 1200 },
  { label: "Part Time", count: 300 },
  { label: "Internship", count: 450 },
  { label: "Work From Home", count: 800 },
];

const EXPERIENCE_LEVELS = [
  { label: "Fresher (0-1 yr)", count: 800 },
  { label: "1-3 Years", count: 800 },
  { label: "3-5 Years", count: 400 },
  { label: "5+ Years", count: 200 },
];



const JOBS = [
  {
    company: "Google",
    initial: "G",
    color: "bg-white text-blue-600 border border-gray-200",
    title: "Frontend Developer",
    location: "Bangalore, India",
    type: "Full Time",
    exp: "2-4 Yrs",
    tags: ["React.js", "JavaScript", "HTML", "CSS"],
    salary: "₹8 - 15 LPA",
    posted: "2 days ago",
    match: 94,
  },
  {
    company: "Microsoft",
    initial: "M",
    color: "bg-white text-emerald-600 border border-gray-200",
    title: "Data Analyst",
    location: "Hyderabad, India",
    type: "Full Time",
    exp: "1-3 Yrs",
    tags: ["SQL", "Excel", "Power BI", "Python"],
    salary: "₹6 - 12 LPA",
    posted: "1 day ago",
    match: 88,
  },
  {
    company: "TCS",
    initial: "T",
    color: "bg-white text-red-600 border border-gray-200",
    title: "Software Engineer",
    location: "Pune, India",
    type: "Full Time",
    exp: "0-2 Yrs",
    tags: ["Java", "DSA", "SQL", "Spring Boot"],
    salary: "₹3.5 - 7 LPA",
    posted: "3 days ago",
    match: 76,
  },
  {
    company: "Infosys",
    initial: "I",
    color: "bg-white text-blue-500 border border-gray-200",
    title: "Python Developer",
    location: "Mysore, India",
    type: "Full Time",
    exp: "1-3 Yrs",
    tags: ["Python", "Django", "REST API", "SQL"],
    salary: "₹5 - 10 LPA",
    posted: "2 days ago",
    match: 91,
  },
  {
    company: "Wipro",
    initial: "W",
    color: "bg-white text-purple-600 border border-gray-200",
    title: "UI/UX Designer",
    location: "Bangalore, India",
    type: "Full Time",
    exp: "2-4 Yrs",
    tags: ["Figma", "Adobe XD", "HTML", "CSS"],
    salary: "₹6 - 11 LPA",
    posted: "4 days ago",
    match: 82,
  },
  {
    company: "Amazon",
    initial: "a",
    color: "bg-white text-orange-500 border border-gray-200",
    title: "DevOps Engineer",
    location: "Hyderabad, India",
    type: "Full Time",
    exp: "3-5 Yrs",
    tags: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    salary: "₹12 - 20 LPA",
    posted: "1 day ago",
    match: 69,
  },
  {
    company: "Adobe",
    initial: "A",
    color: "bg-white text-red-500 border border-gray-200",
    title: "Digital Marketing Executive",
    location: "Noida, India",
    type: "Full Time",
    exp: "1-2 Yrs",
    tags: ["SEO", "Google Ads", "Social Media", "Analytics"],
    salary: "₹3 - 6 LPA",
    posted: "5 days ago",
    match: 85,
  },
  {
    company: "Capgemini",
    initial: "C",
    color: "bg-white text-sky-600 border border-gray-200",
    title: "Cyber Security Analyst",
    location: "Chennai, India",
    type: "Full Time",
    exp: "2-4 Yrs",
    tags: ["Security", "Network", "SIEM", "Python"],
    salary: "₹7 - 14 LPA",
    posted: "2 days ago",
    match: 78,
  },
  {
    company: "IBM",
    initial: "IBM",
    color: "bg-white text-blue-800 border border-gray-200",
    title: "Cloud Engineer",
    location: "Kolkata, India",
    type: "Full Time",
    exp: "2-4 Yrs",
    tags: ["AWS", "Azure", "Linux", "Terraform"],
    salary: "₹7 - 13 LPA",
    posted: "3 days ago",
    match: 90,
  },
  {
    company: "Airtel",
    initial: "A",
    color: "bg-white text-red-600 border border-gray-200",
    title: "Business Analyst",
    location: "Delhi, India",
    type: "Full Time",
    exp: "1-3 Yrs",
    tags: ["Excel", "SQL", "Power BI", "Communication"],
    salary: "₹4 - 9 LPA",
    posted: "4 days ago",
    match: 73,
  },
];

/* ---------- Fonts (Sora for display, Inter for body) ---------- */
function FontLoader() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
      .font-display { font-family: 'Sora', sans-serif; }
      .font-body { font-family: 'Inter', sans-serif; }
    `}</style>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(20,184,166,0.25), transparent 45%), radial-gradient(circle at 85% 75%, rgba(245,158,11,0.15), transparent 45%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 font-body text-xs font-medium text-teal-300">
            <Target size={12} /> Find The Right Job
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
            Find Your Dream Job
            <span className="block text-teal-400">Build Your Future</span>
          </h1>

          <p className="mt-4 max-w-md font-body text-sm text-slate-300 sm:text-base">
            Explore thousands of job opportunities from top companies and
            kickstart your career today.
          </p>

          <div className="mt-7 flex flex-col gap-2 rounded-xl bg-white p-2 shadow-xl sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-2 px-3 py-2">
              <Search size={16} className="shrink-0 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, keyword or company"
                className="w-full font-body text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>
            <div className="hidden h-6 w-px bg-gray-200 sm:block" />
            <div className="flex flex-1 items-center gap-2 px-3 py-2">
              <MapPin size={16} className="shrink-0 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full font-body text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>
            <button className="rounded-lg bg-teal-600 px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-teal-700">
              Search Jobs
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 font-body text-xs text-slate-400">
            <span>Popular Searches:</span>
            {POPULAR_SEARCHES.map((tag) => (
              <span
                key={tag}
                className="cursor-pointer rounded-full bg-white/5 px-3 py-1 font-medium text-slate-300 transition hover:bg-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ icon: Icon, value, label, color }, i) => (
              <div
                key={label}
                className={`flex items-center gap-3 rounded-xl bg-white p-4 shadow-lg dark:bg-slate-900 ${
                  i % 2 === 0 ? "translate-y-4" : ""
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${color}`}
                >
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-display text-base font-extrabold text-gray-900 dark:text-white">
                    {value}
                  </p>
                  <p className="font-body text-xs text-gray-500 dark:text-slate-400">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TopHiringPartners() {
  return (
    <section className="mx-auto -mt-8 max-w-7xl px-6">
      <div className="relative z-10 rounded-xl border border-gray-100 bg-white p-6 shadow-md dark:border-white/10 dark:bg-slate-900">
        <p className="mb-4 text-center font-body text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
          Top Hiring Partners
        </p>
        <div className="flex items-center justify-between gap-6 overflow-x-auto">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="shrink-0 cursor-pointer font-display text-lg font-bold text-gray-300 grayscale transition hover:text-teal-600 hover:grayscale-0 dark:text-slate-600 dark:hover:text-teal-400"
            >
              {name}
            </span>
          ))}
          <ChevronRight
            className="shrink-0 text-gray-300 dark:text-slate-600"
            size={18}
          />
        </div>
      </div>
    </section>
  );
}

function Sidebar() {
  const [salary, setSalary] = useState(500000);

  return (
    <aside className="space-y-5">
      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <h3 className="mb-4 font-display text-base font-bold text-gray-900 dark:text-white">
          Refine Your Search
        </h3>

        <div className="mb-5">
          <label className="mb-1.5 block font-body text-xs font-semibold text-gray-600 dark:text-slate-400">
            Keywords
          </label>
          <input
            type="text"
            placeholder="Job title, skills or company"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 font-body text-sm outline-none focus:border-teal-400 dark:border-white/10 dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div className="mb-5">
          <label className="mb-1.5 block font-body text-xs font-semibold text-gray-600 dark:text-slate-400">
            Location
          </label>
          <select className="w-full rounded-lg border border-gray-200 px-3 py-2 font-body text-sm text-gray-500 outline-none focus:border-teal-400 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300">
            <option>Select location</option>
          </select>
        </div>

        <div className="mb-5">
          <p className="mb-2 font-body text-xs font-semibold text-gray-600 dark:text-slate-400">
            Job Type
          </p>
          <div className="space-y-2">
            {JOB_TYPES.map((t) => (
              <label
                key={t.label}
                className="flex items-center gap-2 font-body text-sm text-gray-600 dark:text-slate-300"
              >
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-gray-300 accent-teal-600"
                />
                {t.label}{" "}
                <span className="text-gray-400 dark:text-slate-500">
                  ({t.count}+)
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 font-body text-xs font-semibold text-gray-600 dark:text-slate-400">
            Experience Level
          </p>
          <div className="space-y-2">
            {EXPERIENCE_LEVELS.map((t) => (
              <label
                key={t.label}
                className="flex items-center gap-2 font-body text-sm text-gray-600 dark:text-slate-300"
              >
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-gray-300 accent-teal-600"
                />
                {t.label}{" "}
                <span className="text-gray-400 dark:text-slate-500">
                  ({t.count}+)
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 font-body text-xs font-semibold text-gray-600 dark:text-slate-400">
            Salary Range
          </p>
          <input
            type="range"
            min={0}
            max={2000000}
            step={50000}
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full accent-teal-600"
          />
          <div className="mt-1 flex justify-between font-body text-[11px] text-gray-500 dark:text-slate-500">
            <span>₹0</span>
            <span>₹20,00,000+</span>
          </div>
        </div>

        <button className="w-full rounded-lg bg-teal-600 py-2.5 font-body text-sm font-semibold text-white transition hover:bg-teal-700">
          Apply Filters
        </button>
        <button className="mt-2 w-full text-center font-body text-xs font-medium text-teal-700 hover:underline dark:text-teal-400">
          Clear All Filters
        </button>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
          <Upload size={16} />
        </div>
        <h4 className="font-display text-sm font-bold text-gray-900 dark:text-white">
          Create Your Profile
        </h4>
        <p className="mt-1 font-body text-xs text-gray-500 dark:text-slate-400">
          Get noticed by top recruiters and let your dream job find you.
        </p>
        <button className="mt-3 w-full rounded-lg border border-teal-600 py-2 font-body text-xs font-semibold text-teal-700 transition hover:bg-teal-50 dark:text-teal-300 dark:hover:bg-teal-500/10">
          Upload Resume
        </button>
        <button className="mt-2 w-full text-center font-body text-xs font-medium text-teal-700 hover:underline dark:text-teal-400">
          View Profile
        </button>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-500 dark:bg-amber-500/10 dark:text-amber-300">
          <Bell size={16} />
        </div>
        <h4 className="font-display text-sm font-bold text-gray-900 dark:text-white">
          Get Job Alerts
        </h4>
        <p className="mt-1 font-body text-xs text-gray-500 dark:text-slate-400">
          Subscribe and get the latest job openings in your inbox.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-3 w-full rounded-lg border border-gray-200 px-3 py-2 font-body text-xs outline-none focus:border-teal-400 dark:border-white/10 dark:bg-slate-800 dark:text-white"
        />
        <button className="mt-2 w-full rounded-lg bg-teal-600 py-2 font-body text-xs font-semibold text-white transition hover:bg-teal-700">
          Subscribe
        </button>
      </div>
    </aside>
  );
}

/* ---------- Signature element: circular match-score ring ---------- */
function MatchRing({ value }) {
  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const tone = value >= 88 ? "#0d9488" : value >= 75 ? "#0891b2" : "#94a3b8";

  return (
    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
      <svg viewBox="0 0 40 40" className="h-11 w-11 -rotate-90">
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-gray-100 dark:text-white/10"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke={tone}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute font-display text-[10px] font-bold text-gray-700 dark:text-slate-200">
        {value}%
      </span>
    </div>
  );
}

function JobCard({ job }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-slate-900">
      <div className="flex gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg font-display text-sm font-bold ${job.color} dark:border-white/10`}
        >
          {job.initial}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white">
              {job.title}
            </h3>
            <span className="rounded bg-emerald-100 px-1.5 py-0.5 font-body text-[10px] font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
              New
            </span>
          </div>
          <p className="font-body text-xs text-gray-500 dark:text-slate-400">
            {job.company}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3 font-body text-[11px] text-gray-400 dark:text-slate-500">
            <span className="flex items-center gap-1">
              <MapPin size={12} /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase size={12} /> {job.type}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {job.exp}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2 py-0.5 font-body text-[10px] font-medium text-gray-600 dark:bg-white/5 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-4 sm:justify-end">
        <MatchRing value={job.match} />
        <div className="flex flex-col items-start gap-1 sm:items-end sm:text-right">
          <p className="flex items-center gap-0.5 font-display text-sm font-bold text-emerald-600 dark:text-emerald-400">
            <IndianRupee size={13} />
            {job.salary.replace("₹", "")}
          </p>
          <span className="flex items-center gap-1 font-body text-[11px] text-gray-400 dark:text-slate-500">
            <Calendar size={11} /> {job.posted}
          </span>
          <button
            onClick={() => setSaved(!saved)}
            aria-label="Save job"
            className={`mt-1 transition ${
              saved
                ? "text-teal-600 dark:text-teal-400"
                : "text-gray-300 hover:text-teal-600 dark:text-slate-600 dark:hover:text-teal-400"
            }`}
          >
            {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}

function JobListings() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-body text-sm text-gray-500 dark:text-slate-400">
          Showing{" "}
          <span className="font-semibold text-gray-800 dark:text-white">
            1 - 10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-800 dark:text-white">
            2500+
          </span>{" "}
          jobs
        </p>
        <select className="rounded-lg border border-gray-200 px-3 py-1.5 font-body text-xs text-gray-600 outline-none dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
          <option>Sort by: Latest</option>
          <option>Sort by: Salary</option>
          <option>Sort by: Relevance</option>
        </select>
      </div>

      {JOBS.map((job) => (
        <JobCard key={job.title + job.company} job={job} />
      ))}

      <div className="flex items-center justify-center gap-1.5 pt-4">
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 dark:border-white/10 dark:text-slate-500 dark:hover:bg-white/5">
          <ChevronLeft size={14} />
        </button>
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            className={
              n === 1
                ? "flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 font-body text-sm font-semibold text-white"
                : "flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 font-body text-sm text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
            }
          >
            {n}
          </button>
        ))}
        <span className="px-1 text-gray-400 dark:text-slate-500">…</span>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 font-body text-sm text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5">
          25
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 dark:border-white/10 dark:text-slate-500 dark:hover:bg-white/5">
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-5 rounded-xl bg-slate-950 px-8 py-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-300 sm:flex">
            <Briefcase size={20} />
          </span>
          <div>
            <h3 className="font-display text-base font-bold text-white sm:text-lg">
              Don't find your suitable job?
            </h3>
            <p className="font-body text-sm text-slate-400">
              Upload your resume and let recruiters find you.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 font-body text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            <Upload size={15} /> Upload Resume
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 font-body text-sm font-semibold text-white transition hover:bg-teal-700">
            Get Hired Faster <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Jobs() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <FontLoader />
      <div className="min-h-screen bg-gray-50 font-body dark:bg-slate-950">
        <Hero />
        <TopHiringPartners />

        <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 lg:grid-cols-[280px_1fr]">
          <Sidebar />
          <JobListings />
        </main>

        <CtaBanner />
      </div>
    </div>
  );
}
