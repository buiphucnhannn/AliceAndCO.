import { aboutData } from "@/data/content";
import PageHero from "@/components/ui/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      crumb="About"
      imageAlt="Ho Chi Minh City skyline at twilight"
      imagePosition="30% center"
      {...aboutData.hero}
    />
  );
}
