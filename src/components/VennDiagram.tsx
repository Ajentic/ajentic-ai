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
          <div className="absolute right-1/4 transform translate-x-1/2 w-64 h-64 rounded-full bg-green-100 bg-opacity-70 flex items-center justify-center text-center p-4 z-10">
            <span className="text-primary font-medium">
              Build & Implement Solutions
            </span>
          </div>
          
          {/* Center Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-purple-100 bg-opacity-70 flex items-center justify-center text-center p-4 z-20">
            <div className="space-y-2">
              <span className="text-primary font-bold block">
                Transition & Handover
              </span>
              <span className="text-sm text-gray-600 block">
                Delegate to permanent team
              </span>
            </div>
          </div>
        </div>
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