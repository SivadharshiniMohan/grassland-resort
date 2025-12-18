import React from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";

export default function Contact() {
  return (
    <>
      <Heading heading="Contact" title="Home" subtitle="Contact" />

      <div class="container-xxl py-5">
        <div class="container">
          <CommonHeading
            heading="Contact Us"      
          />
          <div class="row g-4">
            <div class="col-12">
              <div class="row gy-4">
                {/* {contact.map((item, index) => (
                  <div class="col-md-4">
                    <h6 class="section-title text-start text-primary text-uppercase">
                      {item.title}
                    </h6>
                    <p>
                      {item.icon}
                      {item.email}
                    </p>
                  </div>
                ))} */}
              </div>
            </div>
            <div class="col-md-12 wow fadeIn" data-wow-delay="0.1s">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28546.352185676697!2d93.2730618!3d26.5749387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374445c6775d3a7d%3A0x48384d6274086932!2sGRASSLAND%20RESORT%2C%20KAZIRANGA!5e0!3m2!1sen!2sin!4v1746283268112!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: "0" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>
            
          </div>
        </div>
      </div>

    </>
  );
}
