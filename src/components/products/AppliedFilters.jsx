import { CloseIcon } from "../Icons";

export const AppliedFilters = ({ appliedFilters, onClearAll, onRemove }) => {
  return (
    <section className="flex flex-col gap-4 mt-9">
      <h2 className="text-xl font-semibold text-black">Applied filters</h2>
      <div className="flex flex-wrap gap-2">
        <button
          className="px-4 py-2 text-base font-medium text-orange-400 rounded-3xl bg-stone-50"
          onClick={onClearAll}
        >
          Clear all
        </button>
        {appliedFilters.map((filter, index) => (
          <div
            key={index}
            className="flex gap-4 justify-center items-center px-4 py-2 rounded-3xl bg-stone-50"
          >
            <span className="text-base font-medium text-zinc-900">{filter.name}</span>
            <button aria-label={`Remove ${filter.name} filter`} onClick={() => onRemove(filter)}>
              <CloseIcon />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
