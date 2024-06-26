"use client";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

interface ReactQueryClientProviderProps {
  children: ReactNode;
}

const ReactQueryClientProvider = ({ children }: ReactQueryClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
