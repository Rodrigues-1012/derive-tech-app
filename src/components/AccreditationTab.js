import Link from "next/link";
import React from "react";
import Slider from "react-slick";

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="accreditation-slider-next slick-arrow "
    >
      <i className="fas fa-chevron-right" />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="accreditation-slider-prev slick-arrow "
    >
      <i className="fas fa-chevron-left" />
    </button>
  );
}

const AccreditationTab = ({ data, baseUrl }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 0,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    swipe: false,
    touchMove: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          swipe: true,
          touchMove: true,
          arrows: true,
          infinite: true,

          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          swipe: true,
          touchMove: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <section className="accreditation">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="accreditation-text wow fadeInUp">
              <h3 className="sub-title">{data?.title}</h3>
            </div>
          </div>
        </div>
        <div className="accreditation-slider wow fadeInUp ">
          <div
            className={
              window.innerWidth > 992
                ? "d-flex justify-content-center flex-wrap"
                : ""
            }
          >
            <Slider style={{ position: "relative", zIndex: 100 }} {...settings}>
              {data?.subSection?.map((item) => {
                return (
                  <div key={item.id} className="item wow zoomIn ">
                    <div
                      key={item.id}
                      className="accreditation-item "
                      style={{
                        // width: window.innerWidth > 992 ? "341px" : "90%",
                        // maxWidth: window.innerWidth > 992 ? "70%" : "90%",
                        // margin: window.innerWidth > 992 ? "10px" : "auto",
                        zIndex: 100,
                      }}
                    >
                      <div className="accreditation-item-frame">
                        <div
                          className="accreditation-item-logo"
                          style={{
                            backgroundImage: `url(${baseUrl}/${item?.logo})`,
                          }}
                        />
                      </div>
                      <div
                        className="text-scroll mCustomScrollbar _mCS_3"
                        style={{ position: "relative", left: 0, top: 0 }}
                      >
                        <h3 style={{ zIndex: "100" }}>
                          <Link href={`${data?.anchor}/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h3>

                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${item?.description
                              ?.replace("<strong>", "")
                              .slice(0, 500)}...`,
                          }}
                        />
                      </div>
                      <Link
                        href={`${data?.anchor}/${item?.slug}`}
                        class="btn btn--gradient"
                      >
                        learn more
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <img
        src={`${baseUrl}/${data?.backgroundImage}`}
        alt=""
        className="accreditation-decor wow fadeInRight"
        layout="fill"
      />
    </section>
  );
};

export default AccreditationTab;
