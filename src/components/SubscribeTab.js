import React, { useState, useEffect } from "react";
import { useQueryHooks } from "@/services/useCustomHooks";
import Image from "next/image";

const SubscribeTab = ({ route }) => {
  const { data: slugData } = useQueryHooks(`${route}`);

  const [selectTab, setSelectTab] = useState(null);

  useEffect(() => {
    if (slugData?.solution_tabs.length > 0) {
      setSelectTab(slugData?.solution_tabs[0]);
    }
  }, [slugData]);

  return (
    <section
      className="section section--tabs"
      style={{ paddingLeft: "7.5rem" }}
    >
      <div className="tabs tabs--margin-bottom">
        <ul className="nav nav-tabs wow fadeInUp">
          {slugData?.solution_tabs.map((item) => {
            return (
              <li
                className={`nav-item border`}
                onClick={() => setSelectTab(item)}
                key={item.id}
              >
                <div
                  className={`nav-link ${
                    selectTab?.title === item.title ? "active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  {item.title}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="tab-content wow fadeInUp" id="myTabContent">
          <div className="tab-pane fade show active">
            {selectTab?.list.map((item, index) => {
              return (
                <>
                  <div
                    className={`row justify-content-between align-items-center ${
                      index % 2 === 0 ? "" : "flex-xl-row-reverse"
                    }`}
                  >
                    <div className="col-sm-6 col-lg-6 col-xl-5">
                      <Image
                        src={`${selectTab?.baseUrl}/${item.image}`}
                        alt=""
                        className="mb-5 mb-xl-0"
                        layout="fill"
                      />
                    </div>
                    <div
                      className="col-12 col-xl-6"
                      dangerouslySetInnerHTML={{ __html: item.block }}
                    ></div>
                  </div>

                  {index !== selectTab?.list.length - 1 && (
                    <div className="sep" />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeTab;
