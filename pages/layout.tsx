"use client";
import Footer from "@/components/footer";
import Header from "../components/Header";
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
