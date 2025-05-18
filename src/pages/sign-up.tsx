import { useAuthUser } from "@majapisoftwares/auth/api/getUser";
import { GetServerSideProps } from "next";
import { getCookies } from "cookies-next";
import SignUpView from "@majapisoftwares/auth/views/SignUpView";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => ({
  props: {
    cookies: getCookies({ req, res })
  }
});

export default function Page() {
  const user = useAuthUser();

  if (user) {
    return null;
  }

  return <SignUpView />;
}
