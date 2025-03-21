import { SearchIcon } from "../Icons";

export const SearchBar = () => {
  return (
    <div className="flex gap-2 items-center px-6 py-4 w-full rounded-xl bg-[#FFFBF7]">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search filters"
        className="w-full text-base bg-transparent text-neutral-400 border-none focus:outline-none focus:ring-0"
      />
    </div>
  );
};
