import { useData } from "@/components/context/DataContext";
import IntroSection from "@/components/sections/IntroSection";
import QuoteSection from "@/components/sections/QuoteSection";
import ActionsSection from "@/components/sections/ActionsSection";
import AboutSection from "@/components/sections/AboutSection";
import LinksSection from "@/components/sections/LinksSection";
import FooterSection from "@/components/sections/FooterSection";

export default function ProfileContent() {
  const data = useData();
  return (
    <main className="animate-fadeIn flex flex-col w-full h-full max-w-6xl mx-auto p-2 pt-5 sm:p-6 sm:pt-8 overflow-auto">
      <div className="my-auto">
        <IntroSection data={data} />
        <ActionsSection data={data} />
        <QuoteSection data={data} />
        <AboutSection data={data} />
        <LinksSection data={data} />
        <FooterSection data={data} />
      </div>
    </main>
  );
}
