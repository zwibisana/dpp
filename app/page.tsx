"use client";
import { useRef } from "react";
import Introduction from "./components/Introduction";
import Cards from "./components/Cards";
import KaredokRecipe from "./components/KaredokRecipe";
import NasiGorengRecipe from "./components/NasiGorengRecipe";
import KolakBijiSalakRecipe from "./components/KolakBijiSalakRecipe";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Batik from "@/public/Batik";

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
      <div className="relative top-0 z-30 h-full text-white">
        <KaredokRecipe />
      </div>

      <div className="relative top-0 z-40 h-full text-white">
        <NasiGorengRecipe />
      </div>

      <div className="relative top-0 z-50 h-full text-white">
        <KolakBijiSalakRecipe />
      </div>

      <div className="text-[#F9F7EA] relative z-60 flex justify-center py-30 bg-[#E74822] overflow-hidden">
        <div className="flex flex-col gap-y-4">
          <h3 className="font-discordia font-bold uppercase tracking-[5]">Looking for more?</h3>
          <p className="font-polymath">Email zahrawibisana@gmail.com with any questions!</p>
        </div>
        <div
        className="absolute"
        data-name="Vector"
      >
        <Batik />
      </div>
      </div>

      <SmoothScrollProvider />
    </div>
  );
}
