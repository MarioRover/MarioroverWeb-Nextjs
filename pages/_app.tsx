import React from "react";
import "../styles/globals.scss";
import "../styles/fonts.scss";
import type { AppProps } from "next/app";
import HeadLink from "../components/layouts/HeadLink";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadLink />
      <Component {...pageProps} />
    </>
  );
}
