import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import projects from "../data/projects.json";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadProjects() {
  const projectCollection = collection(db, "projects");
  for (const project of projects) {
    await addDoc(projectCollection, project);
  }
  console.log("Projects uploaded successfully!");
}

uploadProjects().catch(console.error);
