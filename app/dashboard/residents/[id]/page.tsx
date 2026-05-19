"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ChevronRight,
  Download,
  FileText,
  Lock,
  MoreHorizontal,
  Phone,
  Printer,
  UserMinus,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { use } from "react";
import { toast } from "sonner";

import { CallGuardianDialog } from "@/components/CallGuardianDialog";
import { MessageResidentDrawer } from "@/components/MessageResidentDrawer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tabs = ["Overview", "Documents", "Fees", "Behaviour Log", "Maintainance"];

const feeRecords = [
  {
    id: 1,
    description: "Success",
    amount: "$316.00",
    paid: "$200.00",
    balance: "$0.00",
    status: "Paid",
  },
  {
    id: 2,
    description: "Success",
    amount: "$242.00",
    paid: "$200.00",
    balance: "$0.00",
    status: "Paid",
  },
  {
    id: 3,
    description: "Processing",
    amount: "$837.00",
    paid: "$200.00",
    balance: "$0.00",
    status: "Paid",
  },
  {
    id: 4,
    description: "Success",
    amount: "$874.00",
    paid: "$200.00",
    balance: "$0.00",
    status: "Paid",
  },
  {
    id: 5,
    description: "Failed",
    amount: "$721.00",
    paid: "$200.00",
    balance: "$0.00",
    status: "Paid",
  },
];

const maintenanceRecords = [
  {
    id: 1,
    issue: "Fixing of Bulb light and Air Condition...",
    date: "19th April, 2026",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    issue: "Leaking tap in bathroom",
    date: "15th April, 2026",
    priority: "Low",
    status: "Resolved",
  },
  {
    id: 3,
    issue: "Broken door handle",
    date: "10th April, 2026",
    priority: "Medium",
    status: "Resolved",
  },
];

