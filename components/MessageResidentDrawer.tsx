"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, BadgeCheck, MessageSquare, Send, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface MessageResidentDrawerProps {
  residentId: string;
  residentName: string;
  residentEmail?: string;
  triggerClassName?: string;
}

export function MessageResidentDrawer({
  residentId,
  residentName,
  residentEmail,
  triggerClassName,
}: MessageResidentDrawerProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [sendVia, setSendVia] = useState("in-app");
  const [template, setTemplate] = useState("no-template");
  const [priority, setPriority] = useState("");
  const [message, setMessage] = useState("");

  const email = residentEmail || `${residentId.toLowerCase()}@email.com`;
  const firstName = residentName.split(" ")[0];

  const handleTemplateChange = (val: string | null) => {
    if (!val) return;
    setTemplate(val);
    if (val === "curfew-warning") {
      setMessage(
        `Dear ${firstName},\n\nThis is a reminder that hostel curfew is strictly enforced at 11:00 PM. Repeated violations may result in disciplinary action.\n\nPlease ensure you return to the hostel before curfew.`,
      );
    } else if (val === "no-template") {
      setMessage("");
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      // Reset state when closing
      setTimeout(() => {
        setStep(1);
        setTemplate("no-template");
        setPriority("");
        setMessage("");
      }, 300);
    }
  };

  const handleSendMessage = () => {
    setOpen(false);

    // Show beautiful custom toast matching design-assets/dashboard/admin/Residents/message-sent-toast.png
    toast.custom(
      (t) => (
        <div className="flex items-center justify-between w-full max-w-[340px] bg-[#7e818c] text-white rounded-md px-3.5 py-3 shadow-lg select-none pointer-events-auto border border-white/10 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-start gap-2.5">
            <BadgeCheck className="size-4.5 text-white shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="text-[10px] font-black text-white leading-tight">
                Message sent
              </h4>
              <p className="text-[8.5px] text-[#f1f1f1] leading-tight font-bold">
                Notification delivered to{" "}
                <span className="font-black text-white">{residentName}</span>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.dismiss(t)}
            className="ml-3 shrink-0 h-5 px-2.5 text-[8.5px] font-black text-white bg-transparent border border-white/50 rounded hover:bg-white/10 active:bg-white/20 transition-all cursor-pointer leading-none"
          >
            Close
          </button>
        </div>
      ),
      {
        duration: 4000,
      },
    );

    // Reset inputs
    setTimeout(() => {
      setStep(1);
      setTemplate("no-template");
      setPriority("");
      setMessage("");
    }, 300);
  };

  // Step 1: message is required to proceed
  const canProceed = message.trim().length > 0;
  // Step 2: message + priority must both be set to send
  const canSend = message.trim().length > 0 && priority.length > 0;

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger
        className={
          triggerClassName ??
          "inline-flex items-center justify-center h-8 border border-gray-100 rounded-md text-[9px] font-black text-gray-600 px-3 hover:bg-gray-50 shadow-none outline-none whitespace-nowrap transition-colors bg-white"
        }
      >
        <MessageSquare className="mr-1.5 size-3" />
        Message
      </SheetTrigger>
      <SheetContent
        showCloseButton={false}
        className="w-[300px] sm:w-[360px] bg-white p-5 border-l border-gray-100 flex flex-col gap-0"
      >
        <SheetHeader className="text-left space-y-1 pb-5 border-b border-gray-100 relative">
          <SheetTitle className="text-[14px] font-black text-gray-900 leading-none">
            Message {residentName}
          </SheetTitle>
          <SheetDescription className="text-[9px] font-bold text-gray-500">
            {email}
          </SheetDescription>
          <SheetClose className="absolute right-0 top-0 p-1 rounded-md hover:bg-gray-100 transition-colors">
            <X className="size-3.5 text-gray-400" />
          </SheetClose>
        </SheetHeader>

        <div className="flex-1 py-5 space-y-4 overflow-y-auto custom-scrollbar">
          {step === 1 ? (
            <>
              <div className="space-y-1.5">
                <span className="block text-[9px] font-black text-gray-900 leading-none">
                  Send Via
                </span>
                <Select
                  value={sendVia}
                  onValueChange={(v) => v && setSendVia(v)}
                >
                  <SelectTrigger className="w-full h-7 rounded-md border-gray-200 shadow-none text-[9.5px] font-bold text-gray-900">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-app">In app</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <span className="block text-[9px] font-black text-gray-900 leading-none">
                  Template
                </span>
                <Select value={template} onValueChange={handleTemplateChange}>
                  <SelectTrigger className="w-full h-7 rounded-md border-gray-200 shadow-none text-[9.5px] font-bold text-gray-500">
                    <SelectValue placeholder="Select template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-template">No template</SelectItem>
                    <SelectItem value="curfew-warning">
                      Curfew warning
                    </SelectItem>
                    <SelectItem value="maintenance-update">
                      Maintenance update
                    </SelectItem>
                    <SelectItem value="fee-reminder">Fee reminder</SelectItem>
                    <SelectItem value="general-notice">
                      General notice
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor={`message-${residentId}`}
                    className="text-[9px] font-black text-gray-900 leading-none"
                  >
                    Message
                  </label>
                  <span className="text-[8px] font-bold text-gray-400">
                    {message.length}/2000
                  </span>
                </div>
                <textarea
                  id={`message-${residentId}`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full min-h-[160px] p-2 text-[9.5px] font-medium border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-black resize-none shadow-none text-gray-900 placeholder:font-medium placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-1.5">
                <span className="block text-[9px] font-black text-gray-900 leading-none">
                  Priority
                </span>
                <Select
                  value={priority}
                  onValueChange={(v) => v && setPriority(v)}
                >
                  <SelectTrigger className="w-full h-7 rounded-md border-gray-200 shadow-none text-[9.5px] font-bold text-gray-400">
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              {/* Options summary */}
              <div className="rounded-md border border-gray-200 bg-gray-50/60 divide-y divide-gray-100">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">
                    Send Via
                  </span>
                  <span className="text-[9px] font-bold text-gray-900 capitalize">
                    {sendVia.replace("-", " ")}
                  </span>
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">
                    Template
                  </span>
                  <span className="text-[9px] font-bold text-gray-900 capitalize">
                    {template === "no-template"
                      ? "None"
                      : template.replace(/-/g, " ")}
                  </span>
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">
                    Priority
                  </span>
                  <span className="text-[9px] font-bold text-gray-900 capitalize">
                    {priority || "—"}
                  </span>
                </div>
              </div>

              {/* Preview */}
              <div className="rounded-md border border-gray-200 p-3 bg-white">
                <p className="text-[7.5px] font-extrabold text-gray-400 uppercase tracking-widest mb-1.5">
                  Preview
                </p>
                <div className="text-[9.5px] font-medium text-gray-900 space-y-2 leading-relaxed whitespace-pre-wrap">
                  {message}
                  <div className="pt-2">
                    <p>Regards,</p>
                    <p>HMS Administration</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <SheetFooter className="pt-5 border-t border-gray-100 flex-row gap-2 sm:space-x-0 justify-between items-center sm:justify-between w-full">
          {step === 1 ? (
            <SheetClose className="inline-flex items-center justify-center h-7 px-3 rounded-md text-[8.5px] font-black border border-gray-200 text-gray-600 bg-white shadow-none hover:bg-gray-50 transition-colors outline-none whitespace-nowrap">
              Cancel
            </SheetClose>
          ) : (
            <Button
              variant="outline"
              onClick={() => setStep(1)}
              className="h-7 px-3 rounded-md text-[8.5px] font-black border border-gray-200 text-gray-600 bg-white shadow-none hover:bg-gray-50 transition-colors outline-none whitespace-nowrap"
            >
              Back
            </Button>
          )}

          {step === 1 ? (
            <Button
              onClick={() => setStep(2)}
              disabled={!canProceed}
              className="h-7 px-4 rounded-md text-[8.5px] font-black bg-black hover:bg-black/90 text-white shadow-none group disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
              <ArrowRight className="ml-1.5 size-3 transition-transform group-hover:translate-x-0.5" />
            </Button>
          ) : (
            <Button
              disabled={!canSend}
              onClick={handleSendMessage}
              className="h-7 px-4 rounded-md text-[8.5px] font-black bg-black hover:bg-black/90 text-white shadow-none disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="mr-1.5 size-2.5" />
              Send message
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
