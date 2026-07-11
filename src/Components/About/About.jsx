import Link from "next/link";
import {
  Search,
  GraduationCap,
  Award,
  Users,
  Laptop,
  Wallet,
  ShieldCheck,
  BadgeCheck,
  Code2,
  Globe,
  BarChart3,
  Megaphone,
  Palette,
  Lock,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Mail,
  Phone,
  Target,
  Eye,
  ArrowRight,
} from "lucide-react";

/* Inline social icons — lucide-react removed brand icons in newer versions */
const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.5c0-.93.26-1.56 1.6-1.56h1.7V3.1C15.98 3.05 15 3 13.85 3 11.4 3 9.7 4.49 9.7 7.2v2.4H7v3.2h2.7V21h3.8z" />
  </svg>
);
const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1c.5 1.7 2.1 2.9 4 2.9A8.3 8.3 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
  </svg>
);
const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.8-2 3.7-2 3.95 0 4.68 2.6 4.68 6V21H17v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
  </svg>
);
const Instagram = (props) => (
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
const Youtube = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.5 6.2a2.8 2.8 0 0 0-2-2C18.9 3.7 12 3.7 12 3.7s-6.9 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.8 2.8 2.8 0 0 0 2 2c1.6.5 8.5.5 8.5.5s6.9 0 8.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.8zM10 15.5v-7l6 3.5z" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#", active: true },
  { label: "Courses", href: "#" },
  { label: "Trainers", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Success Stories", href: "#" },
  { label: "Events", href: "#" },
  { label: "Contact Us", href: "#" },
];

const heroBadges = [
  { label: "Industry Relevant Curriculum", icon: BadgeCheck },
  { label: "Expert Trainers", icon: Users },
  { label: "Placement Assistance", icon: Wallet },
  { label: "Practical Learning", icon: Laptop },
];

const stats = [
  { value: "5000+", label: "Students Trained", icon: Users },
  { value: "50+", label: "Job Ready Courses", icon: GraduationCap },
  { value: "100+", label: "Hiring Partners", icon: BarChart3 },
  { value: "95%", label: "Placement Assistance", icon: Award },
];

const whyChoose = [
  {
    title: "Industry Relevant Courses",
    desc: "Curriculum designed by industry experts to make you job-ready.",
    icon: BadgeCheck,
    bg: "bg-[var(--color-primary)]",
  },
  {
    title: "Expert & Certified Trainers",
    desc: "Learn directly from industry professionals and experienced trainers.",
    icon: Users,
    bg: "bg-[var(--color-secondary)]",
  },
  {
    title: "Practical & Hands-on Learning",
    desc: "Work on real-world projects and gain practical experience.",
    icon: Laptop,
    bg: "bg-[var(--color-success)]",
  },
  {
    title: "Placement Assistance",
    desc: "Get placement support, resume building, and interview preparation.",
    icon: Wallet,
    bg: "bg-[var(--color-accent)]",
  },
  {
    title: "Affordable Fees",
    desc: "Quality education at very affordable prices.",
    icon: ShieldCheck,
    bg: "bg-[#EF4444]",
  },
  {
    title: "Certificates & Recognition",
    desc: "Earn certificates valued by top universities and companies.",
    icon: Award,
    bg: "bg-[#7C3AED]",
  },
];

const courses = [
  {
    title: "Python Development",
    hours: "45 Hours",
    level: "Beginner",
    rating: "4.8 (500+)",
    icon: Code2,
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#F59E0B]",
  },
  {
    title: "Web Development",
    hours: "45 Hours",
    level: "Beginner",
    rating: "4.8 (900+)",
    icon: Globe,
    iconBg: "bg-[#FEE2E2]",
    iconColor: "text-[#EF4444]",
  },
  {
    title: "Data Science & Analytics",
    hours: "60 Hours",
    level: "Intermediate",
    rating: "4.9 (400+)",
    icon: BarChart3,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[var(--color-success)]",
  },
  {
    title: "Digital Marketing",
    hours: "35 Hours",
    level: "Beginner",
    rating: "4.7 (900+)",
    icon: Megaphone,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[var(--color-primary)]",
  },
  {
    title: "UI/UX Design",
    hours: "45 Hours",
    level: "Beginner",
    rating: "4.8 (500+)",
    icon: Palette,
    iconBg: "bg-[#FCE7F3]",
    iconColor: "text-[#DB2777]",
  },
  {
    title: "Cyber Security",
    hours: "45 Hours",
    level: "Intermediate",
    rating: "4.8 (300+)",
    icon: Lock,
    iconBg: "bg-[#E0E7FF]",
    iconColor: "text-[#4338CA]",
  },
];

const events = [
  {
    day: "20",
    month: "MAY",
    title: "Workshop on Web Development",
    place: "Mumbai",
  },
  { day: "05", month: "JUN", title: "Career Guidance Seminar", place: "Pune" },
  {
    day: "18",
    month: "JUN",
    title: "AI & Data Science Masterclass",
    place: "Bangalore",
  },
  {
    day: "30",
    month: "JUN",
    title: "Mock Interview Session",
    place: "Hyderabad",
  },
];

