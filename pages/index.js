import Head from "next/head";
import Layout from "../components/layout";

function Home() {
  return (
    <>
      <Head>
        <title>Great Reading!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <h1>Great Reading</h1>
      </Layout>
    </>
  );
}

export default Home;
