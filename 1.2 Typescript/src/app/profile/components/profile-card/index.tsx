"use client";

import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  display_name: string | null;
  email: string;
}

const ProfileCard: React.FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <section className="max-w-3xl mx-auto pl-8 pr-24 pt-24">
      <Card>
        <CardHeader>
          <CardTitle>Your account</CardTitle>
          <CardDescription>Manage your account data below.</CardDescription>
        </CardHeader>
        <CardContent className="flex border-t border-b py-8 items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="">
            <p className="text-xl">{user?.display_name ?? "Archylabs User"}</p>
            <p>{user?.email}</p>
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          <Button onClick={handleLogout}>Logout</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default ProfileCard;
