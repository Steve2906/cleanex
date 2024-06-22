"use client";

import React, { ReactNode } from 'react';
import '/home/user/cleanex/src/app/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
