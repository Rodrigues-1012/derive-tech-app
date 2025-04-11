import { useQueryHooks } from "@/services/useCustomHooks";
import Head from "next/head";

import AccreditationTab from "@/components/AccreditationTab";
import BlogTab from "@/components/BlogTab";
import CardList from "@/components/CardList";
import ConsulationForm from "@/components/Consultationform";
import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
import LeadershipTab from "@/components/LeadershipTab";
import ListUITab from "@/components/ListUITab";
import Loader from "@/components/Loader";
import MainBanner from "@/components/MainBanner";
import Milestone from "@/components/Milestone";
import Not_Found from "@/components/Not_Found";
import Content from "@/components/Content";
import PartnerTab from "@/components/PartnerTab";
import SocialTab from "@/components/SocialTab";
import SolutionBrief from "@/components/SolutionBrief";
import SubscribeForm from "@/components/SubscribeForm";
import Tabs from "@/components/Tabs";
import VerticalTab from "@/components/VerticalTab";
import { useEffect } from "react";
import HomeBanner from "@/components/HomeBanner";
import HealthcareTab from "@/components/HealthcareTab";

const Page = ({ slug }) => {
  const {
    isLoading,
    data: pageData,
    isError,
    error,
  } = useQueryHooks(pageToQuery);

  useEffect(() => {
    $(window).outerWidth() > 767 &&
      $(".text-scroll").mCustomScrollbar({ theme: "dark-thin" });
  }, [pageData]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Not_Found />;
  }

  return (
    <>
      <Head>
        <title>{pageData?.metaTitle || "Derivetech | Index - [Pages]"}</title>
        <meta name="description" content={pageData?.metaDescription} />
        <meta name="keywords" content={pageData?.metaKeywords} />
      </Head>

      <Layout>
        {pageData?.section.map((item) => {
          switch (item.type) {
            case "Banner":
              return (
                <>
                  {slug === "home" ? (
                    <HomeBanner
                      key={item.id}
                      data={item}
                      baseUrl={pageData.baseUrl}
                    />
                  ) : (
                    <MainBanner
                      key={item.id}
                      data={item}
                      baseUrl={pageData.baseUrl}
                    />
                  )}
                </>
              );

            case "Solution":
              return (
                <ListUITab
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                />
              );

            case "Healthcare":
              return (
                <>
                  {slug === "home" ? (
                    <HealthcareTab data={item} baseUrl={pageData.baseUrl} />
                  ) : (
                    <ListUITab
                      key={item.id}
                      data={item}
                      baseUrl={pageData.baseUrl}
                    />
                  )}
                </>
              );

            case "Partner":
              return (
                <PartnerTab
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                  route={pageData.route}
                />
              );

            case "Blog":
              return (
                <BlogTab
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                  route={pageData?.route}
                />
              );

            case "Vertical":
              return (
                <VerticalTab
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                />
              );

            case "SubscribeForm":
              return (
                <SubscribeForm
                  key={item.id}
                  theme={slug === "home" ? "dark" : "light"}
                  heading={item?.title}
                />
              );

            case "ConsultationForm":
              return <ConsulationForm key={item.id} data={item} />;

            case "ContactForm":
              return <ContactForm key={item.id} data={item} />;

            case "Content":
              return (
                <Content
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                  route={pageData?.route}
                />
              );

            case "Menulink":
              return <Tabs key={item.id} data={item} />;

            case "KeyMilestone":
              return <Milestone key={item.id} data={item} />;

            case "caseStudies":
              return (
                <CardList
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                  route={pageData.route}
                />
              );

            case "solutionBriefLibraries":
              return (
                <SolutionBrief
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                />
              );

            case "SocialIcon":
              return (
                <SocialTab
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                />
              );

            case "Accreditation":
              return (
                <AccreditationTab
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                  route={pageData?.route}
                />
              );

            case "Leadership":
              return (
                <LeadershipTab
                  key={item.id}
                  data={item}
                  baseUrl={pageData.baseUrl}
                />
              );

            default:
              return null;
          }
        })}
      </Layout>
    </>
  );
};

// Page.getInitialProps = ({ query }) => {
//   return { slug: query.page === "index.php" ? "home" : query.page };
// };

Page.getInitialProps = ({ query }) => {
  console.log({query});
  return { slug: query.page === "/" || query.page === "" || query.page === "index.php" ? "home" : query.page };
};
export default Page;
