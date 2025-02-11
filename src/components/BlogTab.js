import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/router";

function NextArrow({ onClick }) {
  return (
    <button onClick={onClick} className="blog-slider-next slick-arrow">
      <i className="fas fa-chevron-right" />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button onClick={onClick} className="blog-slider-prev slick-arrow">
      <i className="fas fa-chevron-left" />
    </button>
  );
}

const BlogTab = ({ data, baseUrl }) => {
  const { query } = useRouter();

  const [toggleShowMore, setToggleShowMore] = useState(true);
  const [count, setCount] = useState(6);

  useEffect(() => {
    if (count > data?.subSection.length) {
      setToggleShowMore(false);
    }
  }, [count]);

  const settings = {
    dots: false,
    infinite: true,

    speed: 500,
    slidesToShow: 2,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
  // reverse the of the items
  const reversedItems = [...data.subSection].reverse();

  if (query.page === "blog" && !query.slug) {
    return (
      <div className="blog blog--page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10" id="blog_data">
              <div className="blog-grid">
                {reversedItems?.slice(0, count).map((item) => {
                  let date = new Date(item.created_at);
                  // console.log("date", date);
                  return (
                    <div key={item.id} className="blog-item wow fadeInUp">
                      <div className="blog-item-image">
                        <Link
                          href={`/${data?.anchor}/${item.slug}`}
                          className="blog-item-img"
                          style={{
                            backgroundImage: `url(${baseUrl}/${item.image})`,
                          }}
                        />
                        {/* <div className="blog-item-date">
                          {date.getUTCDate() > 9
                            ? date.getUTCDate()
                            : `0${date.getUTCDate()}`}{" "}
                          <br />
                          {date
                            .toLocaleString("en-us", { month: "long" })
                            .slice(0, 3)}
                        </div> */}
                      </div>
                      <div className="blog-item-inner">
                        <h2>
                          <Link href={`/${data?.anchor}/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h2>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${
                              item.short_description
                                ? `${item.short_description
                                    ?.replace(/(<([^>]+)>)/gi, "")
                                    ?.slice(0, 240)}...`
                                : ""
                            }`,
                          }}
                        />
                        <br />
                        <br />
                        <Link
                          href={`/${data?.anchor}/${item.slug}`}
                          className="btn btn--gradient btn--shadow"
                        >
                          learn more
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              {toggleShowMore && (
                <div className="more wow fadeInUp">
                  <Link
                    href="javascript:void(0);"
                    onClick={() => setCount(count + 6)}
                    className="btn btn--gradient btn--shadow"
                  >
                    {data?.buttonTitle ? data?.buttonTitle : "show more"}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <img
          className="blog--page-decor wow fadeInRight"
          src={`${baseUrl}/${data?.backgroundImage}`}
          alt=""
          layout="fill"
        />
      </div>
    );
  }

  return (
    <section className="section section--blog ">
      <div className="section-title">
        <h2 className="wow flipInX">{data?.title}</h2>

        <img
          src="/img/title-line.png"
          alt=""
          className="section-title-line wow fadeInLeft"
          width={480}
          height={121}
        />

        <div className="partners">
          <div className="row">
            <div className="col-sm-7">
              <div className="partners-text wow fadeInUp">
                <p>{data?.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog">
        <Slider style={{ position: "relative", zIndex: 100 }} {...settings}>
          {data.subSection.map((item) => {
            let date = new Date(item.created_at);
            return (
              <div
                key={item.id}
                className="item wow zoomIn slick-initialized slick-slider"
                style={{ width: 807 }}
              >
                <div className="blog-slide">
                  {/* <div className="blog-slide-mark">
                    {date.getUTCDate() > 9
                      ? date.getUTCDate()
                      : `0${date.getUTCDate()}`}
                    <br />
                    {date
                      .toLocaleString("en-us", { month: "long" })
                      .slice(0, 3)}
                  </div> */}
                  <div
                    className="blog-slide-image"
                    style={{
                      backgroundImage: `url(${baseUrl}/${item.image})`,
                    }}
                  />
                  <div className="blog-slide-holder">
                    <h3>
                      <Link href={`${data?.anchor}/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>
                    {/* <div className="blog-slide-date">
                      {item.created_at
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join(".")}
                    </div> */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${item.short_description
                          .replace(/(<([^>]+)>)/gi, "")
                          .slice(0, 220)}...`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        {data.buttonTitle !== "" && (
          <div className="more wow fadeInUp mt-5" data-wow-duration="1.5s">
            <Link
              href={data.buttonUrl ?? "#"}
              className="btn btn--gradient btn--shadow "
            >
              {data.buttonTitle}
            </Link>
          </div>
        )}
      </div>

      <img
        className="blog-decor wow fadeInUp"
        src={`${baseUrl}/${data?.backgroundImage}`}
        alt=""
        layout="fill"
      />
    </section>
  );
};

export default BlogTab;
