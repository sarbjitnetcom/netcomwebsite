
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import ClientsFeedback from "../src/components/home1/ClientsFeedback";

const marketing = () => {
    return (
      <Layout>
        <PageBanner titleHtml={`Digital<span> Marketing </span>`} titleText="About" />
        <section className="about-area-one pt-50 pb-15 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="about-image-one bg-squire-shape e_com rmb-85 wow fadeInUp delay-0-2s">
                  <img src="assets/images/services/digital-marketing.jpg" class="web_img" alt="About us" />
                  <img className="image-left" src="assets/images/shapes/image-left.png" alt="shape" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="about-content-one wow fadeInUp delay-0-4s">
                  <div className="section-title mb-10">
                    <span className="sub-title mb-15"> Digital Marketing </span>
                  </div>
                  <p>
                    NetCom Business Solutions Pvt. Ltd. is an expert media, design and digital marketing 
                    agency offering comprehensive digital marketing strategies and imaginative content creation, 
                    geared towards helping your business stand out from the crowd.
                  </p>
                  <p>
                    We specialise in all things digital, from responsive web design, compelling graphic 
                    design, right through to imaginative videography. We can help design a bespoke digital 
                    marketing strategy to meet your businesses specific needs, consisting of one or a 
                    combination of the services outlined below.
                  </p>
                </div>
              </div>
              
              <div className="col-xl-12 col-lg-7 pt-50">
                <div className="about-content-one wow fadeInUp delay-0-4s">
                    <h5>Creative Analytical Content</h5>
                    <p>
                       At NetCom Business Solutions Pvt. Ltd., we work based on we genuine analytical data and strategic planning. The days of simply producing material to stay active are long gone; from innovative blogging to paid advertising, we follow a precise science in all of our digital marketing activities. And we are continually updating our methods and knowledge inline with the ever-changing algorithms of the digital world, to continue to help our clients remain one step ahead of their competitors.
                    </p>
                    <h5> Integrated Marketing Strategies that Deliver Results</h5>
                    <p>
                       No two businesses are the same, that’s why everything we do as a digital marketing agency is completely transparent. Our goal is to find digital marketing solutions which are tailored to meet your individual goals, vision and budgets. Using analytical data, thorough research, and our passionate drive, we will immerse ourselves within your business to generate new leads and build genuine relationships with your audience.
                    </p>
                    <h5>Why Do I Need To Hire A Digital Marketing Agency?</h5>
                    <p>
                    Businesses can no longer rely on outdated marketing strategies as the world becoming more digital. Any marketing strategy should include everything from a responsive website to an active social media presence. When you engage with a digital marketing firm like NetCom Business Solutions Pvt. Ltd., you'll have access to a large team of experts and an unending supply of tools to help you find new clients and earn new business.
                    </p>
                    <p>
                        <b>If you want to build your online presence, grow your brand in the digital era, We have a number of services which will help you achieve your business goal.
                           (FRAME) SEO, SEM, SMO, PPC, Content Writing </b>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
      </Layout>
    );
  };
  export default marketing;