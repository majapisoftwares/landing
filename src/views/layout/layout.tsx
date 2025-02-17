import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function getLayout(children: ReactNode) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
