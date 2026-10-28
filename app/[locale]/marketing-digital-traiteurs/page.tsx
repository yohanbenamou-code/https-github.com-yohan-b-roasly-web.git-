import { createSectorPage } from "@/lib/sectorPage";
import { marketingDigitalTraiteursContent } from "@/lib/content/marketingDigitalTraiteurs";

const page = createSectorPage({
  path: "marketing-digital-traiteurs",
  content: marketingDigitalTraiteursContent,
  area: "Israël",
  serviceType: "Digital Marketing for Caterers",
});

export const generateMetadata = page.generateMetadata;
export default page.Page;
