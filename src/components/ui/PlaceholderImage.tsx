"use client";

import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  label?: string;
  className?: string;
  dark?: boolean;
}

export default function PlaceholderImage({
  label = "Image Placeholder",
  className = "",
  dark = true,
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl ${
        dark
          ? "bg-white/[0.02] border border-white/[0.06]"
          : "bg-black/[0.03] border border-black/[0.06]"
      } ${className}`}
    >
      <ImageIcon
        className={`w-8 h-8 ${dark ? "text-gray-700" : "text-stone-300"}`}
      />
      <span
        className={`text-xs font-medium uppercase tracking-widest ${
          dark ? "text-gray-700" : "text-stone-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
