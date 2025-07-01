import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt_YhEaRlOZfZpDrXhRYsYu-bHz4dkdYw",
  authDomain: "entrega-final-coder-reac-6325c.firebaseapp.com",
  projectId: "entrega-final-coder-reac-6325c",
  storageBucket: "entrega-final-coder-reac-6325c.firebasestorage.app",
  messagingSenderId: "678051003834",
  appId: "1:678051003834:web:61a83411e1dcb521f53183",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

/*


Prueba error

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt_YhEaRlOZfZpDrXhRYsYu-bHz4dkdYw",
  authDomain: "entrega-final-coder-reac-6325c.firebaseapp.com",
  projectId: "entrega-final-coder-reac-6325c",
  storageBucket: "entrega-final-coder-reac-6325c.firebasestorage.app",
  messagingSenderId: "678051003834",
  appId: "1:678051003834:web:61a83411e1dcb521f53183",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  
*/
