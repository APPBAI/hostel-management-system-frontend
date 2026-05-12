"use client";

import {
  AlertTriangle,
  ArrowUpDown,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  MoreHorizontal,
  Plus,
  Search,
  Wrench,
} from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const maintenanceStats = [
  { title: "TOTAL REQUESTS", value: "156", subtext: "This semester" },
  { title: "ACTIVE", value: "12", subtext: "8 urgent", alert: true },
  { title: "PENDING", value: "4", subtext: "Awaiting parts" },
  { title: "COMPLETED", value: "140", subtext: "98% satisfaction" },
];

const maintenanceEntries = [
  {
    id: "MNT-001",
    resident: "Amara Osei",
    room: "A101",
    issue: "Broken light fixture",
    priority: "Medium",
    status: "In Progress",
    date: "2025-04-30",
  },
  {
    id: "MNT-002",
    resident: "Kwame Boateng",
    room: "B204",
    issue: "Leaking faucet",
    priority: "High",
    status: "Pending",
    date: "2025-04-29",
  },
  {
    id: "MNT-003",
    resident: "Abena Mansa",
    room: "C301",
    issue: "Door lock issue",
    priority: "Critical",
    status: "Active",
    date: "2025-04-30",
  },
  {
    id: "MNT-004",
    resident: "Kofi Mensah",
    room: "A101",
    issue: "AC not cooling",
    priority: "Low",
    status: "Completed",
    date: "2025-04-25",
  },
  {
    id: "MNT-005",
    resident: "Efua Appiah",
    room: "B102",
    issue: "Internet port broken",
    priority: "Medium",
    status: "In Progress",
    date: "2025-04-28",
  },
];

export default function MaintenancePage() {
  return (
    <div className="flex flex-col space-y-8 py-4 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 leading-tight">
            Maintenance
          </h1>
          <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">
            Manage and track facility repairs
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="h-10 border-gray-100 bg-white shadow-sm text-gray-600 font-bold text-xs px-4 rounded-xl"
          >
            <Download className="mr-2 size-4" />
            Export CSV
          </Button>
          <Button className="h-10 bg-[#18181b] hover:bg-black text-white shadow-md font-bold text-xs px-4 rounded-xl">
            <Plus className="mr-2 size-4" />
            New Request
          </Button>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {maintenanceStats.map((stat) => (
          <Card
            key={stat.title}
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
                {stat.alert ? (
                  <span className="text-red-500 font-black uppercase tracking-widest">
                    {stat.subtext}
                  </span>
                ) : (
                  <span className="font-bold text-gray-400 uppercase tracking-widest">
                    {stat.subtext}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Maintenance Log Table */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-gray-900">Request Log</h2>
            <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-widest">
              Active & Recent tickets
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-gray-100 p-1 rounded-xl">
              {["All", "Active", "Pending", "Completed"].map((tab) => (
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
              placeholder="Search by issue or resident"
              className="pl-10 h-10 border-gray-100 bg-white shadow-sm rounded-xl text-xs font-medium focus:ring-0 focus:border-gray-200"
            />
          </div>
          <Button
            variant="outline"
            className="h-10 border-gray-100 bg-white shadow-sm rounded-xl px-4 text-xs font-bold text-gray-600"
          >
            Priority <ChevronDown className="ml-2 size-3" />
          </Button>
          <Button
            variant="outline"
            className="h-10 border-gray-100 bg-white shadow-sm rounded-xl px-4 text-xs font-bold text-gray-600"
          >
            Assignee <ChevronDown className="ml-2 size-3" />
          </Button>
        </div>

        <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow className="border-gray-100 hover:bg-transparent">
                <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                  Ticket ID
                </TableHead>
                <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                  Resident / Room
                </TableHead>
                <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                  Issue Description
                </TableHead>
                <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                  Priority
                </TableHead>
                <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                  <div className="flex items-center gap-2">
                    Status <ArrowUpDown className="size-3" />
                  </div>
                </TableHead>
                <TableHead className="w-12 h-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {maintenanceEntries.map((entry) => (
                <TableRow
                  key={entry.id}
                  className="border-gray-50 hover:bg-gray-50/30 transition-colors"
                >
                  <TableCell className="px-6 py-4 text-xs font-bold text-gray-900">
                    {entry.id}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-900">
                        {entry.resident}
                      </span>
                      <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">
                        Room {entry.room}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-medium text-gray-500">
                    {entry.issue}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`size-1.5 rounded-full ${
                          entry.priority === "Critical"
                            ? "bg-red-600"
                            : entry.priority === "High"
                              ? "bg-orange-500"
                              : entry.priority === "Medium"
                                ? "bg-blue-500"
                                : "bg-gray-300"
                        }`}
                      />
                      <span className="text-xs font-bold text-gray-900">
                        {entry.priority}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge
                      variant="outline"
                      className={`rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-widest border-none ${
                        entry.status === "Active"
                          ? "bg-red-50 text-red-600"
                          : entry.status === "In Progress"
                            ? "bg-blue-50 text-blue-600"
                            : entry.status === "Pending"
                              ? "bg-yellow-50 text-yellow-600"
                              : "bg-green-50 text-green-600"
                      }`}
                    >
                      {entry.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={(props) => (
                          <button
                            {...props}
                            type="button"
                            className={cn(
                              buttonVariants({
                                variant: "ghost",
                                size: "icon",
                              }),
                              "size-8 p-0",
                            )}
                          >
                            <MoreHorizontal className="size-4 text-gray-400" />
                          </button>
                        )}
                      />
                      <DropdownMenuContent
                        align="end"
                        className="rounded-xl border-gray-100"
                      >
                        <DropdownMenuItem className="text-xs font-bold rounded-lg">
                          Update Status
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs font-bold rounded-lg">
                          Assign Staff
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs font-bold rounded-lg text-red-600">
                          Close Ticket
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="px-6 py-4 border-t border-gray-50 bg-white flex items-center justify-between">
            <span className="text-[10px] font-bold text-gray-400">
              Showing 5 of 156 tickets.
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
  );
}
