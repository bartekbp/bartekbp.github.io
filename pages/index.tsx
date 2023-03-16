import React, { ReactElement } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

const Index = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Bartosz Polnik | Fullstack Developer</title>
      </Head>
      <Header />
      <Main />
    </>
  );
};

export default Index;
