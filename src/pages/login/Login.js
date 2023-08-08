import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handledata = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Login</legend>
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

        <button type="submit" className={styles.btn}>
          Login
        </button>
      </fieldset>
    </form>
  );
}
