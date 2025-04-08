import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import { Loader } from "@/components/ui/loader";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </Suspense>
    </>
  );
};

export default MainLayout;
