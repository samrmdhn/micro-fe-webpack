'use client';
import React, { useEffect } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 1️⃣ Load OC client script on the browser
    const script = document.createElement('script');
    script.src = '//localhost:3030/oc-client/client.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* 2️⃣ Create a global `oc` placeholder so SSR inline scripts won't crash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.oc = window.oc || {};
              window.oc.cmd = window.oc.cmd || [];
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
