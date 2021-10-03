/* eslint-disable arrow-parens */
import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
// import ModalForm from '../../../Modal';
import { TodoBody, TodoData } from '../../../../types';

const ListItem = styled.li`
  list-style: none;
`;

const TodoTitle = styled.p<ITodoTitle>`
  width: 80%;
  padding: 0;
  margin: 0 30px;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
`;

interface ITodoTitle {
  isDone: boolean;
}

interface ITodoItem {
  todo: TodoData;
  editTodo: (value: TodoData) => void;
  removeTodo: (todoId: number) => void;
}

const TodoItem: React.FC<ITodoItem> = ({
  todo, editTodo, removeTodo,
}) => {
  const formItems = [
    {
      name: 'body',
      label: 'Todo Title',
      initialValue: todo.body,
      rules: [
        {
          required: true,
          message: 'Please input smth',
        },
      ],
    },
  ];

  return (
    <ListItem>
      <div className="card">
        <div className="card-body d-flex justify-content-center align-items-center mx-0">
          <input
            className="form-check-input p-3"
            type="checkbox"
            checked={todo.completed}
            onChange={() => editTodo({ ...todo, completed: !todo.completed })}
          />
          <TodoTitle isDone={todo.completed}>
            {todo.body}
          </TodoTitle>
          {/* <ModalForm
            title="Edit"
            submitHandler={({ body }: TodoBody) => editTodo({ ...todo, body })}
            formItems={formItems}
          /> */}
          <Button
            type="link"
            onClick={() => removeTodo(todo.id)}
          >
            &times;
          </Button>
        </div>
      </div>
    </ListItem>
  );
};

export default TodoItem;
