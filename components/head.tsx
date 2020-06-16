import Head from "next/head";

export const siteTitle = "The Chad Coders";

const Heads = () => (
  <Head>
    <title>{siteTitle}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
export default Heads;
