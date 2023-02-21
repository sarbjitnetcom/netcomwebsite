import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Contact = () => {
  return (
    <Layout>
      <PageBanner titleHtml={`Conta<span>ct Us</span>`} titleText="Contact" />
      <section className="contact-us-page-area py-30">
        <div className="container">
          <div className="row align-items-end justify-content-center">
            <div className="col-lg-8">
              <div className="contact-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">Contact Us</span>
                  <h2 style={{fontSize: "25px"}}>
                    Let’s Start New Project or work Together! Contact With us
                  </h2>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="contactForm"
                  className="contactForm z-1 rel"
                >
                  <div className="row pt-15">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Full Name"
                          required=""
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email Address"
                          required=""
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phoneno"
                          name="phoneno"
                          className="form-control"
                          defaultValue=""
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="location"
                          name="location"
                          className="form-control"
                          defaultValue=""
                          placeholder="Business Location"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="url"
                          name="url"
                          className="form-control"
                          defaultValue=""
                          placeholder="Website Url"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-group">
                        {/* <label htmlFor="select_subject">Digital Marketing </label> */}
                        <select name="select_services" id="select_services" style={{ padding: "15px 30px;"}}>
                          <option value="default" >Digital Marketing </option>
                          <option value="Content Marketing (Buyers Funnel)">Content Marketing (Buyers Funnel)</option>
                          <option value="SEO">SEO (Search Engine Optimization)</option>
                          <option value="Social Media Marketing ">Social Media Marketing (SMM & SMO)</option>
                          <option value="PPC Advertising">PPC Advertising (Google, Yahoo & Bing)</option>
                          <option value="Facebook Marketing">Facebook Marketing (Facebook, Insta & WhatsApp)</option>
                          <option value="Email Marketing">Email Marketing</option>
                          <option value="Web Development">Web Development (CMS, Custom & Portal)</option>
                          <option value="Graphics Designing">Graphics Designing (Social Media, Ads Banners, Logo, Flyers, Brouchers etc)</option>
                          <option value="Mobile Application">Mobile Application (For both - Android &amp; iOS)</option>
                          <option value="Copywriting">Copywriting (Blogs, Articles, Products Descriptions, Reviews etc)</option>
                          <option value="Software Solutions">Software Solutions</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          defaultValue=""
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Write Message"
                          required=""
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button type="submit" className="theme-btn w-100">
                          Send Message{" "}
                          <i className="fas fa-angle-double-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-5">
              <div className="contact-info wow fadeInLeft delay-0-2s">
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <span className="title">Location</span>
                    <span className="text">
                      55 Main Street, 2nd Floor, E-Block, New York
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="far fa-envelope-open-text" />
                  </div>
                  <div className="content">
                    <span className="title">email address</span>
                    <span className="text">
                      <a href="mailto:support@gmail.com">
                        supportweb@gmail.com
                      </a>
                      <br />
                      <a href="mailto:websitebuilding.net">
                        websitebuilding.net
                      </a>
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="content">
                    <span className="title">Phone Number</span>
                    <span className="text">
                      Call <a href="calto:+000(123)45688">+000 (123) 456 88</a>
                      <br />
                      Whatsapp : +9632145789
                    </span>
                  </div>
                </div>
                <div className="follow-us">
                  <h4>Follow Us</h4>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Contact Us Page Area end */}
      {/* Our Location Address Area start */}
      <section className="our-location-address-area rel z-1">
        <div className="container">
          <div className="row medium-gap justify-content-center">
            <div className="col-lg-4 col-md-4">
              <div className="location-address-item wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <h5 style={{ color: "#fff" }}>Pune Branch Address</h5>
                </div>
                <div className="bottom-part" style={{ paddingBottom: "5px" }}>
                  <ul>
                    <li style={{ color: "#fff" }}>
                      <i className="fal fa-map-marker-alt" /> 
                      Office No: 102B, Turning Point NX S.No: 206/3, Plot No: 17, 
                      Rosary School Lane, behind Phoenix Marketcity, Viman Nagar, 
                      Pune, Maharashtra 411014
                    </li>
                    <li style={{ color: "#fff" }}>
                      <i className="far fa-envelope-open-text" />{" "}
                      sales@netcom-india.com 
                    </li>
                    <li style={{ color: "#fff" }}>
                      <i className="far fa-phone" /> +91 8766550668
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="location-address-item wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <h5 style={{ color: "#fff" }}>Nashik Branch Address</h5>
                </div>
                <div className="bottom-part">
                  <ul>
                    <li style={{ color: "#fff" }}>
                      <i className="fal fa-map-marker-alt" /> 
                      Flat No 2. Asawari Appt. Dr. Homi bhabanagar Mumbai naka, Nashik - 422001
                    </li>
                    <li style={{ color: "#fff" }}>
                      <i className="far fa-envelope-open-text" />{" "}
                      sarabjit@netcom-india.com
                    </li>
                    <li style={{ color: "#fff" }}>
                      <i className="far fa-phone" /> +91 8766550668
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* Our Location Address Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2233538650316!2d73.91429101489348!3d18.56396648738378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c95861694675%3A0xbac360080a18183e!2sNetCom%20Business%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1673868755971!5m2!1sen!2sin"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2233538650316!2d73.91429101489348!3d18.56396648738378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c95861694675%3A0xbac360080a18183e!2sNetCom%20Business%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1673868755971!5m2!1sen!2sin" 
          width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">

          </iframe> */}
        </div>
      </div>
      <br></br>
      {/* Location Map Area End */}
    </Layout>
  );
};
export default Contact;
