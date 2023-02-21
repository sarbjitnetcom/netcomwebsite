
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import ClientsFeedback from "../src/components/home1/ClientsFeedback";

const About = () => {
    return (
      <Layout>
        <PageBanner titleHtml={`Ecommerec<span> Solutions</span>`} titleText="About" />
        <section className="about-area-one pt-50 pb-15 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="about-image-one bg-squire-shape e_com rmb-85 wow fadeInUp delay-0-2s">
                  <img src="assets/images/services/ecommerce.jpg" class="web_img" alt="About us" />
                  <img className="image-left" src="assets/images/shapes/image-left.png" alt="shape" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="about-content-one wow fadeInUp delay-0-4s">
                  <div className="section-title mb-10">
                    <span className="sub-title mb-15">
                        E-COMMERCE SOLUTIONS
                    </span>
                  </div>
                  <p>
                  Our experts are skilled with developing first e-commerce store or modifying an existing website for our clients. We will help you set up your online media to draw more clients.
                  </p>
                  <p>
                    Create new opportunities for your industry or business & provide your customers with 
                    personalized shopping experience with Netcom Business solutions Pvt. Ltd. We offer a 
                    full-suite of ecommerce development services including strategy, integration, development, 
                    migration and marketing.
                  </p>
                  
                </div>
              </div>
              
              <div className="col-xl-12 col-lg-7 pt-50">
                <div className="about-content-one wow fadeInUp delay-0-4s">
                    <p> We are also providing ecommerce store maintenance and 
                    support service for keeping it available 24x7. Our delivered ecommerce solution 
                    is full-featured, robust, secure & highly efficient which can meet the needs 
                    of any size entity! We have expertise in Food & healthcare, manufacturing industries, 
                    Sports & Fitness!</p>
                  <p>
                    We can also support you with various digital marketing strategy for your ecommerce store, which includes how to improve your customer experience, customer engagement, retention, revenue, sales; how to simplify and streamline in-store processes, how to reduce abandoned shopping carts to boost the overall sales, how to deal with supply chain disruptions, move your customers offline to online and many more!
                  </p>
                  <p>
                    Whether you require a brand new ecommerce website or want to redesign or revamp your existing ecommerce website or online store, our team of ecommerce experts can deliver end to end ecommerce solution from planning, design, development and marketing services!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
      </Layout>
    );
  };
  export default About;