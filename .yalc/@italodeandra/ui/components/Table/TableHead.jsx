import { useMemo } from "react";
import TableHeadContext from "./TableHeadContext";
export default function TableHead({ children }) {
    return (<TableHeadContext.Provider value={useMemo(() => ({ isHead: true }), [])}>
      <thead className="sticky top-0 bg-zinc-50 dark:bg-zinc-900">
        {children}
      </thead>
    </TableHeadContext.Provider>);
}
