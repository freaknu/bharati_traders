import React from "react";
import "./Homepage.css";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Card,
} from "react-bootstrap";
import {
  FiDownload,
  FiMessageSquare,
  FiPhone,
  FiMail,
  FiMapPin,
  FiPrinter,
  FiPackage,
  FiFileText,
  FiCalendar,
  FiBriefcase,
  FiHeart,
} from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-100">
      {/* Navigation Bar */}
      <Navbar
        bg="white"
        expand="lg"
        sticky="top"
        className="shadow-sm navbar-glass"
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-primary">
            <span className="text-gradient">Bharati</span> Traders
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="fw-semi-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#products" className="fw-semi-bold">
                Products
              </Nav.Link>
              <Nav.Link href="#about" className="fw-semi-bold">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="fw-semi-bold">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section id="home" className="py-10 py-lg-15 hero-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-6 mb-lg-0">
                <div className="pe-lg-6">
                  <h1 className="display-4 mb-4 fw-bold text-gradient">
                    Bharati <span className="text-primary">Traders</span>
                  </h1>
                  <p className="lead mb-6 text-700">
                    Based in Sivakasi, Bharati Traders is a reputed supplier of
                    high-quality offset printing materials, hospital files,
                    packaging boxes, and medical accessories. With years of
                    experience, we cater to the needs of industries, hospitals,
                    and wholesale distributors.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <Button
                      variant="primary"
                      href="https://wa.me/919362461671"
                      target="_blank"
                      className="d-flex align-items-center px-4 py-2"
                    >
                      <FiMessageSquare className="me-2" size={18} />
                      WhatsApp us @ 9362461671
                    </Button>
                    <Button
                      variant="outline-primary"
                      href="#contact"
                      className="d-flex align-items-center px-4 py-2"
                    >
                      <FiPhone className="me-2" size={18} />
                      Contact Us
                    </Button>
                  </div>
                  <div className="mt-6">
                    <p className="text-600 mb-1">
                      <span className="text-primary fw-bold">
                        Serving quality
                      </span>{" "}
                      since 2012
                    </p>
                    <p className="text-600">
                      Trusted by hospitals and businesses for over a decade.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="position-relative">
                  <div className="hero-image-container">
                    <div className="hero-image-overlay"></div>
                    <div className="hero-image"></div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Products & Services Section */}
        <section id="products" className="py-10 py-lg-15 bg-soft">
          <Container>
            <Row className="justify-content-center mb-8">
              <Col lg={10} xl={8}>
                <div className="text-center">
                  <h2 className="mb-3 fw-bold text-gradient">
                    Products & Services
                  </h2>
                  <p className="text-600 lead">
                    We provide high-quality printing and packaging solutions for
                    various industries.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="g-4">
              <Col md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0 product-card">
                  <Card.Body className="p-5">
                    <div className="icon-wrapper bg-primary-light mb-4">
                      <FiPrinter className="text-primary" size={24} />
                    </div>
                    <h3 className="mb-4">Offset Printing</h3>
                    <ul className="list-unstyled text-600">
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-primary me-2"></span>
                        Calendars
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-primary me-2"></span>
                        Diaries
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-primary me-2"></span>
                        Poly Foam Banners
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-primary me-2"></span>
                        Bags
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-primary me-2"></span>
                        Batti
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0 product-card">
                  <Card.Body className="p-5">
                    <div className="icon-wrapper bg-info-light mb-4">
                      <FiPackage className="text-info" size={24} />
                    </div>
                    <h3 className="mb-4">Packaging</h3>
                    <ul className="list-unstyled text-600">
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-info me-2"></span>
                        Sweet Boxes
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-info me-2"></span>
                        Multi-colour Labels
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-info me-2"></span>
                        All types of boxes
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-info me-2"></span>
                        Quality matchbox packaging
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0 product-card">
                  <Card.Body className="p-5">
                    <div className="icon-wrapper bg-warning-light mb-4">
                      <FiHeart className="text-warning" size={24} />
                    </div>
                    <h3 className="mb-4">Medical Supplies</h3>
                    <p className="text-600 mb-3">
                      Hospital Files (Since 2012 – Trusted by multiple
                      hospitals)
                    </p>
                    <p className="text-600 mb-4">
                      Customizable hospital file folders with printing options
                      for:
                    </p>
                    <ul className="list-unstyled text-600">
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-warning me-2"></span>
                        MRI/CT bags
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-warning me-2"></span>
                        Doctor's prescription books
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="bullet bg-warning me-2"></span>
                        Discharge summary formats
                      </li>
                      <li className="d-flex align-items-center">
                        <span className="bullet bg-warning me-2"></span>
                        ECG cards & medical covers
                      </li>
                    </ul>
                    <Button
                      variant="outline-primary"
                      href="../src/assets/pdffile.pdf"
                      download
                      className="d-flex align-items-center mt-4 w-100"
                    >
                      <FiDownload className="me-2" />
                      Donwload Pdf
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-10 py-lg-15 about-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-6 mb-lg-0">
                <div className="pe-lg-6">
                  <h2 className="mb-4 fw-bold text-gradient">About Us</h2>
                  <p className="text-600 mb-4">
                    Bharati Traders, established in Sivakasi, Tamil Nadu, offers
                    high-quality printing and packaging solutions. Founded and
                    managed by Shankar Sharan Yadav, we specialize in meeting
                    commercial, religious, and medical sector printing
                    requirements with precision and care.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-wrapper bg-primary-light me-3">
                        <FiBriefcase className="text-primary" size={20} />
                      </div>
                      <div>
                        <h5 className="mb-0">12+ Years</h5>
                        <p className="text-600 mb-0">Experience</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="icon-wrapper bg-success-light me-3">
                        <FiCalendar className="text-success" size={20} />
                      </div>
                      <div>
                        <h5 className="mb-0">Since 2012</h5>
                        <p className="text-600 mb-0">Serving Quality</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="about-image-container">
                  <div className="about-image-overlay"></div>
                  <div className="about-image"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-10 py-lg-15 bg-soft">
          <Container>
            <Row className="justify-content-center mb-8">
              <Col lg={10} xl={8}>
                <div className="text-center">
                  <h2 className="mb-3 fw-bold text-gradient">Contact Us</h2>
                  <p className="text-600 lead">
                    Get in touch with us for your printing and packaging needs
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="g-4 justify-content-center">
              <Col md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0 contact-card">
                  <Card.Body className="p-5 text-center">
                    <div className="icon-wrapper bg-primary-light mx-auto mb-4">
                      <FiMapPin className="text-primary" size={24} />
                    </div>
                    <h4 className="mb-3">Address</h4>
                    <p className="text-600 mb-0">
                      170-A, Kamaraj Road,
                      <br />
                      Gandhi Nagar, Sivakasi – 626 124.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0 contact-card">
                  <Card.Body className="p-5 text-center">
                    <div className="icon-wrapper bg-info-light mx-auto mb-4">
                      <FiPhone className="text-info" size={24} />
                    </div>
                    <h4 className="mb-3">Contact Info</h4>
                    <p className="text-600 mb-2">
                      Phone / WhatsApp: +91 93624 61671
                    </p>
                    <p className="text-600 mb-2">
                      Email: bharatitraders2012@gmail.com
                    </p>
                    <p className="text-600 mb-0">GSTIN: 33ACYPS3219Q1ZM</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0 contact-card">
                  <Card.Body className="p-5 text-center">
                    <div className="icon-wrapper bg-success-light mx-auto mb-4">
                      <FiMessageSquare className="text-success" size={24} />
                    </div>
                    <h4 className="mb-3">Quick Contact</h4>
                    <p className="text-600 mb-4">
                      Reach out to us directly via WhatsApp for quick responses
                    </p>
                    <Button
                      variant="primary"
                      href="https://wa.me/919362461671"
                      target="_blank"
                      className="d-flex align-items-center justify-content-center w-100"
                    >
                      <FiMessageSquare className="me-2" />
                      WhatsApp Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-8 footer-section">
        <Container>
          <Row className="g-4">
            <Col lg={4} className="mb-4 mb-lg-0">
              <h5 className="mb-3 text-gradient">Bharati Traders</h5>
              <p className="text-400">
                Quality printing and packaging solutions since 2012.
              </p>
              <div className="mt-4">
                <h6 className="mb-3">Business Hours</h6>
                <p className="text-400 mb-1">Monday - Saturday: 9AM - 8PM</p>
                <p className="text-400">Sunday: Closed</p>
              </div>
            </Col>
            <Col md={6} lg={4} className="mb-4 mb-md-0">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#home" className="text-400 hover-primary">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#products" className="text-400 hover-primary">
                    Products
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="text-400 hover-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-400 hover-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={6} lg={4}>
              <h5 className="mb-3">Contact Info</h5>
              <ul className="list-unstyled text-400">
                <li className="mb-2 d-flex align-items-center">
                  <FiMapPin className="me-2 text-primary" />
                  170-A, Kamaraj Road, Sivakasi
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FiPhone className="me-2 text-primary" />
                  +91 93624 61671
                </li>
                <li className="d-flex align-items-center">
                  <FiMail className="me-2 text-primary" />
                  bharatitraders2012@gmail.com
                </li>
              </ul>
              <div className="mt-4">
                <h6 className="mb-3">GST Information</h6>
                <p className="text-400 mb-0">GSTIN: 33ACYPS3219Q1ZM</p>
              </div>
            </Col>
          </Row>
          <hr className="my-4 bg-700" />
          <Row>
            <Col className="text-center text-400">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Bharati Traders. All Rights
                Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
