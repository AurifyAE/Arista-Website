export const CollectionHeader = () => {
    return (
      <header className="flex flex-col gap-10 mb-12">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Pamp Collection</h1>
          <div className="gap-2 px-5 py-3 text-base font-semibold tracking-tighter bg-stone-50 rounded-[38px] text-stone-500">
            30 Products
          </div>
        </div>
        <div className="w-full h-px bg-zinc-100" />
      </header>
    );
  };
  