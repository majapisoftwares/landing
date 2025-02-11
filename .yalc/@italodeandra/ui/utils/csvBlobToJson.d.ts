import { ChangeEvent } from "react";
export default function csvBlobToJson(event: ChangeEvent<HTMLInputElement>, encoding: "windows-1252" | "utf8"): Promise<Record<string, string>[] | null>;
