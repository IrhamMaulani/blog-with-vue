# blog

## Demo

[DEMO](https://learn-vue-db76a.firebaseapp.com/)

## What Is This?
This Is My Project After Learning Vue js, Vuetify, And Firebase tools (cloud Firestore, Firebase Hosting)

## Configure Firebase Config File


create firebase.js in src folder. And Copy This

```javascript
import firebase from 'firebase/app'
import 'firebase/firestore'


firebase.initializeApp({
    projectId: 'projectId',
    databaseURL: 'databaseURL'
});
export const db = firebase.firestore()
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
