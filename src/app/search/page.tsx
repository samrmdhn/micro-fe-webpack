// import React from 'react';
// import { notFound } from 'next/navigation';

// async function getOCComponent(name: string, query: Record<string, string> = {}) {
//   const params = new URLSearchParams(query).toString();
//   const res = await fetch(`http://localhost:3030/${name}/1.0.0/?${params}`, {
//     cache: 'no-store', // SSR refetch
//   });

//   if (!res.ok) {
//     console.error('Failed to fetch OC component', await res.text());
//     return null;
//   }

//   const data = await res.json();
//   return data;
// }



// export default async function Page() {
//   const topnav = await getOCComponent('topnav', { userId: '1' });
//   if (!topnav) notFound();

//   const bottomnav = await getOCComponent('bottomnav', { userId: '1' });
//   if (!bottomnav) notFound();

//   return (
//     <div className='w-full h-full'>
//       {/* <div dangerouslySetInnerHTML={{ __html: topnav.html }} /> */}

//       <div className='w-full h-full text-white text-2xl mt-[50vh]'>ini search page</div>
//       <div dangerouslySetInnerHTML={{ __html: bottomnav.html }} />
//     </div>
//   );
// }


export default function Page() {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-full text-white text-2xl mt-[50vh]'>ini search page</div>
    </div>
  );
}