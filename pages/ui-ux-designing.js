
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import ClientsFeedback from "../src/components/home1/ClientsFeedback";

const designing = () => {
    return (
      <Layout>
        <PageBanner titleHtml={`UI/UX<span> Designing </span>`} titleText="About" />
        <section className="about-area-one pt-50 pb-15 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="about-image-one bg-squire-shape e_com rmb-85 wow fadeInUp delay-0-2s">
                  <img src="assets/images/services/ui-ux-designing.jpg" class="web_img" alt="About us" />
                  <img className="image-left" src="assets/images/shapes/image-left.png" alt="shape" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="about-content-one wow fadeInUp delay-0-4s">
                  <div className="section-title mb-10">
                    <span className="sub-title mb-15"> UI/UX DESIGNING </span>
                  </div>
                  <p>
                  Our creative design team is well-versed in the best design practises and concepts in order to provide our clients with an exceptional user experience and engagement. We not only assess the effectiveness of a website's design, but we also do user testing and code optimization to increase overall performance. We have skilled and experienced UI and UX designers who can determine the most effective techniques and information architecture to create products that meet user needs and provide competitive benefits. Get in touch with our UI/UX professionals today about improving the user-friendliness and interaction of your site, app or other form of media.
                  </p>
                </div>
              </div>
              
              <div className="col-xl-12 col-lg-7 pt-50">
                <div className="about-content-one wow fadeInUp delay-0-4s">
                    <h4>Our UI/UX Professionals are expert in</h4>
                    <h5>Analysing User Behaviour Across Different Devices</h5>
                    <p>
                       Because of the various screen sizes, user behaviour varies from device to device. Our team of specialised designers and developers collaborate to analyse and develop tactics that preserve or improve the user experience across various devices, regardless of screen size.
                    </p>
                    <h5>Optimization Experiences & Interactions for the User</h5>
                    <p>
                       Our developers and designers collaborate on a regular basis to offer ways to improve the user experience and engagement. We will continue to work on improving the design until the customer and users are pleased by providing relevant comments and ideas.
                    </p>
                    <h5>Extensive Testing & Analytics</h5>
                    <p>
                    Starting with a well-informed design and iterating based on user testing, the design process aims to provide the greatest possible product. We may work with current UIs to collect user data and input, then use that information to improve them, repeating the process as needed.
                    </p>
                    <h5>Why Should You Choose Our UI/UX Designers?</h5>
                    <ul>
                        <li> Work together with a team of UI/UX designers and developers.</li>
                        <li> We create outstanding experiences for the end user.</li>
                        <li> We’ll help elevate your business with optimized UI for a better customer experience.</li>
                        <li> You’ll gain access to a high quality design team with open communication.</li>
                        <li> Our designers are dedicated to solving any UI/UX problems.</li>
                        <li> We optimize our designs for your type of business operation.</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
  
      </Layout>
    );
  };
  export default designing;