import {ReactElement} from "react";
import Head from 'next/head'
import Header from "../components/Header";

const Index = (): ReactElement => <>
    <Head>
      <title>Bartosz Polnik | Fullstack Developer</title>
    </Head>
    <Header />
    <p>Hello world!</p>
</>

export default Index;
