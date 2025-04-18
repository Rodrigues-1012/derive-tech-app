import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Slider from "react-slick";

function NextArrow({ onClick }) {
  return (
    <button onClick={onClick} className="partners-slider-next slick-arrow">
      <i className="fas fa-chevron-right" />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button onClick={onClick} className="partners-slider-prev slick-arrow">
      <i className="fas fa-chevron-left" />
    </button>
  );
}

const ListTab = ({ data, baseUrl }) => {
  const { query } = useRouter();

  const [partnersList, setPartnersList] = useState(data?.subSection);
  const [toggleShowMore, setToggleShowMore] = useState(false);
  const [count, setCount] = useState(8);
  const [canRenderSlider, setCanRenderSlider] = useState(false);

  useEffect(() => {
    setCanRenderSlider(true);
  }, []);

  useEffect(() => {
    $(".text-scroll").mCustomScrollbar({ theme: "dark-thin" });
  }, []);

  useEffect(() => {
    // console.log("count, partnerList", count, partnersList);
    if (count >= partnersList.length) {
      setToggleShowMore(false);
    }

    if (count < partnersList.length) {
      setToggleShowMore(true);
    }
  }, [count, partnersList]);

  useEffect(() => {
    if (query.type) {
      setPartnersList(
        data?.subSection.filter((val) => val.type === query.type)
      );
    } else {
      setPartnersList(data?.subSection);
    }
  }, [query.type]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    swipe: true,
    touchMove: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  if (!canRenderSlider) return null;

  if (query.page === "partners" && !query.slug) {
    return (
      <div className="container mb-5">
        <div className="partners-grid">
          {partnersList.slice(0, count).map((item) => {
            return (
              <div
                key={item.id}
                className="partners-item wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="partners-item-frame">
                  <div
                    className="partners-item-logo"
                    style={{
                      backgroundImage: `url(${baseUrl}/${item?.logo})`,
                    }}
                  />
                </div>
                <h3 className="text-center">
                  <a href={`partners/${item.slug}`} className="text-center">
                    {item.title}
                  </a>
                </h3>

                <span
                  dangerouslySetInnerHTML={{
                    __html: `${item.first_text_block
                      .replace("<strong>", "")
                      .slice(0, 190)}...`,
                  }}
                />
                <br />
                <div className="text-center">
                  <a
                    href={`partners/${item.slug}`}
                    className="btn btn--gradient"
                  >
                    learn more
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {toggleShowMore && (
          <div className="more wow fadeInUp" data-wow-duration="1.5s">
            <Link
              onClick={() => setCount(count + 8)}
              href="javascript:void(0);"
            >
              show more
            </Link>
          </div>
        )}
      </div>
    );
  }

  if (query.page === "partners" && query.slug) {
    return (
      <div className="container mb-5">
        <div className="partners-grid mt-md-5">
          {data?.subSection
            ?.filter((val) => val.slug !== query.slug)
            .slice(0, 4)
            .map((item) => {
              return (
                <div key={item.id} className="partners-item wow fadeInUp">
                  <div className="partners-item-frame">
                    <div
                      className="partners-item-logo"
                      style={{
                        backgroundImage: `url(${baseUrl}/${item?.logo})`,
                      }}
                    />
                  </div>
                  <h3 className="text-center">
                    <a href={`${item.slug}`} className="text-center">
                      {item.title}
                    </a>
                  </h3>

                  <span
                    className="text-center"
                    dangerouslySetInnerHTML={{
                      __html: `${item.first_text_block
                        .replace("<strong>", "")
                        .slice(0, 190)}...`,
                    }}
                  />
                  <br />
                  <div className="text-center">
                    <a href={`${item.slug}`} className="btn btn--gradient">
                      learn more
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return (
    <section className="section section--partners">
      <div className="section-title section-title">
        <h2 className="wow flipInX">{data?.title}</h2>
        <Image
          src={`/assets/img/title-line.png`}
          alt=""
          className="section-title-line wow fadeInLeft"
          data-wow-duration="1.2s"
          width={718}
          height={182}
        />
      </div>

      <div className="partners">
        <div className="row">
          <div className="col-sm-7">
            <div className="partners-text wow fadeInUp">
              <p>{data?.text}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="partners-shadow">
        <Slider style={{ position: "relative", zIndex: 100 }} {...settings}>
          {data.subSection.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div className="partners-slider-item">
                  <div
                    className="partners-slider-item-img"
                    style={{
                      backgroundImage: `url(${baseUrl}/${item?.logo})`,
                    }}
                  ></div>

                  <div className="partners-slider-item-inner">
                    <div className="text-scroll mCustomScrollbar _mCS_1 mCS_no_scrollbar">
                      <div
                        className="px-3"
                        dangerouslySetInnerHTML={{
                          __html: `${item.first_text_block
                            .replace("<strong>", "")
                            .slice(0, 300)}...`,
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href={`partners/${item.slug}`}
                        className="btn btn--gradient"
                      >
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        {data.buttonTitle !== "" && (
          <div className="more wow fadeInUp" data-wow-duration="1.5s">
            <Link
              href={data.buttonUrl ?? "#"}
              className="btn btn--gradient btn--shadow"
            >
              {data.buttonTitle}
            </Link>
          </div>
        )}
      </div>

      <img
        className="partners-decor wow fadeInUp"
        src={`${baseUrl}/${data.image}`}
        alt=""
        layout="fill"
      />
    </section>
  );
};

export default ListTab;
