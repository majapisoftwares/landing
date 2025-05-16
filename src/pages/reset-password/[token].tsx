import { useAuthUser } from "@majapisoftwares/auth/api/getUser";
import ResetPasswordView from "@majapisoftwares/auth/views/ResetPasswordView";
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

  return <ResetPasswordView />;
}
