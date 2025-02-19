// /* eslint-disable @next/next/no-sync-scripts */
// import { Children } from "react";
// import Document, { Html, Head, Main, NextScript } from "next/document";

// class CustomDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//           <link rel="icon" href="/favicon.ico" />
//           <meta httpEquiv="Content-Type" content="text/html;charSet=utf-8" />
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1, user-scalable=no"
//           />
//           <meta name="format-detection" content="telephone=no" />

//           <meta name="og:url" content="https://derivetech.com/" />
//           <meta name="og:type" content="website" />
//           <meta
//             name="og:title"
//             content="Derive Technologies - Enterprise IT Support & Services Provider"
//           />
//           <meta
//             name="og:description"
//             content="Derive Tech has been helping businesses achieve their IT architecture, application virtualization, and healthcare cybersecurity for over 20 years."
//           />
//           <meta name="og:image" content="../../public/img/logo.png" />
//           <meta name="twitter:card" content="summary_large_image" />
//           <meta name="twitter:domain" content="derivetech.com" />
//           <meta name="twitter:url" content="https://derivetech.com/" />
//           <meta
//             name="twitter:title"
//             content="Derive Technologies - Enterprise IT Support & Services Provider"
//           />
//           <meta
//             name="twitter:description"
//             content="Derive Tech has been helping businesses achieve their IT architecture, application virtualization, and healthcare cybersecurity for over 20 years."
//           />
//           <meta name="twitter:image" content="../../public/img/logo.png" />

//           {/* <meta name="twitter:title" content="Purchase Contract Vehicles" /> */}

//           <link
//             href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
//             rel="stylesheet"
//           />
//           <link
//             rel="stylesheet"
//             href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"
//           />

//           <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

//           <script src="https://www.google.com/recaptcha/api.js?hl=en"></script>
//           <link
//             rel="stylesheet"
//             type="text/css"
//             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//           />
//           <script
//             src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
//             integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=="
//             crossorigin="anonymous"
//             referrerpolicy="no-referrer"
//           ></script>
//           <script
//             src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js"
//             integrity="sha512-Rd5Gf5A6chsunOJte+gKWyECMqkG8MgBYD1u80LOOJBfl6ka9CtatRrD4P0P5Q5V/z/ecvOCSYC8tLoWNrCpPg=="
//             crossorigin="anonymous"
//             referrerpolicy="no-referrer"
//           ></script>

//           <script
//             src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"
//             integrity="sha512-rCjfoab9CVKOH/w/T6GbBxnAH5Azhy4+q1EXW5XEURefHbIkRbQ++ZR+GBClo3/d3q583X/gO4FKmOFuhkKrdA=="
//             crossorigin="anonymous"
//             referrerpolicy="no-referrer"
//           ></script>
//           <script
//             src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js"
//             integrity="sha512-Yk47FuYNtuINE1w+t/KT4BQ7JaycTCcrvlSvdK/jry6Kcxqg5vN7/svVWCxZykVzzJHaxXk5T9jnFemZHSYgnw=="
//             crossorigin="anonymous"
//             referrerpolicy="no-referrer"
//           ></script>
//           <link
//             rel="stylesheet"
//             href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"
//             integrity="sha512-6qkvBbDyl5TDJtNJiC8foyEVuB6gxMBkrKy67XpqnIDxyvLLPJzmTjAj1dRJfNdmXWqD10VbJoeN4pOQqDwvRA=="
//             crossorigin="anonymous"
//             referrerpolicy="no-referrer"
//           />
//           <script
//             src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
//             integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg=="
//             crossorigin="anonymous"
//             referrerpolicy="no-referrer"
//           ></script>

//           <script
//             src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmzTjRM_LHT-uLLLiWrFZF3NcH8rip5fY&language=en"
//             async
//             defer
//           ></script>

