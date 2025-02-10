import { fetchApi } from "@/services/api";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Script from 'next/script';
import dynamic from 'next/dynamic';


const SubscribeForm = ({heading = "", theme}) => {

    const NewsletterForm = dynamic(() => import('./NewsletterForm'), {
        ssr: false,
    });

    return (
        <div className={theme === "light" ? "subscribe subscribe--light" : "subscribe"} >
            <div className="row justify-content-center">
                <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4">
                    <div className="subscribe-inner">
                        <h3 className="wow flipInX">{heading}</h3>
                            <NewsletterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeForm;