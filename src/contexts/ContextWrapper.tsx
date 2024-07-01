"use client";
import { ReactNode } from 'react';

interface ContextWrapperProps {
  children: ReactNode;
}

export const ContextWrapper = ({ children }: ContextWrapperProps) => {
  return (
    <>
      {children}
    </>
  );
};
