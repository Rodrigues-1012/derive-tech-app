import axios from "axios";
import { useEffect } from "react";

import BlogTab from "@/components/BlogTab";

import ConsulationForm from "@/components/Consultationform";
import ContactForm from "@/components/ContactForm";
import Content from "@/components/Content";
import CustomMetadataHead from "@/components/CustomMetadataHead";
import Layout from "@/components/Layout";
import ListUITab from "@/components/ListUITab";
import MainBanner from "@/components/MainBanner";
import Not_Found from "@/components/Not_Found";
import PartnerTab from "@/components/PartnerTab";
import SocialTab from "@/components/SocialTab";
import SubscribeForm from "@/components/SubscribeForm";
import SubscribeTab from "@/components/SubscribeTab";
import Tabs from "@/components/Tabs";
import VerticalTab from "@/components/VerticalTab";

const Slug = ({ page, slugData }) => {
  const editedUrl = process.env.NEXT_PUBLIC_WEB_APP_URL + "/" + slugData?.route;

  console.log({ slugData });

  useEffect(() => {
    $(window).outerWidth() > 767 &&
      $(".text-scroll").mCustomScrollbar({ theme: "dark-thin" });
  }, [slugData]);

  if (!slugData) {
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

export async function getServerSideProps({ params }) {
  const { page, slug } = params;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}page/${page}/${slug}`,
      {
        headers: {
          Apikey: "ca1e984376b1648ee77d7f5cefbcdd8171b40aab",
          Accept: "application/json",
        },
      }
    );

    if (response.data.message === "Not found") {
      return {
        props: { notFound: false },
      };
    }

    return {
      props: {
        page,
        slug,
        slugData: response.data.data,
      },
    };
  } catch (error) {
    return {
      props: { notFound: true },
    };
  }
}

export default Slug;
