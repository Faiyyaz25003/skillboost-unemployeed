import "./globals.css";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import Footer from "@/Components/Layout/Footer/Footer";

export const metadata = {
  title: "SkillUp | Digital Skills Bootcamp",
  description:
    "Learn Digital Skills. Get Certified. Get Hired. Join thousands of students and start your journey towards a successful digital career.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
