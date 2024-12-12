import React from "react";
import LoginForm from "./components/login-form";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";

function LoginPage() {
  return (
    <>
      <NavigationBar />
      <LoginForm />
      <Footer />
    </>
  );
}

export default LoginPage;
