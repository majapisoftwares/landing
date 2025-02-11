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
import Jsonify from "@italodeandra/next/utils/Jsonify";
import { omit } from "lodash-es";
import type { PaprUpdateFilter } from "papr";
import { WritableDeep } from "type-fest";
import { vehicleGetApi } from "./get";
import getVehicle, { IVehicle } from "../../../collections/Vehicle";
import { vehicleListApi } from "./list";

export const vehicleUpsertApi = createApi(
  "/api/vehicle/upsert",
  async function handler(
    args: Jsonify<Pick<Partial<IVehicle>, "_id" | "title">>,
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    await connectToDb();
    const Vehicle = getVehicle();
    const user = await getUserFromCookies(req, res);
    if (!checkUserType(user, [UserType.ADMIN])) {
      throw unauthorized(res, { noLog: true });
    }

    const $set: PaprUpdateFilter<IVehicle>["$set"] = {
      ...omit(args, ["_id"]),
    };
    const $unset: WritableDeep<PaprUpdateFilter<IVehicle>["$unset"]> = {};

    const vehicle = await Vehicle.upsert(
      {
        _id: isomorphicObjectId(args._id),
      },
      {
        $set,
        $unset,
      },
    );

    return {
      _id: vehicle._id,
    };
  },
  {
    mutationOptions: {
      onSuccess(_data, variables, _context, queryClient) {
        if (variables._id) {
          void vehicleGetApi.invalidateQueries(queryClient, {
            _id: variables._id,
          });
        }
        void vehicleListApi.invalidateQueries(queryClient);
      },
    },
  },
);

export default vehicleUpsertApi.handler;
