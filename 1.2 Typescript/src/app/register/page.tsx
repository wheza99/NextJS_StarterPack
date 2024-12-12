import NavigationBar from "@/components/navigation-bar";
import React from "react";
import RegisterForm from "./components/register-form";
import Footer from "@/components/footer";

function RegisterPage() {
  return (
    <>
      <NavigationBar />
      <RegisterForm />
      <Footer />
    </>
  );
}

export default RegisterPage;
