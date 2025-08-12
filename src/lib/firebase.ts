import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyeRvY1p0BcHg10Lkpdhrm695eLojbOe4",
  authDomain: "ayadty-d33f9.firebaseapp.com",
  projectId: "ayadty-d33f9",
  storageBucket: "ayadty-d33f9.firebasestorage.app",
  messagingSenderId: "1087129759041",
  appId: "1:1087129759041:web:40806132b0428cad1005c0",
  measurementId: "G-NYHL0EKT8R",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth: Auth = getAuth(app);
export default app;
