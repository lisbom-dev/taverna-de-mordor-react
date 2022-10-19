import React from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    {children}
    <Footer />
    <script src="https://cdn.socket.io/4.0.1/socket.io.min.js" />
  </div>
);

export default MainLayout;
