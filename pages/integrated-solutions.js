
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import ClientsFeedback from "../src/components/home1/ClientsFeedback";

const designing = () => {
    return (
      <Layout>
        <PageBanner titleHtml={`Integrated<span> Solutions </span>`} titleText="About" />
        <section className="about-area-one pt-70 pb-70 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="about-image-one bg-squire-shape e_com rmb-85 wow fadeInUp delay-0-2s">
                  <img src="assets/images/services/payment-integrations.jpg" class="web_img" alt="About us" />
                  {/* <img className="image-left" src="assets/images/shapes/image-left.png" alt="shape" /> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="about-content-one wow fadeInUp delay-0-4s int-conent">
                    <h4>Payment Gateway Integrations</h4>
                    <p>
                        The process of integrating a payment gateway may seem daunting, but if you 
                        want your website to accept online payments it is necessary. Payment gateways 
                        connect the merchant’s website and their payment processing bank, allowing for 
                        the secure transference of financial details. This is usually done by encrypting 
                        the details of credit cards, or other payment methods.
                    </p>
                    <p>There are list of payment gateway which we can integrate:-</p>
                    <ul>
                        <li> Razorpay Payment Gateway</li>
                        <li> PayPal Payment Gateway</li>
                        <li> PayKun Payment Gateway</li>
                        <li> InstaMojo Payment Gateway</li>
                        <li> Cashfree Payment Gateway</li>
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