import React from "react";

const VennDiagram = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
      <div className="flex justify-center">
        <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center p-4">
          <p className="text-center text-primary font-medium">Identify Critical Business Needs</p>
        </div>
      </div>
      <div className="flex justify-center relative">
        {/* Left Arrow */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-8">
          <svg width="100%" height="2">
            <defs>
              <marker id="arrowhead1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#062E4B" />
              </marker>
            </defs>
            <line x1="0" y1="1" x2="100%" y2="1" stroke="#062E4B" strokeWidth="2" markerEnd="url(#arrowhead1)" />
          </svg>
        </div>
        <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center p-4">
          <p className="text-center text-primary font-medium">Build & Implement</p>
        </div>
        {/* Right Arrow */}
        <div className="hidden md:block absolute right-0 top-1/2 translate-x-full -translate-y-1/2 w-8">
          <svg width="100%" height="2">
            <defs>
              <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#062E4B" />
              </marker>
            </defs>
            <line x1="0" y1="1" x2="100%" y2="1" stroke="#062E4B" strokeWidth="2" markerEnd="url(#arrowhead2)" />
          </svg>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center p-4">
          <p className="text-center text-primary font-medium">Maintain Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;