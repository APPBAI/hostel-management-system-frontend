"use client";

import * as React from "react";
import { 
  Plus, 
  Download, 
  Search, 
  UserCog, 
  MoreHorizontal,
  ArrowUpDown,
  ChevronDown,
  Mail,
  ShieldCheck,
  MapPin
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const staffStats = [
  { title: "TOTAL STAFF", value: "24", subtext: "Active contracts" },
  { title: "ON DUTY", value: "18", subtext: "Current shift" },
  { title: "LATE / AWAY", value: "2", subtext: "Unauthorized", alert: true },
  { title: "ON LEAVE", value: "4", subtext: "Approved" },
];

const staffEntries = [
  { name: "John Doe", id: "STF-001", role: "Maintenance Lead", block: "Block A & B", status: "On Duty", contact: "john@example.com" },
  { name: "Sarah Smith", id: "STF-002", role: "Resident Warden", block: "Block C", status: "On Duty", contact: "sarah@example.com" },
  { name: "Michael Kojo", id: "STF-003", role: "Security Officer", block: "Gate 1", status: "Away", contact: "michael@example.com" },
  { name: "Jane Afua", id: "STF-004", role: "Admin Assistant", block: "Office", status: "On Leave", contact: "jane@example.com" },
  { name: "Robert Mensah", id: "STF-005", role: "Maintenance", block: "General", status: "On Duty", contact: "robert@example.com" },
];

export default function StaffPage() {
  return (
    <div className="flex flex-col space-y-8 py-4 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 leading-tight">Staff Management</h1>
          <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">Personnel roster & duty tracking</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 border-gray-100 bg-white shadow-sm text-gray-600 font-bold text-xs px-4 rounded-xl">
            <Download className="mr-2 size-4" />
            Export Staff List
          </Button>
          <Button className="h-10 bg-[#18181b] hover:bg-black text-white shadow-md font-bold text-xs px-4 rounded-xl">
            <Plus className="mr-2 size-4" />
            Add Staff Member
          </Button>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {staffStats.map((stat, i) => (
          <Card key={i} className="border-gray-100 shadow-none border rounded-xl bg-white p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-[9px] font-extrabold text-gray-400 uppercase tracking-[0.2em]">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3">
              <span className="text-2xl font-black text-gray-900 whitespace-nowrap">{stat.value}</span>
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-400">
                {stat.alert ? (
                  <span className="text-red-500 font-black uppercase tracking-widest">{stat.subtext}</span>
                ) : (
                  <span className="font-bold text-gray-400 uppercase tracking-widest">{stat.subtext}</span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Staff Roster Table */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-gray-900">Staff Roster</h2>
            <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-widest">Active personnel</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-gray-100 p-1 rounded-xl">
              {["All", "On Duty", "Away", "On Leave"].map((tab) => (
                <Button
                  key={tab}
                  variant="ghost"
                  className={`h-7 px-4 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                    tab === "All" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"
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
              placeholder="Search by name or role" 
              className="pl-10 h-10 border-gray-100 bg-white shadow-sm rounded-xl text-xs font-medium focus:ring-0 focus:border-gray-200"
            />
          </div>
          <Button variant="outline" className="h-10 border-gray-100 bg-white shadow-sm rounded-xl px-4 text-xs font-bold text-gray-600">
            Role <ChevronDown className="ml-2 size-3" />
          </Button>
          <Button variant="outline" className="h-10 border-gray-100 bg-white shadow-sm rounded-xl px-4 text-xs font-bold text-gray-600">
            Block <ChevronDown className="ml-2 size-3" />
          </Button>
        </div>

        <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow className="border-gray-100 hover:bg-transparent">
                <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">Member</TableHead>
                <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">Role / Block</TableHead>
                <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">Contact</TableHead>
                <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                  <div className="flex items-center gap-2">
                    Status <ArrowUpDown className="size-3" />
                  </div>
                </TableHead>
                <TableHead className="w-12 h-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffEntries.map((staff) => (
                <TableRow key={staff.id} className="border-gray-50 hover:bg-gray-50/30 transition-colors">
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 rounded-xl border border-gray-100">
                        <AvatarFallback className="bg-gray-50 text-[10px] font-black text-gray-400">
                          {staff.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-900">{staff.name}</span>
                        <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">{staff.id}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-900">{staff.role}</span>
                      <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="size-2" /> {staff.block}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                      <Mail className="size-3 text-gray-300" />
                      {staff.contact}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge variant="outline" className={`rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-widest border-none ${
                      staff.status === 'On Duty' ? 'bg-green-50 text-green-600' : 
                      staff.status === 'Away' ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {staff.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={(props) => (
                          <button 
                            {...props} 
                            type="button"
                            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-8 p-0")}
                          >
                            <MoreHorizontal className="size-4 text-gray-400" />
                          </button>
                        )}
                      />
                      <DropdownMenuContent align="end" className="rounded-xl border-gray-100">
                        <DropdownMenuItem className="text-xs font-bold rounded-lg">View Profile</DropdownMenuItem>
                        <DropdownMenuItem className="text-xs font-bold rounded-lg">Assign Shift</DropdownMenuItem>
                        <DropdownMenuItem className="text-xs font-bold rounded-lg text-red-600">Remove Staff</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="px-6 py-4 border-t border-gray-50 bg-white flex items-center justify-between">
            <span className="text-[10px] font-bold text-gray-400">Showing 5 of 24 staff members.</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 border-gray-100 text-[10px] font-bold px-3 rounded-lg" disabled>Previous</Button>
              <Button variant="outline" size="sm" className="h-8 border-gray-100 text-[10px] font-bold px-3 rounded-lg">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
