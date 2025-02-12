import React, { useEffect } from "react";
import Head from "next/head";
import { useQueryHooks } from "@/services/useCustomHooks";

import AccreditationTab from "@/components/AccreditationTab";
import BlogTab from "@/components/BlogTab";

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
import SubscribeForm from "@/components/SubscribeForm";
import SubscribeTab from "@/components/SubscribeTab";
import Tabs from "@/components/Tabs";
import VerticalTab from "@/components/VerticalTab";
import { data } from "jquery";
import CustomMetadataHead from "@/components/CustomMetadataHead";

const Slug = ({ page, slug }) => {
  // console.log("slug", slug, page);

  const {
    isLoading,
    data: slugData,
    isError,
  } = useQueryHooks(`page/${page}/${slug}`);

  console.log("data:");
  console.log(slugData);

  const editedUrl = process.env.NEXT_PUBLIC_WEB_APP_URL + "/" + slugData?.route;

  useEffect(() => {
    $(window).outerWidth() > 767 &&
      $(".text-scroll").mCustomScrollbar({ theme: "dark-thin" });
  }, [slugData]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Not_Found />;
  }

  return (
    <>
      <CustomMetadataHead
        title={slugData?.metaTitle}
        description={slugData?.metaDescription}
        keywords={slugData?.metaKeywords}
        url={editedUrl}
      />

      <Layout>
        {slugData?.section.map((item) => {
          switch (item.type) {
            case "Banner":
              return (
                <MainBanner
                  key={item.id}
                  data={item}
                  baseUrl={slugData.baseUrl}
                />
              );

            case "Solution":
            case "Healthcare":
              return (
                <ListUITab
                  key={item.id}
                  data={item}
                  baseUrl={slugData.baseUrl}
                  page={page}
                />
              );

            // case "Accreditation":
            //   return (
            //     <AccreditationTab
            //       key={item.id}
            //       data={item}
            //       baseUrl={slugData.baseUrl}
            //     />
            //   );

            // case "Leadership":
            //   return (
            //     <LeadershipTab
            //       key={item.id}
            //       data={item}
            //       baseUrl={slugData.baseUrl}
            //     />
            //   );

            case "ConsultationForm":
              return <ConsulationForm key={item.id} data={item} />;

            case "Vertical":
              return (
                <VerticalTab
                  key={item.id}
                  data={item}
                  baseUrl={slugData.baseUrl}
                />
              );

            case "Partner":
              return (
                <PartnerTab
                  key={item.id}
                  data={item}
                  baseUrl={slugData.baseUrl}
                />
              );

            case "SubscribeTab":
              return <SubscribeTab key={item.id} route={slugData.route} />;

            case "Blog":
              return (
                <BlogTab key={item.id} data={item} baseUrl={slugData.baseUrl} />
              );

            case "SubscribeForm":
              return (
                <SubscribeForm
                  key={item.id}
                  theme="light"
                  heading={item?.title}
                />
              );

            case "SocialIcon":
              return (
                <SocialTab
                  key={item.id}
                  data={item}
                  baseUrl={slugData.baseUrl}
                />
              );

            case "ContactForm":
              return <ContactForm key={item.id} data={item} />;

            case "Content":
              return (
                <Content key={item.id} data={item} baseUrl={slugData.baseUrl} />
              );

            case "Menulink":
              return <Tabs key={item.id} data={item} />;

            // case "KeyMilestone":
            //   return <Milestone key={item.id} data={item} />;

            default:
              return null;
          }
        })}
      </Layout>
    </>
  );
};

Slug.getInitialProps = ({ query }) => {
  return { page: query.page, slug: query.slug };
};

export default Slug;
