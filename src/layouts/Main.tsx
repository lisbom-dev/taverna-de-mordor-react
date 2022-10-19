import React from "react";
import Footer from "../resources/views/partials/Footer";
import Navbar from "../resources/views/partials/Navbar";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <script src="https://cdn.socket.io/4.0.1/socket.io.min.js"></script>
    </div>
  );
};

export default Main;