const achievers = [
  {
    name: "Rohit Kumar",
    role: "Frontend Developer",
    company: "TCS",
    package: "7.2 LPA",
  },
  {
    name: "Sneha Yadav",
    role: "UI/UX Designer",
    company: "Wipro",
    package: "6.5 LPA",
  },
  {
    name: "Aman Verma",
    role: "Software Engineer",
    company: "Infosys",
    package: "8.0 LPA",
  },
  {
    name: "Pooja Sharma",
    role: "Data Analyst",
    company: "Accenture",
    package: "6.8 LPA",
  },
  {
    name: "Vikram Patil",
    role: "Python Developer",
    company: "Capgemini",
    package: "7.0 LPA",
  },
];

const infrastructure = [
  {
    title: "Modern Classrooms",
    desc: "Smart classrooms with interactive boards",
  },
  {
    title: "Computer Labs",
    desc: "High performance systems with latest software",
  },
  {
    title: "Learning Library",
    desc: "Wide range of books & digital resources",
  },
  { title: "Student Lounge", desc: "Comfortable space for collaboration" },
  {
    title: "High Speed Internet",
    desc: "24/7 high speed Wi-Fi for seamless learning",
  },
];

const certifications = [
  "Google",
  "Microsoft",
  "IBM",
  "AWS",
  "Oracle",
  "NASSCOM",
];

