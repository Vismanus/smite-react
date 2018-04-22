import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { loginFailure, loginSuccess } from './actions'
import * as types from './actionTypes'

const myFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDth8JOFb6Q0kiFqpCXhYYhaX1NzG_Iafw',
  authDomain: 'smite-react.firebaseapp.com',
  databaseURL: 'https://smite-react.firebaseio.com',
  projectId: 'smite-react',
  storageBucket: 'smite-react.appspot.com',
  messagingSenderId: '66526084596'
})

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)

const authProvider = new firebase.auth.GoogleAuthProvider()

function* loginSaga() {
  console.log('entered loginSaga')
  try {
    const data = yield call(
      reduxSagaFirebase.auth.signInWithPopup,
      authProvider
    )
    yield put(loginSuccess(data))
  } catch (error) {
    yield put(loginFailure(error))
  }
}

export default function* rootSaga() {
  yield all([takeLatest(types.LOGIN_REQUEST, loginSaga)])
}
