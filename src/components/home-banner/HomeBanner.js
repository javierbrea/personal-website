import React from "react";

import bannerHome from "images/banner/home-left-1.png";

const HomeBanner = () => {
  return (
    <section className="home_banner_area">
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="home_left_img">
                <img alt="" height={550} src={bannerHome} width={360} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner_content">
                <h5>This is me</h5>
                <h2>Javier Brea</h2>
                <p>
                  Full stack JS developer. Front end arquitect. Currently focused on building this
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
