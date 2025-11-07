import React from 'react';
import { notFound } from 'next/navigation';


const Bottomnav = async() => {

    async function getOCComponent(name: string, query: Record<string, string> = {}) {
        const params = new URLSearchParams(query).toString();
        const res = await fetch(`https://oc-component.onrender.com/${name}/1.0.0/?${params}`, {
          cache: 'no-store', // SSR refetch
        });
      
        if (!res.ok) {
          console.error('Failed to fetch OC component', await res.text());
          return null;
        }
      
        const data = await res.json();
        return data;
      }
  
  const bottomnav = await getOCComponent('bottomnav', { userId: '1' });
  if (!bottomnav) notFound();

  return (
 
      <div dangerouslySetInnerHTML={{ __html: bottomnav.html }} />

  );
}

export default Bottomnav
