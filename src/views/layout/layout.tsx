import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import WhatsappButton from "./WhatsappButton";
import { useTranslation } from "../../intl/useTranslation";

function Layout({ children }: { children: ReactNode }) {
  const t = useTranslation();

  return (
    <>
      <Header />
      <main aria-label={t("Main content")}>{children}</main>
      <WhatsappButton />
      <Footer />
    </>
  );
}

export default function getLayout(children: ReactNode) {
  return <Layout>{children}</Layout>;
}
