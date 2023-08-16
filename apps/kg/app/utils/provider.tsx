import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  );
}

export default Provider;
