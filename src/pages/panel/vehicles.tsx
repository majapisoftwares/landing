import { GetServerSideProps } from "next";
import { getCookies } from "cookies-next";
import {
  checkUserType,
  getUserFromCookies,
} from "@italodeandra/auth/collections/user/User.service";
import { useAuthRequiredUserType } from "@italodeandra/auth/api/getUser";
import { UserType } from "@italodeandra/auth/collections/user/User";
import connectDb from "../../db/db";
import Routes from "../../routes";
import Vehicles from "../../views/panel/vehicles/Vehicles";
import getLayout from "../../views/layout/layout";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  await connectDb();
  const user = await getUserFromCookies(req, res);
  if (!checkUserType(user, [UserType.ADMIN])) {
    return {
      redirect: {
        destination: Routes.Home,
        permanent: false,
      },
    };
  }

  return {
    props: {
      cookies: getCookies({ req, res }),
    },
  };
};

export default function Page() {
  if (!useAuthRequiredUserType([UserType.ADMIN])) {
    return null;
  }

  return <Vehicles />;
}

Page.getLayout = getLayout;
