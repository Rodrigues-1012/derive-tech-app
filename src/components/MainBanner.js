const MainBanner = ({ data, baseUrl }) => {
  return (
    <div className={`banner banner--page`}>
      <div
        className="banner-image"
        style={{ backgroundImage: `url(${baseUrl}/${data?.backgroundImage})` }}
      />
      <div className="banner-text">
        <div className="banner-text-inner">
          <div className="row">
            <div className="col-xl-5 col-lg-7 col-md-8">
              <div className="wow fadeInUp">
                <h1 className="ttl">{data?.title}</h1>
                <div
                  className="txt"
                  style={{ color: "black", marginTop: "1.5rem" }}
                >
                  {data?.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={`banner-decor wow  ${
          data?.anchor === "reverse"
            ? " banner-decor--right fadeInDown"
            : "fadeInLeft"
        }`}
        src={
          data?.anchor === "reverse"
            ? "/assets/img/decor-11.png"
            : "/assets/img/decor-1.png"
        }
        alt=""
        width={30}
        height={30}
      />
    </div>
  );
};

export default MainBanner;
