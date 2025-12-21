"use strict";

let allUsers = [];
if (localStorage.chatAppUsers) {
  const fetched = JSON.parse(localStorage.getItem("chatAppUsers"));
  allUsers = fetched;
} else {
  allUsers = [];
}

const mail = () => {
  if (exampleInputEmail1.value.trim() === "") {
    error.style.display = "block";
    setTimeout(() => {
      error.style.display = "none";
    }, 3000);
  } else {
    const userObj = {
      user_name: username.value,
      mail: document.getElementById("exampleInputEmail1").value,
      pass: document.getElementById("exampleInputPassword1").value,
    };
    let regexString = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const confirmEmail = regexString.test(userObj.mail);
    console.log(confirmEmail);
    if (confirmEmail) {
      const found = allUsers.find((user) => user.mail === userObj.mail);
      if (found) {
        mailExist.style.display = "block";
        login.style.display = "block";
        setTimeout(() => {
          mailExist.style.display = "none";
        }, 4000);
        setTimeout(() => {
          login.style.display = "none";
        }, 4000);
        exampleInputEmail1.value = "";
      } else {
        document.getElementById("test-l-1").style.display = "none";
        userNamePane.style.display = "block";
        userNameBg.style.backgroundColor = "#ec6e22";
        stepper1trigger1.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
      }
    } else {
      error2.style.display = "block";
      setTimeout(() => {
        error2.style.display = "none";
      }, 2000);
    }
  }
};
window.mail = mail;
const userName = () => {
  if (username.value.trim() === "") {
    error.style.display = "block";
    setTimeout(() => {
      error.style.display = "none";
    }, 3000);
  } else {
    document.getElementById("test-l-1").style.display = "none";
    document.getElementById("test-l-2").style.display = "block";
    userNamePane.style.display = "none";
    stepper1trigger2.style.backgroundColor = "#ec6e22";
    stepper1trigger1.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
    userNameBg.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
  }
};
window.userName = userName;
const password = () => {
  if (
    exampleInputPassword1.value.trim() === "" ||
    exampleInputPassword2.value.trim() === ""
  ) {
    error.style.display = "block";
    setTimeout(() => {
      error.style.display = "none";
    }, 3000);
  } else if (
    exampleInputPassword1.value.trim() !== exampleInputPassword2.value.trim()
  ) {
    error5.style.display = "block";
    setTimeout(() => {
      error5.style.display = "none";
    }, 2000);
  } else {
    let regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    const confirmPassword = regexPassword.test(
      document.getElementById("exampleInputPassword1").value &&
        document.getElementById("exampleInputPassword2").value
    );
    if (confirmPassword) {
      document.getElementById("test-l-1").style.display = "none";
      document.getElementById("test-l-2").style.display = "none";
      userNamePane.style.display = "none";
      document.getElementById("test-l-3").style.display = "block";
      usersEmail.innerHTML = `${exampleInputEmail1.value}`;
      usersName.innerHTML = `${username.value}`;
      usersPassword.innerHTML = `${exampleInputPassword1.value}`;
      stepper1trigger2.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
      stepper1trigger1.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
      userNameBg.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
      stepper1trigger3.style.backgroundColor = "#ec6e22";
    } else {
      error3.style.display = "block";
      document.querySelectorAll(".error34").forEach((error34) => {
        setTimeout(() => {
          error3.style.display = "none";
        }, 3000);
      });
    }
  }
};
window.password = password;
const loginInstead = () => {
  window.location.href = "../LoginPage/index.html";
};
window.loginInstead = loginInstead;

const previous1 = () => {
  document.querySelectorAll(".step-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const action = e.target.dataset.step;
      if (action === "prev1") {
        document.getElementById("test-l-2").style.display = "block";
        document.getElementById("userNamePane").style.display = "none";
        document.getElementById("test-l-1").style.display = "none";
        document.getElementById("test-l-3").style.display = "none";
        stepper1trigger2.style.backgroundColor = "#ec6e22";
        stepper1trigger1.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        stepper1trigger3.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        userNameBg.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
      } else if (action === "prev2") {
        document.getElementById("userNamePane").style.display = "block";
        document.getElementById("test-l-2").style.display = "none";
        document.getElementById("test-l-1").style.display = "none";
        document.getElementById("test-l-3").style.display = "none";
        stepper1trigger2.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        stepper1trigger1.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        stepper1trigger3.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        userNameBg.style.backgroundColor = "#ec6e22";
      } else if (action === "prev3") {
        document.getElementById("test-l-1").style.display = "block";
        document.getElementById("test-l-2").style.display = "none";
        document.getElementById("userNamePane").style.display = "none";
        document.getElementById("test-l-3").style.display = "none";
        userNameBg.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        stepper1trigger1.style.backgroundColor = "#ec6e22";
        stepper1trigger3.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
      }
    });
  });
};
window.previous1 = previous1;
const signUp = () => {
  const userObj = {
    user_name: username.value,
    mail: document.getElementById("exampleInputEmail1").value,
    pass: document.getElementById("exampleInputPassword1").value,
  };
  allUsers.push(userObj);
  localStorage.setItem("chatAppUsers", JSON.stringify(allUsers));
  window.location.href = "../LoginPage/index.html";

  username.value = "";
  email.value = "";
  password.value = "";
};
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

const signIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      if (user) {
        setTimeout(() => {
          window.location.href = "../ChatInterface/index.html";
        }, 2000);
      } else {
        setTimeout(() => {
          window.location.href = "../SignUp/index.html";
        }, 2000);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });
};

const gitProvider = new GithubAuthProvider();
const gitSignIn = () => {
  signInWithPopup(auth, gitProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      if (user) {
        setTimeout(() => {
          window.location.href = "../ChatInterface/index.html";
        }, 2000);
      } else {
        setTimeout(() => {
          window.location.href = "../SignUp/index.html";
        }, 2000);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });
};
window.gitSignIn = gitSignIn;
window.signIn = signIn;
