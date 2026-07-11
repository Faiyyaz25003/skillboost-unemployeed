"use client";

import { useState } from "react";

// ---------- Data ----------

const filters = [
  "All Trainers",
  "Web Development",
  "Data Science",
  "Digital Marketing",
  "UI/UX Design",
  "Cyber Security",
  "Programming",
];

const trainers = [
  {
    name: "Aayush Mehta",
    role: "Senior Full Stack Developer",
    tag: "Web Development",
    tagColor: "bg-blue-100 text-blue-700",
    exp: "8+ Years Experience",
    company: "Google",
    desc: "Expert in MERN Stack development and building scalable web applications.",
    rating: "4.9",
    reviews: "320",
    img: "https://i.pravatar.cc/150?img=13",
  },
  {
    name: "Neha Sharma",
    role: "Data Scientist",
    tag: "Data Science",
    tagColor: "bg-green-100 text-green-700",
    exp: "7+ Years Experience",
    company: "Microsoft",
    desc: "Specialized in Machine Learning, Python, and Data Visualization.",
    rating: "4.8",
    reviews: "280",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Rahul Verma",
    role: "Digital Marketing Expert",
    tag: "Digital Marketing",
    tagColor: "bg-purple-100 text-purple-700",
    exp: "6+ Years Experience",
    company: "Amazon",
    desc: "Expert in SEO, SEM, Social Media Marketing & Growth Strategies.",
    rating: "4.7",
    reviews: "250",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Priya Nair",
    role: "UI/UX Design Lead",
    tag: "UI/UX Design",
    tagColor: "bg-green-100 text-green-700",
    exp: "6+ Years Experience",
    company: "Adobe",
    desc: "Specialized in User Research, Wireframing & Product Design.",
    rating: "4.9",
    reviews: "300",
    img: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Sandeep Patil",
    role: "Cyber Security Analyst",
    tag: "Cyber Security",
    tagColor: "bg-emerald-100 text-emerald-700",
    exp: "7+ Years Experience",
    company: "IBM",
    desc: "Expert in Ethical Hacking, Network Security & Threat Analysis.",
    rating: "4.9",
    reviews: "270",
    img: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Kritika Sharma",
    role: "Python Developer",
    tag: "Programming",
    tagColor: "bg-indigo-100 text-indigo-700",
    exp: "5+ Years Experience",
    company: "TCS",
    desc: "Passionate about Python, Django, APIs & Backend Development.",
    rating: "4.7",
    reviews: "220",
    img: "https://i.pravatar.cc/150?img=20",
  },
  {
    name: "Vikram Singh",
    role: "DevOps Engineer",
    tag: "DevOps",
    tagColor: "bg-orange-100 text-orange-700",
    exp: "6+ Years Experience",
    company: "Infosys",
    desc: "Expert in CI/CD, Docker, AWS and Infrastructure Automation.",
    rating: "4.8",
    reviews: "260",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Anjali Desai",
    role: "Machine Learning Engineer",
    tag: "Data Science",
    tagColor: "bg-green-100 text-green-700",
    exp: "6+ Years Experience",
    company: "Wipro",
    desc: "Specialized in ML Models, Deep Learning & AI Solutions.",
    rating: "4.7",
    reviews: "210",
    img: "https://i.pravatar.cc/150?img=25",
  },
];

const stats = [
  { value: "50+", label: "Expert Trainers" },
  { value: "10+", label: "Years Avg. Experience" },
  { value: "100+", label: "Courses Delivered" },
  { value: "15K+", label: "Students Trained" },
  { value: "95%", label: "Student Satisfaction" },
];

const navLinks = [
  "Home",
  "About Us",
  "Courses",
  "Trainers",
  "Jobs",
  "Events",
  "Success Stories",
  "Contact Us",
];

// ---------- Icons (inline, no external deps) ----------

function IconSearch(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

function IconMoon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
    </svg>
  );
}

function IconLinkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM.5 8.98h4.96V23H.5V8.98zM8.98 8.98h4.75v1.92h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.96 3.31 5.96 7.62V23h-4.96v-6.32c0-1.51-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33V23H8.98V8.98z" />
    </svg>
  );
}

function IconStar(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
    </svg>
  );
}

