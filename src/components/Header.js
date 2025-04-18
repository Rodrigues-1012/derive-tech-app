import { useQueryHooks } from "@/services/useCustomHooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const { asPath } = useRouter();

  const HeaderTopData = useQueryHooks("menuList/2");
  const HeaderData = useQueryHooks("menuList/3");
  const CompanyInfo = useQueryHooks("generalInfos");

  const [toggleMenu, setToggleMenu] = useState(false);
  const [resourcesChild, setResourcesChild] = useState(null);

  return (
    <>
      <header className="header">
        <ul className="header-menu">
          {HeaderTopData.data?.map((item) => (
            <li key={item.id} className={asPath === item.url ? "active" : ""}>
              <Link href={item.url} target={item.target}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="header-inner">
          <Link href="/" className="header-logo">
            <img
              src={
                CompanyInfo.data
                  ? `${CompanyInfo.data[0]?.baseUrl}${CompanyInfo.data[0]?.logo}`
                  : ""
              }
              alt=""
              layout="fill"
              loading={"lazy"}
            />
          </Link>
          <nav className={`header-nav ${toggleMenu ? "show" : ""}`}>
            <Image
              src="/assets/img/DeriveLogo_White.png"
              alt=""
              className="header-nav-logo"
              width={187}
              height={90}
            />
            <ul>
              {HeaderData.data?.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`with-drop ${
                      asPath === item.url ? "active" : ""
                    }`}
                  >
                    <Link href={item?.url ?? "#"} target={item.target}>
                      <span>{item.title}</span>
                    </Link>

                    <div className="drop">
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.id} className="">
                            <Link
                              href={child.url ?? "#"}
                              target={child.target}
                              onClick={() => setToggleMenu(false)}
                            >
                              <span>{child.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* )} */}
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link href="/e-procurement" className="btn btn--gradient header-btn">
            E-PROCUREMENT
          </Link>
          <div
            className={`open-nav-btn c-hamburger c-hamburger--htx ${
              toggleMenu ? "active" : ""
            }`}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span>toggle menu</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
