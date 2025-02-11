import { UserCustomData } from "../../../collections/user/User";
export type PanelUserFieldValues = {
    email: string;
    name: string;
    type: string;
    customData: UserCustomData;
    disabled: boolean;
};
