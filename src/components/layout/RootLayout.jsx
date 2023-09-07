import { Outlet, Link } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <header>
        <nav>
          <div>John Doe</div>
          <ul>
            <li>
              <Link to="home">Home</Link>
              <Link to="portfolio">Portfolio</Link>
              <Link to="technologies">Technologies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
