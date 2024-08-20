import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaulLeayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
