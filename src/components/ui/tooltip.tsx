import React from "react";

interface TooltipProps {
  message: string;
  children: React.ReactNode;
}

export default function Tooltip({ message, children }: TooltipProps) {
  return (
    <div className="group relative flex max-w-max flex-col items-center justify-center">
      {children}
      <div className="absolute left-1/2 top-5 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 opacity-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-opacity duration-300 group-hover:opacity-100 group-hover:scale-100">
        <div className="flex max-w-xs flex-col items-center shadow-lg">
          <div className="rounded bg-white border px-2 py-1.5 text-center text-xs text-black">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}