import React from "react";

import "/public/css/animate.css";
import "/public/css/jquery.mCustomScrollbar.min.css";
import "/public/css/style.css";
import "/public/css/tinymce.css";
import "/public/css/voyager.css";

import { useRouter } from "next/router";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import localFont from "next/font/local";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className={myFont.className}>
          <Component {...pageProps} />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
