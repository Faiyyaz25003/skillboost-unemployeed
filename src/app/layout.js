import "./globals.css";

export const metadata = {
  title: "SkillUp | Digital Skills Bootcamp",
  description:
    "Learn Digital Skills. Get Certified. Get Hired. Join thousands of students and start your journey towards a successful digital career.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
