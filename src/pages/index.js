import Head from "next/head";

import SubscribeForm from "@/components/SubscribeForm";
import HealthcareTab from "@/components/HealthcareTab";
import PartnerTab from "@/components/PartnerTab";
import { useQueryHooks } from "@/services/useCustomHooks";
import Loader from "@/components/Loader";
import HomeBanner from "@/components/HomeBanner";
import MainBanner from "@/components/MainBanner";
import ListUITab from "@/components/ListUITab";
import BlogTab from "@/components/BlogTab";
import Layout from "@/components/Layout";

export default function Home() {
  const { isLoading, data: pageData } = useQueryHooks("page/home");

  // console.log(" main pageData", pageData);
  console.log("main page log")

  if (isLoading) {
    return <Loader />;
  }

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
