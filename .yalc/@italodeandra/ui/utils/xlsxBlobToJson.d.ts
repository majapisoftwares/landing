import { ChangeEvent } from "react";
export default function xlsxBlobToJson(event: ChangeEvent<HTMLInputElement>): Promise<Record<string, string>[] | null | undefined>;
