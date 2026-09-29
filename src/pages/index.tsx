import { Home } from "../views/home/Home";
import getLayout from "../views/layout/layout";
import type { ReactNode } from "react";

export default function Page() {
  return <Home />;
}

Page.getLayout = (page: ReactNode) => getLayout(page);
