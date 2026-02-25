"use client";

import Script from "next/script";

export default function ClientScripts() {
  return (
    <Script
      src="https://chatrace.com/webchat/plugin.js?v=6"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.ktt10) {
          window.ktt10.setup({
            id: "2c4qL3qD0BN",
            accountId: "1416607",
            color: "#E67E4B",

            //     id: "Mk3ya16sl6oWGwT",
            //     accountId: "1350126",
            //     color: "#422E20",
          });
        }
      }}
    />
  );
}
