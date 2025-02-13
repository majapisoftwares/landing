import { ReactElement, ReactNode } from "react";
export default function recursiveChildrenMap<P>(children: ReactNode, fn: (child: ReactElement<P>) => ReactElement<P>): ReactNode;
