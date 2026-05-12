"use client";

import { Search, Bell, PanelLeft } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen overflow-hidden bg-white">
        {/* Sticky Header */}
        <header className="flex h-14 shrink-0 items-center gap-2 border-b border-gray-100 px-5 justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 text-gray-400 hover:text-gray-900" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">
                    APPBAI HMS Portal
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-gray-300" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-[11px] text-gray-900 font-black uppercase tracking-tight">Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-4 flex-1 max-w-md justify-end lg:ml-auto lg:mr-2">
            <div className="relative w-full max-w-[240px] hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-9 h-8 bg-gray-50 border-none text-[11px] font-bold rounded-lg focus-visible:ring-1 focus-visible:ring-gray-200"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-900 relative h-8 w-8">
              <Bell className="size-4" />
              <span className="absolute top-1.5 right-1.5 size-1.5 bg-red-500 rounded-full border-2 border-white" />
            </Button>
            <Avatar className="h-7 w-7 rounded-lg cursor-pointer">
              <AvatarImage src="/images/avatar.png" alt="User" />
              <AvatarFallback className="bg-gray-100 text-gray-600 font-bold text-[10px]">EM</AvatarFallback>
            </Avatar>
          </div>
        </header>
        
        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto bg-white px-5 py-4 custom-scrollbar">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
