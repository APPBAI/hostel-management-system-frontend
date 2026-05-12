"use client";

import * as React from "react";
import { 
  Plus, 
  Search, 
  MessageSquare, 
  Mail, 
  Send, 
  MoreVertical,
  Filter,
  CheckCheck,
  User,
  Paperclip,
  Smile,
  Image as ImageIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const chats = [
  { id: 1, name: "Amara Osei", preview: "I wanted to check the status of my...", time: "10:45 AM", unread: 2, online: true },
  { id: 2, name: "Staff Announcement", preview: "Please note the change in shift...", time: "Yesterday", unread: 0, online: false },
  { id: 3, name: "Maintenance Team", preview: "The leaking faucet in B204 has been...", time: "Mon", unread: 0, online: true },
  { id: 4, name: "Kwame Boateng", preview: "Thank you for the quick response!", time: "Sun", unread: 0, online: false },
];

export default function CommunicationPage() {
  const [activeChat, setActiveChat] = React.useState(chats[0]);

  return (
    <div className="flex h-[calc(100vh-140px)] overflow-hidden gap-6 py-4">
      {/* Sidebar - Chat List */}
      <div className="w-80 flex flex-col space-y-6">
        <div className="space-y-1 px-1">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 leading-tight">Messages</h1>
          <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">Communication Hub</p>
        </div>

        <div className="flex-1 flex flex-col min-h-0 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-50 space-y-4">
            <Button className="w-full h-11 bg-[#18181b] hover:bg-black text-white font-bold text-xs rounded-2xl shadow-md">
              <Plus className="mr-2 size-4" />
              Compose Message
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-300" />
              <Input 
                placeholder="Search conversations..." 
                className="pl-10 h-10 border-gray-100 bg-gray-50/50 rounded-xl text-[11px] font-medium focus:ring-0 focus:border-gray-200"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setActiveChat(chat)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
                  activeChat.id === chat.id 
                    ? "bg-gray-100 shadow-sm" 
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="relative">
                  <Avatar className="h-11 w-11 rounded-2xl border border-white shadow-sm">
                    <AvatarFallback className="bg-gray-50 text-[10px] font-black text-gray-400">
                      {chat.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {chat.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900 truncate">{chat.name}</span>
                    <span className="text-[9px] font-bold text-gray-400 uppercase">{chat.time}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-medium truncate mt-0.5">{chat.preview}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="size-4 bg-black text-white rounded-full flex items-center justify-center text-[9px] font-black">
                    {chat.unread}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Chat Window */}
      <div className="flex-1 flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
        {/* Chat Header */}
        <div className="h-16 px-6 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
          <div className="flex items-center gap-4">
            <Avatar className="h-9 w-9 rounded-xl border border-white shadow-sm">
              <AvatarFallback className="bg-white text-[10px] font-black text-gray-400">
                {activeChat.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-sm font-bold text-gray-900">{activeChat.name}</h3>
              <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="size-9 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-white transition-all">
              <Search className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-9 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-white transition-all">
              <MoreVertical className="size-4" />
            </Button>
          </div>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-gray-50/20">
          <div className="flex justify-center">
            <Badge variant="outline" className="bg-white border-gray-100 text-[9px] font-black text-gray-400 h-6 px-4 uppercase tracking-widest rounded-full">
              Today
            </Badge>
          </div>

          <div className="flex items-start gap-4 max-w-2xl">
            <Avatar className="h-8 w-8 rounded-lg shrink-0">
              <AvatarFallback className="bg-gray-100 text-[9px] font-black text-gray-400">AO</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm text-[13px] font-medium text-gray-700 leading-relaxed">
                Hi Admin, I wanted to check the status of my maintenance request for the light fixture in A101. It&apos;s been a few days since I reported it.
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase ml-1">10:45 AM</span>
            </div>
          </div>

          <div className="flex items-start gap-4 flex-row-reverse">
            <div className="space-y-2 flex flex-col items-end">
              <div className="bg-black text-white p-4 rounded-2xl rounded-tr-none shadow-md text-[13px] font-medium leading-relaxed max-w-2xl">
                Hello Amara! We apologize for the delay. The maintenance team is currently processing high-priority requests in Block C. They are scheduled to be at Block A tomorrow morning.
              </div>
              <div className="flex items-center gap-2 mr-1">
                <span className="text-[9px] font-bold text-gray-400 uppercase">11:02 AM</span>
                <CheckCheck className="size-3 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-gray-50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="size-10 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-50">
                <Paperclip className="size-5" />
              </Button>
              <Button variant="ghost" size="icon" className="size-10 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-50">
                <ImageIcon className="size-5" />
              </Button>
            </div>
            <div className="flex-1 relative">
              <Input 
                placeholder="Type your message..." 
                className="h-12 border-gray-100 bg-gray-50/50 rounded-2xl text-[13px] font-medium focus:ring-0 focus:border-gray-200 pr-12"
              />
              <Button variant="ghost" size="icon" className="absolute right-1 top-1 size-10 rounded-xl text-gray-300 hover:text-gray-900">
                <Smile className="size-5" />
              </Button>
            </div>
            <Button className="h-12 w-12 bg-black hover:bg-black/90 text-white rounded-2xl shadow-lg flex items-center justify-center shrink-0">
              <Send className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
