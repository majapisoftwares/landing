import Button from "@italodeandra/ui/components/Button";
import { ExclamationTriangleIcon, UserIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Tooltip from "@italodeandra/ui/components/Tooltip";
import DropdownMenu from "@italodeandra/ui/components/DropdownMenu";
import getInitials from "@italodeandra/ui/utils/getInitials";
import Loading from "@italodeandra/ui/components/Loading";
import { setData_authGetUser, useAuthGetUser } from "@italodeandra/auth/api/getUser";
import { clearAuthState, useAuthSnapshot } from "@italodeandra/auth/auth.state";
import { useAuthPanelUserStopImpersonate } from "@italodeandra/auth/api/panel/user/stop-impersonate";
import Routes from "../../../routes";

export default function UserMenu() {
  const { data: user, isLoading: isLoadingUser, isError } = useAuthGetUser();
  const { token, previousToken } = useAuthSnapshot();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: stopImpersonate, isPending: isStoppingImpersonate } =
    useAuthPanelUserStopImpersonate();

  const handleLogOutClick = useCallback(async () => {
    clearAuthState();
    setData_authGetUser(queryClient, null);
    await router.replace(Routes.Home);
  }, [queryClient, router]);

  if (isError) {
    return (
      <Tooltip content="There was an unexpected error trying to get the logged in user data">
        <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-red-100">
          <ExclamationTriangleIcon className="w-6 text-red-500" />
        </div>
      </Tooltip>
    );
  }

  const isLoading = isStoppingImpersonate || (!!token && isLoadingUser);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="rounded-full p-1.5 w-9 h-9">
          {isLoading ? (
            <Loading className="w-5 h-5" />
          ) : user ? (
            <span className="text-sm font-medium uppercase">
              {getInitials(user.name || user.email)}
            </span>
          ) : (
            <UserIcon className="w-5 h-5" />
          )}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {user ? (
          <>
            <DropdownMenu.Label title={user.email}>
              {user.name || user.email}
            </DropdownMenu.Label>
            {previousToken && (
              <DropdownMenu.Item onClick={() => stopImpersonate()}>
                Stop impersonating
              </DropdownMenu.Item>
            )}
            <DropdownMenu.Item onClick={handleLogOutClick}>
              Sign out
            </DropdownMenu.Item>
          </>
        ) : (
          <DropdownMenu.Item href={Routes.SignIn}>Sign in</DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
