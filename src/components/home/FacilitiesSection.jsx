import React, { useState } from "react";
import { facilities } from "../data/Data";

export default function FacilitiesSection() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Facilities & Amenities
          </h6>
          <h1 className="mb-5">At Grasslands Resort</h1>
          <p className="mb-5 text-muted">
            We offer a thoughtful blend of comfort, convenience, and leisure to ensure a memorable stay for families, couples, corporate guests, and group travelers.
          </p>
        </div>

        <div className="row g-4">
          {facilities.map((facility, index) => (
            <div key={index} className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-header bg-primary bg-opacity-10 border-0 d-flex align-items-center gap-3 p-4">
                  {facility.icon}
                  <div>
                    <h5 className="mb-0">{facility.category}</h5>
                  </div>
                </div>
                <div className="card-body p-4">
                  <ul className="list-unstyled">
                    {facility.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-3 d-flex align-items-start">
                        {item.icon}
                        <span className="text-body">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
