
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import ClientsFeedback from "../src/components/home1/ClientsFeedback";

const About = () => {
    return (
      <Layout>
        <PageBanner titleHtml={`Application<span> Development </span>`} titleText="About" />
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
                    <span className="sub-title mb-15"> APPLICATIONS DEVELOPMENT  </span>
                  </div>
                  <p>
                    NetCom Business Solution offers a Mobile Application Development Service Company in Pune. Today, use so many apps to make our life easier and access so many kinds of services like cabs or bill payments made easier. There are so many app developers around nowadays that there is some of the other kind of app launching every day, and for good reason too! So don’t you think it’s a good idea to be one of those using tried and tested ways to get your business noticed by the people? But then, what would give you an edge over your competitors? That will be us! We, the Optech team, are here to bring to you the world of smooth running and visually pleasing apps which will be sure to increase your profits much more than your investments.
                  </p>
                </div>
              </div>
              
              <div className="col-xl-12 col-lg-7 pt-50">
                <div className="about-content-one wow fadeInUp delay-0-4s">
                    <p>
                      NetCom Business Solutions Pvt. Ltd. offers you web application services with robust, highly scalable, more easily functional, user-friendly and visually pleasing, creative web applications. The procedures work similar to Our custom software development and our principles remain the same too. Whether you need a custom, native iOS, Android or Windows app or a cross-platform responsive web app, we can do it all for you- and at unbelievable prices too! As it is that apps connect everything around us, be it restaurants to cabs to entertainment to even people in general, the day is not far away when people will use apps for even the smallest of things! But then, not everyone carries around the same device or uses the same apps. Mobile Application Development Service professionals to develop that much-awaited, responsive app for various kinds of devices- iOS, iPad, Apple watches, Android and Windows devices, wearables, and whatnot! We are well-practiced to handle your enterprise CRM integrations, consumer integrations, push notifications, storage, security, mobile payments, GPS, and so much more. And if you need user management, seamless connections with APIs, cloud storage or integration with social networks, we’re more than happy to assist you with the extra work too, especially as we have different teams to do just that- work together to create products you fall in love with!
                    </p>
                    <p>
                    Mobile Application Development Service Company in Pune begins working on different programming concepts, which includes PHP, Java and even Dot Net and latest code works bringing to latest conveniences, which can be considered for your uninterrupted operations. Our application includes pleasant mobile viewing even. Since online business moving to mobile space, we have delivered on time making to new age business space online, which is viewable by many customers. We have been able to provide better concepts to Web 2.0 applications with the best coding process. A navigational structure has been developed knowing online user preferences. Though executed to simplicity, there are brilliant code works which includes finer designs, which are worked out to bring more engagement in users. Much time users will be engaging and having fun exploring web pages whether gaining information about new products or to happy order placement.
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