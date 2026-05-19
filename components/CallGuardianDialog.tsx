"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BadgeCheck,
  Check,
  Copy,
  Mail,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

interface CallGuardianDialogProps {
  residentId: string;
  residentName: string;
  roomNumber?: string;
  blockName?: string;
  guardianName?: string;
  guardianRelationship?: string;
  guardianEmail?: string;
  guardianPhone?: string;
  triggerClassName?: string;
  triggerChildren?: React.ReactElement;
}

export function CallGuardianDialog({
  residentId,
  residentName,
  roomNumber = "Room A103",
  blockName = "Block A",
  guardianName = "Genevieve Osei",
  guardianRelationship = "Parent / Guardian",
  guardianEmail = "guardain@email.com",
  guardianPhone = "+233 34 334 3323",
  triggerClassName,
  triggerChildren,
}: CallGuardianDialogProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [callLogged, setCallLogged] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setTimeout(() => setCallLogged(false), 300);
    }
  };

  const showCustomToast = (
    title: string,
    description: string | React.ReactNode,
  ) => {
    toast.custom(
      (t) => (
        <div className="flex items-center justify-between w-full max-w-[340px] bg-[#7e818c] text-white rounded-md px-3.5 py-3 shadow-lg select-none pointer-events-auto border border-white/10 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-start gap-2.5">
            <BadgeCheck className="size-4.5 text-white shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="text-[10px] font-black text-white leading-tight">
                {title}
              </h4>
              <div className="text-[8.5px] text-[#f1f1f1] leading-tight font-bold">
                {description}
              </div>
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
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(guardianPhone);
      setCopied(true);
      showCustomToast(
        "Phone number copied",
        "Guardian phone number saved to your clipboard.",
      );
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy phone number");
    }
  };

  const handleLogCall = () => {
    setCallLogged(true);
    showCustomToast(
      "Call logged",
      <span>
        Call to <span className="font-black text-white">{guardianName}</span>{" "}
        logged successfully!
      </span>,
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          triggerChildren ?? (
            <Button
              className={
                triggerClassName ??
                "bg-black hover:bg-black/90 text-white rounded-md text-[9px] font-black px-4 shadow-none h-8 justify-start"
              }
            >
              <Phone className="mr-1.5 size-3" />
              Call Guardian
            </Button>
          )
        }
      />
      <DialogContent
        showCloseButton={false}
        className="bg-transparent shadow-none ring-0 border-none max-w-[320px] p-0 flex flex-col items-center gap-3 focus:outline-none"
      >
        <div className="w-full bg-white rounded-xl border border-gray-100 shadow-2xl p-5 flex flex-col gap-0 select-none">
          {/* Header Title */}
          <h3 className="text-[13.5px] font-black text-gray-900 leading-none mb-3">
            Call Guardian
          </h3>

          {/* Regarding Metadata Strip */}
          <div className="bg-slate-50/80 rounded-md py-1.5 px-2.5 mb-4 text-center">
            <span className="text-[9px] font-extrabold text-gray-500 leading-none">
              Regarding{" "}
              <span className="text-gray-900 font-black">{residentName}</span> •{" "}
              {residentId} • {roomNumber} • {blockName}
            </span>
          </div>

          {/* Guardian Profile details */}
          <div className="flex items-center gap-3 mb-4">
            <div className="size-9 bg-gray-100 rounded-full flex items-center justify-center text-[10.5px] font-extrabold text-gray-500 shrink-0">
              CN
            </div>
            <div className="space-y-0.5">
              <h4 className="text-[11px] font-black text-gray-900 leading-tight">
                {guardianName}
              </h4>
              <p className="text-[8.5px] font-bold text-gray-400 leading-none">
                {guardianRelationship}
              </p>
              <p className="text-[8.5px] font-bold text-gray-400 leading-none">
                {guardianEmail}
              </p>
            </div>
          </div>

          {/* Display & Copy Phone Number Container */}
          <div className="border border-gray-150 rounded-md bg-slate-50/20 flex items-center justify-between px-3 h-8.5 mb-4">
            <div className="flex items-center gap-2">
              <Phone className="size-3.5 text-gray-800 shrink-0" />
              <span className="text-[11px] font-bold text-gray-900 font-mono tracking-tight">
                {guardianPhone}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 text-[8.5px] font-black text-gray-600 hover:text-gray-900 transition-colors cursor-pointer select-none outline-none"
            >
              {copied ? (
                <>
                  <Check className="size-3 text-emerald-500" />
                  <span className="text-emerald-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="size-3 text-gray-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Immediate Action Buttons (Call Now & WhatsApp) */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <Button
              type="button"
              onClick={() =>
                showCustomToast(
                  "Call stream initialized",
                  `Connecting to ${guardianName}...`,
                )
              }
              variant="outline"
              className="h-8 border border-gray-200 hover:bg-gray-50 rounded-md text-[9px] font-black text-gray-700 flex items-center justify-center gap-1.5 shadow-none cursor-pointer"
            >
              <Phone className="size-3" />
              Call now
            </Button>
            <Button
              type="button"
              onClick={() =>
                showCustomToast(
                  "WhatsApp link opened",
                  `Direct chat opened with ${guardianName}.`,
                )
              }
              className="h-8 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-[9px] font-black flex items-center justify-center gap-1.5 shadow-none border-none cursor-pointer"
            >
              <FaWhatsapp className="size-3" />
              WhatsApp
            </Button>
          </div>

          {/* Email Option */}
          <Button
            type="button"
            onClick={() =>
              showCustomToast(
                "Email draft created",
                `Drafted email message for ${guardianName}.`,
              )
            }
            variant="outline"
            className="w-full h-8 border border-gray-200 hover:bg-gray-50 rounded-md text-[9px] font-black text-gray-700 flex items-center justify-center gap-1.5 shadow-none mb-3.5 cursor-pointer"
          >
            <Mail className="size-3" />
            Send email instead
          </Button>

          {/* Divider line */}
          <div className="border-t border-gray-100 my-1" />

          {/* Log call Block */}
          <Button
            type="button"
            onClick={handleLogCall}
            disabled={callLogged}
            className={`w-full h-8 rounded-md text-[9px] font-black flex items-center justify-center gap-1.5 shadow-none border-none mt-3 transition-colors cursor-pointer ${
              callLogged
                ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-50"
                : "bg-slate-100 hover:bg-slate-200 text-gray-700"
            }`}
          >
            {callLogged ? (
              <>
                <BadgeCheck className="size-3.5 text-emerald-600" />
                Call logged
              </>
            ) : (
              <>
                <Phone className="size-3" />
                Log this call
              </>
            )}
          </Button>
          <p className="text-[7.5px] font-bold text-gray-400 text-center mt-1.5 leading-tight">
            Logging records the call in the resident's activity timeline
          </p>
        </div>

        {/* Floating circular Close button at the bottom */}
        <DialogClose className="flex items-center justify-center size-8 rounded-full bg-white shadow-xl border border-gray-100 text-gray-400 hover:text-gray-900 transition-all hover:scale-105 active:scale-95 cursor-pointer mt-1 select-none outline-none">
          <X className="size-4" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
