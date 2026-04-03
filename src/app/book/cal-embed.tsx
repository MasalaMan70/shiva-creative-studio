"use client";

import { useEffect, useRef } from "react";

export function CalEmbed() {
  const calLink =
    process.env.NEXT_PUBLIC_CAL_LINK || "shiva-pawar-bzbyk0/30min";
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    (function (C: Window & { Cal?: any }, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal!;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api = function (...apiArgs: any[]) {
              p(api, apiArgs);
            };
            const namespace = args[1];
            (api as any).q = (api as any).q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, args);
            }
            return;
          }
          p(cal, args);
        };
    })(window as any, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;

    Cal("init", { origin: "https://cal.com" });

    Cal("inline", {
      elementOrSelector: "#cal-embed",
      calLink,
      layout: "month_view",
      config: {
        theme: "dark",
      },
    });

    Cal("ui", {
      theme: "dark",
      styles: { branding: { brandColor: "#D4A853" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
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
