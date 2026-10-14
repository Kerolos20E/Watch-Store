import Hero from "../components/Hero";
import SignatureLineages from "../components/SignatureLineages";
import BrandStory from "../components/BrandStory";
import AICuratorTeaser from "../components/AICuratorTeaser";
import Newsletter from "../components/Newsletter";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Home() {
  const brandRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const aiRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const newsletterRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const SignatureLineagesRef = useScrollReveal<HTMLDivElement>({
    direction: "up",
  });

  return (
    <main
      className="w-full pt-20 min-h-screen"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <div className="flex flex-col w-full">
        <Hero />
        <div ref={SignatureLineagesRef}>
          <SignatureLineages />
        </div>
        <div ref={brandRef}>
          <BrandStory />
        </div>
        <div ref={aiRef}>
          <AICuratorTeaser />
        </div>
        <div ref={newsletterRef}>
          <Newsletter />
        </div>
      </div>
    </main>
  );
}
