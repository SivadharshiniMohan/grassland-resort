import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";
import event from "./../../assets/img/event.jpeg";
import sea1 from "./../../assets/img/sea-1.jpeg";
import sea2 from "./../../assets/img/sea-2.jpeg";
import gate from "./../../assets/img/gate.jpeg";

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">Grassland Resort</span>
              </h1>
              <p className="mb-4 text-capitalize">
              Nestled along National Highway 37, right beside the world-renowned Kaziranga National Park, Grasslands Resort offers a perfect blend of nature, relaxation, and warm hospitality. Our prime location places you moments away from the lush wilderness of this UNESCO World Heritage Site, making it an ideal retreat for wildlife enthusiasts, family vacationers, corporate groups, and guests celebrating special occasions.
              </p>
                <p className="mb-4 text-capitalize">
Designed to deliver comfort and luxury, the resort features 21 well-appointed Executive Rooms overlooking beautifully landscaped gardens, along with an elegant Presidential Suite that includes a separate bedroom and living room—perfect for those seeking an elevated stay. Every room is equipped with modern amenities including LCD televisions with satellite channels, tea/coffee makers, and thoughtful in-room comforts to ensure a relaxing experience.              </p>
   <p className="mb-4 text-capitalize">
              </p>
                 <p className="mb-4 text-capitalize">
Indulge in a delightful culinary journey at our multi-cuisine restaurant, offering local flavours, Indian classics, and international favourites. Guests can also relax and unwind at our swimming pool or enjoy peaceful strolls through our lush landscaped gardens. For families, we offer a dedicated Kids Play Area ensuring little ones have their own space to enjoy.              </p>
                 <p className="mb-4 text-capitalize">
Whether planning a business retreat or a special celebration, Grasslands Resort caters to all your event needs. Our resort is equipped with a banquet hall, a boardroom for personal meetings, and arrangements for conferences and marriage events with complete modern facilities.              </p>
 <p className="mb-4 text-capitalize">
  We also offer convenient room service, in-house laundry, private car and bus parking, and drivers' accommodation (at additional cost). Travel support is available with airport, railway station, or bus pick-up and drop services, along with guided sightseeing tours on request (extra charges applicable).
              </p>
               <p className="mb-4 text-capitalize">
                At Grasslands Resort, we ensure a stay that is comfortable, memorable, and truly close to nature.
              </p>
              <div className="row g-3 p-5">
                {/* {about.map((item, key) => (
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
              {/* <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore More
              </a> */}
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src={gate}
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={event}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-70 wow zoomIn"
                    data-wow-delay="0.5s"
                    src={sea1}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-95 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={sea2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
