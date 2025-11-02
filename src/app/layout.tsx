// 'use client';
import React, { useEffect } from 'react';
import './globals.css';
import OCEventListener from '@/lib/OCEventListener';
import Topnav from '@/components/Topnav';
import Bottomnav from '@/components/Bottomnav';
import OCClient from '@/lib/OCClient';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

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
      <body>
        <Topnav />
        <OCClient />
        <OCEventListener />
        {children}
        <Bottomnav />
        </body>


    </html>
  );
}
