import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { feedbackActive, teamSliderActive } from "../src/sliderProps";
const About = () => {
  return (
    <Layout>
      <PageBanner titleHtml={`Abo<span>ut us</span>`} titleText="About" />
      <section>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 mb-50">
              <h6 class="title-who-we mt-60 ">WHO WE ARE</h6>
              <h3 class="marketing">ABOUT US - BEST DIGITAL MARKETING COMPANY IN PUNE</h3>
              <p>
                NetCom Business Solutions are full-service web consultants based in Pune, focusing on web design & development, SEO, SMM, digital marketing services, web advertisements in India, and Best Digital Marketing Company in Pune. We aim to provide the best possible strategic outcome for our valuable clients. We offer entire web services at affordable rates under one roof.
              </p>
              <p>
                NetCom Business Solutions has a team of experts in promotion, provides the best answers for gaining visibility online to your products. Hence, we provide the best website development with SEO Results, wherein we will be working on behalf of your business. High professionalism with preciseness can be expected with an effective time plan.
              </p>
              <p>
                We are more than just a technology firm where the target market is studied and worked with the best concepts ahead. Best Digital Marketing Company in Pune offers the best digital solution for your business. Initially, with the best plan, your product and services enlisted with online customer needs and preferences. A time plan is scheduled for an effective process. Even, the cost is affordable with many benefits. Hence, we would express that, this is the best opportunity to bring high visibility to your product and services.
              </p>
              <p>
                The website is the main component of the digital arsenal, so we offer professional website designing and development services. We have so much feedback and remarks received from our clients. We help you to improve your online presence through our Best Digital Marketing Company in Pune. We offer customized web design with a content management service.
              </p>
              <p>
                We are working with the best digital marketing team where we check conversions of our customers and try to improve the strategy for the best possible outcome. We aim to bring the best online marketing strategies with proven ways to get satisfying results.
                
                If you are going through some challenges in Search Engine Optimisation, and Social Media Optimization then you are in the right place, all you have to do is hire us as a Website Designing and Digital Marketing Service in Pune.
              </p>
              <a href="/contact" class="wel-readmore">To grow your Brand Online feel free to contact us!</a>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do Two Area end */}
      {/* Statistics Four Area start */}
      <div className="statistics-area-four rel z-1">
        <div className="container">
          <div
            className="statistics-four-counters bgs-cover bgc-lighter"
            style={{
              backgroundImage: "url(assets/images/background/counter-bg.png)",
            }}
          >
            <div className="row medium-gap">
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item mt-30 counter-text-wrap wow fadeInLeft delay-0-2s">
                  <i className="flaticon-startup" />
                  <Counter end={569} />
                  <span className="counter-title">Project Completed</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-4s">
                  <i className="flaticon-global" />
                  <Counter end={500} />
                  <span className="counter-title">Happy Clients</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item mt-20 counter-text-wrap wow fadeInLeft delay-0-6s">
                  <i className="flaticon-rating" />
                  <Counter end={2} />
                  <span className="counter-title">Business Partners</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-8s">
                  <i className="flaticon-trophy" />
                  <Counter end={100} />
                  <span className="counter-title">IT Consultant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Four Area end */}
      {/* Video Area start */}
      <section className="video-area bgc-black pt-250">
        <div className="container">
          <div className="row medium-gap align-items-end pt-80">
            <div className="col-lg-6">
              <div className="video-part rmb-65 wow fadeInRight delay-0-2s">
                <img src="assets/images/background/video-bg.jpg" alt="Video" />
               
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-content text-white pb-95 rpb-115 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <h2>
                  We are providing IT and Digital Marketing Solutions for more than 5 years
                  </h2>
                </div>
                <ul className="list-style-three">
                  <li>Digital Marketing</li>
                  <li>Design Strategy</li>
                  <li>Marketing Strategy</li>
                  <li>UX/UI Strategy</li>
                  <li>Business Development</li>
                  <li>Software Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Area End */}
      {/* Team Area start */}
      {/* <section className="team-slider-area pt-210 pb-130 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50">
                <span className="sub-title style-two mb-15">Amazing Team</span>
                <h2>We Have Well Experience Team Member</h2>
              </div>
            </div>
          </div>
          <Slider {...teamSliderActive} className="team-slider-active">
            <div className="team-member wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/team/member1.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Senior Manager</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/team/member2.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Web Developer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/team/member3.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Michael D. Jackson</Link>
                </h5>
                <span className="designation">Business Developer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/team/member4.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Damian S. Madison</Link>
                </h5>
                <span className="designation">Product Designer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/team/member1.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Senior Manager</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/team/member2.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Web Developer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/team/member3.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Michael D. Jackson</Link>
                </h5>
                <span className="designation">Business Developer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/team/member4.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Damian S. Madison</Link>
                </h5>
                <span className="designation">Product Designer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
      {/* Team Area end */}
      {/* Feature Six Area start */}
      {/* <section className="freature-area-six rel z-2 pb-100">
        <div className="container">
          <div
            className="feature-six-inner bgs-cover bgc-primary"
            style={{
              backgroundImage:
                "url(assets/images/background/freature-bg-line.png)",
            }}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item-three wow fadeInRight delay-0-3s">
                  <i className="flaticon-technical-support" />
                  <div className="content">
                    <h4>Customize your site</h4>
                    <p>
                      Sit amet consectetur adipiscing sed eiusmod tempor
                      incididunt labore et dolore magnaes epsums
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item-three color-two wow fadeInRight delay-0-5s">
                  <i className="flaticon-app-development" />
                  <div className="content">
                    <h4>Edit your mobile view</h4>
                    <p>
                      Sit amet consectetur adipiscing sed eiusmod tempor
                      incididunt labore et dolore magnaes epsums
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item-three color-three wow fadeInRight delay-0-4s">
                  <i className="flaticon-settings" />
                  <div className="content">
                    <h4>Add advanced features</h4>
                    <p>
                      Sit amet consectetur adipiscing sed eiusmod tempor
                      incididunt labore et dolore magnaes epsums
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item-three color-four wow fadeInRight delay-0-6s">
                  <i className="flaticon-optimization" />
                  <div className="content">
                    <h4>Optimize for search engines</h4>
                    <p>
                      Sit amet consectetur adipiscing sed eiusmod tempor
                      incididunt labore et dolore magnaes epsums
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Feature Six Area end */}
      {/* Feedback Area start */}
      <section className="feedback-area pb-130 pt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-40 wow fadeInUp delay-0-2s">
                <span className="sub-title style-two mb-20" style={{color: "#0e73b1"}}>
                   TESTIMONIALS
                </span>
                <h2 class="testi">What Our Clients Say About Us</h2>
                <img className="" src="assets/images/background/line.png" />
              </div>
            </div>
          </div>
          <Slider {...feedbackActive} className="feedback-active">
            <div className="feedback-item wow fadeInUp delay-0-2s" style={{paddingBottom: "8px"}}>
              {/* <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo1.png" alt="Logo" />
              </div> */}
              {/* <h4>On the other hand denounes with indignwy</h4> */}
              <p>
              Working with NBS is the best decision I have ever made. I'd personally like to thank Mr. Ramit for guiding me throughout the process. They have a team of expert professionals who work so hard. They valued my opinions, needs and try their best to meet my business requirements. Thank you very much guys and keep it up!
              </p>
              <div className="feedback-author feedback-author1">
                <img src="assets/images/feedback/author1.jpg" alt="Author" />
                <div className="content">
                  <h5>Nilesh Ghadi</h5>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-4s">
              
              <p>
              I got really good support from Netcom Business Solutions.<br></br> 
              My decision to build a website was right from them and I get good 
              support from them from time to time.
              </p><br></br>
              <div className="feedback-author">
                <img src="assets/images/feedback/author1.jpg" alt="Author" />
                <div className="content">
                  <h5>Amrendra v Katkar</h5>
                </div><br></br>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s" >
             
              <p>
              One wonderful group of people who are always on top of any activity and get things done 
              proactively. I am very happy about them handling all my social media and also google ads. 
            
              </p>
              <p>
                 They go a step ahead of you to provide optimized solution before you think of it.
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author1.jpg" alt="Author" />
                <div className="content">
                  <h5>Saurabh Singh</h5>
                </div>
              </div>
            </div>
           
            
          </Slider>
        </div>
        
        <div className="feedback-shape one">
          <img src="assets/images/feedback/man1.jpg" alt="Man Shape" />
        </div>
        <div className="feedback-shape two">
          <img src="assets/images/feedback/man2.jpg" alt="Man Shape" />
        </div>
      </section>
      {/* Feedback Area end */}
    </Layout>
  );
};
export default About;
