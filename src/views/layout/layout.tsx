import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import WhatsappButton from "./WhatsappButton";

export default function getLayout(children: ReactNode) {
  return (
    <>
      <Header />
      {children}
      <WhatsappButton />
      <Footer />
    </>
  );
}
