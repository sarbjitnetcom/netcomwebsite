
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import ClientsFeedback from "../src/components/home1/ClientsFeedback";

const website = () => {
  return (
    <Layout>
      <PageBanner titleHtml={`Website<span> Development</span>`} titleText="About" />
        <section className="about-area-one pt-50 pb-15 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="about-image-one bg-squire-shape rmb-85 wow fadeInUp delay-0-2s">
                  <img src="assets/images/services/statc-website.jpg" class="web_img" alt="About us" />
                  <img className="image-left" src="assets/images/shapes/image-left.png" alt="shape" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="about-content-one wow fadeInUp delay-0-4s">
                  <div className="section-title mb-10">
                    <span className="sub-title mb-15">
                        Static Website
                    </span>
                  </div>
                  <p>
                  At NetCom Business Solutions Pvt. Ltd., a leading website design company, we combine experience, knowledge, and skills to produce cutting-edge visuals in web designing. Our Static Website packages provide an absolute solution to the business or individuals, post simple information about themselves or their company onto the static web pages.
                  </p>
                  <p>
                  Designing a static website is quite simple when compared with a dynamic website as the development technology is quite simple. In general static websites are created using minimum script and HTML coding. Our static web designing services start with understanding the clients' requirements, analyzing and designing the appropriate layout that translates your business logic into the desired application.
                  </p>
                  <h5><b>Advantages of Static Website Design</b></h5>
                  <ul>
                    <li> As these websites are very lite, they can load fast.  </li>
                    <li> If you want a small website with a few web pages, then the static website development service is just for you. </li>
                    <li> With the static website, you can easily exhibit your online presence to the world.</li>
                    <li> These are very quick to develop.</li>
                    <li> It is easy to optimize.</li>
                    <li> Your users will be able to navigate through your website which will enrich their overall experience.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr></hr>
        <section className="about-area-one pt-50 pb-125 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="about-image-one bg-squire-shape rmb-85 wow fadeInUp delay-0-2s">
                  <img src="assets/images/services/statc-website.jpg" class="web_img" alt="About us" />
                  <img className="image-left" src="assets/images/shapes/image-left.png" alt="shape" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="about-content-one wow fadeInUp delay-0-4s">
                  <div className="section-title mb-10">
                    <span className="sub-title mb-15">
                        Dynamic Website
                    </span>
                  </div>
                  <p>
                  We believe that every customer is different and has different needs, either they own a startup company or a well-established business. At Netcom business solutions Pvt. Ltd., we identify precise customer requirements and recommend them an effective and affordable solution. Most of the Dynamic Websites we build are developed in PHP, NODE JS, JAVA, Python, .NET, etc. Also, we develop dynamic websites with WordPress, Magento, Drupal, etc.
                  </p>
                  <p>
                  We also develop websites using Angular JS, React JS, Vue JS to give a modern look to the website and to satisfy our customers' needs. Even though they are more expensive and take more time to develop than static websites, their features are desirable.
                  </p>
                  <h5><b>Advantages of Static Website Design</b></h5>
                  <ul>
                    <li> Users can update dynamic websites without any knowledge about HTML. </li>
                    <li> The dynamic websites include features like CMS, e-commerce systems, discussion boards, and capabilities to publish dynamically.</li>
                    <li> Content development and updation becomes very easy.</li>
                    <li> Dynamic sites are more interactive with the visitors, which enhances their user experience.</li>
                    <li> Large websites that need frequent updates should be dynamic, as the process is much easier and automatic here.</li>
                    <li> In case you have any questions or queries related to Static / Dynamic Website Design Please _contact us.</li>
                  </ul>
                </div>
              </div>
             
            </div>
          </div>
        </section>
    </Layout>
  );
};
export default website;
