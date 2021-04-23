import React from 'react';
import Head from 'next/head';

import Header from './Header';
interface LayoutProps {
  pageTitle?: string;
  description: string;
  path?: string;
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  description,
  path = 'Barato!',
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
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content='@dhencios15' key='twhandle' />
        <title>
          {path} | {pageTitle}
        </title>

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
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
