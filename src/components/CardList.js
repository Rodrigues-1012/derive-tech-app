import React from "react";
import Link from "next/link";

const CardList = ({ data, baseUrl }) => {
  return (
    <>
      <div className="testimonials testimonials--page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10" id="case_data">
              <div className="testimonials-tags"></div>
              <div className="testimonials-grid">
                {data?.subSection?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="testimonials-item wow fadeInUp"
                      data-wow-duration="1.5s"
                    >
                      <div className="testimonials-item-image">
                        <Link
                          href={`/${data?.anchor}/${item.slug}`}
                          className="testimonials-item-img"
                          style={{
                            backgroundImage: `url(${baseUrl}/${item.image})`,
                          }}
                        />
                        <div className="testimonials-avatar">
                          <div className="testimonials-avatar-shadow" />
                          <div className="testimonials-avatar-hold">
                            <div className="testimonials-avatar-inner">
                              <div className="testimonials-avatar-photo">
                                <div
                                  className="testimonials-avatar-face"
                                  style={{
                                    backgroundImage: `url(${baseUrl}/${item.icon})`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials-item-inner">
                        <div className="testimonials-tags"></div>
                        <h2>
                          <Link href={`/${data?.anchor}/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h2>

                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${item.short_description
                              .replace(/(<([^>]+)>)/gi, "")
                              .slice(0, 220)}...`,
                          }}
                        />
                        <br />
                        <Link
                          href={`/${data?.anchor}/${item.slug}`}
                          className="btn btn--gradient btn--shadow "
                        >
                          learn more
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {data?.image && (
          <img
            src={`${baseUrl}/${data?.image}`}
            alt=""
            className="testimonials--page-decor wow fadeInRight"
            layout="fill"
          />
        )}
      </div>
    </>
  );
};

export default CardList;
