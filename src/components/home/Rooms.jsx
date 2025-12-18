import React, { useState } from "react";
import CommonHeading from "../common/CommonHeading";
import AmenitiesList from "../common/AmenitiesList";
import { executiveRoomFacilities, presidentialRoomFacilities, roomItems } from "../data/Data";
import { initiateUpiPayment } from "../common/bookNow";
import FacilitiesSection from "./FacilitiesSection";

export default function Rooms() {
  return (
    <div id="roomsContainer">
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div className="row g-6 m-10">
            {roomItems.map((item, key) => (
              <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={key}>
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={item.img} alt="img" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                    </div>
                    <div className="d-flex flex-wrap mb-3 gap-3">
                      {(item.amenitiesKey === "presidential" ? presidentialRoomFacilities : executiveRoomFacilities).map((facility, index) => (
                        <small className="border-end me-3 pe-3" key={index}>
                          {facility.icon}
                          {facility.facility}
                        </small>
                      ))}
                    </div>
                    
                    <p className="text-body mb-3">
                      {item.fullDescription}
                    </p>

                    {item.amenitiesKey && (
                      <AmenitiesList amenitiesKey={item.amenitiesKey} />
                    )}

                    <div className="d-flex justify-content-between mt-4">
                      {/* <a
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                        href=""
                      >
                        {item.yellowbtn}
                      </a> */}
                      {/* <button className="btn btn-sm btn-dark rounded py-2 px-4" onClick={()=>initiateUpiPayment(item.rate)}>
                        {item.darkbtn}
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    <FacilitiesSection />
    </div>
  );
}
