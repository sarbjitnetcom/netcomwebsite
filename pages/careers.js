
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const career = () => {
    return (
      <Layout>
        <PageBanner titleHtml={`Car<span>eers </span>`} titleText="About" />
        <section className="about-area-one pt-70 pb-70 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title mb-10 text-center">
                        <span className="sub-title mb-15">Find The Career You Deserve</span>
                    </div>
                </div>
                
                <div className="col-xl-12 col-lg-12 pb-50">
                    <div className="about-content-one wow fadeInUp delay-0-4s int-conent text-center">
                        <p>
                          We have some excllent careers for aspiring individuals who think that they 
                          have got the potential and skills that can be combined to bombard the ongoing 
                          revolution in the IT industry and across the digital marketing sector.
                        </p>
                        <br></br>
                        <p>Mail Us:- sales@netcom-india.com</p>
                      
                    </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-center career_content">  
                <div className="col-xl-6 col-lg-6 justify-content-center" style={{boxShadow: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
                    <h3>EVOLVING YOUR CAREER</h3>
                    <div className="about-content-one wow fadeInUp delay-0-4s int-conent">
                    <form onSubmit={(e) => e.preventDefault()}  id="contactForm" className="contactForm z-1 rel">
                      <div className="row pt-15">
                        <div className="col-md-12">
                          <div className="form-group">
                            
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              defaultValue=""
                              placeholder="Name"
                              required=""
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
                              placeholder="support@gmail.com"
                              required=""
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
                          <div className="form-group">
                            <input
                              type="file"
                              id="file"
                              name="file"
                              className="form-control"
                              defaultValue=""
                              
                            />
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
                <div className="col-lg-6 pt-30">
                    <div className="about-image-one rmb-85 wow fadeInUp delay-0-2s" style={{ marginTop: "-10%" }}>
                    <img src="assets/images/services/career.jpg" alt="About us" />
                    {/* <img className="image-left" src="assets/images/shapes/image-left.png" alt="shape" /> */}
                    </div>
                </div>
            </div>
          </div>
        </section>
  
      </Layout>
    );
  };
  export default career;