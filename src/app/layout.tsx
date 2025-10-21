import React from "react";
import Script from "next/script";
import "./globals.css";

async function getTopNavHTML() {
  const res = await fetch("http://localhost:4000/?username=Alucard", {
    cache: "no-store",
  });
  return res.text();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topNavHTML = await getTopNavHTML();

  const props = { username: "Alucard" };

  return (
    <html lang="en">
      <body>
        {/* SSR HTML */}
        <div
          id="topnav-root"
          dangerouslySetInnerHTML={{ __html: topNavHTML }}
        />

        {/* Props for hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__TOPNAV_PROPS__ = ${JSON.stringify(props)};`,
          }}
        />

        {/* Hydration JS from your micro FE */}
        <Script
          src="http://localhost:4000/topnav.client.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
