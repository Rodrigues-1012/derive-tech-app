import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useQueryHooks } from "@/services/useCustomHooks";

const SolutionBriefLibrary = ({ data, baseUrl }) => {
  const SolutionData = useQueryHooks("solutionBrief");

  const [select, setSelect] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [briefList, setBriefList] = useState([]);

  useEffect(() => {
    if (SolutionData.data) {
      setCategoryList(SolutionData.data.categoryList);
      setBriefList(SolutionData.data.solutionBriefList);
    }
  }, [SolutionData.data]);

  return (
    <div className="testimonials testimonials--page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10" id="library_data">
            <div className="testimonials-tags">
              {categoryList.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href="javascript:void(0);"
                    className={`testimonials-tags-item category-button ${
                      select.indexOf(item.title) == -1 ? "" : "active"
                    }`}
                    onClick={() => {
                      setSelect(
                        select.indexOf(item.title) == -1
                          ? [...select, item.title]
                          : select.filter((val) => val !== item.title)
                      );
                    }}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
            <div className="testimonials-grid">
              {briefList.map((item) => {
                if (select.length > 0) {
                  let categoryListTitle = item.categories.map(
                    (val) => val.title
                  );
                  if (
                    select.some((element) =>
                      categoryListTitle.includes(element)
                    )
                  ) {
                    return (
                      <div
                        key={item.id}
                        className="testimonials-item wow fadeInUp"
                        data-wow-duration="1.5s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.5s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="testimonials-item-image">
                          <Link
                            href={`${data?.anchor}/${item.slug}`}
                            className="testimonials-item-img"
                            style={{
                              backgroundImage: `url(${item.baseUrl}/${item.image})`,
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
                                      backgroundImage: `url(${item.baseUrl}/${item.icon})`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="testimonials-item-inner">
                          <div className="testimonials-tags">
                            {item.categories.map((val) => {
                              return (
                                <span
                                  key={val.id}
                                  className="testimonials-tags-item"
                                >
                                  {val.title}
                                </span>
                              );
                            })}
                          </div>
                          <h2>
                            <Link href={`${data?.anchor}/${item.slug}`}>
                              {item.title}
                            </Link>
                          </h2>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: `${item.short_description
                                .replace(/(<([^>]+)>)/gi, "")
                                .slice(0, 180)}...`,
                            }}
                          />
                          <br />
                          <Link
                            href={`${data?.anchor}/${item.slug}`}
                            className="btn btn--gradient btn--shadow "
                          >
                            learn more
                          </Link>
                        </div>
                      </div>
                    );
                  }
                } else {
                  return (
                    <div
                      key={item.id}
                      className="testimonials-item wow fadeInUp"
                      data-wow-duration="1.5s"
                      style={{
                        visibility: "visible",
                        animationDuration: "1.5s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="testimonials-item-image">
                        <Link
                          href={`${data?.anchor}/${item.slug}`}
                          className="testimonials-item-img"
                          style={{
                            backgroundImage: `url(${item.baseUrl}/${item.image})`,
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
                                    backgroundImage: `url(${item.baseUrl}/${item.icon})`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials-item-inner">
                        <div className="testimonials-tags">
                          {item.categories.map((val) => {
                            return (
                              <span
                                key={val.id}
                                className="testimonials-tags-item"
                              >
                                {val.title}
                              </span>
                            );
                          })}
                        </div>
                        <h2>
                          <Link href={`${data?.anchor}/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h2>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: `${item.short_description
                              .replace(/(<([^>]+)>)/gi, "")
                              .slice(0, 180)}...`,
                          }}
                        />
                        <br />
                        <Link
                          href={`${data?.anchor}/${item.slug}`}
                          className="btn btn--gradient btn--shadow "
                        >
                          learn more
                        </Link>
                      </div>
                    </div>
                  );
                }
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
  );
};

export default SolutionBriefLibrary;
