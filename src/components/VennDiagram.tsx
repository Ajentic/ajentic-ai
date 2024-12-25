import React from 'react';

const VennDiagram = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
      <div className="relative w-full aspect-[16/9] flex items-center justify-center">
        <img
          src="/lovable-uploads/1fcced45-da7f-4037-bfe6-0808c9cecd22.png"
          alt="Ajentic AI Approach Venn Diagram"
          className="w-full h-auto max-w-2xl mx-auto"
        />
      </div>
      <div className="mt-8 space-y-4 text-center">
        <p className="text-xl text-gray-700">
          "I believe the job of a AI Consulting company is to do the most important things the company hasn't hired for yet, Then down the road hire or delegate to someone in our place, and move on."
        </p>
        <p className="text-lg text-primary font-medium">
          Ajentic AI are the team who goes from zero-to-one people who are good at and comfortable with firing themselves
        </p>
      </div>
    </div>
  );
};

export default VennDiagram;