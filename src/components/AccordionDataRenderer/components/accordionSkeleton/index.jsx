import React from "react";

import "./index.css";

const AccordionSkeleton = () => {
  return (
    <>
      <div className="accordion">
        <div className="skeleton-row"></div>
        <div className="skeleton-row">
          <div className="skeleton-box body"></div>
        </div>
      </div>
      <div className="accordion">
        <div className="skeleton-row">
          <div className="skeleton-box body"></div>
        </div>
      </div>
      <div className="accordion">
        <div className="skeleton-row">
          <div class="skeleton-box body"></div>
        </div>
      </div>
    </>
  );
};

export default AccordionSkeleton;
