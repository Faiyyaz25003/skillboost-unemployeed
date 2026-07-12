"use client";

import { useState } from "react";
import {
  Search,
  Moon,
  ChevronRight,
  BookOpen,
  Users,
  GraduationCap,
  Award,
  BarChart3,
  ShieldCheck,
  Cloud,
  Target,
  Code2,
  Wifi,
  PenTool,
  IndianRupee,
  FileSpreadsheet,
  Clock,
  Video,
  Send,
  ArrowRight,
  Sparkles,
  Layers,
  MessageSquareText,
  ClipboardCheck,
  UserCheck,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Custom social icons (lucide-react no longer ships brand icons)     */
/* ------------------------------------------------------------------ */

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.6-1.5H16.5V4.3C16.2 4.26 15.2 4.17 14 4.17c-2.4 0-4 1.46-4 4.14V10.5H7.5v3H10V21h3.5z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.6 7.2s-.2-1.5-.85-2.15c-.8-.85-1.7-.85-2.1-.9C15.9 4 12 4 12 4h-.02s-3.9 0-6.65.15c-.4.05-1.3.05-2.1.9C2.6 5.7 2.4 7.2 2.4 7.2S2.2 9 2.2 10.75v1.5C2.2 14 2.4 15.8 2.4 15.8s.2 1.5.85 2.15c.8.85 1.85.82 2.3.9 1.67.16 7.45.2 7.45.2s3.9-.01 6.65-.16c.4-.05 1.3-.05 2.1-.9.65-.65.85-2.15.85-2.15s.2-1.8.2-3.55v-1.5c0-1.75-.2-3.55-.2-3.55zM9.95 14.5v-6l5.8 3.02-5.8 2.98z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 5.9c-.7.3-1.5.55-2.3.65a4 4 0 0 0 1.75-2.2c-.8.45-1.65.8-2.55 1a4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3.9 4.85a4 4 0 0 0 1.25 5.3c-.65 0-1.25-.2-1.8-.5v.05a4 4 0 0 0 3.2 3.9c-.6.15-1.2.17-1.8.07a4 4 0 0 0 3.7 2.75A8 8 0 0 1 2 17.9a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6 11.3-11.3v-.5c.8-.55 1.45-1.25 2-2.05-.7.3-1.5.55-2.4.65z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const navLinks = [
  { label: "Home", active: false },
  { label: "About Us", active: false },
  { label: "Courses", active: true },
  { label: "Trainers", active: false },
  { label: "Jobs", active: false },
  { label: "Success Stories", active: false },
  { label: "Events", active: false },
  { label: "Blog", active: false },
];

const stats = [
  {
    icon: BookOpen,
    value: "150+",
    label: "Courses",
    bg: "bg-[var(--color-primary)]",
  },
  {
    icon: Award,
    value: "50+",
    label: "Expert Trainers",
    bg: "bg-[var(--color-secondary)]",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Students Trained",
    bg: "bg-[var(--color-accent)]",
  },
  {
    icon: GraduationCap,
    value: "95%",
    label: "Placement Rate",
    bg: "bg-purple-500",
  },
];

const categories = [
  {
    label: "Data Science with AI",
    icon: BarChart3,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    label: "Data Analytics with AI",
    icon: BarChart3,
    bg: "bg-amber-100",
    color: "text-amber-600",
  },
  {
    label: "Cyber Security with AI",
    icon: ShieldCheck,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    label: "Advanced Cyber Security",
    icon: ShieldCheck,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    label: "Fullstack Dev.",
    icon: Target,
    bg: "bg-amber-100",
    color: "text-amber-600",
  },
  {
    label: "Cloud Computing with AI",
    icon: Cloud,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    label: "Digital Marketing with AI",
    icon: Target,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    label: "Software Testing with AI",
    icon: ClipboardCheck,
    bg: "bg-amber-100",
    color: "text-amber-600",
  },
  {
    label: "Software Courses",
    icon: Code2,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    label: "Networking",
    icon: Wifi,
    bg: "bg-amber-100",
    color: "text-amber-600",
  },
  {
    label: "CAD/CAM/CAE",
    icon: PenTool,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    label: "Accounts Finance",
    icon: IndianRupee,
    bg: "bg-amber-100",
    color: "text-amber-600",
  },
  {
    label: "SAP Certification",
    icon: FileSpreadsheet,
    bg: "bg-gray-200",
    color: "text-gray-700",
  },
];

const courses = [
  {
    title: "Data Science with AI",
    desc: "Learn Data Science, ML, Deep Learning & AI from industry experts.",
    level: "Beginner to Advanced",
    duration: "6 Months",
    icon: BarChart3,
    iconBg: "bg-[var(--color-primary)]",
  },
  {
    title: "Data Analytics with AI",
    desc: "Master data analysis, visualization and AI-powered analytics tools.",
    level: "Beginner to Advanced",
    duration: "4 Months",
    icon: Search,
    iconBg: "bg-[var(--color-accent)]",
  },
  {
    title: "Cyber Security with AI",
    desc: "Learn ethical hacking, network security & AI-driven security.",
    level: "Beginner to Advanced",
    duration: "5 Months",
    icon: ShieldCheck,
    iconBg: "bg-[var(--color-primary)]",
  },
  {
    title: "Advanced Cyber Security",
    desc: "Advanced techniques in penetration testing, SOC, and AI security.",
    level: "Advanced",
    duration: "6 Months",
    icon: ShieldCheck,
    iconBg: "bg-[var(--color-primary)]",
  },
  {
    title: "Fullstack Dev.",
    desc: "Become a fullstack developer with MERN stack & real-world projects.",
    level: "Beginner to Advanced",
    duration: "6 Months",
    icon: Target,
    iconBg: "bg-[var(--color-accent)]",
  },
  {
    title: "Cloud Computing with AI",
    desc: "Learn cloud platforms, DevOps and AI integration on cloud.",
    level: "Beginner to Advanced",
    duration: "6 Months",
    icon: Cloud,
    iconBg: "bg-[var(--color-primary)]",
  },
  {
    title: "Digital Marketing with AI",
    desc: "Learn SEO, Social Media, Ads & AI tools for digital growth.",
    level: "Beginner to Advanced",
    duration: "3 Months",
    icon: Target,
    iconBg: "bg-[var(--color-primary)]",
  },
  {
    title: "Software Testing with AI",
    desc: "Master manual & automation testing with AI-powered testing tools.",
    level: "Beginner to Advanced",
    duration: "3 Months",
    icon: Cloud,
    iconBg: "bg-[var(--color-accent)]",
  },
  {
    title: "Software Courses",
    desc: "From programming basics to advanced software concepts.",
    level: "Beginner to Advanced",
    duration: "6 Months",
    icon: Code2,
    iconBg: "bg-[var(--color-primary)]",
  },
  {
    title: "Networking",
    desc: "Learn networking fundamentals, CCNA, and network security.",
    level: "Beginner to Advanced",
    duration: "3 Months",
    icon: Wifi,
    iconBg: "bg-[var(--color-accent)]",
  },
  {
    title: "CAD/CAM/CAE",
    desc: "Design, simulate & analyze with industry-standard tools.",
    level: "Beginner to Advanced",
    duration: "4 Months",
    icon: PenTool,
    iconBg: "bg-[var(--color-primary)]",
  },
  {
    title: "Accounts Finance",
    desc: "Learn accounting, financial management & taxation.",
    level: "Beginner to Advanced",
    duration: "3 Months",
    icon: IndianRupee,
    iconBg: "bg-[var(--color-accent)]",
  },
  {
    title: "SAP Certification",
    desc: "Get industry-recognized SAP certification and career boost.",
    level: "Beginner to Advanced",
    duration: "3 Months",
    icon: FileSpreadsheet,
    iconBg: "bg-[var(--color-primary)]",
  },
];

const features = [
  {
    icon: Layers,
    title: "Industry-Relevant Curriculum",
    desc: "Courses designed by experts for real-world skills.",
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
  {
    icon: MessageSquareText,
    title: "Live Interactive Sessions",
    desc: "Learn, ask, and grow with live doubt-solving classes.",
    bg: "bg-teal-100",
    color: "text-teal-600",
  },
  {
    icon: ClipboardCheck,
    title: "Hands-on Projects & Assignments",
    desc: "Work on real projects and build your portfolio.",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Placement Assistance",
    desc: "Get resume support, mock interviews & job referrals.",
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
];

const quickLinks = [
  "Home",
  "About Us",
  "Courses",
  "Trainers",
  "Jobs",
  "Success Stories",
  "Events",
  "Blog",
  "Contact Us",
];
const ourCourses = [
  "Data Science with AI",
  "Data Analytics with AI",
  "Cyber Security with AI",
  "Fullstack Development",
  "Cloud Computing with AI",
  "Digital Marketing with AI",
  "View All Courses",
];
const supportLinks = [
  "Help Center",
  "FAQs",
  "Career Guidance",
  "Terms & Conditions",
  "Privacy Policy",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CoursesPage() {
  // null => "All Courses" selected (no filter)
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.title === selectedCategory)
    : courses;

  const handleCategoryClick = (label) => (e) => {
    e.preventDefault();
    // clicking the same category again clears the filter
    setSelectedCategory((prev) => (prev === label ? null : label));
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* ---------------- Hero ---------------- */}
      <section className="bg-gradient-to-b from-blue-50 to-[var(--color-bg)]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
              Our Courses
            </span>
            <h1 className="mb-3 text-[34px] leading-tight font-bold text-[var(--color-text)]">
              Build In-Demand Skills,
              <br />
              <span className="text-[var(--color-primary)]">
                Launch Your Dream Career
              </span>
            </h1>
            <p className="mb-8 max-w-md text-sm text-gray-500">
              Explore industry-focused courses designed to make you job-ready
              and future-ready.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.bg}`}
                  >
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[var(--color-text)]">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-500">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* decorative hero image */}
          <div>
            <img
              src="/Course/Course.jpeg"
              alt="Students learning in-demand skills"
              className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] h-auto ml-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* ---------------- Search bar ---------------- */}
      <section className="mx-auto -mt-2 max-w-[1440px] px-6 pb-8 lg:px-10">
        <div className="card flex flex-col gap-3 p-4 shadow-sm lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full pl-9 pr-3 text-sm text-[var(--color-text)] outline-none placeholder:text-gray-400"
            />
          </div>
          <select className="px-3 text-sm text-gray-600 outline-none lg:w-44">
            <option>All Categories</option>
          </select>
          <select className="px-3 text-sm text-gray-600 outline-none lg:w-36">
            <option>All Levels</option>
          </select>
          <select className="px-3 text-sm text-gray-600 outline-none lg:w-36">
            <option>All Modes</option>
          </select>
          <button className="btn-primary h-[var(--input-height)] rounded-[var(--radius-button)] px-8 text-sm font-semibold hover:opacity-90">
            Search
          </button>
        </div>
      </section>

      {/* ---------------- Main content ---------------- */}
      <section className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            <div className="card p-4 shadow-sm">
              <h3 className="mb-3 px-1 text-base font-bold text-[var(--color-text)]">
                Course Categories
              </h3>
              <ul>
                {/* "All Courses" option to clear the filter */}
                <li>
                  <a
                    href="#"
                    onClick={handleCategoryClick(null)}
                    className={`flex items-center justify-between rounded-lg px-2 py-2.5 text-sm hover:bg-gray-50 ${
                      selectedCategory === null
                        ? "bg-blue-50 font-semibold text-[var(--color-primary)]"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                        <Layers className="h-4 w-4 text-gray-600" />
                      </span>
                      All Courses
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-300" />
                  </a>
                </li>

                {categories.map((c) => {
                  const isActive = selectedCategory === c.label;
                  return (
                    <li key={c.label}>
                      <a
                        href="#"
                        onClick={handleCategoryClick(c.label)}
                        className={`flex items-center justify-between rounded-lg px-2 py-2.5 text-sm hover:bg-gray-50 ${
                          isActive
                            ? "bg-blue-50 font-semibold text-[var(--color-primary)]"
                            : "text-gray-700"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${c.bg}`}
                          >
                            <c.icon className={`h-4 w-4 ${c.color}`} />
                          </span>
                          {c.label}
                        </span>
                        <ChevronRight className="h-4 w-4 text-gray-300" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="card bg-blue-50/60 p-5 shadow-sm">
              <h4 className="mb-1 text-base font-bold leading-snug text-[var(--color-text)]">
                Not Sure Which Course
                <br />
                <span className="text-[var(--color-primary)]">
                  Is Right for You?
                </span>
              </h4>
              <p className="mb-4 text-xs text-gray-500">
                Get personalized career guidance from our experts.
              </p>
              <button className="btn-primary flex w-full items-center justify-center gap-2 rounded-[var(--radius-button)] py-2.5 text-sm font-semibold hover:opacity-90">
                Talk to an Advisor
                <MessageSquareText className="h-4 w-4" />
              </button>
            </div>
          </aside>

          {/* Courses grid */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-bold text-[var(--color-text)]">
                {selectedCategory ? selectedCategory : "Popular Courses"}
              </h3>
              <a
                href="#"
                onClick={handleCategoryClick(null)}
                className="flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                View All Courses <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="card p-10 text-center text-sm text-gray-500 shadow-sm">
                Is category mein filhaal koi course nahi mila.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredCourses.map((course) => (
                  <div
                    key={course.title}
                    className="card flex flex-col gap-3 p-5 shadow-sm"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${course.iconBg}`}
                    >
                      <course.icon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-[15px] font-bold text-[var(--color-text)]">
                      {course.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-500">
                      {course.desc}
                    </p>
                    <span className="w-fit rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-[var(--color-primary)]">
                      {course.level}
                    </span>
                    <div className="mt-1 flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Video className="h-3.5 w-3.5" /> Live Classes
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- CTA banner ---------------- */}
      <section className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 rounded-[var(--radius-card)] bg-[var(--color-primary)] px-8 py-7 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Ready to Start Your Learning Journey?
              </h4>
              <p className="text-sm text-blue-100">
                Join thousands of learners and build skills that get you hired.
              </p>
            </div>
          </div>
          <button className="btn-accent flex shrink-0 items-center gap-2 rounded-[var(--radius-button)] px-6 py-2.5 text-sm font-semibold shadow-sm hover:opacity-90">
            Enroll Now
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* ---------------- Feature strip ---------------- */}
      <section className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-10">
        <div className="grid grid-cols-1 gap-8 border-t border-[var(--color-border)] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${f.bg}`}
              >
                <f.icon className={`h-5 w-5 ${f.color}`} />
              </div>
              <div>
                <h5 className="text-sm font-bold text-[var(--color-text)]">
                  {f.title}
                </h5>
                <p className="mt-1 text-xs text-gray-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
