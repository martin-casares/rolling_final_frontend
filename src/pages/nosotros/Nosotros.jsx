//import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./styleNosotros.css";



const data = [
{
    id: 1,
    name: "Alejandro Bardin",
    linkedin: "",
    github: "https://github.com/AlejandroBardin",
    instagram: "https://www.instagram.com/alejandro.bardin/",
    image: "public/img/nosotros/alebardin.jpeg",
},


{
    id: 2,
    name: "Francisco Sanchez",
    linkedin: "",
    github: "",
    instagram: "https://www.instagram.com/fran_sanchez.96/",
    image: "public/img/nosotros/fran.png",
},
{
    id: 3,
    name: "Cristian Diez Del Valle",
    linkedin: "https://www.linkedin.com/in/cristian-diez-del-valle-569376271/",
    github: "https://github.com/CristianDiezDelValle",
    instagram: "https://www.instagram.com/cristiandiezdelvalle/",
    image: "public/img/nosotros/cris.jpeg",
},


];


const QuienesSomos = () => {
    return (
    <div className="container-QS">
        <h1 className="title-QS">Quiénes Somos</h1>
        <div className="cards-QS">
            {data.map((person) => (
            <div key={person.id} className="card-QS">
                <img className="image-QS" src={person.image} alt={person.name} />
                <h2>{person.name}</h2>
                <div className="links-QS">
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon-QS" icon={faLinkedin} />
                    </a>
                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon-QS" icon={faGithub} />
                    </a>
                    <a href={person.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon-QS" icon={faInstagram} />
                    </a>
                </div>
            </div>))}
        </div>
    </div>
);
};

export default QuienesSomos;