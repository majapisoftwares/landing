import { getUserFromCookies } from "@italodeandra/auth/collections/user/User.service";
import { unauthorized } from "@italodeandra/next/api/errors";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDb from "../../../db/db";
import querify from "@italodeandra/next/utils/querify";
import createApi from "@italodeandra/next/api/createApi";
import getVehicle, { IVehicle } from "../../../collections/Vehicle";
import { PaprFilter } from "papr";

export const vehicleListApi = createApi(
  "/api/vehicle/list",
  async function handler(
    args: {
      page?: number;
      limit?: number;
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

    const queryArgs = querify(args);

    const page = queryArgs.page ? +queryArgs.page : undefined;
    const limit = queryArgs.limit ? +queryArgs.limit : undefined;

    const filter: PaprFilter<IVehicle> = {};
    const totalItems = await Vehicle.countDocuments(filter);
    const results = await Vehicle.find(filter, {
      projection: {
        title: 1,
      },
      sort: { title: 1 },
      ...(limit && page
        ? {
            limit,
            skip: (page - 1) * limit,
          }
        : {}),
    });

    return {
      results,
      totalItems,
    };
  },
  {
    queryKeyMap: (args) => [args?.page, args?.limit],
  },
);

export default vehicleListApi.handler;

export type VehicleListApi = typeof vehicleListApi.Types;
