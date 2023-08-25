import React, { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';

const queryClient = new QueryClient();

const provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default provider;
