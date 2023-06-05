import { useCallback, useMemo } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "***********",
  authDomain: "**********",
  projectId: "***********",
  storageBucket: "*********",
  messagingSenderId: "************",
  appId: "*******************",
  measurementId: "**********",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const useFirebase = () => {
  const CLICK = "click";
  const event = useCallback(
    (name = "", action = "") => logEvent(analytics, CLICK, { name, action }),
    []
  );
  return useMemo(
    () => ({
      event,
    }),
    [event]
  );
};
export default useFirebase;
