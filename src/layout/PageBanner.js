import Link from "next/link";
const PageBanner = ({ titleHtml, titleText }) => {
  return (
    <section className="page-banner-area pt-170 rpt-40 pb-40 rpb-100 rel z-1 bgc-lighter1 text-center">
      <div className="container">
        <div className="banner-inner rpt-10">
          <h1
            className="page-title"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          ></h1>
          <nav aria-label="breadcrumb">
            {/* <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="/">
                  <a>home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active">{titleText}</li>
            </ol> */}
          </nav>
        </div>
      </div>
      <div className="banner-shapes">
        <div
          className="circle wow zoomInLeft delay-0-2s"
          data-wow-duration="2s"
        />
        <img
          className="shape-one"
          src="assets/images/shapes/hero-shape1.png"
          alt="Shape"
        />
        <img
          className="shape-two"
          src="assets/images/shapes/hero-shape2.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};
export default PageBanner;
