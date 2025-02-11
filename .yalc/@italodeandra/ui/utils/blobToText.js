export default function blobToText(file, encoding) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = function (e) {
            const contents = e.target?.result;
            resolve(contents);
        };
        reader.onerror = function (e) {
            reject(e.target?.error);
        };
        reader.readAsText(file, encoding);
    });
}
