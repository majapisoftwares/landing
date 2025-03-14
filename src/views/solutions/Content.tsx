import Image, { StaticImageData } from "next/image";
import Bg from "../layout/Bg";
import { ReactElement } from "react";
import clsx from "@italodeandra/ui/utils/clsx";

export default function Content({
  positionBg,
  image,
  title,
  description,
  front,
  back,
  icons,
  left,
}: {
  left?: boolean;
  positionBg: string;
  image: StaticImageData;
  title: string;
  description: string;
  front: string;
  back: string;
  icons: ReactElement[];
}) {
  return (
    <>
      <div className="relative">
        <Bg className={positionBg} />
      </div>
      <div
        className={clsx(
          "z-10 flex w-full flex-col gap-4",
          left ? "md:flex-row" : "md:flex-row-reverse",
        )}
      >
        <div className="rounded-lg bg-zinc-300 px-8 pt-8">
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className={clsx(
            "flex flex-col justify-center gap-10",
            left ? "md:ml-auto" : "md:mr-auto",
          )}
        >
          <div
            className={clsx(
              "flex flex-col items-center gap-4",
              left ? "md:items-end" : "md:items-start",
            )}
          >
            <div
              className={clsx(
                "bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-3xl font-semibold text-transparent md:text-5xl md:tracking-[-2.88px]",
                left ? "md:text-right" : "md:text-left",
              )}
            >
              {title}
            </div>
            <div
              className={clsx(
                "max-w-[500px] text-center font-dm text-lg leading-8 text-zinc-400 md:text-xl",
                left ? "md:text-right" : "md:text-left",
              )}
            >
              {description}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className={clsx(
                "bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-2xl font-semibold text-transparent md:text-4xl md:tracking-[-2.88px]",
                left ? "md:text-right" : "md:text-left",
              )}
            >
              What We Do
            </div>
            <div
              className={clsx(
                "text-center font-dm text-lg leading-8 text-zinc-400 md:text-xl",
                left ? "md:text-right" : "md:text-left",
              )}
            >
              {front}
            </div>
            <div
              className={clsx(
                "text-center font-dm text-lg leading-8 text-zinc-400 md:text-xl",
                left ? "md:text-right" : "md:text-left",
              )}
            >
              {back}
            </div>
            <div
              className={clsx(
                "text-center font-dm text-lg leading-8 text-zinc-400 md:text-xl",
                left ? "md:text-right" : "md:text-left",
              )}
            >
              QA Testing
            </div>
          </div>
          <div
            className={clsx(
              "flex justify-center gap-10",
              left ? "md:justify-end" : "md:justify-start",
            )}
          >
            {icons}
          </div>
        </div>
      </div>
    </>
  );
}
