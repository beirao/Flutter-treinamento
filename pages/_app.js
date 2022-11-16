import "../styles/globals.css";
import "../styles/nprogress.css";

import Header2 from "../components/Header2";
import Head from "next/head";
import Footer from "../components/Footer";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../styles/nprogress.css"; //styles of nprogress

import { SessionProvider } from "next-auth/react";
import { NotificationProvider } from "@web3uikit/core";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div className="bg-white">
        <Head>
          <meta
            name="google-site-verification"
            content="ln77rkIO1vwuzitFeT5z-SjpJs8hOGREi-y51VN2S5c"
          />
          <title>Flutter tuto</title>
          <meta
            name="Flutter tuto"
            content="O melhor site para aprender flutter."
          />
          <link rel="icon" href="/logo_page.png" />
        </Head>
        <NotificationProvider>
          <Header2 />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </NotificationProvider>
      </div>
    </SessionProvider>
  );
}
