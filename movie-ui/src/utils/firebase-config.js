import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWVdhVrzkvvBw6--PanPcTbuLqsA0p8E0",
  authDomain: "movie-bceeb.firebaseapp.com",
  projectId: "movie-bceeb",
  storageBucket: "movie-bceeb.appspot.com",
  messagingSenderId: "696661529757",
  appId: "1:696661529757:web:612518d158b25ae95bb074",
  measurementId: "G-TTR4BN7BWH"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);