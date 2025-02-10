import { fetchApi } from "@/services/api";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Script from 'next/script';
import dynamic from 'next/dynamic';

const ConsulationForm = ({ data }) => {
    
  const HubSpotForm = dynamic(() => import('./HubSpotForm'), {
    ssr: false,
  });
  
  return (
    <>
      <div className="container" id="section">
        <div className="book-section wow fadeInUp" data-wow-duration="1.5s">
            <>
              <HubSpotForm />
            </>
        </div>
      </div>
    </>
  );
};

export default ConsulationForm;