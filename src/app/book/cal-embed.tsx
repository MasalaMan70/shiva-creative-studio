"use client";

import { useEffect } from "react";

export function CalEmbed() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "shiva-pawar-bzbyk0/30min";

  useEffect(() => {
    // Dynamically load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-expect-error Cal is loaded globally by the embed script
      if (window.Cal) {
        // @ts-expect-error Cal is loaded globally by the embed script
        window.Cal("init", {
          origin: "https://app.cal.com",
        });
        // @ts-expect-error Cal is loaded globally by the embed script
        window.Cal("inline", {
          elementOrSelector: "#cal-embed",
          calLink,
          layout: "month_view",
          config: {
            theme: "dark",
          },
        });
        // @ts-expect-error Cal is loaded globally by the embed script
        window.Cal("ui", {
          theme: "dark",
          styles: { branding: { brandColor: "#D4A853" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [calLink]);

  return (
    <div className="rounded-sm border border-border/50 bg-surface overflow-hidden">
      <div
        id="cal-embed"
        style={{ width: "100%", height: "100%", minHeight: "600px" }}
      />
    </div>
  );
}
