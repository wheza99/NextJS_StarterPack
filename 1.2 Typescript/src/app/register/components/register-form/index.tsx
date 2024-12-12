"use client";

import { useState } from "react";
import { auth, db } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  
  const [error, setError] = useState("");

  const router = useRouter();

  const handleRegister = async (err: { preventDefault: () => void }) => {
    err.preventDefault();
    setError(""); // Reset error message

    if (password != passwordConfirm) {
      setError("Password doesn't match, please check again.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const serverTime = serverTimestamp();
      const userRef = doc(db, "users", auth.currentUser?.uid as string);

      await setDoc(userRef, {
        created_time: serverTime,
        display_name: name,
        email: email,
        uid: auth.currentUser?.uid,
      });

      router.push("/profile");
    } catch (err) {
      setError("Registration error. Please try again.");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 mx-auto py-32">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <Card>
            <CardHeader>
              <CardTitle>Create your account</CardTitle>
              <CardDescription>
                Elevate your design process faster than ever.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleRegister}
              >
                <div className="grid w-full items-center gap-4">
                  <div>
                    <Label htmlFor="email">Your full name</Label>
                    <Input
                      id="display_name"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Your email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit">Sign up</Button>
                  {error && (
                    <p className="text-sm font-light text-red-500 mt-2">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
