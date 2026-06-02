"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Smoothly scrolls to the #hash element after any page navigation.
 * Placed once in the root layout - handles all anchor links site-wide.
 */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Small delay lets the page finish rendering before we scroll
    const id = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);

    return () => clearTimeout(id);
  }, [pathname]);

  return null;
}
