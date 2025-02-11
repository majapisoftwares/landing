import { HomeIcon, TruckIcon, UsersIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";
import UiNavigationDrawer, {
  NavigationItem,
} from "@italodeandra/ui/components/NavigationDrawer";
import { useAuthGetUser } from "@italodeandra/auth/api/getUser";
import { checkUserType } from "@italodeandra/auth/collections/user/User.service";
import { UserType } from "@italodeandra/auth/collections/user/User";
import Routes from "../../../routes";

export default function NavigationDrawer({
  children,
}: {
  children: ReactNode;
}) {
  const { data: user } = useAuthGetUser();
  const isAdmin = checkUserType(user, [UserType.ADMIN]);
  return (
    <UiNavigationDrawer
      navigationChildren={
        <>
          <NavigationItem icon={<HomeIcon />} href={Routes.Home} exact>
            Home
          </NavigationItem>
          {!!user && isAdmin && (
            <>
              <NavigationItem
                href={Routes.PanelVehicles}
                alternativeActiveHrefs={[Routes.PanelVehicle()]}
                icon={<TruckIcon />}
              >
                Vehicles
              </NavigationItem>
              <NavigationItem
                href={Routes.PanelUsers}
                alternativeActiveHrefs={[Routes.PanelUser("")]}
                icon={<UsersIcon />}
              >
                Users
              </NavigationItem>
            </>
          )}
        </>
      }
    >
      {children}
    </UiNavigationDrawer>
  );
}
