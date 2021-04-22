import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

interface LayoutProps {
  pageTitle: string;
  description: string;
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  description,
  children,
}) => {
  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta property='og:title' content={pageTitle} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <title>{pageTitle}</title>

        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */}

        {/* Open Graph */}
        {/* <meta property="og:url" content={currentURL} key="ogurl" />
            <meta property="og:image" content={previewImage} key="ogimage" />
            <meta property="og:site_name" content={siteName} key="ogsitename" />
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" /> */}
      </Head>
      <Navbar />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
