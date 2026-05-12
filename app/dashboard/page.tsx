"use client";

import {
  AlertCircle,
  BedDouble,
  ChevronRight,
  CircleDollarSign,
  MoreVertical,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";

const kpiData = [
  {
    title: "OCCUPANCY",
    value: "$1,250.00",
    trend: "+12.5%",
    trendType: "up",
    subtext: "vs last week",
    chartData: [
      { value: 400 },
      { value: 300 },
      { value: 600 },
      { value: 400 },
      { value: 500 },
      { value: 800 },
      { value: 700 },
    ],
    color: "#3b82f6",
  },
  {
    title: "RESIDENTS",
    value: "451 / 500",
    trend: "4",
    trendType: "neutral",
    subtext: "new this week",
    chartData: [
      { value: 200 },
      { value: 400 },
      { value: 300 },
      { value: 500 },
      { value: 400 },
      { value: 600 },
      { value: 550 },
    ],
    color: "#3b82f6",
  },
  {
    title: "COLLECTED . THIS SEM",
    value: "GHC 298.4K",
    trend: "+12.5%",
    trendType: "up",
    subtext: "Strong user retention",
    chartData: [
      { value: 300 },
      { value: 500 },
      { value: 400 },
      { value: 700 },
      { value: 600 },
      { value: 900 },
      { value: 850 },
    ],
    color: "#3b82f6",
  },
  {
    title: "OUTSTANDING",
    value: "GHC 43.4K",
    trend: "+4.5%",
    trendType: "down",
    subtext: "Steady performance...",
    chartData: [
      { value: 400 },
      { value: 500 },
      { value: 300 },
      { value: 600 },
      { value: 400 },
      { value: 700 },
      { value: 600 },
    ],
    color: "#3b82f6",
  },
];

const feeCollectionData = [
  { month: "Jan 22", collected: 2500, target: 1800 },
  { month: "Feb 22", collected: 2300, target: 1700 },
  { month: "Mar 22", collected: 3000, target: 1600 },
  { month: "Apr 22", collected: 3200, target: 1500 },
  { month: "May 22", collected: 2900, target: 1400 },
  { month: "Jun 22", collected: 3100, target: 1300 },
  { month: "Jul 22", collected: 3300, target: 1450 },
  { month: "Aug 22", collected: 2600, target: 1550 },
  { month: "Sep 22", collected: 2400, target: 1650 },
  { month: "Oct 22", collected: 2800, target: 1750 },
  { month: "Nov 22", collected: 3500, target: 2500 },
  { month: "Dec 22", collected: 3800, target: 2800 },
];

const chartConfig = {
  collected: {
    label: "Collected",
    color: "#3b82f6",
  },
  target: {
    label: "Target",
    color: "#ef4444",
  },
} satisfies ChartConfig;

export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-6 py-2 pb-12">
      {/* Header Section */}
      <div className="flex flex-col gap-0.5 px-2">
        <h1 className="text-2xl font-black tracking-tight text-gray-900 leading-tight">
          Welcome Emmanuel
        </h1>
        <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">
          Saturday, 2 May 2026
        </p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <Card
            key={index}
            className="border-gray-100 shadow-none border-t-0 border-r-0 border-l-0 rounded-none bg-white py-4 px-5"
          >
            <CardHeader className="p-0 space-y-0.5">
              <CardTitle className="text-[9px] font-extrabold text-gray-400 uppercase tracking-[0.2em] leading-none">
                {kpi.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-4 flex items-end justify-between">
              <div className="space-y-1.5">
                <span className="text-2xl font-black text-gray-900 leading-none whitespace-nowrap">
                  {kpi.value}
                </span>
                <div className="flex items-center gap-2 pt-1">
                  <Badge
                    variant="outline"
                    className="px-1.5 py-0 rounded-md border-gray-100 text-[9px] flex items-center gap-1 text-gray-600 font-extrabold bg-gray-50/50"
                  >
                    <span className="text-gray-900">↗ {kpi.trend}</span>
                  </Badge>
                  <span className="text-[9px] text-gray-400 font-extrabold leading-none">
                    {kpi.subtext}
                  </span>
                </div>
              </div>
              <div className="h-8 w-20">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={kpi.chartData}>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={kpi.color}
                      fill={kpi.color}
                      fillOpacity={0.05}
                      strokeWidth={1.5}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2/3 width) */}
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <Card className="border-gray-100 shadow-none rounded-none border-t-0 border-r-0 border-l-0 bg-white py-5 px-6">
            <CardHeader className="flex flex-row items-center justify-between pb-6 pt-1 p-0">
              <div className="space-y-1">
                <CardTitle className="text-[11px] font-extrabold text-gray-900 uppercase tracking-[0.2em] leading-none">
                  FEE COLLECTION <span className="text-gray-400 mx-1">.</span>{" "}
                  LAST 12 WEEKS
                </CardTitle>
                <CardDescription className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                  Cummulative weekly . targets vs actual (GHC)
                </CardDescription>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-[#3b82f6]" />
                  <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                    Collected
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-[#ef4444]" />
                  <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                    Target
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-[260px] p-0 overflow-hidden">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={feeCollectionData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorColl"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#3b82f6"
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#3b82f6"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorTarg"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#ef4444"
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#ef4444"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      vertical={false}
                      strokeDasharray="3 3"
                      stroke="#f1f5f9"
                    />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94a3b8", fontSize: 9, fontWeight: 700 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94a3b8", fontSize: 9, fontWeight: 700 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="collected"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#colorColl)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="target"
                      stroke="#ef4444"
                      fillOpacity={1}
                      fill="url(#colorTarg)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Floor Plan Card */}
          <Card className="border-gray-100 shadow-none rounded-none border-t-0 border-r-0 border-l-0 bg-white py-5 px-6">
            <CardHeader className="flex flex-row items-center justify-between pb-4 pt-2 p-0">
              <div className="space-y-1">
                <CardTitle className="text-[11px] font-extrabold text-gray-900 uppercase tracking-[0.2em] leading-none">
                  FLOOR PLAN <span className="text-gray-400 mx-1">.</span> BLOCK
                  B
                </CardTitle>
                <CardDescription className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                  60 rooms . 50 occupied . 3 issues reported
                </CardDescription>
              </div>
              <div className="flex bg-gray-50 p-1 rounded-md gap-1">
                {["A", "B", "C"].map((b) => (
                  <Button
                    key={b}
                    variant={b === "B" ? "secondary" : "ghost"}
                    size="xs"
                    className={`px-3 h-6 text-[9px] font-black ${b === "B" ? "bg-white shadow-sm text-gray-900 border-none" : "text-gray-400 hover:bg-transparent"}`}
                  >
                    {b}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent className="pt-6 p-0">
              <div className="grid grid-cols-12 gap-2">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-[3px] ${
                      i % 15 === 0
                        ? "bg-gray-500"
                        : i % 8 === 0
                          ? "bg-gray-400"
                          : i % 3 === 0
                            ? "bg-gray-300"
                            : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-6 mt-6">
                {[
                  { label: "Occupied", color: "bg-[#18181b]" },
                  { label: "Vacant", color: "bg-gray-200" },
                  { label: "Reserved", color: "bg-gray-300" },
                  { label: "Maintenance", color: "bg-gray-400" },
                  { label: "Issue", color: "bg-red-400" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`size-2 rounded-full ${item.color}`} />
                    <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Area (1/3 width) */}
        <div className="flex flex-col space-y-6">
          <Card className="border-gray-100 shadow-none border-t-0 border-r-0 border-l-0 rounded-none bg-white py-5 px-6">
            <CardHeader className="p-0 pb-6">
              <CardTitle className="text-[11px] font-extrabold text-gray-900 uppercase tracking-[0.2em] leading-none">
                BLOCK OCCUPANCY
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-0 space-y-8">
              <div className="relative size-40 flex items-center justify-center">
                <svg className="size-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    fill="transparent"
                    stroke="#f3f4f6"
                    strokeWidth="15"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    fill="transparent"
                    stroke="#18181b"
                    strokeWidth="15"
                    strokeDasharray={427}
                    strokeDashoffset={427 * (1 - 0.94)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-black text-gray-900 leading-none">
                    94%
                  </span>
                  <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-[0.2em] mt-2">
                    Occupied
                  </span>
                </div>
              </div>
              <div className="w-full space-y-4">
                {[
                  { label: "Block A", val: 98, total: "119 / 120" },
                  { label: "Block B", val: 98, total: "119 / 120" },
                  { label: "Block C", val: 98, total: "119 / 120" },
                ].map((block) => (
                  <div key={block.label} className="space-y-2">
                    <div className="flex justify-between items-center text-[9px] font-extrabold uppercase tracking-widest">
                      <span className="text-gray-900">{block.label}</span>
                      <span className="text-gray-400">{block.total}</span>
                    </div>
                    <Progress value={block.val} className="h-1.5 bg-gray-100" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-none border-t-0 border-r-0 border-l-0 rounded-none bg-white py-5 px-6">
            <CardHeader className="flex flex-row items-center justify-between p-0 pb-6">
              <div className="space-y-1">
                <CardTitle className="text-[11px] font-extrabold text-gray-900 uppercase tracking-[0.2em] leading-none">
                  LIVE ALERTS
                </CardTitle>
                <CardDescription className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                  5 active . 1 critical
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest p-0 h-auto hover:bg-transparent"
              >
                View All
              </Button>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              {alerts.map((alert) => (
                <div
                  key={alert.title}
                  className="flex items-center justify-between p-4 border border-gray-50 rounded-2xl"
                >
                  <div className="size-2 rounded-full bg-black mt-1.5 shrink-0" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-[12px] font-bold text-gray-900 leading-tight">
                        Block C . Water leak reported
                      </p>
                      <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                        Open
                      </span>
                    </div>
                    <p className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                      Maintenance . 2m ago
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
