import { AuthContext } from "./AuthContext";
import dynamic from "next/dynamic";
const Notifications = dynamic(() => import("@italodeandra/ui/components/Notifications/Notifications"), {
    ssr: false,
});
export default function AuthProvider({ children, ...props }) {
    return (<AuthContext.Provider value={props}>
      <Notifications />
      {children}
    </AuthContext.Provider>);
}
