import { AppProps } from "next/app";
import "@design-system/styles/global.scss";
import { poppins } from "@design-system/fonts/poppins";
import { bebasNeue } from "@design-system/fonts/bebas-neue";
import { pd } from "@design-system/fonts/pd";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import { Router } from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --fontFamilyPrimary: ${poppins.style.fontFamily};
            --fontFamilySecondary: ${pd.style.fontFamily};
            --fontFamilyTertiary: ${bebasNeue.style.fontFamily};
          }
        `}
      </style>
      <PageLoadingIndicator>
        <main>
          <Component {...pageProps} />
        </main>
      </PageLoadingIndicator>
    </>
  );
}

type PageLoadingIndicatorProps = {
  children: React.ReactNode;
};

function PageLoadingIndicator(props: PageLoadingIndicatorProps) {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return <>{props.children}</>;
}

export default appWithTranslation(App);
