import { Outlet, Link, Navigate, useLocation } from "react-router-dom";

import "./RootLayout.css";

export const RootLayout = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <div className="logo">John Doe</div>
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="home">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="portfolio">Portfolio</Link>
            </li>
            <li className="nav-link">
              <Link to="technologies">Technologies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
