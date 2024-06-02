import React, { useEffect, useCallback, useRef} from 'react';
import './Realisations.css';
import { useInView } from 'react-intersection-observer';
import CreativeWebsite from '../img-portfolio/creative-website.png';
import FigmaApp from '../img-portfolio/figma-app.png';
import OldPortfolio from '../img-portfolio/old-portfolio.png';
import Skin from '../img-portfolio/skintrackmania.jpg';
import Game from '../img-portfolio/screenRetroWave.jpg';
import Tmchampions from '../img-portfolio/tmchampions.png';
import Geek from '../img-portfolio/geeknomad.png';
import Gallery from '../img-portfolio/gallery.png';

const Project = ({ project }) => {
    const { ref: projectRef, inView: projectInView } = useInView({
      threshold: 0.5,
    });
  
    return (
        <div
          key={project.id}
          className={`project project-${((project.id - 1) % 3) + 1} fade-in ${
            projectInView ? 'visible' : ''
          }`}
          ref={projectRef}
        >
          <img src={project.imgSrc} alt={`Projet ${project.id}`} />
          <p className="project-title">{project.title}</p>
          <p className="project-text">{project.text}</p>
          <p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="link-project"
            >
              Voir le projet
            </a>
          </p>
        </div>
      );
    };

const Realisations = () => {
  const projects = [
    { id: 1, imgSrc:Gallery, title:"Galerie d'art (wip) - ReactJs", text: "Site web d'une galerie d'art (wip)", link: "https://gallery.buntproduction.online/" },
    { id: 2, imgSrc:CreativeWebsite, title:"Creative Website (wip) - HTML/CSS/JS", text: "Création d'un site web créatif (wip seulement sur pc pour l'instant)", link: "https://wip.buntproduction.online/" },
    { id: 3, imgSrc:FigmaApp, title:"Design d'application - Figma", text: "Design de l'app pour l'entreprise Pink Mobility", link: "/static/media/figma-app.e11cdead5c9f2df8fcd5.png" },
    { id: 4, imgSrc:OldPortfolio, title:"Ancien portfolio - HTML/CSS/JS",text: "Mon ancien portfolio qui me présentait au travers d'un moteur de recherche", link: "https://buntproduction.github.io/" },
    { id: 5, imgSrc:Skin, title:"Skin Trackmania - Adobe Substance Painter",text: "Skins réalisés pour le jeu Trackmania", link: "/static/media/skintrackmania.71aafd56602d9ab348fe.jpg" },
    { id: 6, imgSrc:Game, title:"Jeu mobile Android - C#",text: "Jeu vidéo sur mobile", link: "https://github.com/BuntProduction/RetroWaveEndlessRunner" },
    { id: 7, imgSrc:Tmchampions, title:"Site web de classement - ReactJs",text: "Site récupérant des classements via des API en rapport avec Trackmania (wip)", link: "https://tm-champions.com/" },
    { id: 8, imgSrc:Geek, title:"Wordpress d'actualité",text: "Site web wordpress d'acualité que j'alimentais l'année dernière", link: "https://geeknomad.fr/#/" },
  ];

  const projectsRef = useRef(projects);


  const handleScroll = useCallback(() => {
    projectsRef.current.forEach((project) => {
      const projectElement = document.querySelector(
        `.project[data-project-id="${project.id}"]`
      );
      if (projectElement) {
        const projectBounds = projectElement.getBoundingClientRect();
        const isVisible =
          projectBounds.top >= 0 &&
          projectBounds.left >= 0 &&
          projectBounds.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          projectBounds.right <=
            (window.innerWidth || document.documentElement.clientWidth);
        if (isVisible) {
          projectElement.classList.add("visible");
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  


  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Réalisations</h2>
      <h3 className="portfolio-text">
        Le développement web étant une passion ces projets ont été réalisé soit
        sur mon temps libre soit pour le travail
      </h3>
      <hr className="portfolio-underline" />
      <div className="portfolio">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Realisations;
