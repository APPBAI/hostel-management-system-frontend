"use client";

import * as React from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  BedDouble,
  CircleDollarSign,
  ClipboardList,
  Wrench,
  BarChart3,
  UserCog,
  MessageSquare,
  Settings,
  HelpCircle,
  Search,
  MoreHorizontal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Resident",
    url: "/dashboard/residents",
    icon: Users,
  },
  {
    title: "Rooms & Beds",
    url: "/dashboard/rooms",
    icon: BedDouble,
  },
  {
    title: "Finance",
    url: "/dashboard/finance",
    icon: CircleDollarSign,
  },
  {
    title: "Gate log",
    url: "/dashboard/gate-log",
    icon: ClipboardList,
  },
  {
    title: "Maintenance",
    url: "/dashboard/maintenance",
    icon: Wrench,
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "Staff",
    url: "/dashboard/staff",
    icon: UserCog,
  },
  {
    title: "Communication",
    url: "/dashboard/communication",
    icon: MessageSquare,
  },
];

const navSecondary = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Get Help",
    url: "#",
    icon: HelpCircle,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="border-r border-gray-200">
      <SidebarHeader className="h-16 flex items-center px-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-transparent px-0" nativeButton={false}>
              <div className="flex aspect-square size-10 items-center justify-center rounded-lg overflow-hidden">
                <Image 
                  src="/Logo.svg" 
                  alt="APPBAI Logo" 
                  width={32} 
                  height={32} 
                />
              </div>
              <div className="flex flex-col gap-0.5 leading-none ml-2">
                <span className="font-bold text-gray-900 text-sm">APPBAI HMS Portal</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Hostel Management</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.isActive}
                    tooltip={item.title}
                    render={<a href={item.url} />}
                    nativeButton={false}
                    className={`py-5 px-4 rounded-xl transition-all ${
                      item.isActive 
                        ? "bg-gray-100 text-gray-900 font-bold shadow-sm" 
                        : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className={`size-5 ${item.isActive ? "text-gray-900" : "text-gray-400"}`} />
                    <span className="text-sm">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-100 p-2">
        <SidebarMenu>
          {navSecondary.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                size="sm"
                render={<a href={item.url} />}
                nativeButton={false}
                className="text-gray-400 hover:text-gray-900 px-4 py-4"
              >
                <item.icon className="size-4" />
                <span className="text-xs font-bold">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem className="mt-2 pt-2 border-t border-gray-100">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-gray-100 hover:bg-gray-50 transition-all rounded-xl py-6"
                  />
                }
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src="/images/avatar.png" alt="Emmanuel" />
                  <AvatarFallback className="rounded-lg bg-gray-200 text-gray-600 font-bold">EM</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm ml-2">
                  <span className="truncate font-bold text-gray-900">Emmanuel</span>
                  <span className="truncate text-[10px] text-gray-400 font-bold">m@example.com</span>
                </div>
                <MoreHorizontal className="ml-auto size-4 text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl shadow-xl border-gray-100"
                side="top"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src="/images/avatar.png" alt="Emmanuel" />
                      <AvatarFallback className="rounded-lg">EM</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm">
                      <span className="truncate font-bold text-gray-900">Emmanuel</span>
                      <span className="truncate text-xs text-muted-foreground">m@example.com</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="rounded-lg font-bold text-xs">
                  <UserCog className="mr-2 size-4 text-gray-400" />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg font-bold text-xs">
                  <Settings className="mr-2 size-4 text-gray-400" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="rounded-lg text-red-600 focus:text-red-700 focus:bg-red-50 font-bold text-xs">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
