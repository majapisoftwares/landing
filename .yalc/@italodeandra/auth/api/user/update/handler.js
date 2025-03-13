import { unauthorized } from "@italodeandra/next/api/errors";
import removeEmptyProperties from "@italodeandra/next/utils/removeEmptyProperties";
import getUser from "../../../collections/user/User";
import { getFullUserFromCookies } from "../../../collections/user/User.service";
import uploadToImgur from "@italodeandra/next/imgur";
import { base64ToBuffer } from "@italodeandra/next/fileStorage/converters";
import sharp from "sharp";
import { merge } from "lodash-es";
export default async function userUpdateApiHandler(args, req, res, { connectDb, multitenantMode }) {
    await connectDb();
    const user = await getFullUserFromCookies(req, res, multitenantMode);
    const User = getUser();
    if (!user) {
        throw unauthorized;
    }
    const $set = {
        name: args.name,
        profilePicture: args.profilePicture?.startsWith("data:")
            ? await uploadToImgur(await sharp(base64ToBuffer(args.profilePicture))
                .resize(208, 208)
                .toBuffer())
            : undefined,
        customData: merge(user.customData, args.customData),
        username: args.username,
    };
    removeEmptyProperties($set);
    await User.updateOne({
        _id: user._id,
    }, {
        $set,
    });
}
