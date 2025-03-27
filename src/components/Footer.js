import React from "react";
import Link from "next/link";
import { useQueryHooks } from "@/services/useCustomHooks";
import { useRouter } from "next/router";
const MainFooter = () => {
  const { asPath } = useRouter();

  const FooterSocials = useQueryHooks("foooter-socials");
  const CompanyInfo = useQueryHooks("generalInfos");
  const FooterLeftOptions = useQueryHooks("menuList/4");
  const FooterRightOptions = useQueryHooks("menuList/5");

  return (
    <footer className="footer">
      <div className="row">
        {CompanyInfo.data?.length > 0 && (
          <div className="col-sm-11 col-lg-4">
            <Link href="/" className="footer-logo">
              <img
                src={`${CompanyInfo.data[0].baseUrl}${CompanyInfo.data[0].white_logo}`}
                alt=""
                layout="fill"
              />
            </Link>
            <div className="footer-info">
              <p
                dangerouslySetInnerHTML={{
                  __html: CompanyInfo.data[0].footer_info,
                }}
              ></p>
            </div>
          </div>
        )}
        <div className="col-6 col-sm-3 col-lg-2">
          <ul className="footer-menu">
            {FooterLeftOptions.data?.length > 0 &&
              FooterLeftOptions.data.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={asPath === item.url ? "active" : ""}
                  >
                    <Link href={item.url ?? "#"} target={item.target}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="col-6 col-sm-3 col-lg-2">
          <ul className="footer-menu">
            {FooterRightOptions.data?.length > 0 &&
              FooterRightOptions.data.map((item) => (
                <li
                  key={item.id}
                  className={asPath === item.url ? "active" : ""}
                >
                  <Link href={item.url ?? "#"} target={item.target}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-6 col-sm-3 col-lg-2">
          <div className="footer-social">
            <div className="item">
              <div className="footer-social-inner">
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: 10, paddingTop: 3 }}>
                    <p className="footer-social-icon">
                      <i className="fab fa-twitter"></i>
                    </p>
                    <p className="footer-social-icon">
                      <i className="fab fa-linkedin"></i>
                    </p>
                    <p className="footer-social-icon">
                      <i className="fab fa-facebook"></i>
                    </p>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: FooterSocials.data?.text,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {CompanyInfo.data?.length > 0 && (
          <div className="col-6 col-sm-3 col-lg-2">
            <ul className="footer-menu address-ftr">
              <li className="text-white">{CompanyInfo.data[0].address}</li>
              {CompanyInfo.data[0].nyc_phone && (
                <li className="">
                  <a
                    href={`tel:${CompanyInfo.data[0].nyc_phone}`}
                    target="_self"
                  >
                    {" "}
                    <span>{CompanyInfo.data[0].nyc_phone} NYC</span>{" "}
                  </a>{" "}
                </li>
              )}

              {CompanyInfo.data[0].new_jersey_phone && (
                <li className="">
                  <a
                    href={`tel:${CompanyInfo.data[0].new_jersey_phone}`}
                    target="_self"
                  >
                    {" "}
                    <span>
                      {CompanyInfo.data[0].new_jersey_phone} New Jersey
                    </span>{" "}
                  </a>{" "}
                </li>
              )}

              {CompanyInfo.data[0].toll_free_phone && (
                <li className="">
                  <a
                    href={`tel:${CompanyInfo.data[0].toll_free_phone}`}
                    target="_self"
                  >
                    {" "}
                    <span>
                      {CompanyInfo.data[0].toll_free_phone} Toll-Free
                    </span>{" "}
                  </a>{" "}
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      {CompanyInfo.data?.length > 0 && (
        <span className="footer-copy">© {CompanyInfo.data[0].copy}</span>
      )}
    </footer>
  );
};

export default MainFooter;