export default function ResidentProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [activeTab, setActiveTab] = React.useState("Overview");

  const showCustomToast = (
    title: string,
    description: string | React.ReactNode,
  ) => {
    toast.custom(
      (t) => (
        <div className="flex items-center justify-between w-full max-w-[340px] bg-[#7e818c] text-white rounded-md px-3.5 py-3 shadow-lg select-none pointer-events-auto border border-white/10 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-start gap-2.5">
            <BadgeCheck className="size-4.5 text-white shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="text-[10px] font-black text-white leading-tight">
                {title}
              </h4>
              <div className="text-[8.5px] text-[#f1f1f1] leading-tight font-bold">
                {description}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.dismiss(t)}
            className="ml-3 shrink-0 h-5 px-2.5 text-[8.5px] font-black text-white bg-transparent border border-white/50 rounded hover:bg-white/10 active:bg-white/20 transition-all cursor-pointer leading-none"
          >
            Close
          </button>
        </div>
      ),
      {
        duration: 4000,
      },
    );
  };

  return (
    <div className="flex flex-col space-y-6 pt-1 pb-20 max-w-6xl">
      {/* Top Profile Card */}
      <Card className="border-gray-100 shadow-none rounded-none border bg-white overflow-hidden">
        <CardContent className="p-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="size-24 bg-zinc-900 rounded-sm shrink-0 overflow-hidden relative">
              <Image
                src="/images/STU001.png"
                alt="Amara Osei"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-2">
              <div>
                <h1 className="text-2xl font-black tracking-tight text-gray-900 leading-none">
                  Amara Osei
                </h1>
                <p className="text-[10px] font-extrabold text-gray-400 mt-1.5 uppercase tracking-widest">
                  {resolvedParams.id}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 mt-1">
                <Badge
                  variant="outline"
                  className="rounded-md px-1.5 py-0 text-[8px] h-5 font-black uppercase tracking-widest border-gray-100 text-gray-500 bg-gray-50 flex items-center"
                >
                  Room A101
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-md px-1.5 py-0 text-[8px] h-5 font-black uppercase tracking-widest border-none text-gray-400 bg-gray-50/50 flex items-center"
                >
                  Computer Science
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-md px-1.5 py-0 text-[8px] h-5 font-black uppercase tracking-widest border-none text-gray-400 bg-gray-50/50 flex items-center"
                >
                  Level 200
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-md px-1.5 py-0 text-[8px] h-5 font-black uppercase tracking-widest border-none text-gray-400 bg-gray-50/50 flex items-center"
                >
                  Fees Paid
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 shrink-0 w-full md:w-32">
            <MessageResidentDrawer
              residentId="STU001"
              residentName="Amara Osei"
              triggerClassName="inline-flex items-center justify-start bg-black hover:bg-black/90 text-white rounded-md text-[9px] font-black px-4 shadow-none h-8 transition-colors outline-none whitespace-nowrap"
            />
            <CallGuardianDialog
              residentId={resolvedParams.id}
              residentName="Amara Osei"
              triggerClassName="bg-black hover:bg-black/90 text-white rounded-md text-[9px] font-black px-4 shadow-none h-8 justify-start"
            />
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button className="bg-black hover:bg-black/90 text-white rounded-md text-[9px] font-black px-4 shadow-none h-8 justify-start cursor-pointer w-full">
                    <MoreHorizontal className="mr-1.5 size-3" />
                    More
                  </Button>
                }
              />
              <DropdownMenuContent
                align="end"
                className="w-[230px] bg-white border border-gray-100 rounded-xl shadow-2xl p-1 select-none flex flex-col focus:outline-none"
              >
                {/* 1. View full report */}
                <DropdownMenuItem
                  onClick={() =>
                    showCustomToast(
                      "Report requested",
                      "Viewing academic & conduct summary for Amara Osei...",
                    )
                  }
                  className="flex items-start gap-3 px-3 py-2 cursor-pointer hover:bg-slate-50 focus:bg-slate-50 transition-colors rounded-lg outline-none"
                >
                  <FileText className="size-4 text-gray-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10.5px] font-black text-gray-900 leading-tight">
                      View full report
                    </span>
                    <span className="text-[8.5px] font-bold text-gray-400 leading-none">
                      Academic & conduct summary
                    </span>
                  </div>
                </DropdownMenuItem>

                {/* 2. Add note */}
                <DropdownMenuItem
                  onClick={() =>
                    showCustomToast(
                      "Note creator opened",
                      "Note drafting interface opened for Amara Osei.",
                    )
                  }
                  className="flex items-start gap-3 px-3 py-2 cursor-pointer hover:bg-slate-50 focus:bg-slate-50 transition-colors rounded-lg outline-none"
                >
                  <FileText className="size-4 text-gray-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10.5px] font-black text-gray-900 leading-tight">
                      Add note
                    </span>
                    <span className="text-[8.5px] font-bold text-gray-400 leading-none">
                      Attach an admin not to the profile
                    </span>
                  </div>
                </DropdownMenuItem>

                {/* 3. Set reminder */}
                <DropdownMenuItem
                  onClick={() =>
                    showCustomToast(
                      "Reminder set",
                      "Schedule a follow-up for this resident.",
                    )
                  }
                  className="flex items-start gap-3 px-3 py-2 cursor-pointer hover:bg-slate-50 focus:bg-slate-50 transition-colors rounded-lg outline-none"
                >
                  <FileText className="size-4 text-gray-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10.5px] font-black text-gray-900 leading-tight">
                      Set reminder
                    </span>
                    <span className="text-[8.5px] font-bold text-gray-400 leading-none">
                      Schedule a follow-up for this resident
                    </span>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="-mx-1 my-1.5 h-px bg-gray-100" />

                {/* 4. Export profile */}
                <DropdownMenuItem
                  onClick={() =>
                    showCustomToast(
                      "Export started",
                      "Downloading Amara Osei's profile as PDF or CSV...",
                    )
                  }
                  className="flex items-start gap-3 px-3 py-2 cursor-pointer hover:bg-slate-50 focus:bg-slate-50 transition-colors rounded-lg outline-none"
                >
                  <Download className="size-4 text-gray-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10.5px] font-black text-gray-900 leading-tight">
                      Export profile
                    </span>
                    <span className="text-[8.5px] font-bold text-gray-400 leading-none">
                      Download as PDF or CSV
                    </span>
                  </div>
                </DropdownMenuItem>

                {/* 5. Print profile */}
                <DropdownMenuItem
                  onClick={() =>
                    showCustomToast(
                      "Print initialized",
                      "Preparing printer stream for Amara Osei...",
                    )
                  }
                  className="flex items-start gap-3 px-3 py-2 cursor-pointer hover:bg-slate-50 focus:bg-slate-50 transition-colors rounded-lg outline-none"
                >
                  <Printer className="size-4 text-gray-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5 justify-center">
                    <span className="text-[10.5px] font-black text-gray-900 leading-none py-1">
                      Print profile
                    </span>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="-mx-1 my-1.5 h-px bg-gray-100" />

                {/* 6. Mark as check-in */}
                <DropdownMenuItem
                  onClick={() =>
                    showCustomToast(
                      "Check-in overridden",
                      "Override check-in status: Amara Osei marked inside the hostel.",
                    )
                  }
                  className="flex items-start gap-3 px-3 py-2 cursor-pointer hover:bg-slate-50 focus:bg-slate-50 transition-colors rounded-lg outline-none"
                >
                  <FileText className="size-4 text-gray-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10.5px] font-black text-gray-900 leading-tight">
                      Mark as check-in
                    </span>
                    <span className="text-[8.5px] font-bold text-gray-400 leading-none">
                      Override current gate status
                    </span>
                  </div>
                </DropdownMenuItem>

                {/* 7. Suspend access */}
                <DropdownMenuItem
                  onClick={() =>
                    showCustomToast(
                      "Access suspended",
                      "Temporarily restricted hostel access for Amara Osei.",
                    )
                  }
                  className="flex items-start gap-3 px-3 py-2 cursor-pointer hover:bg-red-50/50 focus:bg-red-50/50 transition-colors rounded-lg outline-none group"
                >
                  <Lock className="size-4 text-red-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10.5px] font-black text-red-600 leading-tight">
                      Suspend access
                    </span>
                    <span className="text-[8.5px] font-bold text-red-400 leading-none">
                      Temporarily restrict hostel acess
                    </span>
                  </div>
                </DropdownMenuItem>

                {/* 8. Deregister resident */}
                <DropdownMenuItem
                  onClick={() =>
                    showCustomToast(
                      "Deregister initiated",
                      "Deregistration sequence initiated for Amara Osei.",
                    )
                  }
                  className="flex items-start gap-3 px-3 py-2 cursor-pointer hover:bg-red-50/50 focus:bg-red-50/50 transition-colors rounded-lg outline-none group"
                >
                  <UserMinus className="size-4 text-red-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10.5px] font-black text-red-600 leading-tight">
                      Deregister resident
                    </span>
                    <span className="text-[8.5px] font-bold text-red-400/80 leading-none">
                      Remove from active roster
                    </span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <div className="flex w-fit items-center border border-gray-100 rounded-md p-1 bg-white shadow-none overflow-hidden">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative h-7 px-4 rounded-md text-[9px] font-black uppercase tracking-wider transition-colors whitespace-nowrap z-10 ${
              activeTab === tab
                ? "text-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="profileActiveTab"
                className="absolute inset-0 bg-gray-100 rounded-md -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            {/* Left Column - Personal Info */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <div className="space-y-2">
                <h3 className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                  Personal Information
                </h3>
                <Card className="border-gray-100 shadow-none rounded-none border bg-white">
                  <CardContent className="p-4 space-y-3">
                    <div className="space-y-0.5">
                      <p className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">
                        DOB
                      </p>
                      <p className="text-[11px] font-bold text-gray-900">
                        12 March 2003
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">
                        Nationality
                      </p>
                      <p className="text-[11px] font-bold text-gray-900">
                        Japanese
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">
                        Medical Notes
                      </p>
                      <p className="text-[11px] font-bold text-gray-900">
                        Asthma, Allergy to Peanut
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">
                        Current Level
                      </p>
                      <p className="text-[11px] font-bold text-gray-900">200</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">
                        Course Reading
                      </p>
                      <p className="text-[11px] font-bold text-gray-900">
                        Computer Science
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">
                        Contact (Phone & WhatsApp)
                      </p>
                      <p className="text-[11px] font-bold text-gray-900">
                        +233 34 334 3323
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <h3 className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                  Emergency Contact
                </h3>
                <Card className="border-gray-100 shadow-none rounded-none border bg-white">
                  <CardContent className="p-4 space-y-4">
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-bold text-gray-900">
                        Kingsley Mensah ( Father )
                      </p>
                      <p className="text-[10px] font-bold text-gray-500 font-mono">
                        +233 34 334 3323
                      </p>
                      <p className="text-[10px] font-bold text-gray-500 font-mono">
                        k.mensah@email.com
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-bold text-gray-900">
                        Matthew Mensah ( Brother )
                      </p>
                      <p className="text-[10px] font-bold text-gray-500 font-mono">
                        +233 34 334 3323
                      </p>
                      <p className="text-[10px] font-bold text-gray-500 font-mono">
                        mat.mensah@email.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Middle Column - Timeline */}
            <div className="lg:col-span-4 flex flex-col space-y-2">
              <h3 className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                Timeline . Last 7 days
              </h3>
              <div className="space-y-2">
                {[
                  {
                    title: "Fee Paid",
                    value: "GHC 450",
                    date: "19th April, 2026",
                  },
                  {
                    title: "Fee Paid",
                    value: "GHC 450",
                    date: "19th April, 2026",
                  },
                  {
                    title: "Fee Paid",
                    value: "GHC 450",
                    date: "19th April, 2026",
                  },
                  {
                    title: "Fee Paid",
                    value: "GHC 450",
                    date: "19th April, 2026",
                  },
                  {
                    title: "Fee Paid",
                    value: "GHC 450",
                    date: "19th April, 2026",
                  },
                  {
                    title: "Maintenance",
                    value: "Fixing of Bulb light and Air Condition...",
                    date: "19th April, 2026",
                  },
                  {
                    title: "Maintenance",
                    value: "Fixing of Bulb light and Air Condition...",
                    date: "19th April, 2026",
                  },
                  {
                    title: "Maintenance",
                    value: "Fixing of Bulb light and Air Condition...",
                    date: "19th April, 2026",
                  },
                ].map((item, i) => (
                  <div
                    key={`${item.title}-${item.date}-${i}`}
                    className="flex border border-gray-100 bg-gray-50/50 rounded-sm"
                  >
                    <div className="w-1 bg-black rounded-l-sm shrink-0" />
                    <div className="flex-1 p-3 py-2.5 flex justify-between items-start gap-3">
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-bold text-gray-500">
                          {item.title}
                        </p>
                        <p className="text-[11px] font-black text-gray-900 leading-tight line-clamp-1">
                          {item.value}
                        </p>
                      </div>
                      <p className="text-[9px] font-extrabold text-gray-400 text-right shrink-0 mt-0.5">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Quick Facts & Roommates */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <div className="space-y-2">
                <h3 className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                  Quick Facts
                </h3>
                <Card className="border-gray-100 shadow-none rounded-none border bg-white">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest font-mono">
                        Stay duration
                      </p>
                      <p className="text-[11px] font-black text-gray-900">
                        12 weeks
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest font-mono">
                        Parent access
                      </p>
                      <p className="text-[11px] font-black text-gray-900">On</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest font-mono">
                        Last warden visit
                      </p>
                      <p className="text-[11px] font-black text-gray-900">
                        1 week ago
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest font-mono">
                        Gate passes
                      </p>
                      <p className="text-[11px] font-black text-gray-900">8</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <h3 className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                  Room mates
                </h3>
                <Card className="border-gray-100 shadow-none rounded-none border bg-white hover:bg-gray-50/50 transition-colors cursor-pointer group">
                  <CardContent className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 rounded-md border border-gray-100 bg-gray-50 flex items-center justify-center text-[10px] font-black text-gray-400">
                        <AvatarFallback className="bg-transparent text-gray-600">
                          CN
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-0.5">
                        <h3 className="font-black text-[11px] text-gray-900 leading-none">
                          Amara Osei
                        </h3>
                        <div className="flex items-center gap-1.5 pt-0.5">
                          <p className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest font-mono">
                            STU001
                          </p>
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 text-gray-500 font-black text-[8px] px-1.5 py-0 h-4 w-fit border-none uppercase tracking-widest"
                          >
                            Room A102
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="size-3.5 text-gray-300 group-hover:text-gray-500 transition-colors" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Fees Tab */}
        {activeTab === "Fees" && (
          <div className="flex flex-col space-y-4">
            <div className="space-y-1">
              <h2 className="text-[13px] font-black tracking-tight text-gray-900 leading-none">
                Fee Record
              </h2>
              <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                5 records
              </p>
            </div>

            <div className="border border-gray-100 bg-white rounded-none">
              <Table>
                <TableHeader className="bg-[#e9ecef] border-b-gray-200">
                  <TableRow className="border-none hover:bg-transparent">
                    <TableHead className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest h-10 px-5">
                      Description
                    </TableHead>
                    <TableHead className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest h-10 px-5">
                      Amount
                    </TableHead>
                    <TableHead className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest h-10 px-5">
                      Paid
                    </TableHead>
                    <TableHead className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest h-10 px-5">
                      Balance
                    </TableHead>
                    <TableHead className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest h-10 px-5">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feeRecords.map((record, idx) => (
                    <TableRow
                      key={record.id}
                      className="border-b border-gray-100 hover:bg-gray-50/50"
                    >
                      <TableCell className="text-[11px] font-bold text-gray-900 px-5 py-4">
                        {record.description}
                      </TableCell>
                      <TableCell className="text-[11px] font-bold text-gray-900 px-5 py-4">
                        {record.amount}
                      </TableCell>
                      <TableCell className="text-[11px] font-bold text-gray-900 px-5 py-4">
                        {record.paid}
                      </TableCell>
                      <TableCell className="text-[11px] font-bold text-gray-900 px-5 py-4">
                        {record.balance}
                      </TableCell>
                      <TableCell className="px-5 py-4">
                        <Badge
                          variant="outline"
                          className="rounded-full px-2.5 py-0.5 text-[9px] font-black border-gray-200 text-gray-600 bg-transparent flex items-center w-fit"
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination / Footer */}
            <div className="flex items-center justify-between pt-2">
              <p className="text-[10px] font-bold text-slate-500">
                1 of 50 row(s) selected.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="h-8 px-4 rounded-md text-[9px] font-black uppercase tracking-wider border-gray-200 text-gray-600 shadow-none hover:bg-gray-50"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  className="h-8 px-4 rounded-md text-[9px] font-black uppercase tracking-wider border-gray-200 text-gray-600 shadow-none hover:bg-gray-50"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Maintenance Tab */}
        {activeTab === "Maintainance" && (
          <div className="flex flex-col space-y-4">
            <div className="space-y-1">
              <h2 className="text-[13px] font-black tracking-tight text-gray-900 leading-none">
                Maintenance Record
              </h2>
              <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                3 records
              </p>
            </div>

            <div className="border border-gray-100 bg-white rounded-none">
              <Table>
                <TableHeader className="bg-[#e9ecef] border-b-gray-200">
                  <TableRow className="border-none hover:bg-transparent">
                    <TableHead className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest h-10 px-5">
                      Issue
                    </TableHead>
                    <TableHead className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest h-10 px-5">
                      Date Reported
                    </TableHead>
                    <TableHead className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest h-10 px-5">
                      Priority
                    </TableHead>
                    <TableHead className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest h-10 px-5">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {maintenanceRecords.map((record) => (
                    <TableRow
                      key={record.id}
                      className="border-b border-gray-100 hover:bg-gray-50/50"
                    >
                      <TableCell className="text-[11px] font-bold text-gray-900 px-5 py-4 w-1/2">
                        {record.issue}
                      </TableCell>
                      <TableCell className="text-[11px] font-bold text-gray-900 px-5 py-4">
                        {record.date}
                      </TableCell>
                      <TableCell className="px-5 py-4">
                        <Badge
                          variant="outline"
                          className={`rounded-md px-2 py-0.5 text-[9px] font-black w-fit uppercase tracking-wider ${
                            record.priority === "High"
                              ? "text-red-600 bg-red-50 border-red-200"
                              : record.priority === "Medium"
                                ? "text-orange-600 bg-orange-50 border-orange-200"
                                : "text-green-600 bg-green-50 border-green-200"
                          }`}
                        >
                          {record.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-5 py-4">
                        <Badge
                          variant="outline"
                          className={`rounded-full px-2.5 py-0.5 text-[9px] font-black flex items-center w-fit ${
                            record.status === "Pending"
                              ? "border-gray-200 text-gray-600 bg-transparent"
                              : "border-green-200 text-green-700 bg-green-50/50"
                          }`}
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination / Footer */}
            <div className="flex items-center justify-between pt-2">
              <p className="text-[10px] font-bold text-slate-500">
                1 of 3 row(s) selected.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="h-8 px-4 rounded-md text-[9px] font-black uppercase tracking-wider border-gray-200 text-gray-600 shadow-none hover:bg-gray-50 opacity-50 cursor-not-allowed"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  className="h-8 px-4 rounded-md text-[9px] font-black uppercase tracking-wider border-gray-200 text-gray-600 shadow-none hover:bg-gray-50 opacity-50 cursor-not-allowed"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Empty states for other tabs */}
        {activeTab !== "Overview" &&
          activeTab !== "Fees" &&
          activeTab !== "Maintainance" && (
            <div className="min-h-[400px] border border-gray-100 rounded-none bg-white flex items-center justify-center">
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                No {activeTab} data available
              </p>
            </div>
          )}
      </div>
    </div>
  );
}
