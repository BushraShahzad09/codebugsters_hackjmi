import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
    </UserProvider>
  );
}