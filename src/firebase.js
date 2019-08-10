import firebase from 'firebase/app'
import 'firebase/firestore'


firebase.initializeApp({
    projectId: 'projectId',
    databaseURL: 'databaseUrl'
});
export const db = firebase.firestore()