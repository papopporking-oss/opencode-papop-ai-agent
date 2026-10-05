"use client";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function Layout({ children, }: { children: React.ReactNode; }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="admin-drawer" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Navbar />
        {children}
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
}