import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBzHSeo_qz7ZwqNladTRccp3qUyNOqakBU",
    authDomain: "expensify-eaa62.firebaseapp.com",
    databaseURL: "https://expensify-eaa62-default-rtdb.firebaseio.com",
    projectId: "expensify-eaa62",
    storageBucket: "expensify-eaa62.appspot.com",
    messagingSenderId: "775492012503",
    appId: "1:775492012503:web:217d2cc80156f891d2a392"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = app.database()

// adding expenses
database.ref("expenses")
    .on("value", (snapshot) => {
        const expenses = []
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })

        console.log(expenses)
    })