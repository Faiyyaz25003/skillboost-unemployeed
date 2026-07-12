"use client";

import { useState } from "react";
import {
  GraduationCap,
  Building2,
  Award,
  Star,
  ChevronRight,
  ChevronLeft,
  PlayCircle,
  Users,
  Briefcase,
  TrendingUp,
  Trophy,
  Quote,
  ArrowRight,
} from "lucide-react";

/* ---------------------------------------------------------
   Data
--------------------------------------------------------- */

const heroStats = [
  { icon: GraduationCap, value: "5000+", label: "Students Placed" },
  { icon: Building2, value: "200+", label: "Hiring Partners" },
  { icon: Award, value: "95%", label: "Placement Success" },
  { icon: Star, value: "4.8/5", label: "Student Rating" },
];

const heroPeople = [
  {
    name: "Rohan Mehta",
    image: "/Course/Course.jpeg",
    gradient: "from-slate-500 to-slate-700",
  },
];

const filters = [
  "All Stories",
  "Web Development",
  "Data Science",
  "Digital Marketing",
  "UI/UX Design",
];

const stories = [
  {
    name: "Rohit Kumar",
    role: "Full Stack Developer",
    company: "Infosys",
    tag: "Web Development",
    tagColor: "bg-emerald-500",
    before: "B.Com Graduate",
    joined: "Feb 2024",
    quote:
      "SkillUp gave me the skills and confidence to switch my career. Today, I'm living my dream!",
    package: "₹ 8.5 LPA",
    packageColor: "bg-emerald-50 text-emerald-700",
    gradient: "from-slate-500 to-slate-700",
    image: "https://i.pravatar.cc/400?img=14",
  },
  {
    name: "Neha Sharma",
    role: "Data Analyst",
    company: "Accenture",
    tag: "Data Science",
    tagColor: "bg-purple-500",
    before: "B.Sc Mathematics",
    joined: "Jan 2024",
    quote:
      "The hands-on projects and expert mentorship made all the difference in my journey.",
    package: "₹ 7.2 LPA",
    packageColor: "bg-violet-50 text-violet-700",
    gradient: "from-rose-400 to-rose-600",
    image: "https://i.pravatar.cc/400?img=48",
  },
  {
    name: "Aman Verma",
    role: "Digital Marketing Executive",
    company: "Flipkart",
    tag: "Digital Marketing",
    tagColor: "bg-orange-500",
    before: "BA Graduate",
    joined: "Mar 2024",
    quote:
      "From learning the basics to running real campaigns - SkillUp changed everything.",
    package: "₹ 5.6 LPA",
    packageColor: "bg-amber-50 text-amber-700",
    gradient: "from-amber-500 to-amber-700",
    image: "https://i.pravatar.cc/400?img=15",
  },
  {
    name: "Pooja Singh",
    role: "UI/UX Designer",
    company: "Deloitte",
    tag: "UI/UX Design",
    tagColor: "bg-rose-500",
    before: "BCA Graduate",
    joined: "Dec 2023",
    quote:
      "The design thinking approach and real-world projects helped me crack top interviews.",
    package: "₹ 9.0 LPA",
    packageColor: "bg-pink-50 text-pink-700",
    gradient: "from-indigo-400 to-indigo-600",
    image: "https://i.pravatar.cc/400?img=49",
  },
  {
    name: "Vikram Patel",
    role: "Python Developer",
    company: "TCS",
    tag: "Python Development",
    tagColor: "bg-sky-500",
    before: "Diploma (IT)",
    joined: "Apr 2024",
    quote:
      "Great curriculum, amazing trainers, and constant support - that's SkillUp for me.",
    package: "₹ 6.8 LPA",
    packageColor: "bg-blue-50 text-blue-700",
    gradient: "from-teal-500 to-teal-700",
    image: "https://i.pravatar.cc/400?img=16",
  },
];

