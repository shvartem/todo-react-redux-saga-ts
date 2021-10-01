import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import FormCreateTodo from './components/FormCreateTodo';
import TodosFeed from './components/TodosFeed';
import { actions } from '../../redux/slices';
import { TodoBody, TodoData } from './components/types';

const Container = styled.div`
  width: 50%;
  margin: 50px auto;
`;

const MainPage = () => {
  const dispatch = useDispatch();

  function addTodo(value: TodoBody) {
    // dispatch(actions.createTodoPending(value));
  }

  function removeTodo(todoId: number) {
    // dispatch(actions.deleteTodoPending({ todoId }));
  }

  function editTodo(value: TodoData) {
    // dispatch(actions.editTodoPending(todo));
  }

  // const todos = useSelector((state) => state.todos.items);

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
