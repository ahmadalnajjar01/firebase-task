import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "./firbase-Auth.js";

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector("#authForm");
const secretContent = document.querySelector("#secretContent");
const signInButton = document.querySelector("#signInButton");
const signUpButton = document.querySelector("#signUpButton");
const signOutButton = document.querySelector("#signOutButton");

secretContent.style.display = "none";

const userSignUp = async () => {
  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;

  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Your Account has been created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

const userSignIn = async () => {
  const signInEmail = userEmail.value;
  const signInPassword = userPassword.value;

  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("You've Signed In");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      alert("User Not Found");
    });
};

const checkAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      authForm.style.display = "none";
      secretContent.style.display = "block";
    } else {
      authForm.style.display = "block";
      secretContent.style.display = "none";
    }
  });
};

const userSignOut = async () => {
  await signOut(auth);
};

checkAuthState();

signUpButton.addEventListener("click", userSignUp);
signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);
