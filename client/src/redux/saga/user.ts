import {
  takeEvery, call, put,
} from 'redux-saga/effects';
import { actions } from '../slices';
import { getData, postData } from '../tools';
import { AuthData } from '../../types';

interface IAuthAction {
  type: string;
  payload: AuthData
}

function* loginUser({ payload }: IAuthAction): Generator {
  try {
    const loggedUser = yield call(postData, '/api/login', payload);
    yield put(actions.loginUserFullfilled(loggedUser));
  } catch (e) {
    yield put(actions.loginUserRejected(e));
  }
}

function* logoutUser(): Generator {
  try {
    yield call(getData, '/api/logout');
    yield put(actions.logoutUserFullfilled());
  } catch (e) {
    yield put(actions.logoutUserRejected(e));
  }
}

function* registerUser({ payload }: IAuthAction): Generator {
  try {
    const loggedUser = yield call(postData, '/api/register', payload);
    yield put(actions.loginUserFullfilled(loggedUser));
  } catch (e) {
    yield put(actions.loginUserRejected(e));
  }
}

function* loginInitialUser(): Generator {
  try {
    const loggedUser = yield call(getData, '/api/me');
    yield put(actions.loginUserFullfilled(loggedUser));
  } catch (e) {
    yield put(actions.loginUserRejected(e));
  }
}

export default function* todosSaga() {
  yield takeEvery(`${actions.loginUserPending}`, loginUser);
  yield takeEvery(`${actions.logoutUserPending}`, logoutUser);
  yield takeEvery(`${actions.registerUserPending}`, registerUser);
  yield takeEvery(`${actions.getInitialUserPending}`, loginInitialUser);
}
