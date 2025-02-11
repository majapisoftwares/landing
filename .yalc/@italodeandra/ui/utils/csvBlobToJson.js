import { showNotification } from "../components/Notifications";
import blobToText from "./blobToText";
export default async function csvBlobToJson(event, encoding) {
    if (!event.target.files?.[0]) {
        showNotification({
            icon: "error",
            message: "Nenhum arquivo foi selecionado",
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const csv = await blobToText(event.target.files[0], encoding);
    event.target.value = "";
    const rows = csv.trim().split("\r\n");
    const headers = rows.shift()?.split(";");
    if (!headers) {
        return null;
    }
    const wrongValues = [];
    const json = [];
    for (const row of rows) {
        const object = {};
        const values = row.split(";");
        if (values.length !== headers.length) {
            wrongValues.push(values);
        }
        else {
            for (let i = 0; i < headers.length; i++) {
                object[headers[i]] = values[i];
            }
            json.push(object);
        }
    }
    if (wrongValues.length) {
        showNotification({
            icon: "error",
            message: `A planilha está sendo importada em segundo plano mas ${wrongValues.length} items foram ignorados por estarem com o formato errado`,
        });
        console.error(wrongValues);
    }
    else {
        showNotification({
            icon: "success",
            message: "A planilha está sendo importada em segundo plano",
        });
    }
    return json;
}
