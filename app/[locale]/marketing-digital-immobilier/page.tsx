import { createSectorPage } from "@/lib/sectorPage";
import { marketingDigitalImmobilierContent } from "@/lib/content/marketingDigitalImmobilier";

const page = createSectorPage({
  path: "marketing-digital-immobilier",
  content: marketingDigitalImmobilierContent,
  area: "Israël",
  serviceType: "Real Estate Digital Marketing",
});

export const generateMetadata = page.generateMetadata;
export default page.Page;
