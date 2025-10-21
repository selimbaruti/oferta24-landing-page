import { FeaturesCarousel } from "@/components/features/features-carousel";
import { FeaturesTabs } from "@/components/features/features-tabs";
import { Badge } from "@/components/ui/badge";
import { Search,ListTodo, Scale, Heart } from "lucide-react";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const features = [
  {
    icon: <Search size={20} />,
    title: "Kërko sipas kategorisë",
    description: "Gjej ofertat që kanë vërtet rëndësi për ty.",
    image: "/app-image-4.png",
  },
  {
    icon: <ListTodo size={20} />,
    title: "Lista e blerjeve",
    description: "Krijo dhe menaxho lehtë listën tënde të blerjeve.",
    image: "/shoppinglist.png",
  },
  {
    icon: <Scale size={20} />,
    title: "Krahasimi i çmimeve",
    description: "Krahason çmimet e të njëjtit produkt midis supermarketeve.",
    image: "/krahasimi.png",
  },
  {
    icon: <Heart size={20} />,
    title: "Katalogë të preferuar",
    description: "Ruaj katalogët që të pëlqejnë për t'u kthyer tek ata më vonë.",
    image: "/favorites.png",
  },
] satisfies Feature[];

export function Features() {
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        Features
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Zbulo funksionet <div className="text-muted-foreground">që na veçojnë</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Ne kemi ndërtuar aplikacionin që bashkon të gjitha ofertat dhe katalogët javorë në një vend, për ta bërë kursimin më të lehtë se kurrë.
      </p>
      <FeaturesCarousel features={features} className="block lg:hidden" />
      <FeaturesTabs features={features} className="hidden lg:block" />
    </div>
  );
}
