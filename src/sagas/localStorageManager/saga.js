import {all, apply, call, putResolve, select, takeEvery} from 'redux-saga/effects';

export default function* rootLocalStorageSaga() {
    yield apply(console, console.log, ['rootLocalStorageSaga'])
};
