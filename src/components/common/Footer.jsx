import { footerContact, footerItem, socialIcons } from "../data/Data";
import Newsletter from "../home/Newsletter";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pb-5">
          <div className="row g-5">
           
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <a className="btn btn-outline-light btn-social" href="">
                    {val.icon}
                  </a>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
