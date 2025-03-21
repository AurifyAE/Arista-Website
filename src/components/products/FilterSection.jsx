import { ArrowDownIcon, CheckIcon } from "../Icons";

export const FilterSection = ({ title, items, selectedItem, onSelectItem, isOpen, toggleSection }) => {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-black">{title}</h2>
        <button aria-label="Toggle filter" onClick={toggleSection}>
          <ArrowDownIcon className={`${isOpen ? "rotate-180" : ""} transition-transform`} />
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center cursor-pointer"
              onClick={() => onSelectItem(item)}
            >
              <div className="flex gap-2 items-center">
                {item.name === selectedItem ? (
                  <CheckIcon />
                ) : (
                  <div className="w-6 h-6 rounded-md border border-neutral-400" />
                )}
                <span className="text-base text-black">{item.name}</span>
              </div>
              {item.count && (
                <div className="px-3.5 py-2 text-sm font-semibold tracking-tight bg-zinc-100 bg-opacity-20 rounded-[38px] text-zinc-900">
                  {item.count}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
