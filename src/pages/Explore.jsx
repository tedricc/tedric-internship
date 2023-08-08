import React, { useEffect } from "react";
import SubHeader from "../images/subheader.jpg";
import ExploreItems from "../components/explore/ExploreItems";

const Explore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="subheader"
          className="text-light"
          style={{ background: `url("${SubHeader}") top` }}
        >
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="6000"
            data-aos-easing="ease-in-out"
          >
            <div className="center-y relative text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1>Explore</h1>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="section">
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="6000"
            data-aos-easing="ease-in-out"
          >
            <div className="container">
              <div className="row">
                <ExploreItems />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
