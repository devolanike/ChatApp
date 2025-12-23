"use strict";
let allUsers = [];
if (localStorage.chatAppUsers) {
  const fetched = JSON.parse(localStorage.getItem("chatAppUsers"));
  allUsers = fetched;
} else {
  allUsers = [];
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBoLTaq9_j0nieiHDceCNAPXVfWX8axdh4",
  authDomain: "chatapp-c68a9.firebaseapp.com",
  databaseURL: "https://chatapp-c68a9-default-rtdb.firebaseio.com",
  projectId: "chatapp-c68a9",
  storageBucket: "chatapp-c68a9.firebasestorage.app",
  messagingSenderId: "477131799619",
  appId: "1:477131799619:web:d8a24758fe5a48951b28f6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  const allUsers = JSON.parse(localStorage.getItem("chatAppUsers")) || [];
  if (user) {
    console.log(user);
    displayProfile.innerHTML += `
          <h3 class='fs-6'>Name: ${user.displayName}</h3>
          <p class='fs-6 text-light'>Username: ${user.user_name}</p>
          <h3 class='fs-6'>Email: ${user.email}</h3>
          <img src="${user.photoURL}" alt="DP" width='60%' style='border-radius: 100%'>`;
  } //else {
  //   // User is signed out
  //   setTimeout(() => {
  //     window.location.href = "../SignUp/index.html";
  //   }, 1000);
  // }
});

const signOuts = () => {
  signOut(auth)
    .then(() => {
      console.log("User is signed out");
      setTimeout(() => {
        window.location.href = "../login/index.html";
      }, 1000);
    })
    .catch((error) => {
      console.log("Error signing out:", error);
    });
};
window.signOuts = signOuts;
