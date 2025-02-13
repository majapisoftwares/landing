import { NextApiRequest } from "next";
export default function rateLimiter(req: NextApiRequest, windowTime?: string, requestLimit?: number): void;
