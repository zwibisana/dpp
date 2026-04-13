"use client";
import { useRef } from "react";
import Introduction from "./components/Introduction";
import Cards from "./components/Cards";
import KaredokRecipe from "./components/KaredokRecipe";

export default function Home() {
  const redRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      <div className="pointer-events-none fixed inset-0 z-0">
        <video
          src="/KulineranMerantauVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 h-svh shrink-0" aria-hidden />

      <div
        ref={redRef}
        className="sticky top-0 z-10 min-h-svh bg-red-600 text-white"
      >
        <Introduction/>
      </div>

      <div className="sticky top-0 z-20 min-h-svh bg-[#E74822] text-white">
        <Cards/>
      </div>

      <div className="relative z-30 min-h-svh bg-green-600 text-white">
        <KaredokRecipe/>
      </div>
    </div>
  );
}