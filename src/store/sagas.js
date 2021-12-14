import { all } from 'redux-saga/effects';


import LayoutSaga from './user/saga';


export default function* rootSaga() {
    yield all([
       
        LayoutSaga()
    ])
} 