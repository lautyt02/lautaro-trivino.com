import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB0kAL4NhqVcUUtpnEGwuOJSabFN5p6iaU",
  authDomain: "pagina-personal-e2b54.firebaseapp.com",
  projectId: "pagina-personal-e2b54",
  storageBucket: "pagina-personal-e2b54.firebasestorage.app",
  messagingSenderId: "213995395557",
  appId: "1:213995395557:web:a8de20ac2e3606848df70c"
};

// Initialize Firebase
const APP = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
