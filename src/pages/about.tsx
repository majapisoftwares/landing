import About from "../views/about/About";
import getLayout from "../views/layout/layout";

export default function Page() {
  return <About />;
}

Page.getLayout = getLayout;
