import Head from "next/head";

import BlogTab from "@/components/BlogTab";
import HealthcareTab from "@/components/HealthcareTab";
import HomeBanner from "@/components/HomeBanner";
import Layout from "@/components/Layout";
import ListUITab from "@/components/ListUITab";
import PartnerTab from "@/components/PartnerTab";
import SubscribeForm from "@/components/SubscribeForm";
import { fetchApi } from "@/services/api";

export default function Home({ pageData }) {
  return (
    <>
      <Head>
        <title>
          Derive Technologies |{" "}
          {pageData?.metaTitle || "Enterprise IT Support & Services Provider"}
        </title>
        <meta name="description" content={pageData?.metaDescription} />
        <meta name="keywords" content={pageData?.metaKeywords} />
        <link rel="canonical" href="https://www.derivetech.com/" />
      </Head>

      <Layout>
        {pageData?.section.map((item) => {
          switch (item.type) {
            case "Banner":
              return (
                <HomeBanner
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                />
              );

            case "Solution":
              return (
                <ListUITab
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                />
              );

            case "Partner":
              return (
                <PartnerTab
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                />
              );

            case "Blog":
              return (
                <BlogTab key={item.id} data={item} baseUrl={pageData.baseUrl} />
              );

            case "Healthcare":
              return (
                <HealthcareTab
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                />
              );

            case "SubscribeForm":
              return <SubscribeForm key={item.id} heading={item?.title} />;

            default:
              return null;
          }
        })}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetchApi(`page/home`, undefined, undefined, true);

    if (response.data.message === "Not found") {
      return {
        props: { notFound: false },
      };
    }

    return {
      props: {
        pageData: response.data.data,
      },
    };
  } catch (error) {
    return {
      props: { notFound: true },
    };
  }
}
