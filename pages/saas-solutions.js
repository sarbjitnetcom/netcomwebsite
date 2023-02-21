
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const sassolution = () => {
    return (
      <Layout>
        <PageBanner titleHtml={`SAS<span> Solutions </span>`} titleText="About" />
        <section className="about-area-one pt-70 pb-70 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title mb-10 text-center">
                        <span className="sub-title mb-15">Software as a service (or SaaS)</span>
                    </div>
                </div>
                <div className="col-lg-6 pt-30">
                    <div className="about-image-one bg-squire-shape e_com rmb-85 wow fadeInUp delay-0-2s">
                    <img src="assets/images/services/saas-solutions.jpg" class="web_img" alt="About us" />
                    {/* <img className="image-left" src="assets/images/shapes/image-left.png" alt="shape" /> */}
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="about-content-one wow fadeInUp delay-0-4s int-conent ">
                        <h4>SAAS</h4>
                        <p>
                           Software as a service (or SaaS) is a way of delivering applications 
                           over the Internet—as a service. Instead of installing and maintaining 
                           software, you simply access it via the Internet, freeing yourself from 
                           complex software and hardware management. SaaS applications are sometimes 
                           called Web-based software, on-demand software, or hosted software. Whatever 
                           the name, SaaS applications run on a SaaS provider’s servers. The provider 
                           manages access to the application, including security, availability, and performance.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </section>
  
      </Layout>
    );
  };
  export default sassolution;