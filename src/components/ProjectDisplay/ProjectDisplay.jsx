import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useLanguage } from "../../context/LanguageContext";
import "./project-display.scss";

function ProjectDisplay() {
  const [projects, setProjects] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchProjects = async () => {
      const projectSnapshot = await getDocs(collection(db, "projects"));
      const projectList = projectSnapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => a.project_number - b.project_number);
      setProjects(projectList);
    };
    fetchProjects();
  }, []);


  const technicalSkillsLabel = language === "fr" ? "Compétences techniques" : "Technical Skills";
  const softSkillsLabel = language === "fr" ? "Compétences interpersonnelles" : "Soft Skills";

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name[language]}</h3>
          <p>{project.description[language]}</p>
          <div className="skills">
            <strong>{technicalSkillsLabel} :</strong>
            <ul>
              {project.technical_skills[language].map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
            <strong>{softSkillsLabel} :</strong>
            <ul>
              {project.soft_skills[language].map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectDisplay;
