import { Combobox } from "@headlessui/react";
import Loading from "../Loading";
import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultInputClassName, defaultLeadingInputClassName, defaultTrailingClassName, defaultTrailingInputClassName, UnstyledInput, } from "../Input";
import clsx from "../../utils/clsx";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useUpdateEffect } from "react-use";
import { take } from "lodash-es";
export default function UnstyledAutocomplete({ placeholder, emptyText, items = [], renderProperty = "title", renderFunction, filterProperty = "title", filterFunction, onSelect, query: defaultQuery = "", onChangeQuery, loading, emptyTextClassName, optionsClassName, optionClassName, inputInnerClassName, inputElementClassName, as, trailing, trailingClassName, trailingInputClassName, leadingInputClassName, static: isStatic, displayValue, value, readOnly, itemsRenderLimit, disabledItems, ...props }) {
    displayValue =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        displayValue || ((item) => item?.[renderProperty] || "");
    const [query, setQuery] = useState(defaultQuery);
    const [selectedItem, setSelectedItem] = useState(null);
    useEffect(() => {
        if (query !== defaultQuery) {
            setQuery(defaultQuery);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultQuery]);
    useEffect(() => {
        if (onChangeQuery && query !== defaultQuery) {
            onChangeQuery(query);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onChangeQuery, query]);
    const filteredItems = useMemo(() => query === ""
        ? items
        : items.filter(filterFunction ||
            ((item) => item[filterProperty]
                .toLowerCase()
                .includes(query.toLowerCase()))), [filterFunction, filterProperty, items, query]);
    trailing = loading ? (<Loading />) : (trailing ||
        (!readOnly ? (<Combobox.Button className="pointer-events-auto -mr-1 flex items-center">
        <ChevronUpDownIcon className="h-5 w-5 text-zinc-400" aria-hidden="true"/>
      </Combobox.Button>) : undefined));
    const ComponentInput = as || UnstyledInput;
    const doRender = useCallback((item) => renderFunction ? renderFunction(item) : item[renderProperty], [renderFunction, renderProperty]);
    useUpdateEffect(() => {
        onSelect?.(selectedItem);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItem]);
    useEffect(() => {
        if (selectedItem !== value) {
            setSelectedItem(value || null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return (<Combobox onChange={setSelectedItem} value={selectedItem} nullable>
      {({ open }) => (<>
          <div className="relative">
            <ComponentInput 
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        {...props} as={Combobox.Input} placeholder={placeholder} onChange={(event) => setQuery(event.target.value)} trailing={trailing} trailingClassName={clsx(defaultTrailingClassName, trailingClassName)} inputClassName={clsx(defaultInputClassName, inputElementClassName)} innerClassName={inputInnerClassName} trailingInputClassName={clsx(defaultTrailingInputClassName, trailingInputClassName)} leadingInputClassName={clsx(defaultLeadingInputClassName, leadingInputClassName)} displayValue={displayValue} readOnly={readOnly}/>
          </div>

          {filteredItems.length > 0 && !readOnly && (<Combobox.Options static={isStatic} className={optionsClassName}>
              {(itemsRenderLimit
                    ? take(filteredItems, itemsRenderLimit)
                    : filteredItems).map((item) => (<Combobox.Option key={item._id} value={item} className={({ active, selected }) => clsx("flex gap-2", optionClassName && optionClassName({ active, selected }))} disabled={disabledItems?.includes(item._id)} data-disabled={disabledItems?.includes(item._id) ? "" : undefined}>
                  {({ selected, active }) => (<>
                      {selected ? (<span className={clsx("flex items-center", active ? "text-white" : "text-primary-500")}>
                          <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                        </span>) : null}
                      {doRender(item)}
                    </>)}
                </Combobox.Option>))}
            </Combobox.Options>)}

          {open && emptyText && query !== "" && filteredItems.length === 0 && (<p className={emptyTextClassName}>{emptyText}</p>)}
        </>)}
    </Combobox>);
}
