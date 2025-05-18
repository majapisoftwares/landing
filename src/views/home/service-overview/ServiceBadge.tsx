import { cloneElement, ReactElement } from "react";

export function ServiceBadge({
  icon,
  label,
}: {
  icon: ReactElement<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex flex-1 items-center justify-center gap-1.5 rounded border border-zinc-800 bg-white/5 px-2.5 py-1 whitespace-nowrap">
      {cloneElement(icon, {
        className: "h-4 w-4 shrink-0",
      })}
      <div className="text-xs leading-[23px] font-medium text-white">
        {label}
      </div>
    </div>
  );
}
