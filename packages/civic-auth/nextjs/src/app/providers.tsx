"use client";
import { ReactNode } from "react";
import { CivicAuthProvider } from "@civic/auth/nextjs";

const Providers = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
      <CivicAuthProvider>
        {children}
      </CivicAuthProvider>
  );
};

export { Providers };
