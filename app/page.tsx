"use client";
import { useRef } from "react";
import Introduction from "./components/Introduction";
import Cards from "./components/Cards";
import KaredokRecipe from "./components/KaredokRecipe";
import NasiGorengRecipe from "./components/NasiGorengRecipe";
import KolakBijiSalakRecipe from "./components/KolakBijiSalakRecipe";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

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
        className="sticky top-0 z-10 h-full bg-red-600 text-white"
      >
        <Introduction />
      </div>

      {/* Cards scrolls normally */}
      <div className="relative z-20 bg-[#E74822] text-white">
        <Cards />
      </div>

      {/* KaredokRecipe sticks and slides up over Cards */}
      <div className="sticky top-0 z-30 h-svh text-white">
        <KaredokRecipe />
      </div>

      <div className="sticky top-0 z-40 h-svh text-white">
        <NasiGorengRecipe />
      </div>

      <div className="sticky top-0 z-50 h-svh text-white">
        <KolakBijiSalakRecipe />
      </div>

      <SmoothScrollProvider />
    </div>
  );
}
