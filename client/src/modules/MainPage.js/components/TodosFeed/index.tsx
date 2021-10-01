import React from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';
import { TodoData } from '../types';

const List = styled.ul`
  margin: 30px 0;
  padding: 0;
`;

interface ITodoFeed {
  todos: TodoData[];
  editTodo: (value: TodoData) => void;
  removeTodo: (todoId: number) => void;
}

const TodosFeed: React.FC<ITodoFeed> = ({
  todos, editTodo, removeTodo,
}) => {
  if (!todos.length) {
    return (
      <div>No todos</div>
    );
  }

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
};

export default TodosFeed;
