import { ReactElement, ReactNode } from "react";
export default function recursiveChildrenMap(children: ReactNode, fn: (child: ReactElement) => ReactElement): ReactNode;
