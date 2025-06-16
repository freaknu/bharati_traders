import React from "react";
const HeroSection = () => {
  return (
    <div className="container-small hero-header-container px-lg-7 px-xxl-3">
      <div className="row align-items-center">
        <div className="col-12 col-lg-auto order-0 order-md-1 text-end order-1">
          <div className="position-relative p-5 p-md-7 d-lg-none">
            <div
              className="bg-holder"
              style={{
                backgroundImage: "url(../../assets/img/bg/bg-23.png)",
                backgroundSize: "contain",
              }}
            ></div>
            {/* Placeholder for mobile image - replace with your image */}
            <div className="position-relative">
              <img
                className="w-100 shadow-lg d-dark-none rounded-2"
                src="../../assets/img/bg/printing-materials.jpg"
                alt="Bharati Traders Products"
              />
              <img
                className="w-100 shadow-lg d-light-none rounded-2"
                src="../../assets/img/bg/printing-materials-dark.jpg"
                alt="Bharati Traders Products"
              />
            </div>
          </div>
          <div className="hero-image-container position-absolute top-0 bottom-0 end-0 d-none d-lg-block">
            <div className="position-relative h-100 w-100">
              <div className="position-absolute h-100 top-0 d-flex align-items-center end-0 hero-image-container-bg">
                <img
                  className="pt-7 pt-md-0 w-100"
                  src="../../assets/img/bg/printing-bg.png"
                  alt="Bharati Traders Background"
                />
              </div>
              <div className="position-absolute h-100 top-0 d-flex align-items-center end-0">
                <img
                  className="pt-7 pt-md-0 w-100 shadow-lg d-dark-none rounded-2"
                  src="../../assets/img/bg/printing-materials.jpg"
                  alt="Bharati Traders Products"
                />
                <img
                  className="pt-7 pt-md-0 w-100 shadow-lg d-light-none rounded-2"
                  src="../../assets/img/bg/printing-materials-dark.jpg"
                  alt="Bharati Traders Products"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 text-lg-start text-center pt-8 pb-6 order-0 position-relative">
          <h1 className="fs-3 fs-lg-2 fs-md-1 fs-lg-2 fs-xl-1 fs fw-black mb-4">
            <span className="text-primary me-3">Bharati Traders</span>
            <br />
            Quality Printing & Packaging Solutions
          </h1>
          <p className="mb-5">
            Based in Sivakasi, we are a reputed supplier of high-quality offset
            printing materials, hospital files, packaging boxes, and medical
            accessories. Trusted by hospitals and businesses for over a decade.
          </p>
          <a
            className="btn btn-lg btn-primary rounded-pill me-3"
            href="https://wa.me/919362461671"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-whatsapp me-2"></i>WhatsApp Us
          </a>
          <a
            className="btn btn-link me-2 fs-8 p-0"
            href="#products"
            role="button"
          >
            Our Products
            <svg
              className="svg-inline--fa fa-angle-right ms-2 fs-9"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
