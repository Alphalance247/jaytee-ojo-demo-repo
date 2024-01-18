import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "JayTee Ojo Foundation",
//   description: "JayTee Ojo Foundation",
// };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
}
