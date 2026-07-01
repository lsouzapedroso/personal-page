import React from 'react';

export const metadata = {
  title: 'My Personal Page - V2 Route',
  description: 'Specific content for the V2 route.',
};

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here or make it specific to v2 route */}
      {children}
    </section>
  );
}
