import Head from "next/head";

const CustomMetadataHead = ({ title, description, keywords, image, url }) => (
  <Head>
    <title>{title?.slice(0, 60)}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta
      property="og:image"
      content={
        image ||
        "https://phpstack-611111-4140859.cloudwaysapps.com/storage/upload/DeriveAbout.jpg"
      }
    />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content={url} />
    <meta name="twitter:site" content="@DeriveTechnolo2" />
    <meta property="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta
      property="twitter:image"
      content={
        image ||
        "https://phpstack-611111-4140859.cloudwaysapps.com/storage/upload/DeriveAbout.jpg"
      }
    />
  </Head>
);

export default CustomMetadataHead;
