"use client";

import {
  Bell,
  Database,
  Globe,
  Lock,
  Monitor,
  Save,
  ShieldCheck,
  User,
} from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const settingsTabs = [
  { id: "account", label: "Account Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Lock },
  { id: "system", label: "System Settings", icon: Monitor },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState("account");

  return (
    <div className="flex flex-col space-y-8 py-4 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 leading-tight">
            Settings
          </h1>
          <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">
            Manage your portal preferences
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="h-10 bg-[#18181b] hover:bg-black text-white shadow-md font-bold text-xs px-6 rounded-xl transition-all">
            <Save className="mr-2 size-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          {settingsTabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              onClick={() => setActiveTab(tab.id)}
              className={`w-full justify-start h-12 rounded-xl px-4 text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-gray-100 text-gray-900 shadow-sm"
                  : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <tab.icon
                className={`mr-3 size-4 ${activeTab === tab.id ? "text-gray-900" : "text-gray-400"}`}
              />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-9">
          <Card className="border-gray-100 shadow-none rounded-3xl border bg-white overflow-hidden">
            <CardHeader className="px-8 pt-8 border-b border-gray-50 bg-gray-50/30">
              <CardTitle className="text-lg font-bold text-gray-900">
                {settingsTabs.find((t) => t.id === activeTab)?.label}
              </CardTitle>
              <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-widest">
                Update your settings below
              </p>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {activeTab === "account" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        Full Name
                      </Label>
                      <Input
                        defaultValue="Emmanuel"
                        className="h-11 border-gray-100 bg-white rounded-xl text-xs font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        Email Address
                      </Label>
                      <Input
                        defaultValue="m@example.com"
                        className="h-11 border-gray-100 bg-white rounded-xl text-xs font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Role
                    </Label>
                    <Input
                      value="System Administrator"
                      disabled
                      className="h-11 border-gray-100 bg-gray-50 text-gray-400 rounded-xl text-xs font-bold uppercase tracking-wider"
                    />
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="space-y-6">
                  {[
                    {
                      title: "New Maintenance Request",
                      desc: "Get notified when a resident reports an issue",
                    },
                    {
                      title: "Gate Alerts",
                      desc: "Notifications for curfew violations or lockdowns",
                    },
                    {
                      title: "Financial Reports",
                      desc: "Weekly summary of fees and billing collection",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 bg-gray-50/20"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-gray-400 font-medium">
                          {item.desc}
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                      <ShieldCheck className="size-4 text-gray-400" />
                      Two-Factor Authentication
                    </h3>
                    <div className="p-4 rounded-2xl border border-gray-100 bg-gray-50/30 flex items-center justify-between">
                      <p className="text-[11px] text-gray-400 font-medium max-w-sm">
                        Add an extra layer of security to your account by
                        requiring a verification code in addition to your
                        password.
                      </p>
                      <Button
                        variant="outline"
                        className="h-9 border-gray-100 rounded-lg text-[10px] font-black uppercase tracking-widest"
                      >
                        Enable 2FA
                      </Button>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-50 space-y-4">
                    <h3 className="text-sm font-bold text-gray-900">
                      Change Password
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="password"
                        placeholder="Current Password"
                        className="h-11 border-gray-100 bg-white rounded-xl text-xs font-medium"
                      />
                      <Input
                        type="password"
                        placeholder="New Password"
                        className="h-11 border-gray-100 bg-white rounded-xl text-xs font-medium"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "system" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        Portal Language
                      </Label>
                      <Select defaultValue="en">
                        <SelectTrigger className="h-11 border-gray-100 bg-white rounded-xl text-xs font-medium">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-gray-100">
                          <SelectItem value="en">English (US)</SelectItem>
                          <SelectItem value="gh">English (GH)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        Timezone
                      </Label>
                      <Select defaultValue="gmt">
                        <SelectTrigger className="h-11 border-gray-100 bg-white rounded-xl text-xs font-medium">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-gray-100">
                          <SelectItem value="gmt">GMT +0 (Accra)</SelectItem>
                          <SelectItem value="utc">UTC +0</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
