import { createSectorPage } from "@/lib/sectorPage";
import { generationDeLeadsEnergieFranceContent } from "@/lib/content/generationDeLeadsEnergieFrance";

const page = createSectorPage({
  path: "generation-de-leads-energie-france",
  content: generationDeLeadsEnergieFranceContent,
  area: "France",
  serviceType: "Energy Renovation Lead Generation",
});

export const generateMetadata = page.generateMetadata;
export default page.Page;
