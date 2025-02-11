import { proxy, ref } from "valtio";
import isomorphicObjectId from "@italodeandra/next/utils/isomorphicObjectId";
import ms from "ms";
const notificationsState = proxy({
    rendered: false,
    setRendered(rendered) {
        notificationsState.rendered = rendered;
    },
    notifications: [],
    add({ _id = isomorphicObjectId().toString(), dismissable = true, timeout, ...notification }) {
        if (!notificationsState.rendered) {
            console.error("<Notifications /> is not rendered. The notification will be ignored.");
        }
        notificationsState.notifications.push(ref({
            ...notification,
            dismissable,
            _id,
        }));
        if (timeout) {
            setTimeout(() => {
                notificationsState.remove(_id);
            }, typeof timeout === "string" ? ms(timeout) : timeout);
        }
    },
    remove(_id) {
        notificationsState.notifications.splice(notificationsState.notifications.findIndex((n) => n._id === _id), 1);
    },
});
export function showNotification(notification) {
    const notificationObject = typeof notification === "string" ? { message: notification } : notification;
    if (notificationObject.suppress &&
        notificationsState.notifications.find((n) => n.message === notificationObject.message &&
            n.title === notificationObject.title)) {
        return;
    }
    notificationsState.add(notificationObject);
}
export function removeNotification(_id) {
    notificationsState.remove(_id);
}
export default notificationsState;
