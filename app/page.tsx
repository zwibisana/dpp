"use client";
import { useRef } from "react";
import Introduction from "./components/Introduction";

export default function Home() {
  const redRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      <div className="pointer-events-none fixed inset-0 z-0">
        <video
          src="/KulineranMerantauVideo.mov"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 h-svh shrink-0" aria-hidden />

      {/* Red — sticks, gets covered by blue */}
      <div
        ref={redRef}
        className="sticky top-0 z-10 min-h-svh bg-red-600 p-8 text-white"
      >
        <Introduction/>
      </div>

      {/* Blue — slides over red, sticks, gets covered by green */}
      <div className="sticky top-0 z-20 min-h-svh bg-blue-600 p-8 text-white">
        <p className="font-discordia">Blue page content</p>
      </div>

      {/* Green — slides over blue, final layer */}
      <div className="relative z-30 min-h-svh bg-green-600 p-8 text-white">
        <p className="font-discordia">Green page content</p>
      </div>
    </div>
  );
}