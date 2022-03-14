import React from "react";
import { Courses, Main, Navbar } from "../components";
import Head from "next/head";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <link rel="shortcut icon" href="/assets/faviconV2.png" />
        <title>Online Courses - Learn Anything</title>
      </Head>
      <Navbar />
      <Main />
      <Courses />
    </div>
  );
};

export default Home;
