import "../styles/globals.css";
import "../styles/nprogress.css";

import Header from "../components/Header";
import Header2 from "../components/Header2";
import Head from "next/head";
import Footer from "../components/Footer";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <Head>
        <title>Flutter tuto</title>
        <meta
          name="Flutter tuto"
          content="O melhor site para aprender flutter."
        />
        <link rel="icon" href="/logo_page.png" />
      </Head>
      <Header2 />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}
export default MyApp;
