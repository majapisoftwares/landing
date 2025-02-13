import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useId } from "react";
import * as RAccordion from "@radix-ui/react-accordion";
import clsx from "../../utils/clsx";
export default function Accordion({ children }) {
    return (<RAccordion.Root type="multiple" className="flex flex-col gap-2">
      {children}
    </RAccordion.Root>);
}
Accordion.Item = AccordionItem;
function AccordionItem({ children, title, value, triggerClassName, contentClassName, }) {
    const id = useId();
    value = value || id;
    return (<RAccordion.Item value={value}>
      <RAccordion.Header>
        <RAccordion.Trigger className={clsx("group flex w-full justify-between rounded-lg bg-zinc-200 px-4 py-2 text-left text-sm font-medium hover:bg-zinc-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:bg-zinc-800 dark:hover:bg-zinc-700", triggerClassName)}>
          {title}
          <ChevronUpIcon className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180"/>
        </RAccordion.Trigger>
      </RAccordion.Header>
      <RAccordion.Content className={clsx("px-4 pb-2 pt-2", contentClassName)}>
        {children}
      </RAccordion.Content>
    </RAccordion.Item>);
}
