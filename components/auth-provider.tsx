'use client';

import React, { useEffect, useState } from 'react';
import { AmplifyConfig } from '@/components/amplify-config';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <>
      <AmplifyConfig />
      {children}
    </>
  );
}
