import Layout from "@/components/Template/layout";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { Todo } from "types/Todo";

const TodoCSR = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data: Todo[] = await res.json();

    setTodoList(data);
    setLoading(false);
  };
  return (
    <Layout>
      <h1>Lista de tarefas</h1>
      {loading && <h1>Carregando ...</h1>}
      <ul>
        {todoList?.map((item, index: number) => {
          return (
            <li key={index}>
              <a href="#">
                {item.title} - {item.completed.toString()}
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default TodoCSR;
