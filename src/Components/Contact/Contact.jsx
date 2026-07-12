import {
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
  Send,
  ChevronDown,
  Headphones,
} from "lucide-react";

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.5c0-.93.26-1.56 1.59-1.56h1.7V3.1C15.98 3.05 15.02 3 13.9 3c-2.3 0-3.87 1.4-3.87 3.98v2.62H7.27v3.2h2.76V21h3.47z" />
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
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.4c0-1.29-.02-2.94-1.8-2.94-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
  </svg>
);
const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.6 7.2s-.2-1.5-.85-2.15c-.8-.85-1.7-.85-2.1-.9C15.8 4 12 4 12 4h-.01s-3.8 0-6.65.15c-.4.05-1.3.05-2.1.9C2.6 5.7 2.4 7.2 2.4 7.2S2.2 8.95 2.2 10.7v1.6c0 1.75.2 3.5.2 3.5s.2 1.5.85 2.15c.8.85 1.85.82 2.32.91C7.2 18.98 12 19 12 19s3.8 0 6.65-.15c.4-.05 1.3-.05 2.1-.9.65-.65.85-2.15.85-2.15s.2-1.75.2-3.5v-1.6c0-1.75-.2-3.5-.2-3.5zM9.9 14.1V8.9L15.4 11.5z" />
  </svg>
);
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.05a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.8.07 4.1 4.1 0 0 0 3.8 2.85A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.85c7.5 0 11.6-6.2 11.6-11.6l-.01-.53c.8-.57 1.5-1.3 2.1-2.1z" />
  </svg>
);

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* ---------- HERO ---------- */}
      <section className="bg-[#EAF1FE]">
        <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              We are Here to
              <br />
              <span className="text-blue-600">Help You!</span>
            </h1>

            <p className="mt-5 text-gray-500 max-w-md">
              Have questions or need more information? Our team is ready to
              assist you. Get in touch with us anytime.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-3">
                <img
                  src="/images/avatar-1.jpg"
                  alt="Support team member"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover bg-gray-200"
                />
                <img
                  src="/images/avatar-2.jpg"
                  alt="Support team member"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover bg-gray-200"
                />
                <img
                  src="/images/avatar-3.jpg"
                  alt="Support team member"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover bg-gray-200"
                />
                <img
                  src="/images/avatar-4.jpg"
                  alt="Support team member"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover bg-gray-200"
                />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-800">
                  Talk to our support team
                </p>
                <p className="text-gray-500">
                  We usually reply within a few hours
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <img
              src="/Contact/Contact.png"
              alt="Customer support"
              className="w-full max-w-2xl h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ---------- FORM + GET IN TOUCH ---------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Send message form */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Send Us a <span className="text-blue-600">Message</span>
          </h2>
          <p className="text-gray-500 mt-2 mb-6">
            Fill out the form below and we will get back to you as soon as
            possible.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select a subject</option>
                  <option>Course Inquiry</option>
                  <option>Admissions</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Type your message here..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium px-6 py-3 rounded-lg text-sm"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>

        {/* Get in touch */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-500 mt-2 mb-6">
            Reach out to us through any of these channels.
          </p>

          <div className="space-y-4">
            <ContactCard
              icon={<Phone className="w-5 h-5 text-white" />}
              iconBg="bg-blue-600"
              title="Phone"
              lines={["+91 12345 67890", "+91 98765 43210"]}
              meta={["Mon - Sat", "10:00 AM - 6:00 PM"]}
            />
            <ContactCard
              icon={<Mail className="w-5 h-5 text-white" />}
              iconBg="bg-teal-500"
              title="Email"
              lines={["support@skillup.com", "info@skillup.com"]}
              meta={["We reply within", "a few hours"]}
            />
            <ContactCard
              icon={<MapPin className="w-5 h-5 text-white" />}
              iconBg="bg-orange-500"
              title="Head Office"
              lines={[
                "123, Digital Skills Street,",
                "Tech Park, Bangalore,",
                "Karnataka - 560001",
              ]}
              meta={["Mon - Sat", "10:00 AM - 6:00 PM"]}
            />
            <ContactCard
              icon={<Globe className="w-5 h-5 text-white" />}
              iconBg="bg-purple-500"
              title="Website"
              lines={["www.skillup.com"]}
              linesClassName="text-blue-600"
              meta={["Visit anytime"]}
            />
            <ContactCard
              icon={<MessageCircle className="w-5 h-5 text-white" />}
              iconBg="bg-green-500"
              title="WhatsApp"
              lines={["+91 98765 43210"]}
              meta={["Quick Support"]}
            />
          </div>

          <div className="mt-6">
            <p className="font-medium text-gray-800 mb-3">Follow Us</p>
            <div className="flex gap-3">
              <SocialIcon
                icon={<FacebookIcon className="w-4 h-4" />}
                bg="bg-blue-600"
              />
              <SocialIcon
                icon={<InstagramIcon className="w-4 h-4" />}
                bg="bg-pink-500"
              />
              <SocialIcon
                icon={<LinkedinIcon className="w-4 h-4" />}
                bg="bg-blue-700"
              />
              <SocialIcon
                icon={<YoutubeIcon className="w-4 h-4" />}
                bg="bg-red-500"
              />
              <SocialIcon
                icon={<TwitterIcon className="w-4 h-4" />}
                bg="bg-sky-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MAP (real, searchable Google Map) ---------- */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="relative rounded-2xl overflow-hidden border border-gray-200">
          <iframe
            title="SkillUp Head Office Location Map"
            src="https://www.google.com/maps?q=Tech+Park+Bangalore+Karnataka+560001&output=embed"
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="absolute top-6 left-6 bg-white rounded-xl shadow-lg p-5 w-72">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">
                  SkillUp Head Office
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  123, Digital Skills Street, Tech Park, Bangalore, Karnataka -
                  560001
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tech+Park+Bangalore+Karnataka+560001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm font-medium mt-2 inline-block"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BRANCHES ---------- */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Our <span className="text-blue-600">Branches</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[
            {
              city: "Mumbai",
              address: "101, Andheri West, Mumbai, Maharashtra - 400053",
              phone: "+91 98765 43211",
              image: "/Contact/Mumbai.png",
            },
            {
              city: "Delhi",
              address: "202, Connaught Place, New Delhi, Delhi - 110001",
              phone: "+91 98765 43212",
              image: "/Contact/Delhi.png",
            },
            {
              city: "Pune",
              address: "303, Hinjawadi Phase 1, Pune, Maharashtra - 411057",
              phone: "+91 98765 43213",
              image: "/Contact/Pune.png",
            },
            {
              city: "Hyderabad",
              address: "404, Gochibowli, Hyderabad, Telangana - 500032",
              phone: "+91 98765 43214",
              image: "/Contact/Hyderabad.png",
            },
            {
              city: "Kolkata",
              address: "505, Salt Lake, Kolkata, West Bengal - 700091",
              phone: "+91 98765 43215",
              image: "/Contact/Kolkata.png",
            },
          ].map((branch) => (
            <div
              key={branch.city}
              className="rounded-xl overflow-hidden border border-gray-200"
            >
              <img
                src={branch.image}
                alt={`${branch.city} branch office building`}
                className="w-full h-28 object-cover bg-gray-200"
              />
              <div className="p-3">
                <p className="font-semibold text-gray-900 text-sm">
                  {branch.city}
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {branch.address}
                </p>
                <p className="text-xs text-blue-600 font-medium mt-2 flex items-center gap-1">
                  <Phone className="w-3 h-3" /> {branch.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="bg-blue-700 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold">Need Immediate Help?</p>
              <p className="text-blue-100 text-sm">
                Chat with our AI Assistant or call us for quick support.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 border border-white/60 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
              <MessageCircle className="w-4 h-4" />
              Chat with AI Assistant
            </button>
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-lg">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  icon,
  iconBg,
  title,
  lines,
  meta,
  linesClassName = "text-gray-500",
}) {
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4">
      <div className="flex items-start gap-4">
        <div
          className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center shrink-0`}
        >
          {icon}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{title}</p>
          {lines.map((line, i) => (
            <p key={i} className={`text-sm ${linesClassName}`}>
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className="text-right text-xs text-gray-400 shrink-0 hidden sm:block">
        {meta.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ icon, bg }) {
  return (
    <a
      href="#"
      className={`w-9 h-9 rounded-full ${bg} text-white flex items-center justify-center hover:opacity-90 transition-opacity`}
    >
      {icon}
    </a>
  );
}
