import Layout from "@/components/Template/layout";
import { GetStaticProps } from "next";
import Link from "next/link";
import React, { useState } from "react";

type SobreProps = {
  name: string;
};

const Sobre = ({ name }: SobreProps) => {
  const [counter, setCounter] = useState(0);
  const sumCounter = counter + 1;
  return (
    <Layout>
      <h1>Contador: {counter}</h1>
      <h2>Sobre</h2>
      <p>Meu nome é {name}</p>
      <ul>
        <li>
          <Link href="/sobre/pedro">Pedro</Link>
        </li>
        <li>
          <Link href="/sobre/joão">João</Link>
        </li>
      </ul>
      <button
        onClick={() => setCounter(sumCounter)}
        className="btn btn-primary"
      >
        Aumentar
      </button>
    </Layout>
  );
};

export default Sobre;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      name: process.env.NEXT_PUBLIC_NOME,
    },
  };
};
