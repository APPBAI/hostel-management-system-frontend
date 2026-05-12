"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      {/* Left Side - Auth Form (50%) */}
      <div className="flex w-full flex-col items-center justify-center px-6 lg:w-1/2 relative">
        {/* Container with reduced scale/width to fit shorter viewports */}
        <div className="w-full max-w-[360px] flex flex-col items-center space-y-4 md:space-y-6">
          {/* Header & New Logo SVG */}
          <div className="flex flex-col items-center gap-3 text-center mb-1">
            <div className="relative h-12 w-12 flex items-center justify-center">
              <Image
                src="/Logo.svg"
                alt="APPBAI Logo"
                width={48}
                height={48}
                className="rounded-lg shadow-lg shadow-indigo-100"
              />
            </div>
            <div className="space-y-0">
              <h1 className="text-base font-bold tracking-tight text-gray-900 uppercase">
                APPBAI HMS PORTAL
              </h1>
              <p className="text-[9px] text-gray-400 font-bold tracking-wide uppercase">
                Hostel managements system
              </p>
            </div>
          </div>

          {/* Login Card */}
          <Card className="w-full border-gray-100 bg-[#f9fafb]/50 shadow-sm rounded-xl overflow-hidden border">
            <CardContent className="p-6 md:p-8 space-y-5 md:space-y-6">
              <div className="text-center space-y-0.5">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  Welcome back
                </h2>
                <p className="text-xs text-gray-400 font-medium">
                  Login into your HMS Portal
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <Label
                    htmlFor="email"
                    className="text-[10px] font-bold text-gray-900 uppercase tracking-tight"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className="h-9 md:h-10 border-gray-200 bg-white rounded-md focus:ring-0 focus:border-gray-300 transition-all font-medium placeholder:text-gray-300 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <Label
                    htmlFor="password"
                    title="Password"
                    className="text-[10px] font-bold text-gray-900 uppercase tracking-tight"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="h-9 md:h-10 border-gray-200 bg-white rounded-md focus:ring-0 focus:border-gray-300 transition-all font-medium pr-10 text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
                    >
                      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                  <div className="flex justify-end pt-0.5">
                    <Link
                      href="/forgot-password"
                      className="text-[10px] font-bold text-gray-900 hover:underline transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <Button className="w-full h-9 md:h-10 bg-[#18181b] hover:bg-black text-white rounded-md font-bold text-xs transition-all shadow-sm mt-1">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center pt-2">
            <p className="text-[8px] md:text-[9px] font-bold text-gray-400 max-w-[240px] leading-relaxed mx-auto uppercase tracking-tighter">
              By clicking continue, you agree to our{" "}
              <Link
                href="#"
                className="underline decoration-gray-300 hover:text-gray-600 transition-colors"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="underline decoration-gray-300 hover:text-gray-600 transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Full-height Image (50%) */}
      <div className="hidden lg:block lg:w-1/2 relative h-full">
        <Image
          src="/images/login-side-image.png"
          alt="Hostel Bunk Beds"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>
    </div>
  );
}
