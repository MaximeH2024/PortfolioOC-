import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useLanguage } from "../../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./project-display.scss";
import openclassroomLogo from "../../assets/openclassroom_logo.webp";

function ProjectDisplay() {
  const [projects, setProjects] = useState([]);
  const { language } = useLanguage();
  const [showTechnicalSkills, setShowTechnicalSkills] = useState(false);
  const [showSoftSkills, setShowSoftSkills] = useState(false);

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
      {projects.map((project, index) => {     

        return (
          <div key={index} className="project-card">
            <div className="project-icons">
              <img
                src={project.type.fr === "formation" ? openclassroomLogo : null}
                alt="Type Logo"
                className="type-logo"
                style={{ display: project.type.fr === "formation" ? "inline-block" : "none" }}
              />
              {project.type.fr !== "formation" && (
                <FontAwesomeIcon icon={faCode} className="type-icon" />
              )}
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={`status-icon ${project.status.en === "Validated" ? "validated" : "not-validated"}`}
              />
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FontAwesomeIcon icon={faGithub} className="github-icon" />
                </a>
              )}
            </div>

            <h3>{project.name[language]}</h3>
            <p>{project.description[language]}</p>

            {/* Section des compétences techniques */}
            <div className="skills">
              <strong
                className="collapsible-label"
                onClick={() => setShowTechnicalSkills(!showTechnicalSkills)}
              >
                {technicalSkillsLabel} +
              </strong>
              <ul
                className={`collapsible-content ${
                  showTechnicalSkills ? "expanded" : "collapsed"
                }`}
              >
                {project.technical_skills[language].map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>

              {/* Section des compétences interpersonnelles */}
              <strong
                className="collapsible-label"
                onClick={() => setShowSoftSkills(!showSoftSkills)}
              >
                {softSkillsLabel} +
              </strong>
              <ul
                className={`collapsible-content ${
                  showSoftSkills ? "expanded" : "collapsed"
                }`}
              >
                {project.soft_skills[language].map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectDisplay;
