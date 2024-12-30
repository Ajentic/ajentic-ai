import PartnerCard from "./PartnerCard";

const ResellerPartners = () => {
  return (
    <section id="reseller" className="mb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
        Reseller Partners
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PartnerCard
          logoSrc="/lovable-uploads/bc266af7-66b3-4367-844b-60402e9d394b.png"
          logoAlt="Iterate.ai Logo"
          description="Leading the way in AI innovation and digital transformation"
        />
        <PartnerCard
          logoSrc="/lovable-uploads/db8143d8-dc52-47fb-b78e-03487627ac30.png"
          logoAlt="Fujifilm Logo"
          description="Pioneering imaging and healthcare solutions"
        />
      </div>
    </section>
  );
};

export default ResellerPartners;