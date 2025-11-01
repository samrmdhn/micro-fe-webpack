import React from "react";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add OC base client so hydration works */}
        <script src="//localhost:3030/oc-client/client.js" async />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
