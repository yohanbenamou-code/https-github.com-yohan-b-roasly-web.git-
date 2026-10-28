import { createSectorPage } from "@/lib/sectorPage";
import { generationDeLeadsContent } from "@/lib/content/generationDeLeads";

const page = createSectorPage({
  path: "generation-de-leads",
  content: generationDeLeadsContent,
  area: "Israël",
  serviceType: "Lead Generation",
});

export const generateMetadata = page.generateMetadata;
export default page.Page;
