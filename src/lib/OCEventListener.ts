"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OCEventBridge() {
  const router = useRouter();

  useEffect(() => {
    const handleOCNavigate = (e: CustomEvent<{ path: string }>) => {
      const targetPath = e.detail?.path;
      console.log('cek target path', targetPath);
      if (!targetPath) return;

      // Avoid re-navigating to same page
      if (targetPath !== window.location.pathname) {
        router.push(targetPath);
      }
    };

    window.addEventListener("oc:navigate", handleOCNavigate as EventListener);
    return () => {
      window.removeEventListener("oc:navigate", handleOCNavigate as EventListener);
    };
  }, [router]);

  return null; // no UI, just a listener
}
