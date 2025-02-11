import { Combobox } from "@headlessui/react";
import Loading from "../Loading";
import { useCallback, useEffect, useMemo, useRef, useState, } from "react";
import { defaultInputClassName, defaultLabelClassName, defaultLeadingInputClassName, defaultTrailingClassName, defaultTrailingInputClassName, UnstyledInput, } from "../Input";
import clsx from "../../utils/clsx";
import { isEqual, take } from "lodash-es";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Badge from "../Badge";
const defaultMenuItemsClassName = "z-10 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-800";
function getValue(id, item) {
    return typeof item === "string"
        ? item
        : item[id];
}
function MultiSelectInput({ className, selectedItems, doRender, removeItem, valueProperty, readOnly, ...props }) {
    const ref = useRef(null);
    return (<div className={clsx("flex flex-wrap border focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 dark:focus-within:border-primary-500", className)} onClick={() => ref.current?.focus()}>
      {!!selectedItems.length && (<div className="flex flex-wrap items-center gap-1 p-1.5">
          {selectedItems.map((item) => (<Badge key={getValue(valueProperty, item)} onActionClick={!readOnly ? removeItem(item) : undefined}>
              {doRender(item)}
            </Badge>))}
        </div>)}
      {!readOnly && (<Combobox.Input 
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        {...props} ref={ref} className="rounded-md border-none !ring-transparent disabled:cursor-not-allowed disabled:text-zinc-500 dark:bg-zinc-800 dark:disabled:bg-zinc-900/90 sm:text-sm" readOnly={readOnly}/>)}
    </div>);
}
export default function MultiSelect({ placeholder, emptyText = "No item found.", items = [], renderProperty = "title", renderFunction, filterProperty = "title", filterFunction, onChange, query: defaultQuery = "", onChangeQuery, loading, inputInnerClassName, inputElementClassName, as, trailing, trailingClassName, trailingInputClassName, leadingInputClassName, static: isStatic, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
displayValue = (item) => item?.[renderProperty] || "", value, labelClassName, creatable, getCreateLabel = (query) => `+ create "${query}"`, itemsRenderLimit, className, valueProperty = "_id", label, required, readOnly, ...props }) {
    const [query, setQuery] = useState(defaultQuery);
    const [selectedItems, setSelectedItems] = useState(value || []);
    // noinspection DuplicatedCode
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
            ((item) => (typeof item === "string"
                ? item
                : item[filterProperty])
                .toLowerCase()
                .includes(query.toLowerCase()))), [filterFunction, filterProperty, items, query]);
    trailing = loading ? (<Loading />) : (trailing ||
        (!readOnly ? (<Combobox.Button className="pointer-events-auto -mr-1 flex items-center">
        <ChevronUpDownIcon className="h-5 w-5 text-zinc-400" aria-hidden="true"/>
      </Combobox.Button>) : undefined));
    const ComponentInput = as || UnstyledInput;
    const doRender = useCallback((item) => renderFunction
        ? renderFunction(item)
        : typeof item === "string"
            ? item
            : item[renderProperty], [renderFunction, renderProperty]);
    useEffect(() => {
        onChange?.(selectedItems);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItems]);
    useEffect(() => {
        if (!isEqual(selectedItems, value)) {
            setSelectedItems(value || []);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    const removeItem = useCallback((item) => () => setSelectedItems((selectedItems) => [
        ...selectedItems.filter((i) => getValue(valueProperty, i) !== getValue(valueProperty, item)),
    ]), [valueProperty]);
    if (label && required) {
        label = (<>
        {label} <span className="text-red-500">*</span>
      </>);
    }
    return (<div className={clsx("relative", className)}>
      <Combobox 
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    onChange={setSelectedItems} value={selectedItems} multiple>
        {({ open }) => (<>
            <ComponentInput 
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        {...props} as={MultiSelectInput} placeholder={!readOnly ? placeholder : undefined} value={query} onChange={(event) => setQuery(event.target.value)} trailing={trailing} trailingClassName={clsx(defaultTrailingClassName, trailingClassName)} inputClassName={clsx(defaultInputClassName, "bg-white dark:bg-zinc-800", inputElementClassName, {
                "border-dashed": readOnly,
            })} innerClassName={inputInnerClassName} trailingInputClassName={clsx(defaultTrailingInputClassName, trailingInputClassName)} leadingInputClassName={clsx(defaultLeadingInputClassName, leadingInputClassName)} displayValue={displayValue} labelClassName={clsx(defaultLabelClassName, labelClassName)} selectedItems={selectedItems} doRender={doRender} removeItem={removeItem} required={required && !selectedItems.length} label={label} readOnly={readOnly} valueProperty={valueProperty}/>

            {!readOnly &&
                ((creatable && query) || filteredItems.length > 0) && (<Combobox.Options static={isStatic} className={clsx(defaultMenuItemsClassName, "absolute z-10 mt-1 max-h-72 w-full scroll-py-2 overflow-y-auto py-2 text-sm text-zinc-800 dark:text-zinc-200")}>
                  {creatable && !!query && (<Combobox.Option value={query} className={({ active }) => clsx("cursor-default select-none px-4 py-2", {
                        "bg-primary-600 text-white": active,
                    })}>
                      {({ selected }) => (<div className="flex">
                          {selected && <CheckIcon className="mr-2 w-5"/>}
                          {selected ? query : getCreateLabel(query)}
                        </div>)}
                    </Combobox.Option>)}
                  {(itemsRenderLimit
                    ? take(filteredItems, itemsRenderLimit)
                    : filteredItems).map((item) => (<Combobox.Option key={getValue(valueProperty, item)} value={item} className={({ active }) => clsx("cursor-default select-none px-4 py-2", {
                        "bg-primary-600 text-white": active,
                    })}>
                      {({ selected }) => (<div className="flex">
                          {selected && <CheckIcon className="mr-2 w-5"/>}
                          {doRender(item)}
                        </div>)}
                    </Combobox.Option>))}
                </Combobox.Options>)}

            {!readOnly &&
                !creatable &&
                open &&
                emptyText &&
                query !== "" &&
                filteredItems.length === 0 && (<p className={clsx(defaultMenuItemsClassName, "absolute mt-1 w-full p-4 text-sm text-zinc-500 dark:text-zinc-400")}>
                  {emptyText}
                </p>)}
          </>)}
      </Combobox>
    </div>);
}
