import WatchCard from "../components/WatchCard";
import FilterBar from "../components/FilterBar";
import PaginationBar from "../components/PaginationBar";
import Navbar from "../layout/navbar/navBar";
import Footer from "../layout/footer/Footer";
import { useQuery } from "@tanstack/react-query";
import { getWatches } from "../lib/watches";
import WatchCardSkeleton from "../components/WatchCardSkeleton";
import ErrorState from "../components/ErrorState";

export default function WatchesPage() {
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["watches"],
    queryFn: getWatches,
  });
  const watches = data ?? [];
  if (isLoading) {
    return (
      <main
        className="w-full pt-20 min-h-screen"
        style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
      >
        <section className="w-full py-12">
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
            <FilterBar />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <WatchCardSkeleton key={index} />
              ))}
            </div>
            <PaginationBar />
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (error) {
    return <ErrorState onRetry={refetch} isRetrying={isFetching} />;
  }
  return (
    <main
      className="w-full pt-20 min-h-screen"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <Navbar />
      <section className="w-full py-12">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
          <FilterBar />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 justify-items-center">
            {watches.map((watch) => (
              <WatchCard key={watch.id} {...watch} />
            ))}
          </div>

          <PaginationBar />
        </div>
      </section>
      <Footer />
    </main>
  );
}