const footerLinks = {
  "Quick Links": [
    "Home",
    "About Us",
    "Courses",
    "Trainers",
    "Jobs",
    "Contact Us",
  ],
  "Important Links": [
    "Success Stories",
    "Events",
    "Blog",
    "Placement Assistance",
    "FAQs",
    "Privacy Policy",
  ],
  "Our Courses": [
    "Web Development",
    "Python Development",
    "Data Science",
    "Digital Marketing",
    "UI/UX Design",
    "Cyber Security",
  ],
};

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] to-[#1E3A8A] rounded-b-[40px]">
        <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block text-xs font-semibold text-white/80 mb-4">
              Home / About Us
            </p>
            <h1 className="text-white !text-4xl lg:!text-5xl mb-4">
              About SkillUp
            </h1>
            <p className="text-white/85 max-w-md mb-6">
              Empowering unemployed youth with in-demand digital skills and real
              career opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-[var(--radius-button)] px-3 py-2 text-white text-xs font-medium"
                >
                  <badge.icon className="h-4 w-4" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
              alt="Students collaborating around a laptop"
              className="rounded-2xl w-full h-[320px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80"
            alt="SkillUp campus building"
            className="rounded-2xl w-full max-w-md h-[380px] object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
            alt="Team working at desks"
            className="hidden sm:block absolute -bottom-8 -right-2 rounded-xl w-56 h-40 object-cover border-4 border-white shadow-xl"
          />
        </div>
        <div>
          <p className="text-[var(--color-secondary)] text-xs font-bold tracking-wide uppercase mb-2">
            Who We Are
          </p>
          <h2 className="!text-3xl mb-4">
            Building Skills. Building Careers.
            <br />
            Building a{" "}
            <span className="text-[var(--color-primary)]">
              Better Tomorrow.
            </span>
          </h2>
          <p className="text-gray-600 mb-6">
            SkillUp Digital Skills Bootcamp is a career-focused training
            institute dedicated to bridging the gap between education and
            employment. We provide industry-oriented courses, hands-on learning,
            and placement support to help unemployed youth become job-ready and
            confident professionals.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-3">
              <div className="shrink-0 h-10 w-10 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                <Target className="h-5 w-5 text-[var(--color-primary)]" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Our Mission</p>
                <p className="text-gray-500 text-xs">
                  To empower youth with practical digital skills and create
                  meaningful career opportunities.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="shrink-0 h-10 w-10 rounded-full bg-[#CCFBF1] flex items-center justify-center">
                <Eye className="h-5 w-5 text-[var(--color-secondary)]" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Our Vision</p>
                <p className="text-gray-500 text-xs">
                  To be a leading digital training platform that transforms
                  lives through quality education and placements.
                </p>
              </div>
            </div>
          </div>

          <div className="card grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <stat.icon className="h-5 w-5 text-[var(--color-primary)] shrink-0" />
                <div>
                  <p className="font-bold text-base leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-[var(--color-secondary)] text-xs font-bold tracking-wide uppercase mb-2">
            Why Choose Us
          </p>
          <h2 className="!text-3xl">
            Why Thousands Choose{" "}
            <span className="text-[var(--color-primary)]">SkillUp</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((item) => (
            <div
              key={item.title}
              className="card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div
                className={`h-12 w-12 rounded-full ${item.bg} flex items-center justify-center mx-auto mb-4`}
              >
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <p className="font-semibold mb-2">{item.title}</p>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-12">
          <div className="text-center w-full">
            <p className="text-[var(--color-secondary)] text-xs font-bold tracking-wide uppercase mb-2">
              Our Courses
            </p>
            <h2 className="!text-3xl">Job Oriented Courses We Offer</h2>
          </div>
          <Link
            href="#"
            className="hidden sm:flex shrink-0 items-center gap-1 text-[var(--color-primary)] text-sm font-semibold whitespace-nowrap"
          >
            View All Courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="card p-6 hover:shadow-lg transition-shadow"
            >
              <div
                className={`h-12 w-12 rounded-xl ${course.iconBg} flex items-center justify-center mb-4`}
              >
                <course.icon className={`h-6 w-6 ${course.iconColor}`} />
              </div>
              <p className="font-semibold mb-2">{course.title}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>
                  {course.hours} · {course.level}
                </span>
                <span className="flex items-center gap-1 text-[var(--color-accent)]">
                  <Star className="h-3.5 w-3.5 fill-current" /> {course.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-12">
          <div className="text-center w-full">
            <p className="text-[var(--color-secondary)] text-xs font-bold tracking-wide uppercase mb-2">
              Our Courses
            </p>
            <h2 className="!text-3xl">Our Latest Events</h2>
          </div>
          <Link
            href="#"
            className="hidden sm:flex shrink-0 items-center gap-1 text-[var(--color-primary)] text-sm font-semibold whitespace-nowrap"
          >
            View All Events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="relative rounded-[var(--radius-card)] overflow-hidden h-56 text-white group"
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80"
                alt={event.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 bg-[var(--color-primary)] rounded-lg px-2 py-1 text-center leading-none">
                <p className="font-bold text-sm">{event.day}</p>
                <p className="text-[9px]">{event.month}</p>
              </div>
              <div className="absolute bottom-0 p-4">
                <p className="font-semibold text-sm mb-1">{event.title}</p>
                <p className="flex items-center gap-1 text-[11px] text-white/80 mb-2">
                  <MapPin className="h-3 w-3" /> {event.place}
                </p>
                <Link href="#" className="text-xs font-semibold underline">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievers */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-12">
          <div className="text-center w-full">
            <p className="text-[var(--color-secondary)] text-xs font-bold tracking-wide uppercase mb-2">
              Placed Students
            </p>
            <h2 className="!text-3xl">Our Proud Achievers</h2>
          </div>
          <Link
            href="#"
            className="hidden sm:flex shrink-0 items-center gap-1 text-[var(--color-primary)] text-sm font-semibold whitespace-nowrap"
          >
            View All Students <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {achievers.map((person) => (
              <div key={person.name} className="card p-5 text-center">
                <img
                  src={`https://placehold.co/80x80/1E40AF/FFFFFF?text=${person.name.charAt(0)}`}
                  alt={person.name}
                  className="h-16 w-16 rounded-full mx-auto mb-3 object-cover"
                />
                <p className="font-semibold text-sm">{person.name}</p>
                <p className="text-gray-500 text-xs mb-3">{person.role}</p>
                <p className="font-bold text-sm mb-2">{person.company}</p>
                <p className="text-[var(--color-success)] font-bold text-sm">
                  Package: {person.package}
                </p>
              </div>
            ))}
          </div>
          <button className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white border border-[var(--color-border)] items-center justify-center shadow">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white border border-[var(--color-border)] items-center justify-center shadow">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-[var(--color-secondary)] text-xs font-bold tracking-wide uppercase mb-2">
            Infrastructure
          </p>
          <h2 className="!text-3xl">
            World Class Infrastructure for Better Learning
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {infrastructure.map((item) => (
            <div
              key={item.title}
              className="rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)] bg-white"
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80"
                alt={item.title}
                className="h-32 w-full object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[#1E3A8A] py-14">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-white/70 text-xs font-bold tracking-wide uppercase mb-2">
            Recognized By
          </p>
          <h2 className="!text-white !text-2xl mb-8">
            Certifications Valued by Top Universities & Companies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((name) => (
              <div
                key={name}
                className="bg-white rounded-xl px-8 py-4 font-bold text-lg text-gray-700 min-w-[140px]"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid sm:grid-cols-[auto_1fr] items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400&q=80"
          alt="Successful SkillUp graduate"
          className="h-40 w-40 rounded-full object-cover mx-auto sm:mx-0"
        />
        <div className="text-center sm:text-left">
          <h2 className="!text-3xl mb-2">
            Ready to Start Your{" "}
            <span className="text-[var(--color-primary)]">Career Journey?</span>
          </h2>
          <p className="text-gray-500 mb-6">
            Join thousands of students who transformed their lives with SkillUp.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <button className="btn-primary px-6 py-3 text-sm font-semibold">
              Explore Courses
            </button>
            <button className="btn-accent px-6 py-3 text-sm font-semibold flex items-center gap-2">
              Enroll Now <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
