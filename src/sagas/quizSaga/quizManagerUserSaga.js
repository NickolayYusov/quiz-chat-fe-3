import {all, call, delay, put, select, putResolve, takeEvery, fork, take, apply} from 'redux-saga/effects';

export default function* watchQuizUserSaga() {
    yield apply(console, console.log, ['watchQuizUserSaga'])
};

