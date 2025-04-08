import EcoFooter from "@/components/EcoFooter";
import EcoHeader from "@/components/EcoHeader";
import { Loader } from "@/components/ui/loader";
import React, { Suspense } from "react";

interface EcosystemLayoutProps {
  children: React.ReactNode;
}

const EcosystemLayout = ({ children }: EcosystemLayoutProps) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <EcoHeader />
        {children}
        <EcoFooter />
      </Suspense>
    </>
  );
};

export default EcosystemLayout;
