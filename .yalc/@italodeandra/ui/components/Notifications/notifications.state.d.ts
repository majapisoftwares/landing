import { CSSProperties, ReactElement, ReactNode } from "react";
type Notification = {
    _id: string;
    message: string | ReactElement;
    title?: string;
    timeout?: number | string;
    icon?: "success" | "error" | ReactElement;
    dismissable?: boolean;
    actions?: ReactNode;
    suppress?: boolean;
    style?: CSSProperties;
    className?: string;
};
declare const notificationsState: {
    rendered: boolean;
    setRendered(rendered: boolean): void;
    notifications: Notification[];
    add({ _id, dismissable, timeout, ...notification }: Pick<Partial<Notification>, "_id"> & Omit<Notification, "_id">): void;
    remove(_id: string): void;
};
export declare function showNotification(notification: string | (Pick<Partial<Notification>, "_id"> & Omit<Notification, "_id">)): void;
export declare function removeNotification(_id: string): void;
export default notificationsState;
