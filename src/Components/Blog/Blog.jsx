"use client";

import { useState } from "react";
import {
  Search,
  Bookmark,
  Mail,
  ChevronLeft,
  ChevronRight,
  PenLine,
  LayoutGrid,
  Briefcase,
  Laptop,
  TrendingUp,
  Star,
  BookOpen,
  Calendar,
  Clock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Filter tabs config                                                  */
/* ------------------------------------------------------------------ */
const filters = [
  { name: "All", icon: LayoutGrid },
  { name: "Career Tips", icon: Briefcase },
  { name: "Digital Skills", icon: Laptop },
  { name: "Industry Insights", icon: TrendingUp },
  { name: "Success Stories", icon: Star },
  { name: "Guides", icon: BookOpen },
];

/* ------------------------------------------------------------------ */
/* Shared tag colors per category                                     */
/* ------------------------------------------------------------------ */
const tagColors = {
  "Career Tips": "bg-blue-600",
  "Digital Skills": "bg-violet-600",
  "Industry Insights": "bg-indigo-600",
  "Success Stories": "bg-blue-600",
  Guides: "bg-violet-700",
};

/* ------------------------------------------------------------------ */
/* Article data per category                                          */
/* ------------------------------------------------------------------ */
const articlesByCategory = {
  "Career Tips": [
    {
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
      date: "May 21, 2025",
      read: "6 min read",
      title: "Top 10 In-Demand Skills to Boost Your Career in 2025",
      excerpt:
        "Discover the most in-demand skills and future-proof your career in today's competitive world.",
      author: "Priya Sharma",
      role: "Career Coach",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      date: "May 16, 2025",
      read: "8 min read",
      title: "How to Build a Strong Resume That Gets You Hired",
      excerpt:
        "A step-by-step guide to creating a resume that stands out and gets noticed by recruiters.",
      author: "Rahul Verma",
      role: "HR Expert",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
      date: "May 15, 2025",
      read: "7 min read",
      title: "Top 10 Interview Tips to Crack Your Dream Job",
      excerpt:
        "Ace your next interview with these proven tips from hiring experts and industry leaders.",
      author: "Neha Patel",
      role: "Career Coach",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      date: "May 12, 2025",
      read: "6 min read",
      title: "How to Set Career Goals and Achieve Them Faster",
      excerpt:
        "Learn the SMART goal framework and step-by-step process to achieve your career goals.",
      author: "Amit Singh",
      role: "Career Mentor",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
      date: "May 10, 2025",
      read: "7 min read",
      title: "How Continuous Learning Can Transform Your Career",
      excerpt:
        "Stay relevant, grow faster, and unlock new opportunities with continuous learning.",
      author: "Sneha Yadav",
      role: "L&D Specialist",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
      date: "May 08, 2025",
      read: "5 min read",
      title: "Top Soft Skills Every Employer Looks For",
      excerpt:
        "From communication to leadership — key soft skills that can elevate your career.",
      author: "Vikram Mehta",
      role: "HR Manager",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ],

  "Digital Skills": [
    {
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      date: "May 21, 2025",
      read: "7 min read",
      title: "Full Stack Developer Roadmap for Beginners in 2025",
      excerpt:
        "A complete roadmap to become a full stack developer from scratch and land your dream job.",
      author: "Rohit Sharma",
      role: "Full Stack Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=800&auto=format&fit=crop",
      date: "May 16, 2025",
      read: "6 min read",
      title: "UI/UX Design Principles Every Designer Must Know",
      excerpt:
        "Learn the essential UI/UX design principles that create impactful and user-friendly designs.",
      author: "Anjali Mehta",
      role: "UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      date: "May 15, 2025",
      read: "8 min read",
      title: "Data Analytics Roadmap for Beginners in 2025",
      excerpt:
        "Step-by-step guide to start your career in data analytics and become a data expert.",
      author: "Karan Verma",
      role: "Data Analyst",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=800&auto=format&fit=crop",
      date: "May 12, 2025",
      read: "6 min read",
      title: "Python Programming Tutorial for Beginners",
      excerpt:
        "Learn Python programming from scratch with examples and practice questions.",
      author: "Arjun Patel",
      role: "Python Developer",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
      date: "May 10, 2025",
      read: "7 min read",
      title: "SEO Basics: Rank Higher and Get More Traffic",
      excerpt:
        "Master SEO fundamentals and rank your website higher on search engines.",
      author: "Pooja Singh",
      role: "SEO Specialist",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      date: "May 08, 2025",
      read: "8 min read",
      title: "Introduction to Artificial Intelligence in 2025",
      excerpt:
        "Explore the world of AI, its applications, and how you can start learning AI today.",
      author: "Vikas Reddy",
      role: "AI Engineer",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    },
  ],

  Guides: [
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      date: "May 21, 2025",
      read: "8 min read",
      title: "Complete Guide to Career Planning in 2025",
      excerpt:
        "A step-by-step guide to help you plan your career, set goals, and achieve long-term success.",
      author: "Amit Singh",
      role: "Career Coach",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
      date: "May 18, 2025",
      read: "7 min read",
      title: "How to Learn Any Skill Online: A Complete Roadmap",
      excerpt:
        "Discover the proven process to learn any skill online effectively and become job-ready.",
      author: "Neha Yadav",
      role: "Learning Specialist",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      date: "May 16, 2025",
      read: "6 min read",
      title: "Cybersecurity for Beginners: The Ultimate Guide",
      excerpt:
        "Understand the fundamentals of cybersecurity and how to start your career in this in-demand field.",
      author: "Rohit Sharma",
      role: "Cybersecurity Analyst",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=800&auto=format&fit=crop",
      date: "May 14, 2025",
      read: "6 min read",
      title: "LinkedIn Profile Optimization Guide in 2025",
      excerpt:
        "Step-by-step guide to optimize your LinkedIn profile and get noticed by recruiters.",
      author: "Pooja Singh",
      role: "HR Specialist",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1508243529287-e21914770fea?q=80&w=800&auto=format&fit=crop",
      date: "May 12, 2025",
      read: "5 min read",
      title: "Time Management Guide for Students & Professionals",
      excerpt:
        "Learn practical time management techniques to boost productivity and achieve more in less time.",
      author: "Vikram Mehta",
      role: "Productivity Coach",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
      date: "May 10, 2025",
      read: "6 min read",
      title: "Resume Writing Guide: Examples & Tips",
      excerpt:
        "A complete guide with resume examples and expert tips to create a job-winning resume.",
      author: "Anjali Mehta",
      role: "Career Expert",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ],

  "Industry Insights": [
    {
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
      date: "May 21, 2025",
      read: "8 min read",
      title: "Top 10 Tech Trends Shaping the Future of Work in 2025",
      excerpt:
        "Explore the top emerging technologies and trends that are transforming industries and redefining jobs.",
      author: "Sarthak Mehta",
      role: "Industry Analyst",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&auto=format&fit=crop",
      date: "May 18, 2025",
      read: "7 min read",
      title: "How AI and Automation Are Transforming Businesses",
      excerpt:
        "Understand how AI and automation are improving productivity, reducing costs, and driving innovation.",
      author: "Neha Kapoor",
      role: "Technology Consultant",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
      date: "May 16, 2025",
      read: "6 min read",
      title: "Sustainability in Business: Trends and Opportunities",
      excerpt:
        "Why sustainability is no longer optional and how businesses can build a greener future.",
      author: "Rohan Verma",
      role: "Sustainability Expert",
      avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800&auto=format&fit=crop",
      date: "May 14, 2025",
      read: "7 min read",
      title: "Global Supply Chain Trends to Watch in 2025",
      excerpt:
        "Key supply chain trends that are impacting global businesses and how to stay ahead.",
      author: "Pooja Singh",
      role: "Operations Analyst",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
      date: "May 12, 2025",
      read: "6 min read",
      title: "The Future of FinTech: Innovations Driving Change",
      excerpt:
        "Discover how fintech innovations are reshaping financial services and customer experiences.",
      author: "Arjun Patel",
      role: "FinTech Specialist",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800&auto=format&fit=crop",
      date: "May 10, 2025",
      read: "5 min read",
      title: "The Rise of Hybrid Work Models: What Companies Must Know",
      excerpt:
        "Insights on hybrid work trends and best practices for building a productive workplace.",
      author: "Ananya Joshi",
      role: "HR Strategist",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ],

  "Success Stories": [
    {
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
      quote: "From Fresher to Software Developer in 6 Months",
      date: "May 21, 2025",
      read: "6 min read",
      title: "How Rahul Landed His Dream Job as a Software Developer",
      excerpt:
        "Rahul went from a college student to a full-time software developer in just 6 months. Here's his journey.",
      author: "Rahul Verma",
      role: "Software Developer at TCS",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      quote: "Career Switch in 8 Months to Data Analyst",
      date: "May 18, 2025",
      read: "7 min read",
      title: "From Marketing to Data Analyst: Neha's Inspiring Journey",
      excerpt:
        "Neha transitioned from a marketing role to a data analyst and now works with one of the top MNCs.",
      author: "Neha Kapoor",
      role: "Data Analyst at Accenture",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      quote: "Freelancing Changed My Life Completely",
      date: "May 16, 2025",
      read: "5 min read",
      title: "How Arjun Built a Successful Freelance Career from Scratch",
      excerpt:
        "Arjun shares how he started freelancing, built his client base, and achieved financial freedom.",
      author: "Arjun Patel",
      role: "Freelance UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      quote: "I Upskilled and Got a 200% Salary Hike!",
      date: "May 14, 2025",
      read: "6 min read",
      title: "How Sneha Upskilled and Got a 200% Salary Hike",
      excerpt:
        "Sneha's learning journey helped her upgrade her skills and scale her career to new heights.",
      author: "Sneha Yadav",
      role: "Product Manager at Microsoft",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
      quote: "Consistency Turned My Side Hustle into a Business",
      date: "May 12, 2025",
      read: "6 min read",
      title: "From Side Hustle to Startup: Karan's Success Story",
      excerpt:
        "Karan turned his passion into a profitable startup and is now helping thousands of learners.",
      author: "Karan Mehta",
      role: "Founder, Learnify",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
      quote: "Remote Work Gave Me the Freedom I Always Wanted",
      date: "May 10, 2025",
      read: "5 min read",
      title: "How Priya Found Freedom Through Remote Work",
      excerpt:
        "Priya shares how remote work helped her achieve a better work-life balance and personal growth.",
      author: "Priya Sharma",
      role: "Remote Marketing Manager",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ],
};

// "All" tab = one representative article from every other category
articlesByCategory["All"] = [
  { ...articlesByCategory["Career Tips"][0], _category: "Career Tips" },
  { ...articlesByCategory["Digital Skills"][0], _category: "Digital Skills" },
  {
    ...articlesByCategory["Industry Insights"][0],
    _category: "Industry Insights",
  },
  { ...articlesByCategory["Success Stories"][0], _category: "Success Stories" },
  { ...articlesByCategory["Guides"][0], _category: "Guides" },
  { ...articlesByCategory["Career Tips"][2], _category: "Career Tips" },
];

// tag each category's own articles with its category name (for tag rendering)
[
  "Career Tips",
  "Digital Skills",
  "Guides",
  "Industry Insights",
  "Success Stories",
].forEach((cat) => {
  articlesByCategory[cat] = articlesByCategory[cat].map((a) => ({
    ...a,
    _category: cat,
  }));
});

const categories = [
  { name: "All Categories", count: 36 },
  { name: "Career Tips", count: 12 },
  { name: "Digital Skills", count: 8 },
  { name: "Industry Insights", count: 6 },
  { name: "Success Stories", count: 6 },
  { name: "Guides", count: 6 },
];

const popularPosts = [
  {
    title: "Top 10 In-Demand Skills to Boost Your Career in 2025",
    date: "May 21, 2025",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "Full Stack Developer Roadmap for Beginners",
    date: "May 21, 2025",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "How Rahul Landed His Dream Job as a Developer",
    date: "May 21, 2025",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "Top 10 Tech Trends Shaping the Future of Work",
    date: "May 21, 2025",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=200&auto=format&fit=crop",
  },
];

/* ------------------------------------------------------------------ */
/* Standard article card                                              */
/* ------------------------------------------------------------------ */
function ArticleCard({ article }) {
  const tagColor = tagColors[article._category] || "bg-blue-600";
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative h-40 w-full overflow-hidden sm:h-44">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-md px-2 py-1 text-[11px] font-medium text-white ${tagColor}`}
        >
          {article._category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="flex items-center gap-1.5 text-xs text-slate-400">
          <Calendar className="h-3.5 w-3.5" />
          {article.date}
          <span className="mx-0.5">&middot;</span>
          <Clock className="h-3.5 w-3.5" />
          {article.read}
        </p>
        <h3 className="mt-2 text-base font-bold leading-snug text-slate-900">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-500">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <div className="flex items-center gap-2">
            <img
              src={article.avatar}
              alt={article.author}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-xs font-semibold text-slate-800">
                {article.author}
              </p>
              <p className="text-[11px] text-slate-400">{article.role}</p>
            </div>
          </div>
          <button
            aria-label="Bookmark"
            className="text-slate-300 transition hover:text-blue-700"
          >
            <Bookmark className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Success-story card (dark overlay + pull quote)                      */
/* ------------------------------------------------------------------ */
function SuccessStoryCard({ article }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative h-40 w-full overflow-hidden sm:h-44">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-2 py-1 text-[11px] font-medium text-white">
          Success Stories
        </span>
        <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold leading-snug text-white">
          <span className="mr-0.5 text-yellow-400">&ldquo;</span>
          {article.quote}
          <span className="text-yellow-400">&rdquo;</span>
        </p>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="flex items-center gap-1.5 text-xs text-slate-400">
          <Calendar className="h-3.5 w-3.5" />
          {article.date}
          <span className="mx-0.5">&middot;</span>
          <Clock className="h-3.5 w-3.5" />
          {article.read}
        </p>
        <h3 className="mt-2 text-base font-bold leading-snug text-slate-900">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-500">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <div className="flex items-center gap-2">
            <img
              src={article.avatar}
              alt={article.author}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-xs font-semibold text-slate-800">
                {article.author}
              </p>
              <p className="text-[11px] text-slate-400">{article.role}</p>
            </div>
          </div>
          <button
            aria-label="Bookmark"
            className="text-slate-300 transition hover:text-blue-700"
          >
            <Bookmark className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Main Page                                                           */
/* ------------------------------------------------------------------ */
export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [activePage, setActivePage] = useState(1);

  const currentArticles = articlesByCategory[activeFilter] || [];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Insights. Inspiration.
              <br />
              <span className="text-blue-700">Career Success.</span>
            </h1>
            <p className="mt-4 max-w-md text-sm text-slate-600 md:text-base">
              Explore expert tips, industry trends, and career guidance to help
              you learn, grow and succeed.
            </p>

            <div className="mt-8 flex max-w-md flex-col gap-2 rounded-xl bg-white p-1.5 shadow-md sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2">
                <Search className="ml-3 h-4 w-4 shrink-0 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics or keywords..."
                  className="w-full bg-transparent px-1 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
              <button className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800">
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
          </div>

          <div className="relative mx-auto hidden max-w-md md:block">
            <div className="relative rounded-2xl border-4 border-slate-800 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="rounded-md bg-blue-100 p-1">
                  <div className="h-5 w-6 rounded-sm bg-blue-700" />
                </div>
                <span className="text-lg font-bold text-blue-800">Blog</span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-2 w-3/4 rounded bg-slate-200" />
                <div className="h-2 w-1/2 rounded bg-slate-200" />
                <div className="mt-3 flex h-28 items-center justify-center rounded-lg bg-gradient-to-br from-sky-200 to-blue-300">
                  <div className="h-8 w-8 rounded-full bg-yellow-300" />
                </div>
                <div className="h-2 w-full rounded bg-slate-200" />
                <div className="h-2 w-5/6 rounded bg-slate-200" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-6 h-10 w-8 rounded-b-md bg-blue-800" />
            <div className="absolute -right-10 top-10 flex h-16 w-14 flex-col justify-end gap-1 rounded bg-blue-800 p-1">
              <div className="h-2 w-full rounded-sm bg-orange-400" />
              <div className="h-2 w-full rounded-sm bg-emerald-400" />
            </div>
            <div className="absolute -right-4 bottom-0 h-10 w-10 rounded-full bg-blue-900" />
            <div className="absolute -left-10 bottom-6 h-14 w-10 rounded-t-full bg-emerald-500" />
          </div>
        </div>
      </section>

      {/* Latest Articles + Sidebar */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14">
        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:justify-start">
          {filters.map(({ name, icon: Icon }) => {
            const isActive = activeFilter === name;
            return (
              <button
                key={name}
                onClick={() => {
                  setActiveFilter(name);
                  setActiveCategory(name === "All" ? "All Categories" : name);
                  setActivePage(1);
                }}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition sm:px-4 ${
                  isActive
                    ? "border-blue-700 bg-blue-700 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          {/* Left: Articles */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              {activeFilter === "All" ? "Latest Articles" : activeFilter}
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {currentArticles.map((article) =>
                article._category === "Success Stories" ? (
                  <SuccessStoryCard key={article.title} article={article} />
                ) : (
                  <ArticleCard key={article.title} article={article} />
                ),
              )}
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className="space-y-6">
            {/* Search */}
            <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-sm font-bold text-slate-900">
                Search Articles
              </h3>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full text-sm outline-none placeholder:text-slate-400"
                />
                <Search className="h-4 w-4 text-slate-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-sm font-bold text-slate-900">
                Categories
              </h3>
              <ul className="space-y-1">
                {categories.map((c) => (
                  <li key={c.name}>
                    <button
                      onClick={() => {
                        setActiveCategory(c.name);
                        setActiveFilter(
                          c.name === "All Categories" ? "All" : c.name,
                        );
                        setActivePage(1);
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                        activeCategory === c.name
                          ? "bg-blue-50 font-semibold text-blue-700"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span>{c.name}</span>
                      <span
                        className={
                          activeCategory === c.name
                            ? "text-blue-700"
                            : "text-slate-400"
                        }
                      >
                        ({String(c.count).padStart(2, "0")})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-sm font-bold text-slate-900">
                Popular Posts
              </h3>
              <ul className="space-y-4">
                {popularPosts.map((p) => (
                  <li key={p.title} className="flex gap-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-14 w-14 shrink-0 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold leading-snug text-slate-800">
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">{p.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
              <h3 className="mb-1 text-sm font-bold text-slate-900">
                Subscribe to Our Newsletter
              </h3>
              <p className="mb-4 text-xs text-slate-500">
                Get the latest articles, tips and updates straight to your
                inbox.
              </p>
              <div className="mb-3 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full text-sm outline-none placeholder:text-slate-400"
                />
                <Mail className="h-4 w-4 text-slate-400" />
              </div>
              <button className="w-full rounded-lg bg-blue-700 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800">
                Subscribe
              </button>
            </div>
          </aside>
        </div>

        {/* CTA Banner */}
        <div className="relative mt-14 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-8 sm:px-8 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 sm:flex">
              <PenLine className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white md:text-xl">
                Want to contribute?
              </h3>
              <p className="text-sm text-blue-100">
                Share your knowledge and inspire thousands of learners.
              </p>
            </div>
          </div>
          <button className="flex shrink-0 items-center gap-2 rounded-lg border border-white/70 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-blue-800">
            Write for Us
            <PenLine className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  );
}
