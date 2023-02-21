
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const sassolution = () => {
    return (
      <Layout>
        <PageBanner titleHtml={`Software<span> Solutions </span>`} titleText="About" />
        <section className="about-area-one pt-70 pb-70 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
               
                <div className="col-lg-6 pt-30">
                    <div className="about-image-one bg-squire-shape e_com rmb-85 wow fadeInUp delay-0-2s">
                    <img src="assets/images/services/software-solutions.jpg" class="web_img" alt="About us" />
                    {/* <img className="image-left" src="assets/images/shapes/image-left.png" alt="shape" /> */}
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="about-content-one wow fadeInUp delay-0-4s int-conent ">
                        <h5>Delivering Effective and Efficient Software Solutions</h5>
                        <p>
                           Software Solutions India is focused on creating sustainable value growth through 
                           innovative solutions and unique partnerships. Our values are at the heart of our 
                           business reputation and are essential to our continued success.
                        </p>
                        <h5>We expertise in:</h5>
                        <ul>
                            <li> Application Framework</li>
                            <li> Maintenance Management</li>
                            <li> Project Management Tools</li>
                            <li> Travel</li>
                            <li> Manufacturing</li>
                            <li> Pharmacy</li>
                            <li> Real Estate</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </section>
  
      </Layout>
    );
  };
  export default sassolution;