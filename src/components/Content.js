import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

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

const Content = ({ data, baseUrl, route }) => {
  const { query } = useRouter();

  const [readMore, setReadMore] = useState(false);
  const [leadershipList, setLeadershipList] = useState([]);

  const [select, setSelect] = useState(null);

  useEffect(() => {
    // if (query.page === "contact") {
    //   var map = new google.maps.Map(document.getElementById("map"), {
    //     center: { lat: 40.706866, lng: -74.009707 },
    //     zoom: 12,
    //     disableDefaultUI: false,
    //   });

    //   var marker = new google.maps.Marker({
    //     position: { lat: 40.70691682982026, lng: -74.00969895363811 },
    //     title: "Derive Technologies",
    //   });

    //   const contentString =
    //     '<div id="content">' +
    //     '<div id="siteNotice">' +
    //     "</div>" +
    //     '<h5 id="firstHeading" class="firstHeading">Derive Technologies</h5>' +
    //     "<b style='font-weight:500'>40 Wall St 20th floor, New York, NY 10005, United States</b>" +
    //     '<p><a href="https://maps.app.goo.gl/Vt5zkJRvvV83238u6">' +
    //     "View on Google Maps</a></p>" +
    //     "</div>" +
    //     "</div>";

    //   const infowindow = new google.maps.InfoWindow({
    //     content: contentString,
    //     ariaLabel: "Derive Technologies",
    //   });

    //   marker.addListener("click", () => {
    //     infowindow.open({
    //       anchor: marker,
    //       map,
    //     });
    //   });
    //   // To add the marker to the map, call setMap();
    //   marker.setMap(map);
    // }

    if (query.page === "contact") {
      var point = {
        lat: 40.706866,
        lng: -74.009707,
      };
      var markerSize = {
        x: -130,
        y: 70,
      };

      google.maps.Marker.prototype.setLabel = function (label) {
        this.label = new MarkerLabel({
          map: this.map,
          marker: this,
          text: label,
        });
        this.label.bindTo("position", this, "position");
      };

      var MarkerLabel = function (options) {
        this.setValues(options);
        this.span = document.createElement("span");
        this.span.style.position = "absolute";
        this.span.style.color = "red";
        this.span.style.fontSize = "14px";
        this.span.style.fontWeight = "";
      };

      MarkerLabel.prototype = $.extend(new google.maps.OverlayView(), {
        onAdd: function () {
          this.getPanes().overlayImage.appendChild(this.span);
          var self = this;
          this.listeners = [
            google.maps.event.addListener(
              this,
              "position_changed",
              function () {
                self.draw();
              }
            ),
          ];
        },
        draw: function () {
          var text = String(this.get("text"));
          var position = this.getProjection().fromLatLngToDivPixel(
            this.get("position")
          );
          this.span.innerHTML = text;
          this.span.style.left =
            position.x - markerSize.x / 2 - text.length * 3 + 10 + "px";
          this.span.style.top = position.y - markerSize.y + 40 + "px";
        },
      });

      function initialize() {
        var myLatLng = new google.maps.LatLng(point.lat, point.lng);
        var gmap = new google.maps.Map(document.getElementById("map"), {
          zoom: 18,
          center: myLatLng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        });

        const contentString =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h5 id="firstHeading" class="firstHeading">Derive Technologies</h5>' +
          "<b style='font-weight:500'>40 Wall St 20th floor, New York, NY 10005, United States</b>" +
          '<p><a href="https://maps.app.goo.gl/Vt5zkJRvvV83238u6">' +
          "View on Google Maps</a></p>" +
          "</div>" +
          "</div>";

        var marker = new google.maps.Marker({
          map: gmap,
          position: myLatLng,
          label: "Derive Technologies",
          // draggable: true,
        });

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          ariaLabel: "Derive Technologies",
        });

        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
          });
        });
      }

      initialize();
    }
  }, []);

  useEffect(() => {
    setReadMore(data?.readMore === 1 ? true : false);

    if (data?.anchor === "grid") {
      setLeadershipList(data?.description?.split("<p>br</p>"));
    }
  }, [data]);

  useEffect(() => {
    let targetBtn = document.querySelectorAll(".target-btn");
    for (var btn of targetBtn) {
      btn.addEventListener("click", showGridModal);
    }
    return () => {
      for (var btn of targetBtn) {
        btn.removeEventListener("click", showGridModal);
      }
    };
  }, [leadershipList]);

  const showGridModal = (event) => {
    let targetElem = event.target.classList;
    let targetIndex = targetElem[targetElem.length - 1].split("-")[1];
    setSelect(leadershipList[+targetIndex]?.split("<p>show</p>")[1]);
  };

  if (data?.anchor === "chain") {
    return (
      <div className="key-milestones mt-5">
        <div className="container">
          <h3 className="sub-title">{data?.title}</h3>
          <div className="key-milestones-list">
            {data?.description?.split("<p>br</p>").map((item) => {
              return (
                <div
                  key={item.id}
                  className="key-milestones-item wow fadeInLeft"
                >
                  <strong>{item.replace(/<\/?[^>]+(>|$)/g, "")}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (data?.anchor === "slider") {
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
              <Slider
                style={{ position: "relative", zIndex: 100 }}
                {...settings}
              >
                {data?.description?.split("<p>br</p>").map((item, i) => {
                  return (
                    <div key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        {data?.backgroundImage && (
          <Image
            src={`${baseUrl}/${data?.backgroundImage}`}
            alt=""
            className="accreditation-decor wow fadeInRight"
            layout="fill"
          />
        )}
      </section>
    );
  }

  if (data?.anchor === "grid") {
    return (
      <div className="leaderboard leaderboard--page pt-0">
        <div className="leaderboard-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8 col-xl-8">
                <div className="leaderboard--page-text wow fadeInLeft">
                  <h3 className="sub-title">{data?.title}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="leaderboard-holder">
            <div className="leaderboard-list">
              {leadershipList.map((item, i) => {
                return (
                  <div
                    key={i + 1}
                    className="item"
                    dangerouslySetInnerHTML={{
                      __html: item.split("<p>show</p>")[0],
                    }}
                  />
                );
              })}
            </div>
          </div>

          {select && (
            <div
              className="modal modal-leaderboard fade in show"
              style={{
                display: "block",
                paddingRight: 15,
                boxShadow: "5px 10px #888888",
                backgroundColor: "#00000078",
              }}
              onClick={(event) => {
                if (event.target.id === "modal_id") {
                  setSelect(null);
                }
              }}
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <button
                    onClick={() => setSelect(null)}
                    type="button"
                    className="close"
                  >
                    <span>×</span>
                  </button>
                  <div dangerouslySetInnerHTML={{ __html: select }} />
                </div>
              </div>
            </div>
          )}

          <Image
            layout="fill"
            src={`${baseUrl}/${data?.backgroundImage}`}
            alt=""
            className="leaderboard-section-decor wow fadeInRight"
          />
        </div>
      </div>
    );
  }

  if (query.page === "contact") {
    return (
      <div className="contact contact-section">
        <div className="contact-section-inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="contact-text wow fadeInLeft">
                  <h2>{data?.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="contact-map wow fadeInRight">
            <div class="contact-map" id="map"></div>

            {/* <div
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "rgb(229, 227, 223)",
              }}
            >
              <div className="gm-err-container">
                <div className="gm-err-content">
                  <div className="gm-err-icon">
                    <Image
                      src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png"
                      alt=""
                      draggable="false"
                      style={{ userSelect: "none" }}
                    />
                  </div>
                  <div className="gm-err-title">
                    Oops! Something went wrong.
                  </div>
                  <div className="gm-err-message">
                    This page didn't load Google Maps correctly. See the
                    JavaScript console for technical details.
                  </div>
                </div>
              </div>
            </div> */}

            <Image
              src="/img/map-frame-top.png"
              alt=""
              layout="fill"
              className="contact-map-frame contact-map-frame--top d-none d-md-block"
            />
            <Image
              src="/img/map-frame-bottom.png"
              alt=""
              layout="fill"
              className="contact-map-frame contact-map-frame--bottom d-none d-md-block"
            />
            <Image
              src="/img/map-frame-left.png"
              alt=""
              layout="fill"
              className="contact-map-frame contact-map-frame--left d-none d-md-block"
            />
          </div>
        </div>
      </div>
    );
  }

  if (query.page === "about-overview") {
    return (
      <div className={`block block--${data?.anchor}`}>
        <div
          className="block-back"
          style={{
            backgroundImage: `url(${baseUrl}/${data?.backgroundImage})`,
          }}
        />
        <div className="block-frame">
          <div className="block-icon">
            <Image
              src={`${baseUrl}/${data?.image}`}
              alt=""
              className={`block-icon-back wow ${
                data?.anchor === "reverse" ? "fadeInLeft" : "fadeInRight"
              } `}
              layout="fill"
            />
          </div>
        </div>
        <div className="block-content">
          <div className="container">
            <div
              className={`row align-items-center justify-content-${
                data?.anchor === "reverse" ? "end" : "between"
              }`}
            >
              <div className="col-sm-6 col-md-6 col-lg-5">
                <div
                  className={`wow ${
                    data?.anchor === "reverse" ? "fadeInRight" : "fadeInLeft"
                  }`}
                >
                  <h3 className="sub-title">{data?.title}</h3>
                  <div
                    className="text-scroll"
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data?.backgroundImage) {
    return (
      <div className="partners partners--page pt-0">
        <div className={`partners-section partners-section--${data?.anchor}`}>
          <div className="container">
            <div
              className={`row ${
                data?.anchor === "reverse" ? "justify-content-md-end" : ""
              }`}
            >
              <div className="col-md-7 col-lg-8 col-xl-7">
                <div
                  className={`partners--page-text wow ${
                    data?.anchor === "reverse" ? "fadeInRight" : "fadeInLeft"
                  } `}
                >
                  {data?.title && <h3 className="sub-title">{data?.title}</h3>}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: readMore
                        ? data?.description.slice(0, data?.readCount)
                        : data?.description,
                    }}
                  />

                  {data?.readMore === 1 && (
                    <a
                      href="javascript:void(0)"
                      onClick={() => setReadMore(!readMore)}
                      class="read-more-link"
                    >
                      Read {readMore ? "More" : "less"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`partners-section-decor wow ${
              data?.anchor === "reverse" ? "fadeInLeft" : "fadeInRight"
            } mt-xl-0 mt-md-1 mt-2`}
          >
            <Image
              src={`${baseUrl}/${data?.backgroundImage}`}
              layout="fill"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }

  if (data?.image) {
    return (
      <div className="verticals verticals--page pt-0" id="verticals">
        <div className={`verticals-section verticals-section--${data?.anchor}`}>
          <div className="container">
            <div
              className={`row ${
                data?.anchor === "reverse" ? "justify-content-md-end" : ""
              }`}
            >
              <div className="col-md-7 col-lg-8 col-xl-8">
                <div
                  className="verticals--page-text wow fadeInLeft"
                  data-wow-duration="1.5s"
                >
                  {data?.title && <h3 className="sub-title">{data?.title}</h3>}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: readMore
                        ? data?.description.slice(0, data?.readCount)
                        : data?.description,
                    }}
                  />

                  {data?.readMore === 1 && (
                    <a
                      href="javascript:void(0)"
                      onClick={() => setReadMore(!readMore)}
                      class="read-more-link"
                    >
                      Read {readMore ? "More" : "less"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`verticals-section-decor wow ${
              data?.anchor === "reverse" ? "fadeInLeft" : "fadeInRight"
            }`}
          >
            <Image layout="fill" src={`${baseUrl}/${data?.image}`} alt="" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section class="section section--services">
      <div class="text wow fadeInUp">
        <div class="container">
          <div
            dangerouslySetInnerHTML={{
              __html: readMore
                ? data?.description.slice(0, data?.readCount)
                : data?.description,
            }}
          />

          {data?.readMore === 1 && (
            <a
              href="javascript:void(0)"
              onClick={() => setReadMore(!readMore)}
              class="read-more-link"
            >
              Read {readMore ? "More" : "less"}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Content;
