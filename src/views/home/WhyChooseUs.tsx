import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@italodeandra/ui/components/Button";
import Accordion from "@italodeandra/ui/components/Accordion";
import { BoltIcon } from "@heroicons/react/24/outline";

export default function WhyChooseUs() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-10 pt-40">
      <div className="flex gap-4 px-4">
        <div className="flex w-full flex-col gap-10">
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text font-dm text-5xl font-semibold tracking-[-2.88px] text-transparent">
            Why choose us
          </div>
          <div className="max-w-[506px] self-stretch text-2xl font-normal leading-8 tracking-[-1.44px] text-zinc-400">
            We combine innovation, agility, and expertise to deliver custom,
            high-performance solutions. With a global presence in Brazil, the
            US, and Turkey, we ensure cutting-edge technology, dedicated
            support, and scalable results to help your business thrive.
          </div>
          <div>
            <Button
              variant="filled"
              size="xl"
              className="rounded-[50px] border border-zinc-500 bg-zinc-100 px-8 py-3 font-dm text-zinc-800"
              trailing={<ArrowLongRightIcon className="h-6 w-6" />}
            >
              Schedule a meeting
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-end">
          <Accordion>
            <Accordion.Item
              triggerClassName="gap-2 items-center font-tight text-2xl border border-zinc-800 dark:bg-[#151315] px-8 py-5"
              contentClassName="dark:bg-[#151315] border-x border-b rounded-lg -mt-2 border-zinc-800"
              title={
                <>
                  Agility & Efficiency
                  <div className="rounded-full bg-white p-2">
                    <BoltIcon className="h-4 w-4 text-black" />
                  </div>
                </>
              }
            >
              Test 1 a
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
