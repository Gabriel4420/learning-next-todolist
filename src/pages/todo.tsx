import { GetServerSideProps } from 'next';
import React from 'react';
import { Todo } from 'types/Todo';

type TodoProps = {
    todo: Todo[]
}
const Todo = ({ todo }: TodoProps) => {
    return (<div>
        <h1>Lista de tarefas</h1>
        <ul>
            {todo?.map((item, index: number) => {
                return (<li key={index}>
                    <a href="#">{item.title} - {item.completed.toString()}</a>
                </li>)
            })}
        </ul>
    </div>);
}

export default Todo;

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');

    const data: Todo[] = await res.json();

    return {
        props: {
            todo:data
        }
    }
}