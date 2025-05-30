import Image from "next/image";
import Link from "next/link";

const HealthcareTab = ({ data, baseUrl }) => {
  return (
    <section className="section section--healthcare mt-5">
      <div className="section-title section-title--white">
        <h2 className="wow flipInX">{data?.title}</h2>
        <Image
          src="/assets/img/title-line-white.png"
          alt=""
          className="section-title-line wow fadeInLeft"
          data-wow-duration="1.2s"
          width={480}
          height={121}
        />
      </div>
      <div className="healthcare">
        <div className="row">
          <div className="col-sm-5">
            <img
              src={`${baseUrl}/${data?.image}`}
              alt=""
              loading={"lazy"}
              className="healthcare-image wow fadeInLeft"
              layout="fill"
            />
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="healthcare-text wow fadeInDown">
              <h3>{data?.subTitle}</h3>

              <p className="mt-4">
                <span style={{ fontWeight: 400 }}>{data?.text}</span>
              </p>

              {data?.buttonTitle && (
                <Link
                  href={data?.buttonUrl ?? "#"}
                  className="btn btn--white btn--shadow"
                >
                  {data?.buttonTitle}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={`/assets/img/decor-2.png`}
        alt=""
        className="healthcare-decor healthcare-decor--top wow fadeInDown"
        data-wow-duration="1.9s"
        data-wow-offset="200"
        loading={"lazy"}
        width={226}
        height={447}
      />
      <Image
        src="/assets/img/decor-3.png"
        alt=""
        loading={"lazy"}
        className="healthcare-decor healthcare-decor--bottom wow fadeInUp"
        data-wow-duration="1.5s"
        width={1007}
        height={741}
      />
    </section>
  );
};

export default HealthcareTab;
