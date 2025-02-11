import { proxy, ref } from "valtio";
import isomorphicObjectId from "@italodeandra/next/utils/isomorphicObjectId";
import { find } from "lodash-es";
const dialogsState = proxy({
    rendered: false,
    setRendered(rendered) {
        dialogsState.rendered = rendered;
    },
    dialogs: [],
    add({ _id = isomorphicObjectId().toString(), open = true, ...dialog }) {
        if (!dialogsState.rendered) {
            console.error("<Dialogs /> is not rendered. The dialog will be ignored.");
        }
        dialogsState.dialogs.push({
            _id,
            open,
            props: ref(dialog),
        });
    },
    remove(_id) {
        dialogsState.dialogs.splice(dialogsState.dialogs.findIndex((n) => n._id === _id), 1);
    },
    update(dialog) {
        const updateDialog = find(dialogsState.dialogs, { _id: dialog._id });
        if (updateDialog) {
            Object.assign(updateDialog, dialog);
        }
    },
});
export function showDialog(dialog) {
    dialogsState.add(dialog);
}
export function closeDialog(_id) {
    dialogsState.update({
        _id,
        open: false,
    });
    setTimeout(() => dialogsState.remove(_id), 300);
}
export default dialogsState;
