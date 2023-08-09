import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, login } = useLogin();

  const handledata = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
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

        {!isPending && (
          <button type="submit" className={styles.btn}>
            Login
          </button>
        )}
        {isPending && <strong>로그인 진행중입니다!</strong>}
        {isPending && <strong>{error}</strong>}
      </fieldset>
    </form>
  );
}
