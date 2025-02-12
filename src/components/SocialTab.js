import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SocialTab = ({ data }) => {
  const router = useRouter();
  const baseUrl = `${process.env.NEXT_PUBLIC_WEB_APP_URL}${router.asPath}`; // Construa a URL completa
  console.log(baseUrl);

  return (
    <div className="container">
      <div className="col-lg-10">
        <div className="testimonials-article-bottom">
          <div className="testimonials-article-social">
            <Link
              href={`mailto:?subject=${data?.title}&body=${baseUrl}`}
              target="_blank"
              title="Share via Email"
            >
              <i className="fas fa-share-alt" />
            </Link>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`}
              target="_blank"
              title="Share on Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              href={`https://twitter.com/intent/tweet?url=${baseUrl}`}
              target="_blank"
              title="Share on Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              href={`http://www.linkedin.com/shareArticle?mini=true&url=${baseUrl}`}
              target="_blank"
              title="Share on LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </Link>
          </div>
          {data?.buttonTitle && (
            <Link
              href={data?.buttonUrl ?? "#"}
              className="testimonials-article-back"
            >
              {data?.buttonTitle}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialTab;
