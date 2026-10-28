import { createSectorPage } from "@/lib/sectorPage";
import { marketingDigitalAvocatsContent } from "@/lib/content/marketingDigitalAvocats";

const page = createSectorPage({
  path: "marketing-digital-avocats",
  content: marketingDigitalAvocatsContent,
  area: "Israël",
  serviceType: "Digital Marketing for Law Firms",
});

export const generateMetadata = page.generateMetadata;
export default page.Page;
