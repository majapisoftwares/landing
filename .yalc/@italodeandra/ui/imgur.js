export default async function uploadToImgur(file) {
    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch("https://api.imgur.com/3/image", {
        method: "post",
        headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`,
        },
        body: formData,
    });
    const data = (await response.json());
    return data.data.link;
}
