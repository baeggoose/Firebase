import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth } from "../firebase/config";

export const useSignup = () => {
  // 에러 정보를 저장합니다
  const [error, setError] = useState(null);
  // 현재 서버와 통신 상태를 저장합니다
  const [isPending, setIsPending] = useState(false);

  const signup = (email, password, displayNmae) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        if (!user) {
          throw new Error("회원가입에 실패했습니다.");
        }

        updateProfile(appAuth.currentUser, { displayNmae })
          .then((userCredential) => {
            setError(null);
            setIsPending(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };
  return { error, isPending, signup };
};
