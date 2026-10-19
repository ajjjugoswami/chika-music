"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

interface EmbeddedFormProps {
  src: string;
  title: string;
  eager?: boolean;
  className?: string;
}

export function EmbeddedForm({ src, title, eager = false, className }: EmbeddedFormProps) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const frame = ref.current;
      if (!frame || event.source !== frame.contentWindow) return;
      if (event.data?.type === "da-forms:height") {
        frame.style.height = `${event.data.height}px`;
      }
      if (event.data?.type === "da-forms:ready") {
        frame.contentWindow?.postMessage(
          { type: "da-forms:context", page: window.location.href, referrer: document.referrer },
          "*",
        );
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      scrolling="no"
      loading={eager ? "eager" : "lazy"}
      className={cn("block h-150 w-full overflow-hidden border-0 rounded-[19px]", className)}
    />
  );
}
