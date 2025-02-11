import { ReactNode } from "react";
import { DialogProps } from "./Dialog";
export type IDialog = {
    _id: string;
    open: boolean;
    props: {
        content: ReactNode;
        onClose?: (_id: string) => void;
    } & DialogProps;
};
declare const dialogsState: {
    rendered: boolean;
    setRendered(rendered: boolean): void;
    dialogs: IDialog[];
    add({ _id, open, ...dialog }: Partial<Omit<IDialog, "props">> & IDialog["props"]): void;
    remove(_id: string): void;
    update(dialog: Pick<IDialog, "_id"> & Partial<Omit<IDialog, "_id">>): void;
};
export declare function showDialog(dialog: Partial<Omit<IDialog, "props">> & IDialog["props"]): void;
export declare function closeDialog(_id: string): void;
export default dialogsState;
