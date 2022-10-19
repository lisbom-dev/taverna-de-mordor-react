import React from "react";

const Review: React.FC = () => (
  <div>
    <div className="flex flex-wrap space-x-2">
      <div>
        <span className="font-normal ml-2 text-white" />
      </div>
      <div />
    </div>
    <div className="container py-2">
      <p className="text-gray-400 text-sm break-all" />
      <button
        type="button"
        className="text-xs text-white p-1 shadow-sm font-semibold mt-3 hover:shadow-md"
      />
    </div>
  </div>
);

export default Review;
