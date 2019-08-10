import firebase from 'firebase/app'
import 'firebase/firestore'


firebase.initializeApp({
    projectId: 'projectID',
    databaseURL: 'databaseURL'
});
export const db = firebase.firestore()