const impactStats = [
  { icon: Users, value: "5000+", label: "Students Transformed" },
  { icon: Briefcase, value: "200+", label: "Top Companies Hiring" },
  { icon: TrendingUp, value: "95%", label: "Placement Success Rate" },
  { icon: Star, value: "4.8/5", label: "Average Student Rating" },
];

const testimonials = [
  {
    name: "Sneha Yadav",
    role: "Business Analyst at Capgemini",
    quote:
      "SkillUp's practical approach and career support team helped me get placed in a top MNC. Best decision of my life!",
    accent: "text-emerald-500",
    gradient: "from-slate-400 to-slate-600",
    image: "https://i.pravatar.cc/200?img=45",
  },
  {
    name: "Aditya Raj",
    role: "Software Engineer at Wipro",
    quote:
      "The trainers are amazing and always ready to help. I went from zero coding knowledge to a full-time developer role.",
    accent: "text-violet-500",
    gradient: "from-sky-400 to-sky-600",
    image: "https://i.pravatar.cc/200?img=17",
  },
  {
    name: "Priya Mehta",
    role: "Digital Marketing Associate at Amazon",
    quote:
      "From resume building to mock interviews, SkillUp prepared me for every step of my placement journey.",
    accent: "text-orange-500",
    gradient: "from-rose-400 to-rose-600",
    image: "https://i.pravatar.cc/200?img=46",
  },
];

/* ---------------------------------------------------------
   Small building blocks
--------------------------------------------------------- */

