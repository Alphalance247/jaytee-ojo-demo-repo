"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToastNotification from "@/components/common/toastNotification";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastNotification />
      <Header />
      {children}
      <Footer />
    </>
  );
}
