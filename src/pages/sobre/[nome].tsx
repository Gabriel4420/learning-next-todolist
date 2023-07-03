import Layout from "@/components/Template/layout";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";

const Nome: React.FC = () => {
  const router = useRouter();
  const { nome } = router.query as ParsedUrlQuery;

  return <h1 style={{ fontSize: "60px" }}>Sobre {nome}</h1>;
};

export default Nome;
