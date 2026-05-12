"use client";

import { motion } from "framer-motion";
import {
  ArrowUpDown,
  ChevronDown,
  Download,
  MoreHorizontal,
  Plus,
  PlusCircle,
  Search,
  SlidersHorizontal,
  TrendingUp,
  X,
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

const roomStats = [
  { title: "TOTAL BEDS", value: "48", subtext: "" },
  { title: "OCCUPIED", value: "34", subtext: "71%", trend: "up" },
  { title: "MAINTENANCE", value: "3", subtext: "" },
  { title: "RESERVED", value: "0", subtext: "" },
];

const rooms = Array.from({ length: 21 }).map((_, i) => ({
  id: "A101",
  type: "Single Room",
  capacity: "1/1",
  status:
    i % 4 === 0
      ? "Occupied"
      : i % 4 === 1
        ? "Vacant"
        : i % 4 === 2
          ? "Reserved"
          : "Maintenance",
}));

const roomData = [
  {
    id: "A101",
    block: "Block A • Floor 1",
    type: "Single",
    capacity: "1/1",
    status: "Occupied",
  },
  {
    id: "A102",
    block: "Block A • Floor 1",
    type: "Quadruple",
    capacity: "2/4",
    status: "Vacant",
  },
  {
    id: "A103",
    block: "Block A • Floor 1",
    type: "Double",
    capacity: "2/2",
    status: "Occupied",
  },
  {
    id: "A104",
    block: "Block A • Floor 1",
    type: "Double",
    capacity: "0/2",
    status: "Maintenance",
  },
  {
    id: "A105",
    block: "Block A • Floor 1",
    type: "Single",
    capacity: "0/1",
    status: "Vacant",
  },
];

export default function RoomsPage() {
  const [activeBlock, setActiveBlock] = React.useState("Block A");

  return (
    <div className="flex flex-col space-y-8 py-4 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 leading-tight">
            Rooms & Beds
          </h1>
          <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">
            Visual floor plan — colour coded by occupancy status
          </p>
        </div>
        <div className="flex items-center gap-3">
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

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {roomStats.map((stat) => (
          <Card
            key={stat.title}
            className="border-gray-100 shadow-none border rounded-none bg-white p-6"
          >
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-[9px] font-extrabold text-gray-400 uppercase tracking-[0.2em]">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex items-baseline gap-3">
              <span className="text-2xl font-black text-gray-900 whitespace-nowrap">
                {stat.value}
              </span>
              {stat.subtext && (
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-none border border-gray-100 text-[9px] font-bold text-gray-500">
                  <span className="text-gray-900">{stat.subtext}</span>
                  {stat.trend === "up" && (
                    <TrendingUp className="size-3 text-green-500" />
                  )}
                  <span className="text-gray-400 font-medium ml-1">
                    vs Last Week
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Floor Plan Section */}
      <div className="space-y-6">
        <div className="flex w-fit items-center border border-gray-100 rounded-md p-1 bg-white shadow-none overflow-hidden">
          {["Block A", "Block B", "Block C"].map((block) => (
            <button
              type="button"
              key={block}
              onClick={() => setActiveBlock(block)}
              className={`relative h-7 px-4 rounded-md text-[9px] font-black uppercase tracking-wider transition-colors whitespace-nowrap z-10 ${
                activeBlock === block
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {activeBlock === block && (
                <motion.div
                  layoutId="activeBlock"
                  className="absolute inset-0 bg-gray-100 rounded-md -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {block}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-8 py-2">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-gray-500" />
            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
              Occupied • 6
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-black" />
            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
              Vacant • 8
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-gray-200" />
            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
              Reserved • 9
            </span>
          </div>
          <div className="flex items-center gap-2">
            <X className="size-3 text-gray-400" strokeWidth={3} />
            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
              Maintenance
            </span>
          </div>
        </div>

        {/* Floor Grid */}
        <Card className="border-gray-100 shadow-none rounded-none border bg-[#78787833] overflow-hidden">
          <CardHeader className="bg-transparent border-b border-gray-100/50 px-6 py-4 flex flex-row items-center gap-2">
            <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest">
              {activeBlock}
            </span>
            <Badge
              variant="outline"
              className="bg-gray-100/50 border-gray-200 text-[8px] font-black text-gray-400 h-4 px-1.5 uppercase rounded-none border-none"
            >
              21 ROOMS
            </Badge>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="group relative bg-white border border-gray-100/80 rounded-none p-5 space-y-6 hover:shadow-sm hover:border-gray-200 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <Badge
                      variant="outline"
                      className="bg-gray-50/50 border-none text-[8px] font-bold text-gray-400 h-4 px-1 rounded-none"
                    >
                      {room.id}
                    </Badge>
                    {room.status === "Maintenance" ? (
                      <X className="size-2.5 text-gray-400" strokeWidth={3} />
                    ) : (
                      <div
                        className={`size-1.5 rounded-full ${
                          room.status === "Occupied"
                            ? "bg-gray-500"
                            : room.status === "Vacant"
                              ? "bg-black"
                              : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                  <div className="space-y-0.5 mt-auto">
                    <p className="text-[9px] font-bold text-gray-400 leading-tight">
                      {room.type}
                    </p>
                    <p className="text-[9px] font-bold text-gray-400">
                      {room.capacity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table Section */}
      <div className="space-y-6 pt-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-gray-900">ALL ROOMS RECORD</h2>
          <p className="text-sm text-gray-500">5 records</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-3 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-300" />
              <Input
                placeholder="Search by room Number"
                className="pl-10 h-10 border-gray-100 bg-white shadow-none rounded-md text-sm font-medium focus:ring-0 focus:border-gray-200"
              />
            </div>
            <Button
              variant="outline"
              className="h-10 border-gray-100 bg-white shadow-none rounded-md px-4 text-sm font-bold text-gray-600"
            >
              <PlusCircle className="mr-2 size-4" />
              Status
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-10 border-gray-100 bg-white shadow-none rounded-md px-4 text-sm font-bold text-gray-600"
            >
              <SlidersHorizontal className="mr-2 size-4" />
              View
            </Button>
          </div>
        </div>

        <div className="border border-gray-100 rounded-none bg-white overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-[#78787833]">
              <TableRow className="border-gray-100 hover:bg-transparent">
                <TableHead className="text-[11px] font-bold text-gray-500 uppercase tracking-wider px-6 h-12">
                  ROOM
                </TableHead>
                <TableHead className="text-[11px] font-bold text-gray-500 uppercase tracking-wider px-6 h-12">
                  BLOCK/FLOOR
                </TableHead>
                <TableHead className="text-[11px] font-bold text-gray-500 uppercase tracking-wider px-6 h-12">
                  TYPE
                </TableHead>
                <TableHead className="text-[11px] font-bold text-gray-500 uppercase tracking-wider px-6 h-12">
                  CAPACITY
                </TableHead>
                <TableHead className="text-[11px] font-bold text-gray-500 uppercase tracking-wider px-6 h-12">
                  <div className="flex items-center gap-2">
                    STATUS <ArrowUpDown className="size-3" />
                  </div>
                </TableHead>
                <TableHead className="w-12 h-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {roomData.map((room) => (
                <TableRow
                  key={room.id}
                  className="border-gray-50 hover:bg-gray-50/30 transition-colors"
                >
                  <TableCell className="px-6 py-4 text-xs font-bold text-gray-900">
                    {room.id}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-medium text-gray-500">
                    {room.block}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-medium text-gray-500">
                    {room.type}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-medium text-gray-500">
                    {room.capacity}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge
                      variant="outline"
                      className={`rounded-md px-2.5 py-0.5 text-[10px] font-bold border-gray-200 ${
                        room.status === "Occupied"
                          ? "bg-white text-gray-900"
                          : room.status === "Vacant"
                            ? "bg-white text-gray-500"
                            : room.status === "Maintenance"
                              ? "bg-white text-gray-400"
                              : "bg-white text-gray-400"
                      }`}
                    >
                      {room.status}
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
                        className="rounded-lg border-gray-100"
                      >
                        <DropdownMenuItem className="text-xs font-bold rounded-lg">
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs font-bold rounded-lg">
                          Assign Resident
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs font-bold rounded-lg text-red-600">
                          Maintenance
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
              1 of 50 row(s) selected.
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-gray-200 text-[10px] font-bold px-3 rounded-md shadow-none"
                disabled
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-gray-200 text-[10px] font-bold px-3 rounded-md shadow-none"
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
