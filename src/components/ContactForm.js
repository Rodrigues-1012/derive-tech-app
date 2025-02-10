import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchApi } from "@/services/api";
import RECAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

import axios from "axios";
import { useRouter } from "next/router";
import Script from "next/script";
import dynamic from "next/dynamic";

const Form = ({ styles }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      organization: "",
      email: "",
      phoneNumber: "",
      title: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Please fill out this field")
        .trim()
        .matches(/^[a-zA-Z]+$/, "Invalid first Name")
        .min(3, "Minimum 3 character required"),
      lastName: Yup.string()
        .required("Please fill out this field")
        .trim()
        .matches(/^[a-zA-Z]+$/, "Invalid Last Name")
        .min(3, "Minimum 3 character required"),
      email: Yup.string()
        .required("Please fill out this field")
        .trim()
        .email("Invalid Email"),
      phoneNumber: Yup.string()
        .required("Please fill out this field")
        .trim()
        .matches(
          /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
          "Invalid Phone Number"
        ),
    }),
    enableReinitialize: true,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      // console.log('captchaRef', captchaRef.current.getValue())
      // captchaRef.current.reset()

      var flowUrl =
        "https://prod-30.westus.logic.azure.com:443/workflows/66b3435089d1497ea51216df60367bdb/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=_i6Mh1mxSB-4Syys_1oHwoypw_6FQ95Eao7tMLf-dBg";

      var input = JSON.stringify({
        firstname: formik.values.firstName.trim(),
        lastname: formik.values.lastName.trim(),
        company: formik.values.organization.trim(),
        jobtitle: formik.values.title.trim(),
        email: formik.values.email.trim(),
        phonenumber: formik.values.phoneNumber.trim(),
        description: formik.values.comment.trim(),
        name: "0",
        pagename: window.location.href,
      });

      // alert(input); // Display the content of the 'input' variable
      var req = new XMLHttpRequest();
      req.open("POST", flowUrl, false);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(input);

      let obj = {
        first_name: formik.values.firstName.trim(),
        last_name: formik.values.lastName.trim(),
        organization: formik.values.organization.trim(),
        title: formik.values.title.trim(),
        phone_number: formik.values.phoneNumber.trim(),
        email: formik.values.email.trim(),
        comment: formik.values.comment.trim(),
      };

      fetchApi("contactUs", obj, {}, true, "post")
        .then((response) => {
          // console.log("response", response);
          if (response.status == 200) {
            alert(response.data.data);
            resetForm();
          } else {
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className={styles}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              className="form-control"
              placeholder="First Name*"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              style={{
                border: formik.errors.firstName ? "1px solid red" : null,
              }}
            />
            <h5>
              {formik.errors.firstName
                ? formik.errors.firstName
                : "Please fill out this field"}
            </h5>
          </div>
        </div>
        <div className={styles}>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              className="form-control"
              placeholder="Last Name*"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              style={{
                border: formik.errors.lastName ? "1px solid red" : null,
              }}
            />
            <h5>
              {formik.errors.lastName
                ? formik.errors.lastName
                : "Please fill out this field"}
            </h5>
          </div>
        </div>
        <div className={styles}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formik.values.email}
              className="form-control"
              placeholder="Email Address*"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              style={{
                border: formik.errors.email ? "1px solid red" : null,
              }}
            />
            <h5>
              {formik.errors.email
                ? formik.errors.email
                : "Please fill out this field"}
            </h5>
          </div>
        </div>
        <div className={styles}>
          <div className="form-group">
            <input
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              className="form-control"
              placeholder="Phone Number*"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              style={{
                border: formik.errors.phoneNumber ? "1px solid red" : null,
              }}
            />
            <h5>
              {formik.errors.phoneNumber
                ? formik.errors.phoneNumber
                : "Please fill out this field"}
            </h5>
          </div>
        </div>
        <div className={styles}>
          <div className="form-group">
            <input
              type="text"
              name="organization"
              value={formik.values.organization}
              className="form-control"
              placeholder="Your Organization"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className={styles}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              value={formik.values.title}
              className="form-control"
              placeholder="Title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <textarea
              name="comment"
              className="form-control"
              placeholder="Comment"
              value={formik.values.comment}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            ></textarea>
          </div>
        </div>
        <div className={styles === "col-sm-6" ? "col-sm-8" : styles}>
          {/* <RECAPTCHA
            sitekey="6LdpzHsbAAAAANKRSGTKHsPxmxXqhIGeB6RbW9-m"
            ref={captchaRef}
          /> */}
        </div>
        <div className={styles === "col-sm-6" ? "col-sm-4" : styles}>
          <div className="form-group text-right">
            <button
              type="submit"
              className="btn btn--gradient btn--shadow btn--white-border w-100"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const ContactForm = ({ data }) => {
  //   const captchaRef = useRef(null);

  // console.log('captchaRef', captchaRef)

  const HubSpotForm = dynamic(() => import("./HubSpotForm"), {
    ssr: false,
  });

  if (data?.subTitle) {
    return (
      <div className="container" id="contact-form">
        <div className="book-section wow fadeInUp">
          <div className="text-center">
            <h4>{data?.title}</h4>
            <p>{data?.subTitle}</p>
          </div>

          <HubSpotForm />
        </div>
      </div>
    );
  } else {
    return (
      <div id="section">
        <div className="section section--contact">
          <div className="section-title section-title--white">
            <h2 className="wow flipInX">{data?.title}</h2>
            <img
              src="/img/title-line-white.png"
              alt=""
              className="section-title-line wow fadeInLeft"
              layout="fill"
            />
          </div>
          <div className="contact">
            <div className="container">
              <div className="row justify-content-center justify-content-xl-between align-items-center">
                <div className="col-sm-7 col-xl-7">
                  <img
                    src="/img/contact-img.png"
                    alt=""
                    className="contact-image wow zoomIn"
                    layout="fill"
                  />
                </div>
                <div className="col-sm-10 col-lg-8 col-xl-5 hubspotform-vertical">
                  <div className="contact-form wow fadeInUp">
                    <HubSpotForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://www.derivetech.com/uploads/img/decor-2.png"
            alt=""
            className="contact-decor contact-decor--top wow fadeInDown"
            layout="fill"
          />
          <img
            src="https://www.derivetech.com/uploads/img/decor-10.png"
            alt=""
            className="contact-decor contact-decor--bottom wow fadeIn"
            layout="fill"
          />
        </div>
      </div>
    );
  }
};

export default ContactForm;
