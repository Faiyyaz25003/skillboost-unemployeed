"use client";
import { useState } from "react";
import {
  Award,
  TrendingUp,
  Bot,
  Briefcase,
  Video,
  PlayCircle,
  ArrowRight,
  Star,
  Users,
  Building2,
  Target,
  BadgeCheck,
  Code2,
  Globe,
  BarChart3,
  Megaphone,
  Palette,
  ShieldCheck,
  Sparkles,
  Headphones,
  Clock,
  Layers,
  CheckCircle2,
  MapPin,
  Phone,
  Quote,
  Plus,
  Minus,
} from "lucide-react";

/* ---------------- Design tokens (inline, since arbitrary Tailwind values aren't compiled here) ---------------- */

const C = {
  brand: "#1E40AF",
  brandHover: "#1B3696",
  teal: "#0F766E",
  amber: "#F59E0B",
  amberHover: "#D97706",
  green: "#16A34A",
  red: "#DC2626",
  pink: "#DB2777",
  ink: "#111827",
  page: "#F8FAFC",
  line: "#E5E7EB",
  blueLight: "#DBEAFE",
  tealLight: "#CCFBF1",
  greenStrip: "#ECFDF5",
  tealAccent: "#5EEAD4",
};

/* ---------------- Data ---------------- */

const HIRING_PARTNERS = ["Google", "Microsoft", "TCS", "Infosys", "Wipro", "Accenture", "IBM", "Capgemini"];

const COURSES = [
  { icon: Code2, color: "#1E40AF", title: "Python Development", hours: "40 Hours", level: "Beginner", rating: "4.8 (300+)" },
  { icon: Globe, color: "#0F766E", title: "Web Development", hours: "45 Hours", level: "Beginner", rating: "4.7 (900+)" },
  { icon: BarChart3, color: "#F59E0B", title: "Data Science & Analytics", hours: "60 Hours", level: "Intermediate", rating: "4.8 (700+)" },
  { icon: Megaphone, color: "#1E40AF", title: "Digital Marketing", hours: "35 Hours", level: "Beginner", rating: "4.6 (900+)" },
  { icon: Palette, color: "#0F766E", title: "UI/UX Design", hours: "45 Hours", level: "Beginner", rating: "4.7 (800+)" },
  { icon: ShieldCheck, color: "#16A34A", title: "Cyber Security", hours: "45 Hours", level: "Intermediate", rating: "4.8 (500+)" },
];

const STATS = [
  { icon: Layers, label: "Job Ready Courses", value: "50+" },
  { icon: Users, label: "Students Trained", value: "5000+" },
  { icon: Building2, label: "Hiring Partners", value: "100+" },
  { icon: Target, label: "Placement Assistance", value: "95%" },
];

const TRAINERS = [
  { name: "Arjun Mehta", role: "Senior Software Engineer", company: "Google" },
  { name: "Neha Sharma", role: "Data Scientist", company: "Microsoft" },
  { name: "Rahul Verma", role: "Product Manager", company: "Amazon" },
  { name: "Priya Nair", role: "UI/UX Designer", company: "Adobe" },
  { name: "Sandeep Patil", role: "Cyber Security Lead", company: "IBM" },
];

const WHY_CHOOSE = [
  { icon: Award, bg: "#DCFCE7", color: "#16A34A", title: "Industry Relevant Curriculum" },
  { icon: Bot, bg: "#FEE2E2", color: "#DC2626", title: "AI Powered Career Assistant" },
  { icon: Code2, bg: "#CCFBF1", color: "#0F766E", title: "Hands-on Projects" },
  { icon: Briefcase, bg: "#FCE7F3", color: "#DB2777", title: "Placement Assistance" },
  { icon: Video, bg: "#DBEAFE", color: "#1E40AF", title: "Live Classes & Mentorship" },
  { icon: Clock, bg: "#FEF3C7", color: "#F59E0B", title: "Flexible Learning" },
];

const UNIVERSITIES = ["Harvard University", "Stanford University", "MIT", "UC Berkeley"];

const BRANCHES = [
  { city: "Mumbai", address: "123, Andheri West, Mumbai - 400058, Maharashtra", phone: "+91 98765 43210" },
  { city: "Pune", address: "456, Kothrud, Pune - 411038", phone: "+91 98765 43211" },
  { city: "Bangalore", address: "789, Koramangala, Bangalore - 560034, Karnataka", phone: "+91 98765 43212" },
  { city: "Delhi", address: "321, Connaught Place, New Delhi - 110001", phone: "+91 98765 43213" },
  { city: "Hyderabad", address: "654, Hitech City, Hyderabad - 500081, Telangana", phone: "+91 98765 43214" },
];

const PLACED_STUDENTS = [
  { name: "Rohit Kumar", role: "Frontend Developer", company: "Accenture", package: "6.5 LPA" },
  { name: "Sneha Iyer", role: "Data Analyst", company: "TCS", package: "7.2 LPA" },
  { name: "Aman Verma", role: "Software Engineer", company: "Infosys", package: "5.6 LPA" },
  { name: "Pooja Sharma", role: "UI/UX Designer", company: "Wipro", package: "6.0 LPA" },
  { name: "Vikram Patil", role: "DevOps Engineer", company: "Capgemini", package: "7.8 LPA" },
];

