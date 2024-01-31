import React, { useRef, useState } from "react";
import Bg from "../utils/Bg";
import { checkvalidation } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [message, setMessage] = useState("");
  const handleIsSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkvalidation(email, password);
    setMessage(message);
    if (message) return;
    console.log(message);
    console.log(isSignIn);
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // setIsSignIn(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage, errorCode);
          console.log(errorMessage);
          console.log(errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage);
          console.log(errorMessage);
          console.log(errorCode);
        });
    }
  };

  return (
    <>
      <Bg />
      <form
        className="p-16 bg-black bg-opacity-60 absolute w-11/12 sm:w-10/12 md:w-8/12 top-0 left-0 right-0 mx-auto lg:w-4/12 mt-36 text-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            type="text"
            className="p-4 w-full bg-black bg-opacity-60 my-4"
            placeholder="User Name here"
            ref={name}
          />
        )}
        <input
          type="text"
          className="p-4 w-full bg-black bg-opacity-60 my-4"
          placeholder="Email here"
          ref={email}
        />
        <input
          type="password"
          className="p-4 w-full bg-black bg-opacity-60 my-4"
          placeholder="Password here"
          ref={password}
        />
        <h3>{message && message}</h3>
        <button className="p-4 bg-red-600 w-full my-4 rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-4 cursor-pointer" onClick={handleIsSignUp}>
          {!isSignIn
            ? "Already have Netflix account, Sign In"
            : "New to Netflix, Sign Up"}
        </p>
      </form>
    </>
  );
};

export default Login;
