import firebase from 'firebase/app'
import 'firebase/firestore'


firebase.initializeApp({
    projectId: 'learn-vue-db76a',
    databaseURL: 'https://learn-vue-db76a.firebaseio.com/'
});
export const db = firebase.firestore()