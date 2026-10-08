import WatchCard from "../components/Watchcard";
import FilterBar from "../components/Filterbar";
import PaginationBar from "../components/Paginationbar";
import { useQuery } from "@tanstack/react-query";
import { getWatches } from "../lib/getWatches";
import WatchCardSkeleton from "../components/WatchCardSkeleton";
import ErrorState from "../components/ErrorState";
import FetchingIndicator from "../components/FetchingIndicator";
import EmptyState from "../components/EmptyState";
import { useState } from "react";
export default function WatchesPage() {
  const [search, setSearch] = useState("");
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["watches"],
    queryFn: getWatches,
  });
  const watches = data ?? [];
  const filteredWatches = watches.filter((watch) => {
    const searchTerm = search.trim().toLowerCase();
    return watch.name.toLowerCase().includes(searchTerm);
  });
  if (isLoading) {
    return (
      <main
        className="w-full pt-20 min-h-screen"
        style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
      >
        <section className="w-full py-12">
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
            <FilterBar search={search} onSearchChange={setSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <WatchCardSkeleton key={index} />
              ))}
            </div>
            <PaginationBar />
          </div>
        </section>
      </main>
    );
  }
  if (error) {
    return <ErrorState onRetry={refetch} isRetrying={isFetching} />;
  }
  if (watches.length === 0) {
    return (
      <main
        className="w-full pt-20 min-h-screen"
        style={{
          backgroundColor: "var(--color-surface-container-lowest)",
        }}
      >
        <section className="w-full py-12">
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
            <FilterBar search={search} onSearchChange={setSearch} />
            <EmptyState />
          </div>
        </section>
      </main>
    );
  }
  return (
    <main
      className="w-full pt-20 min-h-screen"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <section className="w-full py-12">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
          <FilterBar search={search} onSearchChange={setSearch} />
          {isFetching && watches.length > 0 && <FetchingIndicator />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 justify-items-center">
            {filteredWatches.map((watch) => (
              <WatchCard key={watch.id} {...watch} />
            ))}
          </div>
          <PaginationBar />
        </div>
      </section>
    </main>
  );
}
