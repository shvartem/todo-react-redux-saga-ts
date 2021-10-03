import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import FormCreateTodo from './components/FormCreateTodo';
import TodosFeed from './components/TodosFeed';
import { actions } from '../../redux/slices';
import { StateInterface, useAppDispatch } from '../../redux/store';
import { TodoBody, TodoData } from '../../types';

const Container = styled.div`
  width: 50%;
  margin: 50px auto;
`;

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  function addTodo(value: TodoBody) {
    dispatch(actions.createTodoPending(value));
  }

  function removeTodo(todoId: number) {
    // dispatch(actions.deleteTodoPending({ todoId }));
  }

  function editTodo(value: TodoData) {
    // dispatch(actions.editTodoPending(todo));
  }

  const todos = useSelector((state: StateInterface) => state.todos.items);

  return (
    <Container>
      <FormCreateTodo submitHandler={addTodo} />
      <TodosFeed
        todos={[]}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </Container>
  );
};

export default MainPage;
