import { getCookies } from "cookies-next";
import { GetServerSideProps } from "next";
import { MULTITENANT_MODE } from "../../constants";
import connectDb from "../../db/db";
import { checkUserType, getUserFromCookies } from "@italodeandra/auth/collections/user/User.service";
import { UserType } from "@italodeandra/auth/collections/user/User";
import Routes from "../../routes";
import { useAuthRequiredUserType } from "@italodeandra/auth/api/getUser";
import getLayout from "../../views/layout/layout";
import { Home } from "../../views/Home";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  await connectDb();
  const user = await getUserFromCookies(req, res, MULTITENANT_MODE);
  if (!checkUserType(user, [UserType.ADMIN])) {
    return {
      redirect: {
        destination: Routes.Home,
        permanent: false
      }
    };
  }

  return {
    props: {
      cookies: getCookies({ req, res })
    }
  };
};

export default function Page() {
  if (!useAuthRequiredUserType([UserType.ADMIN])) {
    return null;
  }

  return <Home />;
}

Page.getLayout = getLayout;