function IconUsers(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7" r="4" />
      <path
        d="M23 21v-2a4 4 0 00-3-3.87"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.13a4 4 0 010 7.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRefresh(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        d="M23 4v6h-6M1 20v-6h6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrowRight(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ---------- Page ----------

export default function TrainersPage() {
  const [activeFilter, setActiveFilter] = useState("All Trainers");
  const [search, setSearch] = useState("");

  const filtered = trainers.filter((t) => {
    const matchesFilter =
      activeFilter === "All Trainers" || t.tag === activeFilter;
    const matchesSearch =
      search.trim() === "" ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.role.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-teal-600 px-6 pb-16 pt-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Learn from Industry
              <br />
              <span className="text-teal-300">Experts &amp; Achievers</span>
            </h1>
            <p className="mt-5 max-w-md text-sm text-blue-100 sm:text-base">
              Our trainers are industry professionals with real-world
              experience. They bring practical knowledge to help you build
              career-ready skills.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: "👤", label: "Industry Experts" },
                { icon: "💻", label: "Practical Learning" },
                { icon: "</>", label: "Real World Projects" },
                { icon: "🤝", label: "Mentorship & Guidance" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-start gap-2 rounded-xl bg-white/10 p-3 text-white backdrop-blur-sm"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs font-medium leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Team of trainers"
                className="h-72 w-full object-cover sm:h-96"
              />
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-lg sm:left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <IconUsers className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-bold text-slate-800">50+</p>
                <p className="text-xs text-slate-500">Expert Trainers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Meet Our Trainers ---------- */}
      <section className="px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 inline-flex items-center gap-1 rounded-full bg-green-50 px-4 py-1 text-xs font-semibold text-green-600">
              ◎ OUR TRAINERS
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Meet Our <span className="text-blue-700">Expert Trainers</span>
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Learn from professionals who are passionate about teaching and
              helping you succeed.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-10 flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeFilter === f
                      ? "bg-blue-700 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="relative w-full max-w-xs">
              <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search trainers..."
                className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="relative mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <span className="absolute -right-1 bottom-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white ring-2 ring-white">
                    <IconLinkedin className="h-3.5 w-3.5" />
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">{t.name}</h3>
                <p className="text-xs text-slate-500">{t.role}</p>

                <span
                  className={`mt-3 rounded-full px-3 py-1 text-[11px] font-semibold ${t.tagColor}`}
                >
                  {t.tag}
                </span>
                <p className="mt-2 text-[11px] text-slate-400">{t.exp}</p>

                <p className="mt-2 text-sm font-bold text-slate-700">
                  {t.company}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {t.desc}
                </p>

                <div className="mt-3 flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-3.5 w-3.5" />
                  ))}
                  <span className="ml-1 text-xs font-medium text-slate-600">
                    {t.rating} ({t.reviews} Reviews)
                  </span>
                </div>

                <button className="mt-5 w-full rounded-full border border-blue-700 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                  View Profile
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-slate-400">
              No trainers match your search.
            </p>
          )}

        </div>
      </section>

      {/* ---------- Stats Bar ---------- */}
      <section className="px-6 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-2xl bg-gradient-to-r from-blue-800 to-blue-700 px-6 py-8">
          <div className="grid grid-cols-2 gap-6 text-white sm:grid-cols-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center"
              >
                <p className="text-2xl font-extrabold sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-blue-100">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Become a Trainer CTA ---------- */}
      <section className="px-6 py-16 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 rounded-2xl bg-blue-50 p-8 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=400&auto=format&fit=crop"
              alt="Become a trainer illustration"
              className="hidden h-32 w-32 rounded-xl object-cover sm:block"
            />
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Become a Trainer with{" "}
                <span className="text-blue-700">SkillUp</span>
              </h3>
              <p className="mt-1 max-w-md text-sm text-slate-500">
                Share your knowledge, inspire learners and build your personal
                brand.
              </p>
              <div className="mt-4 flex flex-wrap gap-6 text-xs font-medium text-slate-600">
                <span>📚 Teach on Your Expertise</span>
                <span>👥 Reach Thousands of Students</span>
                <span>📈 Grow Your Career</span>
                <span>💰 Attractive Earnings</span>
              </div>
            </div>
          </div>
          <button className="flex shrink-0 items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800">
            Apply as Trainer
            <IconArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
