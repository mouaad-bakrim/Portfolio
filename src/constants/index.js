import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  sql,
  laravel,
  symfony,
  bootstrap,
  php,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  amdd,
  word,
  swidgi,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },{
    name: "php",
    icon: php,
  },{
    name: "laravel",
    icon: laravel,
  },{
    name: "symfony",
    icon: symfony,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  }, {
    name: "bootstrap",
    icon: bootstrap,
  },

  {
    name: "git",
    icon: git,
  },{
    name: "sql",
    icon: sql,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack | stage ",
    company_name: "world wide progress",
    icon: word,
    iconBg: "#383E56",
    date: "aout 2023 - nouvembre 2023",
    points: [
      "Creation d'une application de gestion des ressources humaines.",
      "les technologe: Laravel, PHP, Bootstrap, Fullcalendar.js",

    ],
  },
  {
    title: "Stage",
    company_name: "AMDD",
    icon: amdd,
    iconBg: "#E6DEDD",
    date: "aout 2023 - septembre 2023",
    points: [
        "Real-time chat application.",
      "les technologe: Laravel, PHP, websocket, laravel echo, jquery ",

    ],
  },
  {
    title: "Web Developer | Stage PFE",
    company_name: "SWEDGI",
    icon: swidgi,
    iconBg: "#383E56",
    date: "Avril 2023 - Juin 2023",
    points: [
"Creation d'un application qui permet la gestion d'un cabinet comptabilité",
"les technologe: Symfony, PHP, Docker,webpack ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Taxe sujour",
    description:
      "Une application web de gestion des taxes de séjour permet de gérer facilement et efficacement la collecte, le suivi et la déclaration des taxes de séjour pour les établissements d'hébergement..",
    tags: [
      {
        name: "spring boot",
        color: "blue-text-gradient",
      },
      {
        name: "angular",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mouaad-bakrim/Projet-Taxe-Sejour",
  },
  {
    name: "cabinet comptable",
    description:
      "L'application web propose une solution intégrée de gestion pour les cabinets comptables, simplifiant la tenue des dossiers, la gestion des clients, la saisie comptable, la génération de rapports financiers et la collaboration en temps réel..",
    tags: [
      {
        name: "Symfony",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },

    ],
    image: jobit,
    source_code_link: "https://github.com/mouaad-bakrim/projet-swedgi-sir-pfe",
  },
  {
    name: "GRH",
    description:
      "Une application web complète pour la gestion des ressources humaines, simplifiant les processus de recrutement, de suivi des performances, de gestion des congés et de génération de rapports.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },

    ],
    image: tripguide,
    source_code_link: "https://github.com/mouaad-bakrim/IRH",
  },
];

export { services, technologies, experiences, testimonials, projects };
