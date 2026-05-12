"use client";

import {
  ArrowRight,
  BarChart3,
  Calendar,
  Download,
  FileText,
  Filter,
  LineChart,
  PieChart,
  Plus,
  Search,
} from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reportCategories = [
  {
    title: "Financial Analytics",
    description: "Revenue, outstanding fees, and billing cycles",
    icon: BarChart3,
    stats: "12 Reports available",
  },
  {
    title: "Occupancy Reports",
    description: "Room allocation, resident demographics, and trends",
    icon: PieChart,
    stats: "8 Reports available",
  },
  {
    title: "Maintenance Logs",
    description: "Repair velocity, recurring issues, and staff performance",
    icon: FileText,
    stats: "15 Reports available",
  },
];

const recentReports = [
  {
    name: "Monthly Revenue Summary",
    date: "June 1, 2025",
    size: "1.2 MB",
    type: "PDF",
  },
  {
    name: "Block B Occupancy Audit",
    date: "May 28, 2025",
    size: "840 KB",
    type: "CSV",
  },
  {
    name: "Semester 2 Maintenance Review",
    date: "May 25, 2025",
    size: "2.1 MB",
    type: "PDF",
  },
  {
    name: "Resident Fee Status List",
    date: "May 20, 2025",
    size: "450 KB",
    type: "XLSX",
  },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col space-y-8 py-4 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 leading-tight">
            Reports & Analytics
          </h1>
          <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">
            Data-driven insights for facility management
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="h-10 bg-[#18181b] hover:bg-black text-white shadow-md font-bold text-xs px-4 rounded-xl">
            <Plus className="mr-2 size-4" />
            Generate New Report
          </Button>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reportCategories.map((category) => (
          <Card
            key={category.title}
            className="border-gray-100 shadow-none border rounded-2xl bg-white hover:shadow-md transition-all group cursor-pointer"
          >
            <CardContent className="p-8 space-y-6">
              <div className="size-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-gray-900 group-hover:bg-gray-100 transition-all">
                <category.icon className="size-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-gray-900 text-lg leading-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                  {category.description}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  {category.stats}
                </span>
                <ArrowRight className="size-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Reports List */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-gray-900">Recent Reports</h2>
            <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-widest">
              Last 30 days
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-xs font-bold text-gray-400 hover:text-gray-900"
          >
            View All Reports
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {recentReports.map((report, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                  <FileText className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900">
                    {report.name}
                  </span>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                      <Calendar className="size-2.5" /> {report.date}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {report.size}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant="outline"
                  className="bg-white border-gray-100 text-[9px] font-black text-gray-400 h-6 px-3 uppercase tracking-widest"
                >
                  {report.type}
                </Badge>
                <Button
                  size="icon"
                  variant="ghost"
                  className="size-9 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all"
                >
                  <Download className="size-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Insights Section */}
      <Card className="border-gray-100 shadow-none rounded-2xl border bg-[#18181b] overflow-hidden text-white">
        <CardContent className="p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-md">
            <div className="size-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <LineChart className="size-5" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold leading-tight">
                Advanced Analytics Dashboard
              </h2>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">
                Unlock deeper insights with our custom reporting engine. Compare
                year-over-year performance, track resident retention, and
                optimize facility spending.
              </p>
            </div>
          </div>
          <Button className="h-12 bg-white hover:bg-gray-100 text-black font-black text-xs px-8 rounded-xl shadow-2xl transition-all uppercase tracking-widest">
            Access Power BI Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
