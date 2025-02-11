import {
  checkUserType,
  getUserFromCookies,
} from "@italodeandra/auth/collections/user/User.service";
import { unauthorized } from "@italodeandra/next/api/errors";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDb from "../../../db/db";
import { UserType } from "@italodeandra/auth/collections/user/User";
import createApi from "@italodeandra/next/api/createApi";
import isomorphicObjectId from "@italodeandra/next/utils/isomorphicObjectId";
import getVehicle from "../../../collections/Vehicle";
import { vehicleListApi } from "./list";

export const vehicleDeleteApi = createApi(
  "/api/vehicle/delete",
  async function handler(
    args: { _id: string },
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    await connectToDb();
    const Vehicle = getVehicle();
    const user = await getUserFromCookies(req, res);
    if (!checkUserType(user, [UserType.ADMIN])) {
      throw unauthorized(res, { noLog: true });
    }

    await Vehicle.deleteOne({
      _id: isomorphicObjectId(args._id),
    });
  },
  {
    mutationOptions: {
      onSuccess(_data, _variables, _context, queryClient) {
        void vehicleListApi.invalidateQueries(queryClient);
      },
    },
  },
);

export default vehicleDeleteApi.handler;
