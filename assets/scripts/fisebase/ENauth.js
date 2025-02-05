import { app, ref, get, set, db } from "./config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

function showMsg(msg) {
  const msgElement = document.getElementById("msg");
  msgElement.innerHTML = msg;
  msgElement.style.visibility = "visible";
  setTimeout(() => {
    msgElement.style.visibility = "hidden";
    msgElement.innerHTML = "";
  }, 2000);
}

const createB = document.getElementById("create"),
  loginB = document.getElementById("login");
createB.addEventListener("click", () => {
  const email = document.getElementById("createEmail").value;
  const password = document.getElementById("createPassword").value;
  const name = document.getElementById("createName").value;

  const auth = getAuth(app);

  if (!email || !password) {
    showMsg("All fields are compulsory.");
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        createThen(name, email, db, userCredentials.user.uid, password);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/email-already-in-use") {
          showMsg("Email already registered");
        } else if (errorCode == "auth/weak-password") {
          showMsg("Very weak password");
        } else if (errorCode == "auth/invalid-email") {
          showMsg("Invalid email adress");
        } else {
          showMsg("Couldn't register");
          console.error("Error creating account: " + error.code);
        }
      });
  }
});

function createThen(name, email, db, id, password) {
  const docRef = ref(db, "users/" + id);
  set(docRef, {
    name: name,
    email: email,
    password: password,
  })
    .then(() => {
      setTimeout(
        loginThen(
          db,
          id,
          document.getElementById("sucess"),
          document.getElementById("loginContainer"),
          document.getElementById("userName"),
          document.getElementById("changeForm"),
          document.getElementById("createContainer")
        ),
        500
      );
    })
    .catch((err) => {
      console.error("Error writing document: ", err);
    });
}

loginB.addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value,
    password = document.getElementById("loginPassword").value,
    sucess = document.getElementById("sucess"),
    loginCont = document.getElementById("loginContainer"),
    createCont = document.getElementById("createContainer"),
    userNameSlot = document.getElementById("userName"),
    change = document.getElementById("changeForm");
  if (!email || !password) {
    showMsg("All fields are compulsory");
  } else {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        loginThen(
          db,
          userCredentials.user.uid,
          sucess,
          loginCont,
          userNameSlot,
          change,
          createCont
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/invalid-email") {
          showMsg("Invalid email address");
        } else if (errorCode == "auth/invalid-credential") {
          showMsg("Invalid credentials");
        } else {
          showMsg("Unable to log in");
          console.error("Error signing in:", error.code);
        }
      });
  }
});

function loginThen(db, id, sucess, login, slot, change, create) {
  const docRef = ref(db, "users/" + id + "/name");
  get(docRef)
    .then((doc) => {
      if (doc.exists()) {
        const name = doc.val();
        localStorage.setItem("name", name);
        localStorage.setItem("isLogged", true);

        sucess.style.display = "flex";
        login.style.display = "none";
        change.style.display = "none";
        slot.innerHTML = name;
        create.style.display = "none";
      } else {
        showMsg("User not found");
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });
}

setInterval(()=> {
  if (localStorage.getItem("isLogged")){
    const name = localStorage.getItem("name");
    document.getElementById("userName").innerHTML = name;
    document.getElementById("sucess").style.display = "flex";
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("changeForm").innerHTML = "Would you like to leave?"; //aqui
    document.getElementById("createContainer").style.display = "none";
  }
}, 1500)
