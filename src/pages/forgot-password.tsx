import { useAuthUser } from "@italodeandra/auth/api/getUser";
import ForgotPasswordView from "@italodeandra/auth/views/ForgotPasswordView";
import { GetServerSideProps } from "next";
import { getCookies } from "cookies-next";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => ({
  props: {
    cookies: getCookies({ req, res })
  }
});

export default function Page() {
  if (useAuthUser()) {
    return null;
  }

  return <ForgotPasswordView />;
}
