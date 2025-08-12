// services/auth.ts
import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  AuthError,
} from "firebase/auth";
import { useAuthStore } from "@/core/stores/authStore";
export const emailSignIn = async (email: string, password: string) => {
  const { setError, setUser } = useAuthStore.getState();

  try {
    setError(null);
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(userCredential.user);
    return userCredential.user;
  } catch (error) {
    setError(error as AuthError);
    throw error;
  }
};

export const emailSignUp = async (email: string, password: string) => {
  const { setError, setUser } = useAuthStore.getState();

  try {
    setError(null);
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(userCredential.user);

    return userCredential.user;
  } catch (error) {
    setError(error as AuthError);
    throw error;
  }
};

export const googleSignIn = async () => {
  const { setError, setUser } = useAuthStore.getState();
  const provider = new GoogleAuthProvider();

  try {
    setError(null);
    const userCredential: UserCredential = await signInWithPopup(
      auth,
      provider
    );
    setUser(userCredential.user);
    return userCredential.user;
  } catch (error) {
    setError(error as AuthError);
    throw error;
  }
};

export const logOut = async () => {
  const { setError } = useAuthStore.getState();

  try {
    setError(null);
    await signOut(auth);
  } catch (error) {
    setError(error as AuthError);
    throw error;
  }
};
