import React from "react";
import Head from "next/head";
import "styles/globals.css";
import type { AppProps } from "next/app";

// components
import Layout from "src/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
