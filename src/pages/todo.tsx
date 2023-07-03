import Layout from "@/components/Template/layout";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { Todo } from "types/Todo";

/* import Script from 'next/script'; */

type TodoProps = {
  todo: Todo[];
};
const Todo = ({ todo }: TodoProps) => {
  return (
    <Layout>
      <h1>Lista de tarefas do {process.env.NEXT_PUBLIC_NOME}</h1>
      <ul>
        {todo?.map((item, index: number) => {
          return (
            <li key={index}>
              <Link scroll={false} href="/sobre/pedro">
                {item.title} - {item.completed.toString()}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" strategy='beforeInteractive' onLoad={() => {}}/>*/}
      {/* <Script id="codeLoadAlert" strategy='afterInteractive'>
            {`window.alert('carreguei')`}
           </Script> */}
    </Layout>
  );
};

export default Todo;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data: Todo[] = await res.json();

  return {
    props: {
      todo: data,
    },
  };
};
