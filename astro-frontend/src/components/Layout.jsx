import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
