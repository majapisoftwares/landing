import { getUserFromCookies } from "@italodeandra/auth/collections/user/User.service";
import { unauthorized } from "@italodeandra/next/api/errors";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDb from "../../../db/db";
import createApi from "@italodeandra/next/api/createApi";
import getVehicle from "../../../collections/Vehicle";
import isomorphicObjectId from "@italodeandra/next/utils/isomorphicObjectId";

export const vehicleGetApi = createApi(
  "/api/vehicle/get",
  async function handler(
    args: {
      _id: string;
    },
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    await connectToDb();
    const Vehicle = getVehicle();
    const user = await getUserFromCookies(req, res);
    if (!user) {
      throw unauthorized(res, { noLog: true });
    }

    return Vehicle.findById(isomorphicObjectId(args._id), {
      projection: {
        title: 1,
      },
    });
  },
  {
    queryKeyMap: (args) => [args?._id],
  },
);

export default vehicleGetApi.handler;
