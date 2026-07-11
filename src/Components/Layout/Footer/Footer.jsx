import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  GraduationCap,
  ShieldCheck,
  Users,
  Award,
  Headphones,
} from "lucide-react";
import "../../../app/globals.css";

/* lucide-react removed brand/logo icons in newer versions, so social
   icons are plain inline SVGs here instead of a package dependency. */
const Facebook = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width={props.size}
    height={props.size}
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width={props.size}
    height={props.size}
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width={props.size}
    height={props.size}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width={props.size}
    height={props.size}
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Twitter = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width={props.size}
    height={props.size}
    {...props}
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const QUICK_LINKS = [
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

const OUR_COURSES = [
  "Data Science with AI",
  "Data Analytics with AI",
  "Cyber Security with AI",
  "Advanced Cyber Security",
  "Fullstack Development",
  "Cloud Computing with AI",
  "Digital Marketing with AI",
  "View All Courses",
];

const FOR_LEARNERS = [
  "How It Works",
  "Career Support",
  "Placement Assistance",
  "Learning Resources",
  "FAQs",
  "Student Login",
  "Certification",
];

const FOR_RECRUITERS = [
  "Post a Job",
  "Browse Candidates",
  "Hiring Solutions",
  "Our Hiring Partners",
  "Recruiter Login",
  "Contact Us",
];

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Industry-Oriented Curriculum",
    desc: "Designed by experts",
  },
  {
    icon: Users,
    title: "Placement Assistance",
    desc: "Get placed in top companies",
  },
  {
    icon: Award,
    title: "Certification",
    desc: "Industry-recognized certificates",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "We're here to help you",
  },
];

function LinkColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold text-lg mb-2">{title}</h4>
      <span className="block w-8 h-[3px] bg-[#1E40AF] rounded-full mb-4" />
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white text-sm transition-colors"
            >
              <span className="text-[#1E40AF]">›</span>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-slate-300 pt-16">
      <div className="max-w-[1720px] mx-auto px-6 lg:px-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12">
          {/* Brand column */}
          <div className="lg:col-span-1 xl:pr-4">
            <a href="" className="flex items-center gap-3 mb-5">
              <GraduationCap
                size={36}
                className="text-[#F59E0B]"
                fill="#F59E0B"
              />
              <div className="leading-tight">
                <p className="text-xl font-bold text-white">
                  Skill<span className="text-[#F59E0B]">Up</span>
                </p>
                <p className="text-[10px] text-slate-400 -mt-1">
                  Digital Skills Bootcamp
                </p>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Empowering learners with industry-relevant skills and helping them
              build successful careers.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Youtube, Twitter].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center hover:bg-[#1E40AF] hover:border-[#1E40AF] transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>

            <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-white font-semibold mb-1">Stay Updated!</p>
              <p className="text-xs text-slate-400 mb-4">
                Subscribe to our newsletter for latest courses, events &amp;
                career tips.
              </p>
              <form className="flex items-center bg-white/5 border border-slate-600 rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-sm px-3 py-2.5 outline-none placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-[#1E40AF] m-1 rounded-md p-2 hover:bg-[#0F766E] transition-colors"
                >
                  <Send size={16} className="text-white" />
                </button>
              </form>
            </div>
          </div>

          <LinkColumn title="Quick Links" links={QUICK_LINKS} />
          <LinkColumn title="Our Courses" links={OUR_COURSES} />
          <LinkColumn title="For Learners" links={FOR_LEARNERS} />
          <LinkColumn title="For Recruiters" links={FOR_RECRUITERS} />

          {/* Get in touch */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-2">
              Get In Touch
            </h4>
            <span className="block w-8 h-[3px] bg-[#1E40AF] rounded-full mb-4" />
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1E40AF]/20 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-[#1E40AF]" />
                </span>
                <span className="pt-1.5">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1E40AF]/20 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-[#1E40AF]" />
                </span>
                <span className="pt-1.5">support@skillup.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1E40AF]/20 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-[#1E40AF]" />
                </span>
                <span className="pt-1">
                  123, Digital Skills Street, Tech Park, Bangalore - 560001
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1E40AF]/20 flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-[#1E40AF]" />
                </span>
                <span className="pt-1.5">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Highlights row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 py-8">
          {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4">
              <span className="w-14 h-14 rounded-full bg-[#1E40AF]/20 flex items-center justify-center shrink-0">
                <Icon size={24} className="text-[#1E40AF]" />
              </span>
              <div>
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-slate-400">
          <p>© 2025 SkillUp Digital Skills Bootcamp. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Refund Policy
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
