import Image from "next/image";
import NextLink from "next/link";
import { useAuthContext } from "../../AuthContext";
import ModeToggle from "@italodeandra/ui/components/ModeToggle";
import GridPattern from "@italodeandra/ui/components/GridPattern";
export default function AuthLayout({ title, subtitle, children, backgroundImage = "https://i.imgur.com/AEFv06G.jpg", backgroundDescription, }) {
    const { Routes, disableModeToggle, logo } = useAuthContext();
    return (<div className="flex min-h-screen bg-white dark:bg-zinc-900">
      <div className="relative flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] dark:text-slate-100/[0.07]">
          <GridPattern x="100%" patternTransform="translate(0 -1)"/>
        </div>
        <div className="z-10 mx-auto w-full max-w-sm lg:w-96">
          <div>
            <NextLink href={Routes.Home}>
              {logo || (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/favicon.ico" width={48} height={48} alt="Logo"/>)}
            </NextLink>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {title}
            </h2>
            {subtitle && (<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {subtitle}
              </p>)}
          </div>

          <div className="mt-8">
            <div className="mt-6">{children}</div>
            {!disableModeToggle && (<div className="mt-2 flex justify-center">
                <ModeToggle />
              </div>)}
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image className="absolute inset-0 h-full w-full object-cover" src={backgroundImage} alt="" fill/>
        {backgroundDescription && (<div className="absolute right-2 bottom-2 rounded bg-white/30 px-1 py-0.5 text-xs font-medium">
            {backgroundDescription}
          </div>)}
      </div>
    </div>);
}
