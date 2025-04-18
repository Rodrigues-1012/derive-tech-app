import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ data, baseUrl }) => {
  return (
    <div className="banner">
      <div className="banner">
        <div className="banner-video">
          <video
            controls
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
          >
            <source src={`${baseUrl}/${data?.video}`} />
          </video>
        </div>

        <div className="banner-text">
          <div className="banner-text-inner">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-8">
                <div className="wow flipInX" data-wow-duration="1.5s">
                  <h1 className="ttl">{data?.title}</h1>
                  <div className="txt">{data?.text}</div>
                  <Link href={data?.buttonUrl} className="btn btn--gradient">
                    {data?.buttonTitle}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-decor wow fadeInLeft">
        <Image
          src="/assets/img/decor-1.png"
          alt=""
          data-wow-offset="300"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
