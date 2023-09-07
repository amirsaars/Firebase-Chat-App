import google from "../assets/google.svg";
import { auth } from "../firebase";
import firebase from "firebase/app";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dialog}>
        <h2>Welcome to Botogram!</h2>
        <div
          className={styles.button}
          onClick={() =>
            auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
          }
        >
          <img src={google} alt="google" /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
