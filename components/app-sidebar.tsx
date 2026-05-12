"use client";

import {
  BarChart3,
  BedDouble,
  CircleDollarSign,
  ClipboardList,
  HelpCircle,
  LayoutDashboard,
  MessageSquare,
  MoreVertical,
  Search,
  Settings,
  UserCog,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  useSidebar,
} from "@/components/ui/sidebar";

const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
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
    url: "/dashboard/settings",
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
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" {...props} className="border-r border-gray-100">
      <SidebarHeader
        className={`h-16 flex items-center transition-all duration-200 ${isCollapsed ? "px-1" : "px-4"} mb-2`}
      >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="hover:bg-transparent px-0"
              nativeButton={false}
            >
              <div
                className={`flex aspect-square size-10 items-center justify-center rounded-xl overflow-hidden shrink-0 transition-all duration-200 ${
                  isCollapsed
                    ? "bg-transparent border-none shadow-none"
                    : "bg-white border border-gray-100 shadow-sm"
                }`}
              >
                <Image
                  src="/Logo.svg"
                  alt="APPBAI Logo"
                  width={isCollapsed ? 24 : 28}
                  height={isCollapsed ? 24 : 28}
                  className="transition-all duration-200"
                />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col gap-0.5 leading-none ml-3 transition-opacity duration-200">
                  <span className="font-extrabold text-gray-900 text-[13px] tracking-tight">
                    APPBAI HMS Portal
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    HOSTEL SYSTEM
                  </span>
                </div>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent
        className={`transition-all duration-200 ${isCollapsed ? "px-1" : "px-3"} flex flex-col`}
      >
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navMain.map((item) => {
                const isActive =
                  item.url === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname === item.url ||
                      pathname?.startsWith(`${item.url}/`);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.title}
                      // biome-ignore lint/a11y/useAnchorContent: content provided via children
                      render={<a href={item.url} />}
                      nativeButton={false}
                      className={`py-6 transition-all duration-200 ${isCollapsed ? "px-2" : "px-4"} rounded-xl ${
                        isActive
                          ? "bg-gray-100 text-gray-900 font-bold"
                          : "text-gray-400 font-medium hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <item.icon
                        className={`size-5 shrink-0 ${isActive ? "text-gray-900" : "text-gray-400"}`}
                      />
                      {!isCollapsed && (
                        <span className="text-[13px] ml-1">{item.title}</span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navSecondary.map((item) => {
                const isActive =
                  pathname === item.url || pathname?.startsWith(`${item.url}/`);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      size="sm"
                      isActive={isActive}
                      tooltip={item.title}
                      // biome-ignore lint/a11y/useAnchorContent: content provided via children
                      render={<a href={item.url} />}
                      nativeButton={false}
                      className={`py-5 font-bold transition-all duration-200 ${isCollapsed ? "px-2" : "px-4"} ${
                        isActive
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-400 hover:text-gray-900"
                      }`}
                    >
                      <item.icon
                        className={`size-4 shrink-0 ${isActive ? "text-gray-900" : "text-gray-400"}`}
                      />
                      {!isCollapsed && (
                        <span className="text-[11px] uppercase tracking-wider ml-1">
                          {item.title}
                        </span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter
        className={`border-t border-gray-50 transition-all duration-200 ${isCollapsed ? "p-1" : "p-3"}`}
      >
        <SidebarMenu className="gap-1">
          <SidebarMenuItem className={isCollapsed ? "" : "mt-0"}>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    tooltip="Emmanuel"
                    className={`data-[state=open]:bg-gray-100 hover:bg-gray-50 transition-all rounded-xl py-7 ${isCollapsed ? "px-0 justify-center" : "px-3"}`}
                  />
                }
              >
                <Avatar className="h-9 w-9 rounded-xl border border-gray-100 shrink-0">
                  <AvatarImage src="/images/avatar.png" alt="Emmanuel" />
                  <AvatarFallback className="rounded-xl bg-gray-200 text-gray-600 font-bold text-xs">
                    EM
                  </AvatarFallback>
                </Avatar>
                {!isCollapsed && (
                  <>
                    <div className="grid flex-1 text-left text-sm ml-3">
                      <span className="truncate font-bold text-gray-900 text-[13px]">
                        Emmanuel
                      </span>
                      <span className="truncate text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                        Admin Portal
                      </span>
                    </div>
                    <MoreVertical className="ml-auto size-4 text-gray-400" />
                  </>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-2xl shadow-2xl border-gray-100 p-2"
                side="top"
                align="end"
                sideOffset={8}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-3 px-2 py-2 text-left text-sm">
                    <Avatar className="h-9 w-9 rounded-xl border border-gray-100">
                      <AvatarImage src="/images/avatar.png" alt="Emmanuel" />
                      <AvatarFallback className="rounded-xl">EM</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm">
                      <span className="truncate font-bold text-gray-900">
                        Emmanuel
                      </span>
                      <span className="truncate text-xs text-muted-foreground">
                        m@example.com
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="my-2" />
                <DropdownMenuItem className="rounded-xl font-bold text-xs py-2.5">
                  <UserCog className="mr-3 size-4 text-gray-400" />
                  Account Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl font-bold text-xs py-2.5">
                  <Settings className="mr-3 size-4 text-gray-400" />
                  Portal Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-2" />
                <DropdownMenuItem className="rounded-xl text-red-600 focus:text-red-700 focus:bg-red-50 font-bold text-xs py-2.5">
                  Sign out
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
