import Header from "./Header/Header";
import { ReactNode } from "react";

export default function getLayout(children: ReactNode) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
