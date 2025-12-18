import React, { useState } from "react";
import { executiveAmenities, presidentialAmenities } from "../data/Data";

export default function AmenitiesList({ amenitiesKey = "executive" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const amenities = amenitiesKey === "presidential" ? presidentialAmenities : executiveAmenities;
  const visibleCount = 3;
  const amenitiesDisplay = isExpanded ? amenities : amenities.slice(0, visibleCount);

  return (
    <div className="amenities-section mt-4 pt-3 border-top">
      <h6 className="mb-3 fw-bold">
        <i className="fa fa-star text-primary me-2"></i>{amenitiesKey === "presidential" ? "Presidential Suite" : "Executive Room"} Amenities
      </h6>
      <ul className="list-unstyled">
        {amenitiesDisplay.map((amenity, index) => (
          <li key={index} className="mb-2 d-flex align-items-start">
            <i className="fa fa-check text-success me-3 mt-1"></i>
            <span className="text-body">{amenity}</span>
          </li>
        ))}
      </ul>
      {amenities.length > visibleCount && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="btn btn-sm btn-outline-primary mt-3"
          style={{ transition: "all 0.3s ease" }}
        >
          <i className={`fa fa-chevron-${isExpanded ? "up" : "down"} me-2`}></i>
          {isExpanded ? "Show Less Amenities" : "Show More Amenities"}
        </button>
      )}
    </div>
  );
}
