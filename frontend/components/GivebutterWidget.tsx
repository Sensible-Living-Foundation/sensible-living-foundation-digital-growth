"use client";

import { useEffect, useRef } from "react";

interface Props {
  id: string;
  className?: string;
}

export default function GivebutterWidget({ id, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";

    const widget = document.createElement("givebutter-widget");
    widget.setAttribute("id", id);
    ref.current.appendChild(widget);

    if (!document.querySelector('script[src="https://givebutter.com/js/widget.js"]')) {
      const s = document.createElement("script");
      s.src = "https://givebutter.com/js/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, [id]);

  return <div ref={ref} className={className} />;
}
