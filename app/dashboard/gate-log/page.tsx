"use client";

import {
  ArrowRightLeft,
  ChevronDown,
  Clock,
  Download,
  History,
  QrCode,
  Scan,
  Search,
  ShieldAlert,
  UserPlus,
} from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const gateStats = [
  { title: "TODAY: EXITS", value: "54", subtext: "" },
  { title: "TODAY: ENTRIES", value: "34", subtext: "71%", trend: "up" },
  { title: "AWAY (OFF CAMPUS)", value: "15", subtext: "Expected Back tonight" },
  { title: "ALERTS", value: "0", subtext: "Past Curfew", alert: true },
];

const logEntries = [
  {
    resident: "Amara Osei",
    id: "A101",
    time: "2025-04-30 08:14",
    type: "Exit",
    method: "QR Code",
    status: "Approved",
  },
  {
    resident: "Amara Osei",
    id: "A101",
    time: "2025-04-30 08:14",
    type: "Entry",
    method: "QR Code",
    status: "Approved",
  },
  {
    resident: "Amara Osei",
    id: "A101",
    time: "2025-04-30 08:14",
    type: "Exit",
    method: "ID",
    status: "Approved",
  },
  {
    resident: "Amara Osei",
    id: "A101",
    time: "2025-04-30 08:14",
    type: "Entry",
    method: "QR Code",
    status: "Alert",
  },
  {
    resident: "Amara Osei",
    id: "A101",
    time: "2025-04-30 08:14",
    type: "Entry",
    method: "ID",
    status: "Alert",
  },
];

