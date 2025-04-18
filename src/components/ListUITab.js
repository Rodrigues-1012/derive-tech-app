import Link from "next/link";
import { useEffect, useState } from "react";

const ListUITab = ({ data, baseUrl, page }) => {
  const [selectData, setSelectData] = useState(null);

  useEffect(() => {
    if (data?.subSection?.length > 0) {
      setSelectData(data?.subSection[0]);
    }
  }, [data.subSection]);

  if (page === "solution-brief-library") {
    return (
      <div className="container" style={{ marginBottom: "100px" }}>
        <div className="testimonials-tags">
          {data.subSection.map((item) => {
            return (
              <span key={item.id} className="testimonials-tags-item active">
                <i className="fas fa-tag" />
                {item.title}
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <section className="section section--services">
      <div className="section-title">
        <h2 className="wow flipInX">{data?.title}</h2>
        <img
          src="/assets/img/title-line.png"
          alt=""
          className="section-title-line wow fadeInLeft"
          width={718}
          height={182}
        />
      </div>

      <div className="services">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-3">
            <ul
              className="nav nav-tabs wow fadeInLeft"
              id="myTab"
              role="tablist"
            >
              {data.subSection?.map((item) => {
                return (
                  <li
                    className="nav-item"
                    key={item.id}
                    onClick={() => setSelectData(item)}
                  >
                    <div
                      className={`nav-link ${
                        selectData?.id === item.id ? "active" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      {item.title}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-sm-8 col-md-8 col-lg-9">
            <div className="tab-content" id="myTabContent">
              {data.subSection?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`tab-pane ${
                      item.id === selectData?.id ? "show active" : ""
                    }`}
                  >
                    <div className="row align-items-center">
                      <div className="col-sm-4 col-md-8 col-lg-7">
                        <img
                          src={`${baseUrl}/${item.image}`}
                          alt=""
                          className="services-image wow fadeInUp"
                          data-wow-duration="1.5s"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="col-lg-5 col-xl-4">
                        <div className="services-text wow fadeInRight">
                          <h3>{item?.title}</h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: `${item.text
                                .replace(/(<([^>]+)>)/gi, "")
                                .slice(0, 320)}...`,
                            }}
                          />
                          {/* ${data?.anchor} */}
                          <Link
                            href={`/${item.slug}`}
                            className="btn btn--gradient btn--shadow"
                          >
                            learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListUITab;
