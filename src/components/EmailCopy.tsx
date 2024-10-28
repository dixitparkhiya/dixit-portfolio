"use client"; // This marks the component as a Client Component
import { useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"; // Adjust the import based on your tooltip library

const EmailCopy: React.FC = () => {
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
          className="cursor-pointer text-blue-500 retro-2 hover:underline"
        >
          parkhiyadixit@gmail.com
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default EmailCopy;
