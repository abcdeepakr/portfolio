import Head from 'next/head'
import * as React from 'react';

import Layout from '../components/layout/layout';
export default function Home() {
  return (
    <>
      <Head>
        <title>Deepak Rawat</title>
        <meta name="description" content="I write blogs, take photos, create bugs"        
        />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=2, minimum-scale=0.5, width=device-width, height=device-height, target-densitydpi=device-dpi" />

        <link rel="icon" href="/profile.jpg" />
      </Head>
      <Layout />

    </>
  )
}
