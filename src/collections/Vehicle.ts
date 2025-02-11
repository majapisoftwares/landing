import db from "@italodeandra/next/db";
import { onlyServer } from "@italodeandra/next/utils/isServer";
import { schema, types } from "papr";

const vehicleSchema = onlyServer(() =>
  schema(
    {
      title: types.string()
    },
    {
      timestamps: true
    }
  )
);

const getVehicle = () => onlyServer(() => db.model("vehicles", vehicleSchema));

export type IVehicle = (typeof vehicleSchema)[0];

export default getVehicle;
