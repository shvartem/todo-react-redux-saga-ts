import {
  takeEvery, call, put,
} from 'redux-saga/effects';
import { actions } from '../slices';
import {
  deleteData, getData, postData, editData,
} from '../tools';

function* getAllTodos() {
  try {
    const allTodos = yield call(getData, '/api/todos');
    yield put(actions.getAllTodosFullfilled(allTodos));
  } catch (e) {
    yield put(actions.getAllTodosRejected(e));
  }
}

function* createTodo({ payload }) {
  try {
    const newTodo = yield call(postData, '/api/todos', payload);
    yield put(actions.createTodoFullfilled(newTodo));
  } catch (e) {
    yield put(actions.createTodoRejected(e));
  }
}

function* deleteTodo({ payload }) {
  try {
    yield call(deleteData, '/api/todos/', payload.todoId);
    yield put(actions.deleteTodoFullfilled(payload.todoId));
  } catch (e) {
    yield put(actions.deleteTodoRejected(e));
  }
}

function* editTodo({ payload }) {
  try {
    yield call(editData, '/api/todos/', payload);
    yield put(actions.editTodoFullfilled(payload));
  } catch (e) {
    yield put(actions.editTodoRejected(e));
  }
}

export default function* todosSaga() {
  yield takeEvery(`${actions.getAllTodosPending}`, getAllTodos);
  yield takeEvery(`${actions.createTodoPending}`, createTodo);
  yield takeEvery(`${actions.deleteTodoPending}`, deleteTodo);
  yield takeEvery(`${actions.editTodoPending}`, editTodo);
}