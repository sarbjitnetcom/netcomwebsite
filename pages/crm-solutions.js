
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const crmsolution = () => {
    return (
      <Layout>
        <PageBanner titleHtml={`CRM<span> Solutions </span>`} titleText="About" />
        <section className="about-area-one pt-70 pb-70 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title mb-10 text-center">
                        <span className="sub-title mb-15">CRM Solutions </span>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-image-one bg-squire-shape e_com rmb-85 wow fadeInUp delay-0-2s">
                    <img src="assets/images/services/crm-solutions.jpg" class="web_img" alt="About us" />
                    {/* <img className="image-left" src="assets/images/shapes/image-left.png" alt="shape" /> */}
                    </div>
                </div>
               
             
                <div className="col-xl-6 col-lg-6">
                    <div className="about-content-one wow fadeInUp delay-0-4s int-conent ">
                        
                        <h4>CRM (Customer Relationship Management)</h4>
                        <p>
                        A CRM (Customer Relationship Management) system is a strategic tool that, 
                        companies across various industries, should leverage in order to better 
                        understand who their customers are and how they interact with the company.
                        </p>
                        <h5>CRM Integration?</h5>
                        <p>
                            As defined by Hubspot, a CRM integration is the seamless connectivity 
                            between your CRM software and third-party applications. These integrations 
                            result in automated actions that expand the functionality of your software, 
                            eliminating the need to toggle back and forth between systems.
                        </p>
                    </div>
                </div>
              
                <div className="col-xl-12 col-lg-12 pt-60">
                    <div className="about-content-one wow fadeInUp delay-0-4s int-conent ">
                        <h5>Customer & Prospect Communications:-</h5>
                        <ul>
                            <li style={{listStyle: "none", paddingBottom: "10px" }}>
                                <b>1. Customer Interactions: -</b> 
                                Access, control, and visibility as well as chronicling customer interactions 
                                initiated by all types of communication channels (phone, web, chat, email or 
                                social media).
                            </li>
                            <li style={{listStyle: "none", paddingBottom: "10px" }}>
                                <b>2. Phone: -</b> 
                                CRM integration with the phone system, helps to record call details and contact information in the CRM for future reference and visibility.
                            </li>
                            <li style={{listStyle: "none", paddingBottom: "10px" }}>
                                <b>3. LiveChat/Chatbots: -</b> 
                                Chat capability is becoming more and more prominent. CRM integration with a chat program or chat feature embedded on the corporate, sales website or mobile application, enables chatbots to automatically generate leads from website visitors or mobile application users.
                            </li>
                            <li style={{listStyle: "none", paddingBottom: "10px" }}>
                                <b>4. Email: -</b> 
                                Enable the internal email client UI from inside of the CRM application through integration with the email system (i.e. Outlook or Gmail, etc.).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </section>
  
      </Layout>
    );
  };
  export default crmsolution;