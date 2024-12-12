import Sidebar from "@/components/side-bar";
import React from "react";
import ProfileCard from "./components/profile-card";
import { AuthProvider } from "@/context/auth-context";

function ProfilePage() {
  return (
    <Sidebar>
      <AuthProvider>
        <ProfileCard />
      </AuthProvider>
    </Sidebar>
  );
}

export default ProfilePage;
