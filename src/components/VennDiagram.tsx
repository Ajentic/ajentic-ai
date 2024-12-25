import React from 'react';

const VennDiagram = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
      <div className="relative w-full aspect-[16/9] flex items-center justify-center p-8">
        <div className="relative w-full max-w-2xl mx-auto h-[300px] flex items-center justify-center">
          {/* Left Circle */}
          <div className="absolute left-1/4 transform -translate-x-1/2 w-64 h-64 rounded-full bg-blue-100 bg-opacity-70 flex items-center justify-center text-center p-4 z-10">
            <span className="text-primary font-medium">
              Identify Critical Business Needs
            </span>
          </div>
          
          {/* Right Circle */}
          <div className="absolute right-1/4 transform translate-x-1/2 w-64 h-64 rounded-full bg-purple-100 bg-opacity-70 flex items-center justify-center text-center p-4 z-10">
            <span className="text-primary font-medium">
              Maintain Solutions
            </span>
          </div>
          
          {/* Center Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-green-100 bg-opacity-70 flex items-center justify-center text-center p-4 z-20">
            <div className="space-y-2">
              <span className="text-primary font-bold block">
                Build & Implement
              </span>
              <span className="text-sm text-gray-600 block">
                Solutions
              </span>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left to Center Arrow */}
            <svg className="absolute left-1/3 top-1/2 transform -translate-y-1/2" width="100" height="20">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#062E4B" />
                </marker>
              </defs>
              <line x1="0" y1="10" x2="90" y2="10" stroke="#062E4B" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>
            
            {/* Center to Right Arrow */}
            <svg className="absolute right-1/3 top-1/2 transform -translate-y-1/2" width="100" height="20">
              <line x1="0" y1="10" x2="90" y2="10" stroke="#062E4B" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-4 text-center">
        <p className="text-xl text-gray-700 font-medium italic">
          "Our role as an AI Consulting company is to tackle the critical challenges that companies haven't yet staffed for. We excel at building solutions and then thoughtfully transitioning them to permanent teams, embodying the principle of effective self-replacement."
        </p>
        <p className="text-lg text-primary font-medium">
          At Ajentic AI, we specialize in taking projects from zero to one, embracing our unique position as pioneers who excel at building foundations and gracefully stepping aside.
        </p>
      </div>
    </div>
  );
};

export default VennDiagram;