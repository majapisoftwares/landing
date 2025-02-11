import Header from "./Header/Header";
import { ReactNode } from "react";
import NavigationDrawer from "./Header/NavigationDrawer";

export default function getLayout(children: ReactNode) {
  return (
    <>
      <Header />
      <NavigationDrawer>
        <div className="h-16" />
        {children}
      </NavigationDrawer>
    </>
  );
}
