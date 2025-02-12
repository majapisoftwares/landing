import { ReactNode } from "react";
import Header from "./Header/Header";

export default function getLayout(children: ReactNode) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
