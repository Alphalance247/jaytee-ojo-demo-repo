import Footer from "@/components/impact-tech/common/Footer";
import Header from "@/components/impact-tech/Teens-coding/Header";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});
export default function ImpactTechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`font-graphik ${inter.variable}`}>
      {" "}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
