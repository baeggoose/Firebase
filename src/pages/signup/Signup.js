import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayNmae, setDisplayNmae] = useState("");
  const { error, isPending, signup } = useSignup();

  const handledata = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    } else if (event.target.type === "text") {
      setDisplayNmae(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, displayNmae);
    signup(email, password, displayNmae);
  };

  return (
    <form className={styles.signup_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Signup</legend>
        <label htmlFor="myEmail">email : </label>
        <input
          type="email"
          id="myEmail"
          required
          value={email}
          onChange={handledata}
        />

        <label htmlFor="myPassword">password : </label>
        <input
          type="password"
          id="myPassword"
          required
          value={password}
          onChange={handledata}
        />

        <label htmlFor="myNickName">nickname : </label>
        <input
          type="text"
          id="myNickName"
          required
          value={displayNmae}
          onChange={handledata}
        />

        <button type="submit" className={styles.btn}>
          Signup
        </button>
      </fieldset>
    </form>
  );
}