//           <link
//             rel="stylesheet"
//             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"
//             integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw=="
//             crossorigin="anonymous"
//             referrerpolicy="no-referrer"
//           />
//           <link
//             rel="stylesheet"
//             type="text/css"
//            charSet="UTF-8"
//             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//           />
//           <link
//             rel="stylesheet"
//             type="text/css"
//             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//           />
//           <script
//             type="text/javascript"
//             src="https://analytics.clickdimensions.com/ts.js"
//           ></script>
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// CustomDocument.getInitialProps = async (ctx) => {
//   const initialProps = await Document.getInitialProps(ctx);
//   return {
//     ...initialProps,
//   };
// };

// export default CustomDocument;

/* eslint-disable @next/next/no-sync-scripts */
import { Children } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useRouter } from "next/router";

class CustomDocument extends Document {
  render() {
    // const router = useRouter();

    const { url, ogTitle, ogDescription, ogImage } = this.props;

    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="shortcut icon"
            href="https://www.derivetech.com/favicon.ico"
            type="image/x-icon"
          />
          {/* <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> */}
          <meta
            property="google-site-verification"
            content="6RigxzoAYCllNfaTJNli5zX9W6PsTRCecp7rfy4i-Tw"
          />
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          /> */}
          <meta name="format-detection" content="telephone=no" />
          <meta name="keywords" content="Home page" />

          <meta
            name="description"
            content={
              ogDescription ||
              "Derive Tech has been helping businesses achieve their IT architecture, application virtualization, and healthcare cybersecurity for over 20 years. _D"
            }
          />

          {/* <!-- Facebook Meta Tags --> */}

          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={
              ogTitle ||
              "Derive Technologies - Enterprise IT Support & Services Provider"
            }
          />
          <meta
            property="og:description"
            content={
              ogDescription ||
              "Derive Tech has been helping businesses achieve their IT architecture, application virtualization, and healthcare cybersecurity for over 20 years."
            }
          />
          <meta
            property="og:image"
            content={
              ogImage ||
              "https://phpstack-611111-4140859.cloudwaysapps.com/storage/upload/DeriveAbout.jpg"
            }
          />
          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content={url} />
          <meta property="twitter:url" content={url} />

          <meta
            name="twitter:title"
            content={
              ogTitle ||
              "Enterprise IT Support &amp; Services Provider - Derive Technologies"
            }
          />

          <meta
            name="twitter:description"
            content={
              ogDescription ||
              "Derive Tech has been helping businesses achieve their IT architecture, application virtualization, and healthcare cybersecurity for over 20 years."
            }
          />

          <meta
            property="twitter:image"
            content={
              ogImage ||
              "https://phpstack-611111-4140859.cloudwaysapps.com/storage/upload/DeriveAbout.jpg"
            }
          />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
          />
          <link rel="canonical" href="https://www.derivetech.com/" />
          {/*<link rel="canonical" href={url} />*/}

          {/* <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"
            integrity="sha512-rCjfoab9CVKOH/w/T6GbBxnAH5Azhy4+q1EXW5XEURefHbIkRbQ++ZR+GBClo3/d3q583X/gO4FKmOFuhkKrdA=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          ></script> */}
          <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0ZfX0SnaPFXYR_jTyUD_VyL9dzb9y6-w&language=en"
            async
            defer
          />
          <script
            type="text/javascript"
            async=""
            src="https://www.googletagmanager.com/gtag/js?id=G-ZSHBZ5V1CZ&amp;cx=c&amp;_slc=1"
          ></script>
          <script
            type="text/javascript"
            src="https://www.googletagmanager.com/gtag/js?id=G-ZSHBZ5V1CZ&amp;l=dataLayer&amp;cx=c"
          ></script>
          <script
            type="text/javascript"
            async=""
            src="https://www.google-analytics.com/analytics.js"
          ></script>
          {/*<script
            type="text/javascript"
            async=""
            src="https://www.gstatic.com/recaptcha/releases/0hCdE87LyjzAkFO5Ff-v7Hj1/recaptcha__en.js"
            crossorigin="anonymous"
            integrity="sha384-ToIRK/fCxk6HZidjy8su24Pn+8FsKiX4QnuO0AfQZBcsd0m8DMaqafsc91h4byqU"
          ></script>*/}
          {/* <script
            async=""
            src="https://www.googletagmanager.com/gtm.js?id=GTM-PVLLXSJ"
          ></script> */}
          <script
            async=""
            src="https://www.googletagmanager.com/gtm.js?id=GTM-NG3F4CR"
          ></script>
          {/* <!-- Google Tag Manager --> */}
          {/* <Script id="" strategy="afterInteractive">
            {(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-NG3F4CR")}
          </Script>

          <Script id="" strategy="afterInteractive">
            {(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-PVLLXSJ")}
          </Script> */}
          <script
            src="https://analytics.clickdimensions.com/tsr.js?ac=aMdLOCLmk06yuIvqhETZiQ&amp;urk=1692856178771&amp;cm=&amp;s=1692855476950&amp;v=ca7cd025a32f4196a64de17a32699da5&amp;lc=English&amp;pt=Enterprise%20IT%20Support%20%26%20Services%20Provider-%20Derive%20Technologies&amp;dn=derivetech.com&amp;dnk=&amp;pk=&amp;hn=www.derivetech.com&amp;uri=https%3A%2F%2Fwww.derivetech.com%2F&amp;r=https%3A%2F%2Fwww.derivetech.com%2Fabout-overview&amp;t=PAGE&amp;b=CHROME&amp;os=LINUX&amp;pr=false&amp;sc=0&amp;sv=6.0&amp;qd=&amp;dt=1692856178771&amp;pvon=1692856032714"
            type="text/javascript"
          ></script>

