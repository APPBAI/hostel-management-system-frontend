"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      {/* Left Side - Auth Form (50%) */}
      <div className="flex w-full flex-col items-center justify-center px-6 lg:w-1/2 relative">
        <div className="w-full max-w-[360px] flex flex-col items-center space-y-4 md:space-y-6">
          
          {/* New Logo SVG */}
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
              <h1 className="text-base font-bold tracking-tight text-gray-900 uppercase">APPBAI HMS PORTAL</h1>
              <p className="text-[9px] text-gray-400 font-bold tracking-wide uppercase">Hostel managements system</p>
            </div>
          </div>

          {/* Forgot Password Card */}
          <Card className="w-full border-gray-100 bg-[#f9fafb]/50 shadow-sm rounded-xl overflow-hidden border">
            <CardContent className="p-6 md:p-8 space-y-5 md:space-y-6">
              <div className="text-left space-y-1.5 md:space-y-2">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">Forgot Password?</h2>
                <p className="text-[11px] md:text-xs text-gray-500 font-medium leading-relaxed">
                  No worries! Enter your email address and we&apos;ll send you instructions to reset your password.
                </p>
              </div>

              <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1 md:space-y-1.5">
                  <Label htmlFor="email" className="text-[10px] font-bold text-gray-800 uppercase tracking-tight">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="m@example.com" 
                    className="h-9 md:h-10 border-gray-200 bg-white rounded-md focus:ring-0 focus:border-gray-300 transition-all font-medium placeholder:text-gray-300 text-xs"
                  />
                </div>
                
                <div className="space-y-2.5 md:space-y-3">
                  <Button className="w-full h-9 md:h-10 bg-[#18181b] hover:bg-black text-white rounded-md font-bold text-xs transition-all shadow-md mt-1">
                    Reset Password
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    render={<Link href="/login" />}
                    nativeButton={false}
                    className="w-full h-9 md:h-10 border-gray-200 hover:bg-gray-50 text-gray-900 rounded-md font-bold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={14} />
                    Back to Login
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side - Full-height Image (50%) */}
      <div className="hidden lg:block lg:w-1/2 relative h-full">
        <Image
          src="/images/login-side-image.png"
          alt="Hostel Interior"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>
    </div>
  );
}
