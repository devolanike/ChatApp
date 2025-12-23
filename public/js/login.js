"use strict";
let allUsers = [];
if (localStorage.chatAppUsers) {
  const fetched = JSON.parse(localStorage.getItem("chatAppUsers"));
  allUsers = fetched;
} else {
  allUsers = [];
}
function login() {
  if (email.value.trim() === "" || password.value.trim() === "") {
    error.style.display = "block";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
    error2.style.display = "none";
  } else {
    error.style.display = "none";
    error2.style.display = "none";
    const allUsers = JSON.parse(localStorage.getItem("chatAppUsers")) || [];
    const userObj = {
      mail: document.getElementById("email").value.trim(),
      pass: document.getElementById("password").value.trim(),
    };
    console.log(userObj);
    const found = allUsers.find(
      (user) => user.mail === userObj.mail && user.pass === userObj.pass
    );
    if (found) {
      window.location.href = "../chat/index.html";
    } else {
      error2.style.display = "block";
      setTimeout(() => {
        error2.style.display = "none";
      }, 2000);
      password.value = "";
    }
  }
}
window.login = login;

function signUp() {
  window.location.href = "../signup/index.html";
}
window.signUp = signUp;

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBoLTaq9_j0nieiHDceCNAPXVfWX8axdh4",
  authDomain: "chatapp-c68a9.firebaseapp.com",
  projectId: "chatapp-c68a9",
  storageBucket: "chatapp-c68a9.firebasestorage.app",
  messagingSenderId: "477131799619",
  appId: "1:477131799619:web:d8a24758fe5a48951b28f6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const logIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      if (user) {
        setTimeout(() => {
          window.location.href = "../chat/index.html";
        }, 2000);
      } else {
        setTimeout(() => {
          window.location.href = "../signup/index.html";
        }, 2000);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });
};

const gitProvider = new GithubAuthProvider();
const gitLogIn = () => {
  signInWithPopup(auth, gitProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      if (user) {
        setTimeout(() => {
          window.location.href = "../chat/index.html";
        }, 2000);
      } else {
        setTimeout(() => {
          window.location.href = "../signup/index.html";
        }, 2000);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });
};
window.gitLogIn = gitLogIn;
window.logIn = logIn;
