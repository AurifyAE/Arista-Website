"use client";

import { useState } from "react";
import { Breadcrumb } from "../Breadcrumb";
import { CollectionHeader } from "./CollectionHeader";
import { SearchBar } from "./SearchBar";
import { FilterSection } from "./FilterSection";
import { AppliedFilters } from "./AppliedFilters";

const availabilityItems = [
  { name: "All" },
  { name: "In Stock" },
  { name: "Out Of Stock" },
];

const collectionItems = [
  { name: "PAMP", count: "25" },
  { name: "Royal Mint", count: "25" },
  { name: "Valcum Suisse", count: "25" },
  { name: "SAM", count: "25" },
  { name: "Al Etihad", count: "25" },
];

export const FilterInterface = () => {
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [selectedCollection, setSelectedCollection] = useState("PAMP");
  const [appliedFilters, setAppliedFilters] = useState([
    { name: "PAMP", type: "Collections" },
  ]);

  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(true);
  const [isCollectionOpen, setIsCollectionOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage sidebar visibility on small screens

  const dynamicPath = "/pamp-collection";

  const handleSelectAvailability = (item) => {
    setSelectedAvailability(item.name);
    updateAppliedFilters(item.name, "Availability");
  };

  const handleSelectCollection = (item) => {
    setSelectedCollection(item.name);
    updateAppliedFilters(item.name, "Collections");
  };

  const updateAppliedFilters = (name, type) => {
    const newAppliedFilters = appliedFilters.filter(
      (filter) => filter.type !== type
    );
    newAppliedFilters.push({ name, type });
    setAppliedFilters(newAppliedFilters);
  };

  const clearAllFilters = () => {
    setAppliedFilters([]);
    setSelectedAvailability("All");
    setSelectedCollection("PAMP");
  };

  const removeAppliedFilter = (filterToRemove) => {
    setAppliedFilters(appliedFilters.filter((filter) => filter !== filterToRemove));
  };

  const toggleAvailability = () => {
    setIsAvailabilityOpen(!isAvailabilityOpen);
  };

  const toggleCollection = () => {
    setIsCollectionOpen(!isCollectionOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="flex flex-col p-6 max-md:p-5 max-sm:p-4">
      <Breadcrumb dynamicPath={dynamicPath} />
      <CollectionHeader />

      <div className="flex flex-col md:flex-row gap-12 max-sm:gap-2">
        {/* Sidebar Toggle Button for Small Screens */}
        <button
          onClick={toggleSidebar}
          className="md:hidden mb-4 p-2 bg-black text-white rounded-md w-[150px]"
        >
          {isSidebarOpen ? "Close Filters" : "Open Filters"}
        </button>

        <aside
          className={`w-full md:w-[303px] ${isSidebarOpen ? "block" : "hidden"} md:block`}
        >
          <div className="flex flex-col gap-6">
            <SearchBar />
            <div className="flex flex-col gap-12">
              <FilterSection
                title="Availability"
                items={availabilityItems}
                selectedItem={selectedAvailability}
                onSelectItem={handleSelectAvailability}
                isOpen={isAvailabilityOpen}
                toggleSection={toggleAvailability}
              />
              <div className="w-full h-px bg-neutral-200" />
              <FilterSection
                title="Collections"
                items={collectionItems}
                selectedItem={selectedCollection}
                onSelectItem={handleSelectCollection}
                isOpen={isCollectionOpen}
                toggleSection={toggleCollection}
              />
              <div className="w-full h-px bg-neutral-200" />
            </div>
          </div>
          <AppliedFilters
            appliedFilters={appliedFilters}
            onClearAll={clearAllFilters}
            onRemove={removeAppliedFilter}
          />
        </aside>
      </div>
    </main>
  );
};

export default FilterInterface;
