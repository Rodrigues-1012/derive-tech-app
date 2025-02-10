import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const VerticalTab = ({ data, baseUrl }) => {
  const { query } = useRouter();

  // console.log("query", query);

  let currentSlug = query["slug"];

  if (currentSlug) {
    return (
      <div className="container">
        <div className="verticals-grid mt-md-5">
          {data?.subSection?.map((item) => {
            return (
              <div key={item.id} className="verticals-item wow fadeInUp">
                <div
                  className="verticals-item-image"
                  style={{
                    backgroundImage: `url(${baseUrl}/${item.image})`,
                  }}
                />
                <div className="text-scroll mCustomScrollbar _mCS_1">
                  <h3>
                    <Link href={`${data?.anchor}/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${item.description
                        .replace(/(<([^>]+)>)/gi, "")
                        .slice(0, 300)}...`,
                    }}
                  />
                </div>
                <Link href={`${data?.anchor}/${item.slug}`} className="more">
                  learn more
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="col-xl-10 mb-5">
      <div className="verticals-holder">
        <div className="verticals-list">
          {data?.subSection?.map((item) => {
            return (
              <div key={item.id} className="item">
                <div className="item-shadow" />
                <div className="item-hold">
                  <div className="item-inner">
                    <div className="item-photo">
                      <div
                        className="image"
                        style={{
                          backgroundImage: `url(${baseUrl}/${item?.image})`,
                        }}
                      />
                      <h4>{item?.title}</h4>
                      <div className="mask">
                        <div className="text-scroll mCustomScrollbar _mCS_1">
                          <div
                            id="mCSB_1"
                            className="mCustomScrollBox mCS-dark-thin mCSB_vertical mCSB_inside"
                            style={{ maxHeight: "none" }}
                            tabIndex={0}
                          >
                            <div
                              className="mCSB_container"
                              dangerouslySetInnerHTML={{
                                __html: item?.description
                                  .replace(/(<([^>]+)>)/gi, "")
                                  .slice(0, 500),
                              }}
                            />

                            <div className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark-thin mCSB_scrollTools_vertical">
                              <div className="mCSB_draggerContainer">
                                <div
                                  className="mCSB_dragger"
                                  style={{
                                    position: "absolute",
                                    minHeight: 30,
                                    display: "block",
                                    height: 224,
                                    maxHeight: "240.359px",
                                    top: 0,
                                  }}
                                >
                                  <div className="mCSB_dragger_bar" />
                                </div>
                                <div className="mCSB_draggerRail" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          href={`/${data?.anchor}/${item.slug}`}
                          className="btn btn--gradient"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VerticalTab;
