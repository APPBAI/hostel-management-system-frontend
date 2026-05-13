"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  BadgeCheck,
  Download,
  ExternalLink,
  MessageSquare,
  MoreVertical,
  Phone,
  Plus,
  Search,
} from "lucide-react";
import * as React from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const residents = [
  {
    id: "STU001",
    name: "Amara Osei",
    room: "A101",
    course: "Computer Science",
    level: "200",
    status: "In",
    fees: "Clear",
    requests: "1 Open",
    phone: "+233 34 334 3323",
  },
  {
    id: "STU002",
    name: "Kwame Boateng",
    room: "B204",
    course: "Business Admin",
    level: "400",
    status: "Away",
    fees: "GHC 450",
    requests: "None",
    phone: "+233 34 334 3323",
  },
  {
    id: "STU003",
    name: "Amara Osei",
    room: "A102",
    course: "Computer Science",
    level: "200",
    status: "In",
    fees: "GHC 450",
    requests: "None",
    phone: "+233 34 334 3323",
  },
  // Adding more mock data to fill the grid
  {
    id: "STU004",
    name: "Abena Mansa",
    room: "C301",
    course: "Nursing",
    level: "100",
    status: "In",
    fees: "Clear",
    requests: "None",
    phone: "+233 34 334 3323",
  },
  {
    id: "STU005",
    name: "Kofi Mensah",
    room: "A101",
    course: "Law",
    level: "300",
    status: "Away",
    fees: "Clear",
    requests: "1 Open",
    phone: "+233 34 334 3323",
  },
  {
    id: "STU006",
    name: "Efua Appiah",
    room: "B102",
    course: "Medicine",
    level: "500",
    status: "In",
    fees: "GHC 1,200",
    requests: "None",
    phone: "+233 34 334 3323",
  },
  {
    id: "STU007",
    name: "Yaw Asante",
    room: "D205",
    course: "Mechanical Eng.",
    level: "300",
    status: "In",
    fees: "Clear",
    requests: "None",
    phone: "+233 34 334 3323",
  },
  {
    id: "STU008",
    name: "Nana Yaa",
    room: "A202",
    course: "Psychology",
    level: "200",
    status: "Away",
    fees: "GHC 600",
    requests: "None",
    phone: "+233 34 334 3323",
  },
];

const filters = [
  "All",
  "Block A",
  "Block B",
  "Checked In",
  "Away",
  "Outstanding Fees",
];

export default function ResidentsPage() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  return (
    <div className="flex flex-col space-y-4 pt-1 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 leading-tight">
            Residents
          </h1>
          <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">
            24 registered residents
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-9 border-gray-100 bg-white shadow-none text-gray-600 font-black text-[10px] px-4 rounded-md uppercase tracking-wider"
          >
            <Download className="mr-2 size-3.5" />
            Export CSV
          </Button>
          <Button className="h-9 bg-black hover:bg-black/90 text-white shadow-none font-black text-[10px] px-4 rounded-md uppercase tracking-wider">
            <Plus className="mr-2 size-3.5" />
            Add Resident
          </Button>
        </div>
      </div>

      {/* Filter Tabs - Segmented Control Style with Sliding Animation */}
      <div className="flex w-fit items-center border border-gray-100 rounded-md p-1 bg-white shadow-none overflow-hidden">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative h-7 px-4 rounded-md text-[9px] font-black uppercase tracking-wider transition-colors whitespace-nowrap z-10 ${
              activeFilter === filter
                ? "text-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gray-100 rounded-md -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {filter}
          </button>
        ))}
      </div>

      {/* Residents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {residents.map((resident) => (
          <Card
            key={resident.id}
            className="border-gray-100 shadow-none rounded-none overflow-hidden hover:shadow-sm transition-all duration-300 border bg-white"
          >
            <CardContent className="p-4 space-y-4">
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar className="h-14 w-14 rounded-md border border-gray-100 bg-gray-50 flex items-center justify-center text-xs font-black text-gray-400">
                    <AvatarFallback className="bg-transparent">
                      {resident.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 mt-0.5">
                    <h3 className="font-bold text-[12px] text-gray-900 leading-none">
                      {resident.name}
                    </h3>
                    <p className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                      {resident.id}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-gray-500 font-black text-[8px] px-2 py-0 h-4 w-fit border-none uppercase tracking-widest shrink-0"
                      >
                        Room {resident.room}
                      </Badge>
                      <p className="text-[8px] text-gray-400 font-bold leading-none whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px]">
                        {resident.course} . Level {resident.level}
                      </p>
                    </div>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={`rounded-md px-1.5 py-0 text-[8px] font-black uppercase tracking-widest border-none h-4 ${
                    resident.status === "In"
                      ? "bg-gray-100 text-gray-400"
                      : "bg-gray-50 text-gray-300"
                  }`}
                >
                  {resident.status}
                </Badge>
              </div>

              {/* Metrics Section */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#f9fafb] rounded-md p-3.5 space-y-1.5 border border-gray-50/50">
                  <p className="text-[7.5px] font-extrabold text-gray-400 uppercase tracking-[0.2em] leading-none">
                    Outstanding Fees
                  </p>
                  <div className="flex items-center gap-1.5">
                    {resident.fees === "Clear" ? (
                      <>
                        <BadgeCheck className="size-3.5 text-gray-900" />
                        <span className="text-[10px] font-bold text-gray-900">
                          Clear
                        </span>
                      </>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-900">
                        {resident.fees}
                      </span>
                    )}
                  </div>
                </div>
                <div className="bg-[#f9fafb] rounded-md p-3.5 space-y-1.5 border border-gray-50/50">
                  <p className="text-[7.5px] font-extrabold text-gray-400 uppercase tracking-[0.2em] leading-none">
                    Active Request
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-gray-900">
                      {resident.requests === "None"
                        ? "None"
                        : resident.requests}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-0.5">
                <div className="flex items-center gap-1 text-[9px] font-black text-gray-900">
                  <Phone className="size-3 text-gray-300" />
                  <span className="tracking-tight text-[9px] font-bold text-gray-600">
                    {resident.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 border-gray-100 rounded-md text-[9px] font-black text-gray-600 px-3 hover:bg-gray-50 shadow-none"
                  >
                    <MessageSquare className="mr-1.5 size-3 text-gray-400" />
                    Message
                  </Button>
                  <Button className="h-8 bg-black hover:bg-black/90 text-white rounded-md text-[9px] font-black px-4 shadow-none transition-all">
                    View Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
