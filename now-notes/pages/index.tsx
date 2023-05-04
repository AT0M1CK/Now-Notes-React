import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/Layout/MainLayout";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU8yB-a5js4Zat8npToeGtyqImD7MVyDE",
  authDomain: "react-now-notes.firebaseapp.com",
  databaseURL:
    "https://react-now-notes-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-now-notes",
  storageBucket: "react-now-notes.appspot.com",
  messagingSenderId: "835933542516",
  appId: "1:835933542516:web:b334af538a08257f5e1921",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <MainLayout />;
}
