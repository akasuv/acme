import "../styles/globals.css";
import { init, getUserId } from "@amplitude/analytics-browser";
import React from "react";

init("05a03498729f408269c4eff6e4c92db3");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
