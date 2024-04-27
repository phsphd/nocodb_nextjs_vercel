import React from 'react';

// pages/index.js
import Link from 'next/link';

function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Nocodedb </h1>
      <p> Nocodb Next.js application.</p>
      <Link href="/nocodb">Go to NocoDB</Link>
      {/* Update the href above to the actual path where NocoDB is accessible in your app */}
    </div>
  );
}

 
export default HomePage;
