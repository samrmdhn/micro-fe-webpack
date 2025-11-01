import React from 'react';
import { notFound } from 'next/navigation';

async function getOCComponent(name: string, query: Record<string, string> = {}) {
  const params = new URLSearchParams(query).toString();
  const res = await fetch(`http://localhost:3030/${name}/1.0.0/?${params}`, {
    cache: 'no-store', // SSR refetch
  });

  if (!res.ok) {
    console.error('Failed to fetch OC component', await res.text());
    return null;
  }

  const data = await res.json();
  return data;
}

export default async function Page() {
  const bottomnav = await getOCComponent('bottomnav', { userId: '1' });
  if (!bottomnav) notFound();

  return (
    <main style={{ padding: '20px' }}>
      <h1>Microfrontend Shell (SSR)</h1>
      <p>This page server-side renders the OC component and hydrates it.</p>

      <div dangerouslySetInnerHTML={{ __html: bottomnav.html }} />
    </main>
  );
}
