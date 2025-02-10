import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import $ from "jquery";

const Tabs = ({ data }) => {
  const { asPath } = useRouter();

  const [tabData, setTabData] = useState([]);

  // useEffect(() => {

  //   if (overviewDisable) {
  //     if (data.subSection?.length > 0) {
  //       setTabData(data.subSection);
  //     } else {
  //       setTabData([]);
  //     }
  //   } else {
  //     let overview = {
  //       title: "Overview",
  //       url: `/${query.page}`,
  //       target: "_self",
  //     };

  //     if (data.subSection?.length > 0) {
  //       setTabData([overview, ...data.subSection]);
  //     } else {
  //       setTabData([overview]);
  //     }
  //   }
  // }, [data, overviewDisable]);

  const callMenuList = () => {
    return (
      <ul className="sub-menu-list">
        {data?.buttonTitle && (
          <li>
            <Link
              href={data.buttonUrl ?? "#"}
              className={asPath === data.buttonUrl ? "current" : ""}
            >
              <span>{data?.buttonTitle}</span>
            </Link>
          </li>
        )}
        {data?.subSection.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.url ?? "#"}
                target={item.target}
                className={asPath === item.url ? "current" : ""}
              >
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}

        <li>
          <Link
            href="javascript:void(0)"
            className="gradient scroll-to-section "
            onClick={function () {
              $("body,html").animate(
                {
                  scrollTop:
                    document.getElementById("section")?.offsetTop - 150,
                },
                1000
              );
            }}
          >
            <span>
              <span>
                schedule free <br />
                consultation <i className="fas fa-angle-down" />
              </span>
            </span>
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <div
      className="sub-menu wow fadeInUp"
      data-wow-duration="1.5s"
      style={{
        visibility: "visible",
        animationDuration: "1.5s",
        animationName: "fadeInUp",
      }}
    >
      <div className="container">
        <button
          className="sub-menu-open d-xl-none"
          onClick={(event) => {
            event.preventDefault();
            $(".sub-menu-holder").slideToggle();
          }}
        >
          <i className="fas fa-list-ul" /> Menu
        </button>
        <div className="sub-menu-holder d-xl-none">{callMenuList()}</div>

        <div className="sub-menu-holder d-none d-xl-block">
          {callMenuList()}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