export default function GateLogPage() {
  return (
    <div className="flex flex-col space-y-8 py-4 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 leading-tight">
            Gate & Visitor Management
          </h1>
          <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">
            Real-time entry / exit log
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="h-10 border-gray-100 bg-white shadow-sm text-gray-600 font-bold text-xs px-4 rounded-xl"
          >
            <Download className="mr-2 size-4" />
            Export Log
          </Button>
          <Button className="h-10 bg-red-600 hover:bg-red-700 text-white shadow-md font-black text-xs px-4 rounded-xl uppercase tracking-wider">
            <ShieldAlert className="mr-2 size-4" />
            Emergency Lockdown
          </Button>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {gateStats.map((stat, i) => (
          <Card
            key={i}
            className="border-gray-100 shadow-none border rounded-xl bg-white p-6"
          >
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-[9px] font-extrabold text-gray-400 uppercase tracking-[0.2em]">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3">
              <span className="text-2xl font-black text-gray-900 whitespace-nowrap">
                {stat.value}
              </span>
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-400">
                {stat.trend === "up" && (
                  <span className="text-gray-900">{stat.subtext} ↑</span>
                )}
                {stat.alert && (
                  <span className="text-red-500">↓ {stat.subtext}</span>
                )}
                {!stat.trend && !stat.alert && <span>{stat.subtext}</span>}
                {stat.trend && (
                  <span className="font-medium ml-1">vs Last Week</span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Gate Officer Panel */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="border-gray-100 shadow-none rounded-2xl border bg-white overflow-hidden">
            <CardHeader className="px-6 py-4 border-b border-gray-50 bg-gray-50/30">
              <CardTitle className="text-sm font-bold text-gray-900">
                Gate Officer Panel
              </CardTitle>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                Scan QR or search by ID
              </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* QR Scan Area */}
              <div className="aspect-square w-full rounded-2xl border-2 border-dashed border-gray-100 flex flex-col items-center justify-center space-y-4 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="size-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-colors">
                  <QrCode className="size-8" />
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-bold text-gray-900">
                    Tap to scan QR code
                  </p>
                  <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">
                    or use ID lookup below
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Enter student ID..."
                  className="h-11 border-gray-100 bg-gray-50/50 rounded-xl text-xs font-medium focus:ring-0 focus:border-gray-200"
                />
                <div className="grid grid-cols-2 gap-3">
                  <Button className="h-10 bg-black hover:bg-black/90 text-white font-bold text-[11px] rounded-xl uppercase tracking-wider">
                    Mark Entry
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 border-gray-100 text-gray-600 font-bold text-[11px] rounded-xl uppercase tracking-wider"
                  >
                    Mark Exit
                  </Button>
                </div>
              </div>

              {/* Recent Activity List */}
              <div className="pt-4 border-t border-gray-50 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-50 bg-white">
                  <div className="size-2 rounded-full bg-black" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 truncate">
                      Amara Osei
                    </p>
                    <p className="text-[9px] text-gray-400 font-bold uppercase">
                      Entry • 10:45 AM • QR scan
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-gray-50 border-none text-[9px] font-black text-gray-400 h-5 px-1.5 uppercase"
                  >
                    Entry
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Gate Log Table */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-gray-900">Gate Log</h2>
              <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-widest">
                1 June, 2025
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex bg-gray-100 p-1 rounded-xl">
                {["All", "Entries", "Exits"].map((tab) => (
                  <Button
                    key={tab}
                    variant="ghost"
                    className={`h-7 px-4 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                      tab === "All"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-300" />
              <Input
                placeholder="Search by Resident"
                className="pl-10 h-10 border-gray-100 bg-white shadow-sm rounded-xl text-xs font-medium focus:ring-0 focus:border-gray-200"
              />
            </div>
            <Button
              variant="outline"
              className="h-10 border-gray-100 bg-white shadow-sm rounded-xl px-4 text-xs font-bold text-gray-600"
            >
              Status <ChevronDown className="ml-2 size-3" />
            </Button>
            <Button
              variant="outline"
              className="h-10 border-gray-100 bg-white shadow-sm rounded-xl px-4 text-xs font-bold text-gray-600"
            >
              View
            </Button>
          </div>

          <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-gray-50/50">
                <TableRow className="border-gray-100 hover:bg-transparent">
                  <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                    Resident
                  </TableHead>
                  <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                    Time
                  </TableHead>
                  <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                    Type
                  </TableHead>
                  <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                    Method
                  </TableHead>
                  <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logEntries.map((entry, idx) => (
                  <TableRow
                    key={idx}
                    className="border-gray-50 hover:bg-gray-50/30 transition-colors"
                  >
                    <TableCell className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-900">
                          {entry.resident}
                        </span>
                        <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">
                          {entry.id}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-xs font-medium text-gray-500">
                      {entry.time}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-xs font-medium text-gray-500">
                      {entry.type}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-xs font-medium text-gray-500">
                      {entry.method}
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Badge
                        variant="outline"
                        className={`rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-widest border-none ${
                          entry.status === "Approved"
                            ? "bg-gray-100 text-gray-400"
                            : "bg-red-50 text-red-400"
                        }`}
                      >
                        {entry.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="px-6 py-4 border-t border-gray-50 bg-white flex items-center justify-between">
              <span className="text-[10px] font-bold text-gray-400">
                1 of 50 row(s) selected.
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-gray-100 text-[10px] font-bold px-3 rounded-lg"
                  disabled
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-gray-100 text-[10px] font-bold px-3 rounded-lg"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Registration Section */}
      <Card className="border-gray-100 shadow-none rounded-2xl border bg-white overflow-hidden mt-8">
        <CardHeader className="px-8 pt-8">
          <CardTitle className="text-lg font-bold text-gray-900">
            Register Visitor
          </CardTitle>
          <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-widest">
            Entry registration for non-residents
          </p>
        </CardHeader>
        <CardContent className="px-8 pb-8 space-y-8">
          {/* Large QR Scan Area */}
          <div className="w-full h-48 rounded-2xl border-2 border-dashed border-gray-100 flex flex-col items-center justify-center space-y-4 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="size-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-colors">
              <Scan className="size-8" />
            </div>
            <div className="text-center">
              <p className="text-[11px] font-bold text-gray-900">
                Tap to scan QR code
              </p>
              <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">
                or use ID lookup below
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Visitor Name
              </p>
              <Input
                placeholder="John Doe"
                className="h-11 border-gray-100 bg-white rounded-xl text-xs font-medium"
              />
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                ID Number
              </p>
              <Input
                placeholder="National ID / Passport"
                className="h-11 border-gray-100 bg-white rounded-xl text-xs font-medium"
              />
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Visiting Resident
              </p>
              <Input
                placeholder="Resident ID or name"
                className="h-11 border-gray-100 bg-white rounded-xl text-xs font-medium"
              />
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Purpose
              </p>
              <Select>
                <SelectTrigger className="h-11 border-gray-100 bg-white rounded-xl text-xs font-medium text-gray-400">
                  <SelectValue placeholder="Select Purpose" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-gray-100">
                  <SelectItem value="visit">Personal Visit</SelectItem>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="maintenance">
                    External Maintenance
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button className="h-11 bg-black hover:bg-black/90 text-white font-bold text-[11px] px-8 rounded-xl uppercase tracking-wider shadow-md">
              <UserPlus className="mr-2 size-4" />
              Register and Issue Badge
            </Button>
            <Button
              variant="outline"
              className="h-11 border-gray-100 text-gray-400 font-bold text-[11px] px-6 rounded-xl uppercase tracking-wider"
            >
              Clear
            </Button>
          </div>

          {/* Recent Visitor Activity */}
          <div className="pt-8 border-t border-gray-50">
            <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-gray-50/30">
              <div className="flex items-center gap-4">
                <div className="size-2 rounded-full bg-black" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-900">
                    Amara Osei
                  </span>
                  <span className="text-[9px] text-gray-400 font-bold uppercase">
                    Entry • 10:45 AM • QR scan
                  </span>
                </div>
              </div>
              <Badge
                variant="outline"
                className="bg-white border-gray-200 text-[9px] font-black text-gray-400 h-6 px-3 uppercase tracking-wider rounded-lg"
              >
                Entry
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
