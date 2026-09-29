import Hero from "../components/Hero";
import SignatureLineages from "../components/SignatureLineages";
import BrandStory from "../components/BrandStory";
import AICuratorTeaser from "../components/AICuratorTeaser";
import Newsletter from "../components/Newsletter";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/navBar";

export default function Home() {
  return (
    <main
      className="w-full pt-20 min-h-screen"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <div className="flex flex-col w-full">
        <Navbar />
        <Hero />
        <SignatureLineages />
        <BrandStory />
        <AICuratorTeaser />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
