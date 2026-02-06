import Navbar from "../Navbar/Navbar";
import Sidebars from "./Sidebars";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="background-glow"></div>
      <Navbar />
      <Sidebars />
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
