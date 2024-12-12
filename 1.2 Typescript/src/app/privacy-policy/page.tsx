import NavigationBar from "@/components/navigation-bar";
import React from "react";
import PrivacyPolicySection from "./components/privacy-policy-section";
import Footer from "@/components/footer";

function PrivacyPolicyPage() {
  return (
    <>
      <NavigationBar />
      <PrivacyPolicySection />
      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
