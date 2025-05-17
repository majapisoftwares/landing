import { cloneElement, ReactElement } from "react";
import { ServiceBadge } from "./ServiceBadge";

export function ServiceCard({
  icon,
  title,
  description,
  badges,
}: {
  icon: ReactElement<{ className?: string }>;
  title: string;
  description: string;
  badges: {
    icon: ReactElement<{ className?: string }>;
    label: string;
  }[];
}) {
  return (
    <div className="flex max-w-[402px] flex-col items-center justify-center gap-6 rounded-[10px] border border-zinc-800 bg-[rgba(24,24,27,0.50)] p-6 backdrop-blur-sm">
      <div className="flex h-[60px] w-[60px] flex-col items-center justify-center gap-2.5 rounded-full bg-white text-zinc-800">
        {cloneElement(icon, {
          className: "h-[23px] w-[23px]",
        })}
      </div>
      <div className="flex flex-col items-start justify-center gap-2 self-stretch">
        <div className="text-center text-xl leading-7 font-semibold text-white">
          {title}
        </div>
        <div className="text-sm leading-5 text-zinc-400">{description}</div>
      </div>
      <div className="mt-auto flex flex-wrap justify-evenly gap-2">
        {badges.map((badge) => (
          <ServiceBadge key={badge.label} {...badge} />
        ))}
      </div>
    </div>
  );
}
