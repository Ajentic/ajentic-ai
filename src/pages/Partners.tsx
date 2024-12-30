import PartnerNavDots from "@/components/partners/PartnerNavDots";
import ResellerPartners from "@/components/partners/ResellerPartners";
import TechnologyPartners from "@/components/partners/TechnologyPartners";
import CloudPartners from "@/components/partners/CloudPartners";

const Partners = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <PartnerNavDots />
      <ResellerPartners />
      <TechnologyPartners />
      <CloudPartners />
    </div>
  );
};

export default Partners;