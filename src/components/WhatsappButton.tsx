"use client";

import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsAppButton = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const whatsappUrl = `https://wa.me/+2347069114249?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <button className="rounded-full p-2 bg-aegean shadow-lg hover:shadow-xl border border-white/50 hover:bg-green-700">
            <IoLogoWhatsapp className="text-white h-10 w-10" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] h-[360px]">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center gap-2 mb-4">
              <img src="/b-logo.svg" alt="Bwosh Logo" className="h-8" />
              <p className="text-sm text-muted-foreground">
                Got any questions?
              </p>
              <p className="text-xs text-muted-foreground">
                Typically replies under 45 minutes
              </p>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <p className="bg-gray-100 text-gray-700 text-sm rounded-md p-4">
                Hey, How are can we help you?
              </p>
            </div>
            <Textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-[80px]"
            />
            <Button
              variant="default"
              className="mt-4 w-full"
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default WhatsAppButton;
