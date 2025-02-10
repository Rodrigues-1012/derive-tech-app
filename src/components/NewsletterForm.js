// NewsletterForm.js
import { useEffect } from 'react';
import Script from 'next/script';

const NewsletterForm = () => {
    if(window.hbspt) {
      window.hbspt.forms.create({
          region: "na1",
          portalId: "39624325",
          formId: "8408adfc-a580-4490-b536-e425f5de7e9f",
          target: "#newsletterFormContainer"
      });
    };
  return (
    <>
      <div id="newsletterFormContainer"></div>
    </>
  );
}

export default NewsletterForm;