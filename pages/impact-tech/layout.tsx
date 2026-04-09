import Footer from "@/components/impact-tech/common/Footer";
import Header from "@/components/impact-tech/Teens-coding/Header";
import { Inter } from "next/font/google";
import { Nunito, Rubik, Raleway, Quicksand } from "next/font/google";
import localFont from "next/font/local";
const grostek = localFont({
  src: [
    {
      path: "./fonts/Mena__Grotesk/MenaGrotesk.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-rubik",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-raleway",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
});
export default function ImpactTechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`font-graphik ${inter.variable} ${grostek.variable} ${nunito.variable} ${rubik.variable} ${raleway.variable} ${quicksand.variable}`}
    >
      {" "}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
