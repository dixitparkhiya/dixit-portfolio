"use client";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import EmailCopy from "./EmailCopy";

const HireMe: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-4 border-0 rounded bg-dl-bg dark:bg-black">
      <Button variant="ghost" className="hover:bg-transparent">
        Hire me?
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          const link = document.createElement("a");
          link.href = DATA.resume.downloadPath; // CV file path in the public folder
          link.download = ""; // Specify the download filename
          link.click();
        }}
      >
        Download CV
      </Button>

      <Button
        variant="outline"
        onClick={() => window.open(DATA.resume.googleDrive, "_blank")}
        className="flex items-center"
      >
        {/* Show text only on medium and larger screens */}
        <span className="hidden sm:inline">View CV</span>
        <Icons.driveColored className="w-5 h-5 sm:ml-2" />
      </Button>
      {/* Show email only on medium and larger screens */}
      <div className="hidden sm:block">
        <Button variant="outline" className="no-underline">
          <EmailCopy />
        </Button>
      </div>
    </div>
  );
};

export default HireMe;
