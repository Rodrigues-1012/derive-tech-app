import React, { useState } from "react";

const LeadershipTab = ({ data, baseUrl }) => {
  const [select, setSelect] = useState(null);

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
            {data?.subSection?.map((item) => {
              return (
                <div key={item.id} className="item">
                  <div className="item-shadow" />
                  <div className="item-hold">
                    <div className="item-inner">
                      <div className="item-photo">
                        <div
                          className="avatar"
                          style={{
                            backgroundImage: `url(${baseUrl}/${item?.avatar})`,
                          }}
                        />
                        <div className="mask">
                          <h3>{item?.title}</h3>
                          <span className="position">{item?.position}</span>
                          <a
                            href="javascript:void(0)"
                            onClick={() => setSelect(item)}
                            className="btn btn--outline-white"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <button
                  onClick={() => setSelect(null)}
                  type="button"
                  className="close"
                >
                  <span>×</span>
                </button>
                <div className="leaderboard leaderboard-popup">
                  <div className="item">
                    <div className="item-shadow" />
                    <div className="item-hold">
                      <div className="item-inner">
                        <div className="item-photo">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage: `url(${baseUrl}/${select?.avatar})`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="leaderboard-popup-content">
                    <h2>{select?.title}</h2>
                    <span className="position">{select?.position}</span>
                    <div className=" mCustomScrollbar _mCS_6 ">
                      <div
                        className="text-scroll"
                        style={{
                          maxHeight: 501,
                          width: "100%",
                          overflow: "auto",
                        }}
                      >
                        <div
                          id="mCSB_6_container"
                          className="mCSB_container "
                          dangerouslySetInnerHTML={{
                            __html: select?.description,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="/img/decor-1.png"
                    alt=""
                    className="leaderboard-popup-decor"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <img
          src={`${baseUrl}/${data?.backgroundImage}`}
          alt=""
          className="leaderboard-section-decor wow fadeInRight"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default LeadershipTab;
