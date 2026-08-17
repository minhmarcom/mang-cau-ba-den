"use client";

import { useEffect } from "react";

export default function ScrollToTopOnMount() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // If there is no hash in URL, force instant scroll to top on mount
      if (!window.location.hash) {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
  }, []);

  return null;
}
