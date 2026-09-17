// import Footer from "../layout/footer/Footer";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/navBar";

function Home() {
  return (
    <div
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
      className="min-h-screen flex flex-col"
    >
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-20">
        <p
          className="text-sm"
          style={{
            color: "var(--color-outline)",
            fontFamily: "var(--font-body)",
          }}
        >
          Page content goes here
        </p>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
