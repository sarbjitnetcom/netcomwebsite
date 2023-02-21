
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";


const industry = () => {
    return (
      <Layout>
        <PageBanner titleHtml={`Industry<span> Solutions </span>`} titleText="About" />
        <section className="about-area-one pt-50 pb-15 rel z-1">
            <div className="container">
                <div className="row justify-content-between align-items-center ind_content">
                    <div className="col-lg-5">
                        <div className="about-image-one e_com rmb-85 wow fadeInUp delay-0-2s">
                        <img src="assets/images/services/industry-solutions.jpg" alt="About us" />
                        
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="about-content-one wow fadeInUp delay-0-4s">
                        <div className="section-title mb-10">
                            <span className="sub-title mb-15"> Manufacturing  </span>
                        </div>
                        <p>
                            We Have Been working as one of the most trusted and result-oriented 
                            digital marketing agencies for manufacturing industry solution companies. 
                            For the last 7 years, we have been continuously helping the manufacturers 
                            to get high-ticket clients. NetCom Business Solutions Pvt. Ltd. working on the 
                            performance-driven tactics that we implement have helped our clients 
                            grow as we are also growing as a leading digital marketing company in Pune.
                        </p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-between align-items-center ind_content">
                    <div className="col-xl-6 col-lg-7">
                        <div className="about-content-one wow fadeInUp delay-0-4s">
                            <div className="section-title mb-10">
                                <span className="sub-title mb-15"> Life Sciences </span>
                            </div>
                            <p>
                                After the covid-19 pandemic life science companies make an accelerated 
                                shift into digital marketing for the business. We are providing the IT 
                                solution for the life science business, So they can achieve massive success 
                                and grow their business.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-image-one e_com rmb-85 wow fadeInUp delay-0-2s">
                        <img src="assets/images/services/life-sciences.jpg" alt="About us" />
                        
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-between align-items-center ind_content">
                    <div className="col-lg-5">
                        <div className="about-image-one e_com rmb-85 wow fadeInUp delay-0-2s">
                        <img src="assets/images/services/real-estate.jpg" alt="About us" />
                        
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="about-content-one wow fadeInUp delay-0-4s">
                            <div className="section-title mb-10">
                                <span className="sub-title mb-15">  Real Estate</span>
                            </div>
                            <p>
                               For the last 7 years we have been constantly working in real estate, 
                               providing digital marketing services.
                            </p>
                            <p>
                               Our year of in depth experience gives your brand exactly what you 
                               business growth so, We are established as a dest real estate digital 
                               marketing company. Our comprehensive digital marketing packages include 
                               all aspects of marketing that you would expect from a well known digital 
                               marketing company .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  
      </Layout>
    );
  };
  export default industry;