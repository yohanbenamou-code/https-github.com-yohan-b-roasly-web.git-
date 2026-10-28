import { createSectorPage } from "@/lib/sectorPage";
import { marketingDigitalDentistesContent } from "@/lib/content/marketingDigitalDentistes";

const page = createSectorPage({
  path: "marketing-digital-dentistes",
  content: marketingDigitalDentistesContent,
  area: "Israël",
  serviceType: "Digital Marketing for Dental Clinics",
});

export const generateMetadata = page.generateMetadata;
export default page.Page;
