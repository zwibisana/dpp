import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}