import PartnerCard from "./PartnerCard";

const CloudPartners = () => {
  return (
    <section id="cloud" className="mt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
        Cloud Partners
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PartnerCard
          logoSrc="/lovable-uploads/816459d3-7348-4e9f-840c-73013c67059e.png"
          logoAlt="AWS Logo"
          description="Leading cloud computing and AI services"
        />
        <PartnerCard
          logoSrc="/lovable-uploads/52c148fd-ebbf-4ce2-bff0-b7dc35b88439.png"
          logoAlt="IBM Logo"
          description="Enterprise cloud solutions and AI technologies"
        />
      </div>
    </section>
  );
};

export default CloudPartners;