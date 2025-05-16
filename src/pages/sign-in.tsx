import { useAuthUser } from "@majapisoftwares/auth/api/getUser";
import SignInView from "@majapisoftwares/auth/views/SignInView";
import { GetServerSideProps } from "next";
import { getCookies } from "cookies-next";

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

  return <SignInView />;
}
