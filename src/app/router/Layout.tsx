import { Outlet } from "react-router-dom";
import { Header } from "../entities/Header";

export const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