function initialsOf(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Renders a real photo, falling back to a gradient + initials block
// if the image fails to load (e.g. offline / blocked network).
function PersonImage({
  name,
  image,
  gradient = "from-slate-300 to-slate-400",
  className = "",
  imgClassName = "",
}) {
  const [errored, setErrored] = useState(false);

  if (errored || !image) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br ${gradient} font-semibold text-white ${className}`}
      >
        {initialsOf(name)}
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-gradient-to-br ${gradient} ${className}`}>
      <img
        src={image}
        alt={name}
        onError={() => setErrored(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

function StoryCard({ story }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <PersonImage
          name={story.name}
          image={story.image}
          gradient={story.gradient}
          className="h-36 w-full text-3xl sm:h-40"
        />
        <span
          className={`absolute left-3 top-3 max-w-[80%] truncate rounded-full px-3 py-1 text-[11px] font-semibold text-white ${story.tagColor}`}
        >
          {story.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold text-slate-900">{story.name}</h3>
        <p className="text-sm text-slate-500">{story.role}</p>
        <p className="mt-1 text-sm font-bold text-slate-800">
          @ {story.company}
        </p>

        <div className="mt-3 space-y-1 text-xs text-slate-500">
          <p>Before: {story.before}</p>
          <p>Joined: {story.joined}</p>
        </div>

        <p className="mt-3 flex-1 text-sm italic text-slate-600">
          &ldquo;{story.quote}&rdquo;
        </p>

        <div
          className={`mt-4 rounded-xl px-3 py-2 text-center ${story.packageColor}`}
        >
          <p className="text-[11px] font-medium uppercase tracking-wide opacity-80">
            Package
          </p>
          <p className="text-lg font-bold">{story.package}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Page
--------------------------------------------------------- */

export default function SuccessStories() {
  const [activeFilter, setActiveFilter] = useState("All Stories");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const visibleStories =
    activeFilter === "All Stories"
      ? stories
      : stories.filter((s) => s.tag === activeFilter);

  const nextTestimonial = () =>
    setTestimonialIndex((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex(
      (i) => (i - 1 + testimonials.length) % testimonials.length,
    );

  // Rotated order so the "next/prev" controls always feel functional:
  // on mobile only the first (current) card is visible, on larger
  // screens all three show, reordered starting from the current index.
  const orderedTestimonials = testimonials.map(
    (_, i) => testimonials[(testimonialIndex + i) % testimonials.length],
  );

  return (
    <main className="overflow-x-hidden">
      {/* ---------------- Hero ---------------- */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-14">
          <div className="mb-6 flex items-center gap-1.5 text-xs text-slate-500 sm:text-sm">
            <span>Home</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-slate-700">Success Stories</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Real People.
                <br />
                Real <span className="text-blue-600">Transformation.</span>
              </h1>
              <p className="mt-4 max-w-md text-sm text-slate-600 sm:text-base">
                Discover how our learners transformed their skills, landed top
                jobs, and built better futures.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-x-8 lg:grid-cols-2 xl:grid-cols-4">
                {heroStats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-start gap-2.5">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 sm:h-6 sm:w-6" />
                    <div>
                      <p className="text-lg font-bold text-slate-900 sm:text-xl">
                        {value}
                      </p>
                      <p className="text-xs text-slate-500">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute right-2 top-6 h-48 w-48 rounded-full bg-blue-700/90 sm:right-6 sm:h-80 sm:w-80" />
              <div className="relative flex items-end gap-2 pt-6 sm:gap-3">
                {heroPeople.map((person) => (
                  <PersonImage
                    key={person.name}
                    name={person.name}
                    image={person.image}
                    gradient={person.gradient}
                    className="h-44 w-[160px] rounded-t-full text-lg sm:h-72 sm:w-32 sm:text-2xl lg:h-80 lg:w-36"
                  />
                ))}
              </div>

              <div className="absolute -top-2 right-0 rounded-2xl rounded-br-none bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 shadow-lg sm:right-4 sm:px-4 sm:py-2.5 sm:text-xs">
                Be Inspired.
                <br />
                Be Next!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Success That Speaks ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl lg:text-3xl">
              Success That Speaks
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              From learning new skills to achieving dream careers - our students
              journeys are a testament to what is possible with the right
              guidance and determination.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm ${
                  activeFilter === filter
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {visibleStories.map((story) => (
            <StoryCard key={story.name} story={story} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-blue-700 sm:px-6 sm:py-3">
            View More Stories
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* ---------------- Every Success Has a Story + Impact ---------------- */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Video panel */}
          <div className="relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl bg-brand-navy p-6 text-white sm:min-h-[260px] sm:p-8 lg:col-span-3">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-brand-navy" />
            <div className="relative z-10">
              <h3 className="text-xl font-extrabold sm:text-2xl lg:text-3xl">
                Every <span className="text-blue-300">Success</span>
                <br />
                Has a Story
              </h3>
              <button className="mt-6 flex items-center gap-2 text-sm font-semibold">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-navy">
                  <PlayCircle className="h-6 w-6" />
                </span>
                Watch Inspiring Stories
              </button>
            </div>
          </div>

          {/* Impact numbers */}
          <div className="rounded-3xl border border-slate-100 bg-blue-50/60 p-6 sm:p-8 lg:col-span-2">
            <h3 className="text-base font-extrabold text-slate-900 sm:text-lg">
              Our Impact in Numbers
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
              {impactStats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="rounded-2xl bg-white p-3 shadow-sm sm:p-4">
                  <Icon className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
                  <p className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
                    {value}
                  </p>
                  <p className="text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Voices of Our Achievers ---------------- */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <h2 className="text-center text-xl font-extrabold text-slate-900 sm:text-2xl lg:text-3xl">
          Voices of Our Achievers
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-blue-600" />

        <div className="relative mt-10">
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="absolute -left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow hover:text-blue-600 sm:-left-3 sm:h-9 sm:w-9"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {orderedTestimonials.map((t, idx) => (
              <div
                key={t.name}
                className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm ${
                  idx === 0 ? "" : "hidden sm:block"
                }`}
              >
                <Quote className={`h-6 w-6 ${t.accent}`} />
                <p className="mt-4 text-sm text-slate-600">
                  {t.quote.split(" ").map((word, i) =>
                    i < 4 ? (
                      <span key={i} className="font-semibold text-slate-800">
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    ),
                  )}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <PersonImage
                    name={t.name}
                    image={t.image}
                    gradient={t.gradient}
                    className="h-10 w-10 shrink-0 rounded-full text-xs"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="absolute -right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow hover:text-blue-600 sm:-right-3 sm:h-9 sm:w-9"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Dots for mobile */}
        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setTestimonialIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === testimonialIndex ? "w-6 bg-blue-600" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ---------------- CTA Banner ---------------- */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-blue-700 px-6 py-8 text-white sm:flex-row sm:px-8">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
              <Trophy className="h-6 w-6 text-amber-300" />
            </span>
            <div>
              <h3 className="text-base font-extrabold sm:text-lg lg:text-xl">
                Your Success Story Could Be Next!
              </h3>
              <p className="text-sm text-blue-100">
                Join thousands of learners who transformed their careers with
                SkillUp.
              </p>
            </div>
          </div>

          <button className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow transition hover:bg-blue-50 sm:px-6 sm:py-3">
            Explore Courses
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  );
}



//without responsive
// "use client";

// import { useState } from "react";
// import {
//   GraduationCap,
//   Building2,
//   Award,
//   Star,
//   ChevronRight,
//   ChevronLeft,
//   PlayCircle,
//   Users,
//   Briefcase,
//   TrendingUp,
//   Trophy,
//   Quote,
//   ArrowRight,
// } from "lucide-react";

// /* ---------------------------------------------------------
//    Data
// --------------------------------------------------------- */

// const heroStats = [
//   { icon: GraduationCap, value: "5000+", label: "Students Placed" },
//   { icon: Building2, value: "200+", label: "Hiring Partners" },
//   { icon: Award, value: "95%", label: "Placement Success" },
//   { icon: Star, value: "4.8/5", label: "Student Rating" },
// ];

// const filters = [
//   "All Stories",
//   "Web Development",
//   "Data Science",
//   "Digital Marketing",
//   "UI/UX Design",
//   "Others",
// ];

// const stories = [
//   {
//     name: "Rohit Kumar",
//     role: "Full Stack Developer",
//     company: "Infosys",
//     tag: "Web Development",
//     tagColor: "bg-emerald-500",
//     before: "B.Com Graduate",
//     joined: "Feb 2024",
//     quote:
//       "SkillUp gave me the skills and confidence to switch my career. Today, I'm living my dream!",
//     package: "₹ 8.5 LPA",
//     packageColor: "bg-emerald-50 text-emerald-700",
//     gradient: "from-slate-500 to-slate-700",
//   },
//   {
//     name: "Neha Sharma",
//     role: "Data Analyst",
//     company: "Accenture",
//     tag: "Data Science",
//     tagColor: "bg-purple-500",
//     before: "B.Sc Mathematics",
//     joined: "Jan 2024",
//     quote:
//       "The hands-on projects and expert mentorship made all the difference in my journey.",
//     package: "₹ 7.2 LPA",
//     packageColor: "bg-violet-50 text-violet-700",
//     gradient: "from-rose-400 to-rose-600",
//   },
//   {
//     name: "Aman Verma",
//     role: "Digital Marketing Executive",
//     company: "Flipkart",
//     tag: "Digital Marketing",
//     tagColor: "bg-orange-500",
//     before: "BA Graduate",
//     joined: "Mar 2024",
//     quote:
//       "From learning the basics to running real campaigns - SkillUp changed everything.",
//     package: "₹ 5.6 LPA",
//     packageColor: "bg-amber-50 text-amber-700",
//     gradient: "from-amber-500 to-amber-700",
//   },
//   {
//     name: "Pooja Singh",
//     role: "UI/UX Designer",
//     company: "Deloitte",
//     tag: "UI/UX Design",
//     tagColor: "bg-rose-500",
//     before: "BCA Graduate",
//     joined: "Dec 2023",
//     quote:
//       "The design thinking approach and real-world projects helped me crack top interviews.",
//     package: "₹ 9.0 LPA",
//     packageColor: "bg-pink-50 text-pink-700",
//     gradient: "from-indigo-400 to-indigo-600",
//   },
//   {
//     name: "Vikram Patel",
//     role: "Python Developer",
//     company: "TCS",
//     tag: "Python Development",
//     tagColor: "bg-sky-500",
//     before: "Diploma (IT)",
//     joined: "Apr 2024",
//     quote:
//       "Great curriculum, amazing trainers, and constant support - that's SkillUp for me.",
//     package: "₹ 6.8 LPA",
//     packageColor: "bg-blue-50 text-blue-700",
//     gradient: "from-teal-500 to-teal-700",
//   },
// ];

// const impactStats = [
//   { icon: Users, value: "5000+", label: "Students Transformed" },
//   { icon: Briefcase, value: "200+", label: "Top Companies Hiring" },
//   { icon: TrendingUp, value: "95%", label: "Placement Success Rate" },
//   { icon: Star, value: "4.8/5", label: "Average Student Rating" },
// ];

// const testimonials = [
//   {
//     name: "Sneha Yadav",
//     role: "Business Analyst at Capgemini",
//     quote:
//       "SkillUp's practical approach and career support team helped me get placed in a top MNC. Best decision of my life!",
//     accent: "text-emerald-500",
//     gradient: "from-slate-400 to-slate-600",
//   },
//   {
//     name: "Aditya Raj",
//     role: "Software Engineer at Wipro",
//     quote:
//       "The trainers are amazing and always ready to help. I went from zero coding knowledge to a full-time developer role.",
//     accent: "text-violet-500",
//     gradient: "from-sky-400 to-sky-600",
//   },
//   {
//     name: "Priya Mehta",
//     role: "Digital Marketing Associate at Amazon",
//     quote:
//       "From resume building to mock interviews, SkillUp prepared me for every step of my placement journey.",
//     accent: "text-orange-500",
//     gradient: "from-rose-400 to-rose-600",
//   },
// ];

// /* ---------------------------------------------------------
//    Small building blocks
// --------------------------------------------------------- */

// function Avatar({ name, className = "", gradient = "from-slate-300 to-slate-400" }) {
//   const initials = name
//     .split(" ")
//     .map((n) => n[0])
//     .slice(0, 2)
//     .join("")
//     .toUpperCase();

//   return (
//     <div
//       className={`flex items-center justify-center bg-gradient-to-br ${gradient} font-semibold text-white ${className}`}
//     >
//       {initials}
//     </div>
//   );
// }

// function StoryCard({ story }) {
//   return (
//     <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
//       <div className="relative">
//         <Avatar
//           name={story.name}
//           gradient={story.gradient}
//           className="h-40 w-full text-3xl"
//         />
//         <span
//           className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold text-white ${story.tagColor}`}
//         >
//           {story.tag}
//         </span>
//       </div>

//       <div className="flex flex-1 flex-col p-4">
//         <h3 className="text-base font-bold text-slate-900">{story.name}</h3>
//         <p className="text-sm text-slate-500">{story.role}</p>
//         <p className="mt-1 text-sm font-bold text-slate-800">
//           @ {story.company}
//         </p>

//         <div className="mt-3 space-y-1 text-xs text-slate-500">
//           <p>Before: {story.before}</p>
//           <p>Joined: {story.joined}</p>
//         </div>

//         <p className="mt-3 flex-1 text-sm italic text-slate-600">
//           &ldquo;{story.quote}&rdquo;
//         </p>

//         <div
//           className={`mt-4 rounded-xl px-3 py-2 text-center ${story.packageColor}`}
//         >
//           <p className="text-[11px] font-medium uppercase tracking-wide opacity-80">
//             Package
//           </p>
//           <p className="text-lg font-bold">{story.package}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------------------------------------------------
//    Page
// --------------------------------------------------------- */

// export default function SuccessStories() {
//   const [activeFilter, setActiveFilter] = useState("All Stories");
//   const [testimonialIndex, setTestimonialIndex] = useState(0);

//   const visibleStories =
//     activeFilter === "All Stories"
//       ? stories
//       : stories.filter((s) => s.tag === activeFilter);

//   const nextTestimonial = () =>
//     setTestimonialIndex((i) => (i + 1) % testimonials.length);
//   const prevTestimonial = () =>
//     setTestimonialIndex(
//       (i) => (i - 1 + testimonials.length) % testimonials.length,
//     );

//   return (
//     <main>
//       {/* ---------------- Hero ---------------- */}
//       <section className="bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50">
//         <div className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
//           <div className="mb-6 flex items-center gap-1.5 text-sm text-slate-500">
//             <span>Home</span>
//             <ChevronRight className="h-3.5 w-3.5" />
//             <span className="font-medium text-slate-700">Success Stories</span>
//           </div>

//           <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
//             {/* Left */}
//             <div>
//               <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
//                 Real People.
//                 <br />
//                 Real <span className="text-blue-600">Transformation.</span>
//               </h1>
//               <p className="mt-4 max-w-md text-slate-600">
//                 Discover how our learners transformed their skills, landed top
//                 jobs, and built better futures.
//               </p>

//               <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
//                 {heroStats.map(({ icon: Icon, value, label }) => (
//                   <div key={label} className="flex items-start gap-2.5">
//                     <Icon className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
//                     <div>
//                       <p className="text-xl font-bold text-slate-900">
//                         {value}
//                       </p>
//                       <p className="text-xs text-slate-500">{label}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right */}
//             <div className="relative flex justify-center lg:justify-end">
//               <div className="absolute right-6 top-6 h-72 w-72 rounded-full bg-blue-700/90 sm:h-80 sm:w-80" />
//               <div className="relative flex items-end gap-3 pt-6">
//                 <Avatar
//                   name="Rohan Mehta"
//                   gradient="from-slate-500 to-slate-700"
//                   className="h-64 w-32 rounded-t-full text-2xl sm:h-72 sm:w-36"
//                 />
//                 <Avatar
//                   name="Simran Kaur"
//                   gradient="from-amber-400 to-amber-600"
//                   className="h-72 w-32 rounded-t-full text-2xl sm:h-80 sm:w-36"
//                 />
//                 <Avatar
//                   name="Karan Joshi"
//                   gradient="from-emerald-500 to-emerald-700"
//                   className="h-64 w-32 rounded-t-full text-2xl sm:h-72 sm:w-36"
//                 />
//                 <Avatar
//                   name="Divya Nair"
//                   gradient="from-sky-500 to-sky-700"
//                   className="h-72 w-32 rounded-t-full text-2xl sm:h-80 sm:w-36"
//                 />
//               </div>

//               <div className="absolute -top-2 right-0 rounded-2xl rounded-br-none bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-lg sm:right-4">
//                 Be Inspired.
//                 <br />
//                 Be Next!
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Success That Speaks ---------------- */}
//       <section className="mx-auto max-w-7xl px-6 py-16">
//         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//           <div className="max-w-xl">
//             <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
//               Success That Speaks
//             </h2>
//             <p className="mt-2 text-sm text-slate-500">
//               From learning new skills to achieving dream careers - our students
//               journeys are a testament to what is possible with the right
//               guidance and determination.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
//                   activeFilter === filter
//                     ? "border-blue-600 bg-blue-600 text-white"
//                     : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
//                 }`}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
//           {visibleStories.map((story) => (
//             <StoryCard key={story.name} story={story} />
//           ))}
//         </div>

//         <div className="mt-10 flex justify-center">
//           <button className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700">
//             View More Stories
//             <ArrowRight className="h-4 w-4" />
//           </button>
//         </div>
//       </section>

//       {/* ---------------- Every Success Has a Story + Impact ---------------- */}
//       <section className="mx-auto max-w-7xl px-6 pb-16">
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
//           {/* Video panel */}
//           <div className="relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-3xl bg-brand-navy p-8 text-white lg:col-span-3">
//             <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-brand-navy" />
//             <div className="relative z-10">
//               <h3 className="text-2xl font-extrabold sm:text-3xl">
//                 Every <span className="text-blue-300">Success</span>
//                 <br />
//                 Has a Story
//               </h3>
//               <button className="mt-6 flex items-center gap-2 text-sm font-semibold">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-navy">
//                   <PlayCircle className="h-6 w-6" />
//                 </span>
//                 Watch Inspiring Stories
//               </button>
//             </div>
//           </div>

//           {/* Impact numbers */}
//           <div className="rounded-3xl border border-slate-100 bg-blue-50/60 p-8 lg:col-span-2">
//             <h3 className="text-lg font-extrabold text-slate-900">
//               Our Impact in Numbers
//             </h3>
//             <div className="mt-6 grid grid-cols-2 gap-6">
//               {impactStats.map(({ icon: Icon, value, label }) => (
//                 <div key={label} className="rounded-2xl bg-white p-4 shadow-sm">
//                   <Icon className="h-6 w-6 text-blue-600" />
//                   <p className="mt-3 text-xl font-bold text-slate-900">
//                     {value}
//                   </p>
//                   <p className="text-xs text-slate-500">{label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Voices of Our Achievers ---------------- */}
//       <section className="mx-auto max-w-7xl px-6 pb-16">
//         <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
//           Voices of Our Achievers
//         </h2>
//         <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-blue-600" />

//         <div className="relative mt-10">
//           <button
//             onClick={prevTestimonial}
//             aria-label="Previous testimonial"
//             className="absolute -left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow hover:text-blue-600 sm:flex"
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </button>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
//             {testimonials.map((t, idx) => (
//               <div
//                 key={t.name}
//                 className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
//               >
//                 <Quote className={`h-6 w-6 ${t.accent}`} />
//                 <p className="mt-4 text-sm text-slate-600">
//                   {t.quote.split(" ").map((word, i) =>
//                     i < 4 ? (
//                       <span key={i} className="font-semibold text-slate-800">
//                         {word}{" "}
//                       </span>
//                     ) : (
//                       word + " "
//                     ),
//                   )}
//                 </p>
//                 <div className="mt-6 flex items-center gap-3">
//                   <Avatar
//                     name={t.name}
//                     gradient={t.gradient}
//                     className="h-10 w-10 rounded-full text-xs"
//                   />
//                   <div>
//                     <p className="text-sm font-bold text-slate-900">{t.name}</p>
//                     <p className="text-xs text-slate-500">{t.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={nextTestimonial}
//             aria-label="Next testimonial"
//             className="absolute -right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow hover:text-blue-600 sm:flex"
//           >
//             <ChevronRight className="h-4 w-4" />
//           </button>
//         </div>
//       </section>

//       {/* ---------------- CTA Banner ---------------- */}
//       <section className="mx-auto max-w-7xl px-6 pb-16">
//         <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-blue-700 px-8 py-8 text-white sm:flex-row">
//           <div className="flex items-center gap-4">
//             <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
//               <Trophy className="h-6 w-6 text-amber-300" />
//             </span>
//             <div>
//               <h3 className="text-lg font-extrabold sm:text-xl">
//                 Your Success Story Could Be Next!
//               </h3>
//               <p className="text-sm text-blue-100">
//                 Join thousands of learners who transformed their careers with
//                 SkillUp.
//               </p>
//             </div>
//           </div>

//           <button className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow transition hover:bg-blue-50">
//             Explore Courses
//             <ArrowRight className="h-4 w-4" />
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }