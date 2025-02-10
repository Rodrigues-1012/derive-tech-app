import Script from 'next/script';

const HubSpotForm = () => {

    if(window.hbspt) {
      window.hbspt.forms.create({
          region: "na1",
          portalId: "39624325",
          formId: "5f3cb5b9-e347-4fd1-b8b2-58842b2b9d1a",
          target: "#hubspotFormContainer"
      });
    };
  return (
    <>
      <div id="hubspotFormContainer"></div>
    </>
  );
};

export default HubSpotForm;