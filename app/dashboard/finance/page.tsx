"use client";

import {
  ArrowUpDown,
  Download,
  FileText,
  MoreHorizontal,
  Plus,
  Receipt,
  Search,
  TrendingUp,
} from "lucide-react";
import type * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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

const financeStats = [
  {
    title: "TOTAL BILLED",
    value: "$1,250.00",
    subtext: "124",
    sublabel: "invoiced issued",
    data: [30, 45, 35, 50, 40, 60, 55],
  },
  {
    title: "COLLECTED",
    value: "451 / 500",
    subtext: "87.3%",
    sublabel: "collection this week",
    trend: "up",
    data: [20, 30, 40, 35, 45, 50, 60],
  },
  {
    title: "OUTSTANDING",
    value: "GHC 298.4K",
    subtext: "34",
    sublabel: "residents",
    data: [60, 50, 55, 45, 40, 35, 30],
  },
  {
    title: "OVERDUE",
    value: "GHC 43.4K",
    subtext: "8",
    sublabel: "residents past overdue",
    data: [10, 15, 12, 18, 14, 20, 15],
  },
];

const collectionData = [
  { name: "Block A", collected: 400, outstanding: 100 },
  { name: "Block B", collected: 250, outstanding: 150 },
  { name: "Block C", collected: 180, outstanding: 70 },
  { name: "Block D", collected: 150, outstanding: 50 },
  { name: "Block E", collected: 100, outstanding: 40 },
  { name: "Block F", collected: 120, outstanding: 30 },
  { name: "Block G", collected: 80, outstanding: 20 },
];

const feeRecords = [
  {
    resident: "Amara Osei",
    id: "A101",
    block: "Block A • Floor 1",
    type: "Full Year",
    amount: "GHC 4,500",
    status: "Paid",
  },
  {
    resident: "Kwame Boateng",
    id: "A102",
    block: "Block A • Floor 1",
    type: "Semester",
    amount: "GHC 2,250",
    status: "Pending",
  },
  {
    resident: "Abena Mansa",
    id: "A103",
    block: "Block A • Floor 1",
    type: "Full Year",
    amount: "GHC 4,500",
    status: "Paid",
  },
  {
    resident: "Kofi Mensah",
    id: "A104",
    block: "Block A • Floor 1",
    type: "Semester",
    amount: "GHC 2,250",
    status: "Overdue",
  },
  {
    resident: "Efua Appiah",
    id: "A105",
    block: "Block A • Floor 1",
    type: "Full Year",
    amount: "GHC 4,500",
    status: "Paid",
  },
];

export default function FinancePage() {
  return (
    <div className="flex flex-col space-y-8 py-4 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 leading-tight">
            Fees & Billing Management
          </h1>
          <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">
            Semester 2 — 2024/2025 Academic Year
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="h-10 border-gray-100 bg-white shadow-sm text-gray-600 font-bold text-xs px-4 rounded-xl"
          >
            <Download className="mr-2 size-4" />
            Export Report
          </Button>
          <Button className="h-10 bg-[#18181b] hover:bg-black text-white shadow-md font-bold text-xs px-4 rounded-xl">
            <Receipt className="mr-2 size-4" />
            Generate Invoice
          </Button>
        </div>
      </div>

      {/* Stats Cards with Sparklines */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {financeStats.map((stat) => (
          <Card
            key={stat.title}
            className="border-gray-100 shadow-none border rounded-xl bg-white overflow-hidden"
          >
            <div className="p-6 pb-2">
              <CardTitle className="text-[9px] font-extrabold text-gray-400 uppercase tracking-[0.2em] mb-4">
                {stat.title}
              </CardTitle>
              <div className="flex items-end justify-between">
                <div className="space-y-4">
                  <span className="text-2xl font-black text-gray-900 leading-none whitespace-nowrap">
                    {stat.value}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-gray-100 text-[9px] font-bold text-gray-500 w-fit">
                    {stat.trend === "up" && (
                      <span className="text-gray-900">↑ {stat.subtext}</span>
                    )}
                    {!stat.trend && (
                      <span className="text-gray-900">{stat.subtext}</span>
                    )}
                    <span className="text-gray-400 font-medium">
                      {stat.sublabel}
                    </span>
                  </div>
                </div>
                <div className="h-10 w-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={stat.data.map((v, idx) => ({ value: v, idx }))}
                    >
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Collection Progress Chart */}
      <Card className="border-gray-100 shadow-none rounded-2xl border bg-white overflow-hidden">
        <CardHeader className="px-8 pt-8 pb-0">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-base font-bold text-gray-900">
                Collection Progress
              </CardTitle>
              <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-widest">
                Semester 2 billing cycle
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-blue-600" />
                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                  Collected
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-red-500" />
                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                  Outstanding
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-8 pt-12">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={collectionData}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              >
                <CartesianGrid vertical={false} stroke="#f3f4f6" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#9ca3af" }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#9ca3af" }}
                />
                <Tooltip
                  cursor={{ fill: "#f9fafb" }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar
                  dataKey="collected"
                  fill="#2563eb"
                  radius={[4, 4, 0, 0]}
                  barSize={60}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Fee Record Table */}
      <div className="space-y-6 pt-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-gray-900">Fee Record</h2>
          <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-widest">
            5 records
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-3 max-w-md">
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
          </div>
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
                  Block/Floor
                </TableHead>
                <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                  Type
                </TableHead>
                <TableHead className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 h-12">
                  Amount
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
              {feeRecords.map((record) => (
                <TableRow
                  key={record.id}
                  className="border-gray-50 hover:bg-gray-50/30 transition-colors"
                >
                  <TableCell className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-900">
                        {record.resident}
                      </span>
                      <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">
                        {record.id}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-medium text-gray-500">
                    {record.block}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-medium text-gray-500">
                    {record.type}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-bold text-gray-900">
                    {record.amount}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge
                      variant="outline"
                      className={`rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-widest border-none ${
                        record.status === "Paid"
                          ? "bg-green-50 text-green-600"
                          : record.status === "Pending"
                            ? "bg-yellow-50 text-yellow-600"
                            : "bg-red-50 text-red-600"
                      }`}
                    >
                      {record.status}
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
                          View Invoice
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs font-bold rounded-lg">
                          Record Payment
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs font-bold rounded-lg">
                          Send Reminder
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
              1 of 5 row(s) selected.
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

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Chevron Down"
    >
      <title>Chevron Down</title>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
