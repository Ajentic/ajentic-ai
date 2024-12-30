import PartnerCard from "./PartnerCard";

const CloudPartners = () => {
  return (
    <section id="cloud" className="mt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
        Cloud Partners
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PartnerCard
          logoSrc="/lovable-uploads/631cd443-3245-4796-9636-202d10b65952.png"
          logoAlt="AWS Logo"
          description="Leading cloud computing and AI services"
        />
        <PartnerCard
          logoSrc="/lovable-uploads/c5449c15-1bf6-44fd-a9fb-bb8669fcff72.png"
          logoAlt="IBM Logo"
          description="Enterprise cloud solutions and AI technologies"
        />
      </div>
    </section>
  );
};

export default CloudPartners;