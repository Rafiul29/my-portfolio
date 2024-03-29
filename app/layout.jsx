import "./globals.css";
import { Rubik } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "This is my protfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