          {/* <!-- Google Tag Manager --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-PVLLXSJ")`,
            }}
          />
          {/* <Script>
            {(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-PVLLXSJ")}
          </Script> */}
          {/* <!-- End Google Tag Manager --> */}
        </Head>
        <body>
          <script
            src="//js.hsforms.net/forms/embed/v2.js"
            type="text/javascript"
            charSet="utf-8"
          ></script>
          <script
            src="//js.hs-scripts.com/39624325.js"
            type="text/javascript"
            charSet="utf-8"
          ></script>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PVLLXSJ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}

          {/* <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NG3F4CR"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript> */}
          {/* <!-- End Google Tag Manager (noscript) --> */}

          <Main />
          <NextScript />

          <script src="https://www.google.com/recaptcha/api.js?hl=en" />
          <script src="/js/js.cookie.min.js" />

          <script
            type="text/javascript"
            src="https://analytics.clickdimensions.com/ts.js"
          />

          <script src="/js/jquery-3.3.1.min.js" />
          <script src="/js/bootstrap.min.js" />
          <script src="/js/wow.min.js" />
          <script src="/js/jquery.mCustomScrollbar.js" />
          <script src="/js/jquery.mousewheel.js" />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
          <script src="/js/main.js" />
          <script src="/js/menu.js" />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              var cdAnalytics = new clickdimensions.Analytics("analytics.clickdimensions.com");
              cdAnalytics.setAccountKey("aMdLOCLmk06yuIvqhETZiQ");
              cdAnalytics.setDomain("derivetech.com");
              cdAnalytics.setScore(typeof(cdScore) == "undefined" ? 0 : (cdScore == 0 ? null : cdScore));
              cdAnalytics.trackPage();
            `,
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);

  // Obtenha o hostname, path e protocolo para montar a URL
  const { req, query } = ctx;
  const protocol = req
    ? `${req.headers["x-forwarded-proto"] || "http"}://`
    : "";
  const host = "derivetech.com";
  const pathname = ctx.asPath;

  // Construa a URL completa
  const url = `${protocol}${host}${pathname}`;

  // Exemplo de como você poderia passar dinamicamente título, descrição e imagem para as páginas
  const ogTitle =
    query.title ||
    "Derive Technologies: Enterprise IT Support & Services Provider - ctx";
  const ogDescription =
    query.description ||
    "Derive Tech has been helping businesses achieve their IT architecture, application virtualization, and healthcare cybersecurity for over 20 years.";
  const ogImage =
    query.image ||
    "https://phpstack-611111-4140859.cloudwaysapps.com/storage/upload/DeriveAbout.jpg";

  return {
    ...initialProps,
    url,
    ogTitle,
    ogDescription,
    ogImage,
  };
};

export default CustomDocument;
