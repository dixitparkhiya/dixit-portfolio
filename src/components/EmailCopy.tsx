"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"; // Adjust the import based on your tooltip library

interface EmailCopyProps {
  className?: string;
}

const EmailCopy: React.FC<EmailCopyProps> = ({ className }) => {
  const [tooltipText, setTooltipText] = useState<string>("Click to copy");

  const copyEmail = () => {
    const email = "parkhiyadixit@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setTooltipText("Copied!");
      setTimeout(() => setTooltipText("Click to copy"), 2000); // Reset tooltip text after 2 seconds
    });
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          onClick={copyEmail}
          className={`cursor-pointer hover:underline ${className}`} // Apply custom className here
        >
          {DATA.contact.email}
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default EmailCopy;