const TESTIMONIALS = [
  { name: "Ankit Singh", role: "Software Engineer at Infosys", text: "SkillUp transformed my career. The courses are well-structured and the placement support is amazing." },
  { name: "Neha Gupta", role: "Data Analyst at TCS", text: "The AI Career Assistant helped me build a perfect resume and crack my interviews. Highly recommended." },
  { name: "Priyanshu Das", role: "Frontend Developer at Wipro", text: "Best platform to learn digital skills. The mentors are very supportive and knowledgeable." },
];

const FAQS = [
  { q: "What is SkillUp Digital Skills Bootcamp?", a: "SkillUp is a career-focused training program that helps unemployed youth learn in-demand digital skills and get placed with our hiring partners." },
  { q: "Are the certificates recognized?", a: "Yes, our certificates are industry-recognized and valued by top universities and companies." },
  { q: "Do you provide placement assistance?", a: "Yes, every course includes dedicated placement assistance and interview preparation." },
  { q: "How can I access the courses?", a: "You can access courses anytime through your student dashboard after enrolling." },
  { q: "Is there any refund policy?", a: "Yes, we offer a refund within the first 7 days of enrollment if you're not satisfied." },
];

/* ---------------- Small helpers ---------------- */

function Avatar({ name, size = 64 }) {
  const url = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1E40AF&color=fff&bold=true&size=128`;
  return <img src={url} alt={name} width={size} height={size} className="rounded-full object-cover" style={{ width: size, height: size }} />;
}

function Eyebrow({ children }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
      style={{ backgroundColor: C.blueLight, color: C.brand }}
    >
      <Sparkles size={12} />
      {children}
    </span>
  );
}

function SectionDivider() {
  return <span className="inline-block w-10 h-[3px] rounded-full mt-2 mb-8" style={{ backgroundColor: C.brand }} />;
}

/* ---------------- Page ---------------- */

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main style={{ backgroundColor: C.page, color: C.ink }}>
      {/* ---------------- Hero ---------------- */}
      <section className="max-w-[1720px] mx-auto px-6 lg:px-10 pt-14 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Eyebrow>Digital Skills Bootcamp for Unemployed Youth</Eyebrow>

          <h1 className="mt-5 font-bold leading-[1.1] text-3xl sm:text-4xl lg:text-[38px]">
            <span style={{ color: C.ink }}>Learn Digital Skills.</span>
            <br />
            <span style={{ color: C.brand }}>Get Certified.</span>
            <br />
            <span style={{ color: C.amber }}>Get Hired.</span>
          </h1>

          <p className="text-gray-500 mt-5 max-w-md" style={{ fontSize: 15 }}>
            Join thousands of students and start your journey towards a successful digital career.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <BadgeCheck size={16} style={{ color: C.teal }} />
              Industry Relevant Courses
            </span>
            <span className="flex items-center gap-1.5">
              <Bot size={16} style={{ color: C.brand }} />
              AI Career Assistant
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={16} style={{ color: C.amber }} />
              Placement Assistance
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="/courses"
              className="flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
              style={{ backgroundColor: C.brand }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.brandHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.brand)}
            >
              Explore Courses <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-colors border"
              style={{ borderColor: C.brand, color: C.brand }}
            >
              <PlayCircle size={18} />
              Watch Video
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <div className="flex -space-x-3">
              {["Aditi", "Kabir", "Meera", "Sahil"].map((n) => (
                <Avatar key={n} name={n} size={36} />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-0.5" style={{ color: C.amber }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill={C.amber} strokeWidth={0} />
                ))}
              </div>
              <p className="text-gray-500 text-xs">Rated 4.8/5 by 5000+ Students</p>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative flex justify-center">
          <div
            className="relative w-full max-w-md aspect-square overflow-hidden flex items-end justify-center"
            style={{ borderRadius: 32, background: `linear-gradient(to bottom right, ${C.blueLight}, ${C.page})` }}
          >
            <img
              src="HomeHero.jpeg"
              alt="Student learning digital skills"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badges */}
          <div className="hidden md:flex absolute top-6 left-0 items-center gap-2 bg-white shadow-lg rounded-xl px-4 py-2.5">
            <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: C.tealLight }}>
              <Award size={16} style={{ color: C.teal }} />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold">Certificate</p>
              <p className="text-[10px] text-gray-400">Course Completion</p>
            </div>
          </div>

          <div className="hidden md:flex absolute top-32 left-4 items-center justify-center bg-white shadow-lg rounded-xl p-2.5">
            <TrendingUp size={20} style={{ color: C.green }} />
          </div>

          <div className="hidden md:flex absolute top-10 right-0 items-center gap-2 bg-white shadow-lg rounded-xl px-4 py-2.5">
            <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: C.blueLight }}>
              <Bot size={16} style={{ color: C.brand }} />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold">AI Career Assistant</p>
              <p className="text-[10px] text-gray-400">24/7 Support</p>
            </div>
          </div>

          <div className="hidden md:flex absolute top-40 right-0 items-center gap-2 bg-white shadow-lg rounded-xl px-4 py-2.5">
            <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FEF3C7" }}>
              <Briefcase size={16} style={{ color: C.amber }} />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold">Job Placement</p>
              <p className="text-[10px] text-gray-400">Top Companies</p>
            </div>
          </div>

          <div className="hidden md:flex absolute bottom-6 right-2 items-center gap-2 bg-white shadow-lg rounded-xl px-4 py-2.5">
            <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FEE2E2" }}>
              <Video size={16} style={{ color: C.red }} />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold">Live Classes</p>
              <p className="text-[10px] text-gray-400">Learn Anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Hiring Partners ---------------- */}
      <section className="max-w-[1720px] mx-auto px-6 lg:px-10 pb-16 text-center">
        <h2 className="font-bold text-2xl">Our Hiring Partners</h2>
        <SectionDivider />
        <div className="flex flex-wrap justify-center gap-4">
          {HIRING_PARTNERS.map((name) => (
            <span key={name} className="rounded-xl px-8 py-4 font-semibold text-gray-600 text-sm bg-white border" style={{ borderColor: C.line }}>
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- Job Ready Courses ---------------- */}
      <section className="max-w-[1720px] mx-auto px-6 lg:px-10 pb-10">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <Eyebrow>Upgrade Your Skills</Eyebrow>
            <h2 className="font-bold text-2xl md:text-3xl mt-3">Job Ready Courses</h2>
            <p className="text-gray-500 text-sm mt-1">Industry-focused courses designed to make you job-ready</p>
          </div>
          <a href="/courses" className="font-semibold text-sm flex items-center gap-1" style={{ color: C.brand }}>
            View All Courses <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {COURSES.map(({ icon: Icon, color, title, hours, level, rating }) => (
            <div key={title} className="bg-white rounded-[18px] p-5 flex flex-col border" style={{ borderColor: C.line }}>
              <span className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}1A` }}>
                <Icon size={22} style={{ color }} />
              </span>
              <h3 className="font-semibold text-sm mb-2">{title}</h3>
              <p className="text-xs text-gray-500 mb-1">
                {hours} • {level}
              </p>
              <p className="flex items-center gap-1 text-xs mb-4" style={{ color: C.amber }}>
                <Star size={12} fill={C.amber} strokeWidth={0} />
                {rating}
              </p>
              <a
                href="/courses"
                className="mt-auto text-center text-xs font-semibold rounded-[10px] py-2 transition-colors border"
                style={{ borderColor: C.brand, color: C.brand }}
              >
                Explore Course
              </a>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-10 rounded-2xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6" style={{ backgroundColor: C.greenStrip }}>
          {STATS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0">
                <Icon size={20} style={{ color: C.green }} />
              </span>
              <div>
                <p className="font-bold text-lg leading-none">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Learn from Industry Experts ---------------- */}
      <section className="mt-16 py-14" style={{ backgroundColor: C.brand }}>
        <div className="max-w-[1720px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow>Learn From The Best</Eyebrow>
              <h2 className="font-bold text-2xl md:text-3xl mt-3 text-white">
                Learn Directly from <span style={{ color: C.tealAccent }}>Industry Experts</span>
              </h2>
              <p className="text-blue-100 text-sm mt-1 max-w-md">
                Our mentors are working professionals from top companies who bring real-world experience to every lesson.
              </p>
            </div>
            <a href="/trainers" className="text-white font-semibold text-sm flex items-center gap-1">
              View All Trainers <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {TRAINERS.map((t) => (
              <div key={t.name} className="bg-white rounded-[18px] p-5 text-center">
                <div className="flex justify-center mb-3">
                  <Avatar name={t.name} size={72} />
                </div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
                <p className="text-xs font-bold mt-2" style={{ color: C.brand }}>
                  {t.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why Choose Us ---------------- */}
      <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-16 text-center">
        <h2 className="font-bold text-2xl md:text-3xl">Why Choose Us?</h2>
        <SectionDivider />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {WHY_CHOOSE.map(({ icon: Icon, bg, color, title }) => (
            <div key={title} className="rounded-[18px] p-6 bg-white border" style={{ borderColor: C.line }}>
              <span className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: bg }}>
                <Icon size={22} style={{ color }} />
              </span>
              <p className="text-sm font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Certifications ---------------- */}
      <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-bold text-2xl md:text-3xl mb-6">Certifications Valued by Top Universities</h2>
          <ul className="space-y-4">
            {[
              "Industry Recognized Certificates",
              "Boost Your Resume & LinkedIn Profile",
              "Accepted by Top Universities Worldwide",
              "Shareable & Verifiable Certificates",
              "Improve Job Opportunities",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="shrink-0" style={{ color: C.green }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm border" style={{ borderColor: C.line }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded flex items-center justify-center" style={{ backgroundColor: C.brand }}>
                <Award size={14} className="text-white" />
              </span>
              <span className="font-bold text-sm">SkillUp</span>
            </div>
            <p className="text-center font-bold text-lg mb-1">Certificate of Completion</p>
            <p className="text-center text-xs text-gray-500 mb-3">This is to certify that</p>
            <p className="text-center font-semibold mb-3" style={{ color: C.brand }}>
              John Doe
            </p>
            <p className="text-center text-xs text-gray-500 mb-4">
              has successfully completed the course
              <br />
              <span className="font-semibold" style={{ color: C.ink }}>
                Full Stack Web Development
              </span>
            </p>
            <p className="text-center text-[10px] text-gray-400">Date: 25 May 2024</p>
          </div>

          <div className="flex md:flex-col gap-3 flex-wrap justify-center">
            {UNIVERSITIES.map((u) => (
              <span key={u} className="rounded-xl px-5 py-3 text-xs font-semibold text-gray-600 bg-white text-center border" style={{ borderColor: C.line }}>
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA banner ---------------- */}
      <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-10">
        <div className="rounded-2xl px-8 py-8 flex flex-col lg:flex-row flex-wrap items-center justify-between gap-6 text-center lg:text-left" style={{ backgroundColor: C.brand }}>
          <div>
            <h3 className="text-white font-bold text-2xl">
              Ready to Start Your <span style={{ color: C.amber }}>Digital Career?</span>
            </h3>
            <p className="text-blue-100 text-sm mt-1">Join SkillUp today and take the first step towards a successful career.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white text-xs">
            <span className="flex items-center gap-2">
              <Target size={16} /> Explore Top Courses
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck size={16} /> Get Certified
            </span>
            <span className="flex items-center gap-2">
              <Users size={16} /> Get Placed
            </span>
          </div>
          <a
            href="/enroll"
            className="flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shrink-0"
            style={{ backgroundColor: C.amber }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.amberHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.amber)}
          >
            Enroll Now <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ---------------- Our Branches ---------------- */}
      <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-14 text-center">
        <h2 className="font-bold text-2xl md:text-3xl">Our Branches</h2>
        <SectionDivider />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {BRANCHES.map((b) => (
            <div key={b.city} className="rounded-[18px] overflow-hidden bg-white text-left border" style={{ borderColor: C.line }}>
              <div className="h-28 flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, ${C.brand}, ${C.teal})` }}>
                <Building2 size={32} className="text-white/80" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-sm mb-1">{b.city}</p>
                <p className="text-xs text-gray-500 flex items-start gap-1.5 mb-1.5">
                  <MapPin size={12} className="shrink-0 mt-0.5" />
                  {b.address}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1.5">
                  <Phone size={12} />
                  {b.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Placed Students ---------------- */}
      <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-10 text-center">
        <h2 className="font-bold text-2xl md:text-3xl">Our Placed Students</h2>
        <SectionDivider />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PLACED_STUDENTS.map((s) => (
            <div key={s.name} className="rounded-[18px] bg-white p-5 text-left border" style={{ borderColor: C.line }}>
              <div className="flex justify-center mb-3">
                <Avatar name={s.name} size={72} />
              </div>
              <p className="font-semibold text-sm text-center">{s.name}</p>
              <p className="text-xs text-gray-500 text-center mt-0.5">
                {s.role} @ {s.company}
              </p>
              <p className="text-xs font-bold text-center mt-2" style={{ color: C.green }}>
                Package: {s.package}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-14 text-center">
        <h2 className="font-bold text-2xl md:text-3xl">Testimonials</h2>
        <SectionDivider />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-[18px] bg-white p-6 text-left border" style={{ borderColor: C.line }}>
              <Quote size={22} className="mb-3" style={{ color: C.brand }} />
              <p className="text-sm text-gray-600 mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <Avatar name={t.name} size={40} />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mt-3" style={{ color: C.amber }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill={C.amber} strokeWidth={0} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-[320px_1fr] gap-10 items-start">
        <div className="flex justify-center lg:justify-start">
          <span className="w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center" style={{ backgroundColor: C.tealLight }}>
            <Headphones size={64} style={{ color: C.teal }} />
          </span>
        </div>

        <div>
          <h2 className="font-bold text-2xl md:text-3xl mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={f.q} className="rounded-xl bg-white overflow-hidden border" style={{ borderColor: C.line }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium"
                >
                  {f.q}
                  {openFaq === i ? <Minus size={16} className="shrink-0" style={{ color: C.brand }} /> : <Plus size={16} className="shrink-0" style={{ color: C.brand }} />}
                </button>
                {openFaq === i && <p className="px-5 pb-4 text-sm text-gray-500">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


//without responsive
// "use client";
// import { useState } from "react";
// import {
//   Award,
//   TrendingUp,
//   Bot,
//   Briefcase,
//   Video,
//   PlayCircle,
//   ArrowRight,
//   Star,
//   Users,
//   Building2,
//   Target,
//   BadgeCheck,
//   Code2,
//   Globe,
//   BarChart3,
//   Megaphone,
//   Palette,
//   ShieldCheck,
//   Sparkles,
//   Headphones,
//   Clock,
//   Layers,
//   CheckCircle2,
//   MapPin,
//   Phone,
//   Quote,
//   Plus,
//   Minus,
// } from "lucide-react";

// /* ---------------- Design tokens (inline, since arbitrary Tailwind values aren't compiled here) ---------------- */

// const C = {
//   brand: "#1E40AF",
//   brandHover: "#1B3696",
//   teal: "#0F766E",
//   amber: "#F59E0B",
//   amberHover: "#D97706",
//   green: "#16A34A",
//   red: "#DC2626",
//   pink: "#DB2777",
//   ink: "#111827",
//   page: "#F8FAFC",
//   line: "#E5E7EB",
//   blueLight: "#DBEAFE",
//   tealLight: "#CCFBF1",
//   greenStrip: "#ECFDF5",
//   tealAccent: "#5EEAD4",
// };

// /* ---------------- Data ---------------- */

// const HIRING_PARTNERS = ["Google", "Microsoft", "TCS", "Infosys", "Wipro", "Accenture", "IBM", "Capgemini"];

// const COURSES = [
//   { icon: Code2, color: "#1E40AF", title: "Python Development", hours: "40 Hours", level: "Beginner", rating: "4.8 (300+)" },
//   { icon: Globe, color: "#0F766E", title: "Web Development", hours: "45 Hours", level: "Beginner", rating: "4.7 (900+)" },
//   { icon: BarChart3, color: "#F59E0B", title: "Data Science & Analytics", hours: "60 Hours", level: "Intermediate", rating: "4.8 (700+)" },
//   { icon: Megaphone, color: "#1E40AF", title: "Digital Marketing", hours: "35 Hours", level: "Beginner", rating: "4.6 (900+)" },
//   { icon: Palette, color: "#0F766E", title: "UI/UX Design", hours: "45 Hours", level: "Beginner", rating: "4.7 (800+)" },
//   { icon: ShieldCheck, color: "#16A34A", title: "Cyber Security", hours: "45 Hours", level: "Intermediate", rating: "4.8 (500+)" },
// ];

// const STATS = [
//   { icon: Layers, label: "Job Ready Courses", value: "50+" },
//   { icon: Users, label: "Students Trained", value: "5000+" },
//   { icon: Building2, label: "Hiring Partners", value: "100+" },
//   { icon: Target, label: "Placement Assistance", value: "95%" },
// ];

// const TRAINERS = [
//   { name: "Arjun Mehta", role: "Senior Software Engineer", company: "Google" },
//   { name: "Neha Sharma", role: "Data Scientist", company: "Microsoft" },
//   { name: "Rahul Verma", role: "Product Manager", company: "Amazon" },
//   { name: "Priya Nair", role: "UI/UX Designer", company: "Adobe" },
//   { name: "Sandeep Patil", role: "Cyber Security Lead", company: "IBM" },
// ];

// const WHY_CHOOSE = [
//   { icon: Award, bg: "#DCFCE7", color: "#16A34A", title: "Industry Relevant Curriculum" },
//   { icon: Bot, bg: "#FEE2E2", color: "#DC2626", title: "AI Powered Career Assistant" },
//   { icon: Code2, bg: "#CCFBF1", color: "#0F766E", title: "Hands-on Projects" },
//   { icon: Briefcase, bg: "#FCE7F3", color: "#DB2777", title: "Placement Assistance" },
//   { icon: Video, bg: "#DBEAFE", color: "#1E40AF", title: "Live Classes & Mentorship" },
//   { icon: Clock, bg: "#FEF3C7", color: "#F59E0B", title: "Flexible Learning" },
// ];

// const UNIVERSITIES = ["Harvard University", "Stanford University", "MIT", "UC Berkeley"];

// const BRANCHES = [
//   { city: "Mumbai", address: "123, Andheri West, Mumbai - 400058, Maharashtra", phone: "+91 98765 43210" },
//   { city: "Pune", address: "456, Kothrud, Pune - 411038", phone: "+91 98765 43211" },
//   { city: "Bangalore", address: "789, Koramangala, Bangalore - 560034, Karnataka", phone: "+91 98765 43212" },
//   { city: "Delhi", address: "321, Connaught Place, New Delhi - 110001", phone: "+91 98765 43213" },
//   { city: "Hyderabad", address: "654, Hitech City, Hyderabad - 500081, Telangana", phone: "+91 98765 43214" },
// ];

// const PLACED_STUDENTS = [
//   { name: "Rohit Kumar", role: "Frontend Developer", company: "Accenture", package: "6.5 LPA" },
//   { name: "Sneha Iyer", role: "Data Analyst", company: "TCS", package: "7.2 LPA" },
//   { name: "Aman Verma", role: "Software Engineer", company: "Infosys", package: "5.6 LPA" },
//   { name: "Pooja Sharma", role: "UI/UX Designer", company: "Wipro", package: "6.0 LPA" },
//   { name: "Vikram Patil", role: "DevOps Engineer", company: "Capgemini", package: "7.8 LPA" },
// ];

// const TESTIMONIALS = [
//   { name: "Ankit Singh", role: "Software Engineer at Infosys", text: "SkillUp transformed my career. The courses are well-structured and the placement support is amazing." },
//   { name: "Neha Gupta", role: "Data Analyst at TCS", text: "The AI Career Assistant helped me build a perfect resume and crack my interviews. Highly recommended." },
//   { name: "Priyanshu Das", role: "Frontend Developer at Wipro", text: "Best platform to learn digital skills. The mentors are very supportive and knowledgeable." },
// ];

// const FAQS = [
//   { q: "What is SkillUp Digital Skills Bootcamp?", a: "SkillUp is a career-focused training program that helps unemployed youth learn in-demand digital skills and get placed with our hiring partners." },
//   { q: "Are the certificates recognized?", a: "Yes, our certificates are industry-recognized and valued by top universities and companies." },
//   { q: "Do you provide placement assistance?", a: "Yes, every course includes dedicated placement assistance and interview preparation." },
//   { q: "How can I access the courses?", a: "You can access courses anytime through your student dashboard after enrolling." },
//   { q: "Is there any refund policy?", a: "Yes, we offer a refund within the first 7 days of enrollment if you're not satisfied." },
// ];

// /* ---------------- Small helpers ---------------- */

// function Avatar({ name, size = 64 }) {
//   const url = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1E40AF&color=fff&bold=true&size=128`;
//   return <img src={url} alt={name} width={size} height={size} className="rounded-full object-cover" style={{ width: size, height: size }} />;
// }

// function Eyebrow({ children }) {
//   return (
//     <span
//       className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
//       style={{ backgroundColor: C.blueLight, color: C.brand }}
//     >
//       <Sparkles size={12} />
//       {children}
//     </span>
//   );
// }

// function SectionDivider() {
//   return <span className="inline-block w-10 h-[3px] rounded-full mt-2 mb-8" style={{ backgroundColor: C.brand }} />;
// }

// /* ---------------- Page ---------------- */

// export default function Home() {
//   const [openFaq, setOpenFaq] = useState(0);

//   return (
//     <main style={{ backgroundColor: C.page, color: C.ink }}>
//       {/* ---------------- Hero ---------------- */}
//       <section className="max-w-[1720px] mx-auto px-6 lg:px-10 pt-14 pb-16 grid lg:grid-cols-2 gap-10 items-center">
//         <div>
//           <Eyebrow>Digital Skills Bootcamp for Unemployed Youth</Eyebrow>

//           <h1 className="mt-5 font-bold leading-[1.1]" style={{ fontSize: 38 }}>
//             <span style={{ color: C.ink }}>Learn Digital Skills.</span>
//             <br />
//             <span style={{ color: C.brand }}>Get Certified.</span>
//             <br />
//             <span style={{ color: C.amber }}>Get Hired.</span>
//           </h1>

//           <p className="text-gray-500 mt-5 max-w-md" style={{ fontSize: 15 }}>
//             Join thousands of students and start your journey towards a successful digital career.
//           </p>

//           <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-600">
//             <span className="flex items-center gap-1.5">
//               <BadgeCheck size={16} style={{ color: C.teal }} />
//               Industry Relevant Courses
//             </span>
//             <span className="flex items-center gap-1.5">
//               <Bot size={16} style={{ color: C.brand }} />
//               AI Career Assistant
//             </span>
//             <span className="flex items-center gap-1.5">
//               <Briefcase size={16} style={{ color: C.amber }} />
//               Placement Assistance
//             </span>
//           </div>

//           <div className="flex items-center gap-4 mt-8">
//             <a
//               href="/courses"
//               className="flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
//               style={{ backgroundColor: C.brand }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.brandHover)}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.brand)}
//             >
//               Explore Courses <ArrowRight size={16} />
//             </a>
//             <a
//               href="#"
//               className="flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-colors border"
//               style={{ borderColor: C.brand, color: C.brand }}
//             >
//               <PlayCircle size={18} />
//               Watch Video
//             </a>
//           </div>

//           <div className="flex items-center gap-3 mt-8">
//             <div className="flex -space-x-3">
//               {["Aditi", "Kabir", "Meera", "Sahil"].map((n) => (
//                 <Avatar key={n} name={n} size={36} />
//               ))}
//             </div>
//             <div className="text-sm">
//               <div className="flex items-center gap-0.5" style={{ color: C.amber }}>
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} size={13} fill={C.amber} strokeWidth={0} />
//                 ))}
//               </div>
//               <p className="text-gray-500 text-xs">Rated 4.8/5 by 5000+ Students</p>
//             </div>
//           </div>
//         </div>

//         {/* Hero visual */}
//         <div className="relative flex justify-center">
//           <div
//             className="relative w-full max-w-md aspect-square overflow-hidden flex items-end justify-center"
//             style={{ borderRadius: 32, background: `linear-gradient(to bottom right, ${C.blueLight}, ${C.page})` }}
//           >
//             <img
//               src="HomeHero.jpeg"
//               alt="Student learning digital skills"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Floating badges */}
//           <div className="hidden md:flex absolute top-6 left-0 items-center gap-2 bg-white shadow-lg rounded-xl px-4 py-2.5">
//             <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: C.tealLight }}>
//               <Award size={16} style={{ color: C.teal }} />
//             </span>
//             <div className="leading-tight">
//               <p className="text-xs font-semibold">Certificate</p>
//               <p className="text-[10px] text-gray-400">Course Completion</p>
//             </div>
//           </div>

//           <div className="hidden md:flex absolute top-32 left-4 items-center justify-center bg-white shadow-lg rounded-xl p-2.5">
//             <TrendingUp size={20} style={{ color: C.green }} />
//           </div>

//           <div className="hidden md:flex absolute top-10 right-0 items-center gap-2 bg-white shadow-lg rounded-xl px-4 py-2.5">
//             <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: C.blueLight }}>
//               <Bot size={16} style={{ color: C.brand }} />
//             </span>
//             <div className="leading-tight">
//               <p className="text-xs font-semibold">AI Career Assistant</p>
//               <p className="text-[10px] text-gray-400">24/7 Support</p>
//             </div>
//           </div>

//           <div className="hidden md:flex absolute top-40 right-0 items-center gap-2 bg-white shadow-lg rounded-xl px-4 py-2.5">
//             <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FEF3C7" }}>
//               <Briefcase size={16} style={{ color: C.amber }} />
//             </span>
//             <div className="leading-tight">
//               <p className="text-xs font-semibold">Job Placement</p>
//               <p className="text-[10px] text-gray-400">Top Companies</p>
//             </div>
//           </div>

//           <div className="hidden md:flex absolute bottom-6 right-2 items-center gap-2 bg-white shadow-lg rounded-xl px-4 py-2.5">
//             <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FEE2E2" }}>
//               <Video size={16} style={{ color: C.red }} />
//             </span>
//             <div className="leading-tight">
//               <p className="text-xs font-semibold">Live Classes</p>
//               <p className="text-[10px] text-gray-400">Learn Anytime</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Hiring Partners ---------------- */}
//       <section className="max-w-[1720px] mx-auto px-6 lg:px-10 pb-16 text-center">
//         <h2 className="font-bold text-2xl">Our Hiring Partners</h2>
//         <SectionDivider />
//         <div className="flex flex-wrap justify-center gap-4">
//           {HIRING_PARTNERS.map((name) => (
//             <span key={name} className="rounded-xl px-8 py-4 font-semibold text-gray-600 text-sm bg-white border" style={{ borderColor: C.line }}>
//               {name}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- Job Ready Courses ---------------- */}
//       <section className="max-w-[1720px] mx-auto px-6 lg:px-10 pb-10">
//         <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
//           <div>
//             <Eyebrow>Upgrade Your Skills</Eyebrow>
//             <h2 className="font-bold text-2xl md:text-3xl mt-3">Job Ready Courses</h2>
//             <p className="text-gray-500 text-sm mt-1">Industry-focused courses designed to make you job-ready</p>
//           </div>
//           <a href="/courses" className="font-semibold text-sm flex items-center gap-1" style={{ color: C.brand }}>
//             View All Courses <ArrowRight size={14} />
//           </a>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
//           {COURSES.map(({ icon: Icon, color, title, hours, level, rating }) => (
//             <div key={title} className="bg-white rounded-[18px] p-5 flex flex-col border" style={{ borderColor: C.line }}>
//               <span className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}1A` }}>
//                 <Icon size={22} style={{ color }} />
//               </span>
//               <h3 className="font-semibold text-sm mb-2">{title}</h3>
//               <p className="text-xs text-gray-500 mb-1">
//                 {hours} • {level}
//               </p>
//               <p className="flex items-center gap-1 text-xs mb-4" style={{ color: C.amber }}>
//                 <Star size={12} fill={C.amber} strokeWidth={0} />
//                 {rating}
//               </p>
//               <a
//                 href="/courses"
//                 className="mt-auto text-center text-xs font-semibold rounded-[10px] py-2 transition-colors border"
//                 style={{ borderColor: C.brand, color: C.brand }}
//               >
//                 Explore Course
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* Stats strip */}
//         <div className="mt-10 rounded-2xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6" style={{ backgroundColor: C.greenStrip }}>
//           {STATS.map(({ icon: Icon, label, value }) => (
//             <div key={label} className="flex items-center gap-3">
//               <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0">
//                 <Icon size={20} style={{ color: C.green }} />
//               </span>
//               <div>
//                 <p className="font-bold text-lg leading-none">{value}</p>
//                 <p className="text-xs text-gray-500 mt-1">{label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- Learn from Industry Experts ---------------- */}
//       <section className="mt-16 py-14" style={{ backgroundColor: C.brand }}>
//         <div className="max-w-[1720px] mx-auto px-6 lg:px-10">
//           <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
//             <div>
//               <Eyebrow>Learn From The Best</Eyebrow>
//               <h2 className="font-bold text-2xl md:text-3xl mt-3 text-white">
//                 Learn Directly from <span style={{ color: C.tealAccent }}>Industry Experts</span>
//               </h2>
//               <p className="text-blue-100 text-sm mt-1 max-w-md">
//                 Our mentors are working professionals from top companies who bring real-world experience to every lesson.
//               </p>
//             </div>
//             <a href="/trainers" className="text-white font-semibold text-sm flex items-center gap-1">
//               View All Trainers <ArrowRight size={14} />
//             </a>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
//             {TRAINERS.map((t) => (
//               <div key={t.name} className="bg-white rounded-[18px] p-5 text-center">
//                 <div className="flex justify-center mb-3">
//                   <Avatar name={t.name} size={72} />
//                 </div>
//                 <p className="font-semibold text-sm">{t.name}</p>
//                 <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
//                 <p className="text-xs font-bold mt-2" style={{ color: C.brand }}>
//                   {t.company}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Why Choose Us ---------------- */}
//       <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-16 text-center">
//         <h2 className="font-bold text-2xl md:text-3xl">Why Choose Us?</h2>
//         <SectionDivider />

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
//           {WHY_CHOOSE.map(({ icon: Icon, bg, color, title }) => (
//             <div key={title} className="rounded-[18px] p-6 bg-white border" style={{ borderColor: C.line }}>
//               <span className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: bg }}>
//                 <Icon size={22} style={{ color }} />
//               </span>
//               <p className="text-sm font-semibold">{title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- Certifications ---------------- */}
//       <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-10 grid lg:grid-cols-2 gap-10 items-center">
//         <div>
//           <h2 className="font-bold text-2xl md:text-3xl mb-6">Certifications Valued by Top Universities</h2>
//           <ul className="space-y-4">
//             {[
//               "Industry Recognized Certificates",
//               "Boost Your Resume & LinkedIn Profile",
//               "Accepted by Top Universities Worldwide",
//               "Shareable & Verifiable Certificates",
//               "Improve Job Opportunities",
//             ].map((item) => (
//               <li key={item} className="flex items-center gap-3 text-sm">
//                 <CheckCircle2 size={18} className="shrink-0" style={{ color: C.green }} />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="flex flex-col md:flex-row gap-6 items-center">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-sm border" style={{ borderColor: C.line }}>
//             <div className="flex items-center gap-2 mb-3">
//               <span className="w-7 h-7 rounded flex items-center justify-center" style={{ backgroundColor: C.brand }}>
//                 <Award size={14} className="text-white" />
//               </span>
//               <span className="font-bold text-sm">SkillUp</span>
//             </div>
//             <p className="text-center font-bold text-lg mb-1">Certificate of Completion</p>
//             <p className="text-center text-xs text-gray-500 mb-3">This is to certify that</p>
//             <p className="text-center font-semibold mb-3" style={{ color: C.brand }}>
//               John Doe
//             </p>
//             <p className="text-center text-xs text-gray-500 mb-4">
//               has successfully completed the course
//               <br />
//               <span className="font-semibold" style={{ color: C.ink }}>
//                 Full Stack Web Development
//               </span>
//             </p>
//             <p className="text-center text-[10px] text-gray-400">Date: 25 May 2024</p>
//           </div>

//           <div className="flex md:flex-col gap-3 flex-wrap justify-center">
//             {UNIVERSITIES.map((u) => (
//               <span key={u} className="rounded-xl px-5 py-3 text-xs font-semibold text-gray-600 bg-white text-center border" style={{ borderColor: C.line }}>
//                 {u}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- CTA banner ---------------- */}
//       <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-10">
//         <div className="rounded-2xl px-8 py-8 flex flex-wrap items-center justify-between gap-6" style={{ backgroundColor: C.brand }}>
//           <div>
//             <h3 className="text-white font-bold text-2xl">
//               Ready to Start Your <span style={{ color: C.amber }}>Digital Career?</span>
//             </h3>
//             <p className="text-blue-100 text-sm mt-1">Join SkillUp today and take the first step towards a successful career.</p>
//           </div>
//           <div className="flex items-center gap-6 text-white text-xs">
//             <span className="flex items-center gap-2">
//               <Target size={16} /> Explore Top Courses
//             </span>
//             <span className="flex items-center gap-2">
//               <BadgeCheck size={16} /> Get Certified
//             </span>
//             <span className="flex items-center gap-2">
//               <Users size={16} /> Get Placed
//             </span>
//           </div>
//           <a
//             href="/enroll"
//             className="flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shrink-0"
//             style={{ backgroundColor: C.amber }}
//             onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.amberHover)}
//             onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.amber)}
//           >
//             Enroll Now <ArrowRight size={16} />
//           </a>
//         </div>
//       </section>

//       {/* ---------------- Our Branches ---------------- */}
//       <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-14 text-center">
//         <h2 className="font-bold text-2xl md:text-3xl">Our Branches</h2>
//         <SectionDivider />

//         <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
//           {BRANCHES.map((b) => (
//             <div key={b.city} className="rounded-[18px] overflow-hidden bg-white text-left border" style={{ borderColor: C.line }}>
//               <div className="h-28 flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, ${C.brand}, ${C.teal})` }}>
//                 <Building2 size={32} className="text-white/80" />
//               </div>
//               <div className="p-4">
//                 <p className="font-semibold text-sm mb-1">{b.city}</p>
//                 <p className="text-xs text-gray-500 flex items-start gap-1.5 mb-1.5">
//                   <MapPin size={12} className="shrink-0 mt-0.5" />
//                   {b.address}
//                 </p>
//                 <p className="text-xs text-gray-500 flex items-center gap-1.5">
//                   <Phone size={12} />
//                   {b.phone}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- Placed Students ---------------- */}
//       <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-10 text-center">
//         <h2 className="font-bold text-2xl md:text-3xl">Our Placed Students</h2>
//         <SectionDivider />

//         <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
//           {PLACED_STUDENTS.map((s) => (
//             <div key={s.name} className="rounded-[18px] bg-white p-5 text-left border" style={{ borderColor: C.line }}>
//               <div className="flex justify-center mb-3">
//                 <Avatar name={s.name} size={72} />
//               </div>
//               <p className="font-semibold text-sm text-center">{s.name}</p>
//               <p className="text-xs text-gray-500 text-center mt-0.5">
//                 {s.role} @ {s.company}
//               </p>
//               <p className="text-xs font-bold text-center mt-2" style={{ color: C.green }}>
//                 Package: {s.package}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- Testimonials ---------------- */}
//       <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-14 text-center">
//         <h2 className="font-bold text-2xl md:text-3xl">Testimonials</h2>
//         <SectionDivider />

//         <div className="grid md:grid-cols-3 gap-6">
//           {TESTIMONIALS.map((t) => (
//             <div key={t.name} className="rounded-[18px] bg-white p-6 text-left border" style={{ borderColor: C.line }}>
//               <Quote size={22} className="mb-3" style={{ color: C.brand }} />
//               <p className="text-sm text-gray-600 mb-5">{t.text}</p>
//               <div className="flex items-center gap-3">
//                 <Avatar name={t.name} size={40} />
//                 <div>
//                   <p className="font-semibold text-sm">{t.name}</p>
//                   <p className="text-xs text-gray-500">{t.role}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-0.5 mt-3" style={{ color: C.amber }}>
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} size={12} fill={C.amber} strokeWidth={0} />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- FAQ ---------------- */}
//       <section className="max-w-[1720px] mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-[320px_1fr] gap-10 items-start">
//         <div className="flex justify-center lg:justify-start">
//           <span className="w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center" style={{ backgroundColor: C.tealLight }}>
//             <Headphones size={64} style={{ color: C.teal }} />
//           </span>
//         </div>

//         <div>
//           <h2 className="font-bold text-2xl md:text-3xl mb-6">Frequently Asked Questions</h2>
//           <div className="space-y-3">
//             {FAQS.map((f, i) => (
//               <div key={f.q} className="rounded-xl bg-white overflow-hidden border" style={{ borderColor: C.line }}>
//                 <button
//                   onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
//                   className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium"
//                 >
//                   {f.q}
//                   {openFaq === i ? <Minus size={16} className="shrink-0" style={{ color: C.brand }} /> : <Plus size={16} className="shrink-0" style={{ color: C.brand }} />}
//                 </button>
//                 {openFaq === i && <p className="px-5 pb-4 text-sm text-gray-500">{f.a}</p>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


