import React from "react";

const VennDiagram = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div className="flex justify-center">
        <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center p-4">
          <p className="text-center text-primary font-medium">Innovation & Technology</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center p-4">
          <p className="text-center text-primary font-medium">Strategic Consulting</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center p-4">
          <p className="text-center text-primary font-medium">Team Excellence</p>
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;