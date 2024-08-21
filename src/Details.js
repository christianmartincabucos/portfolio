// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/2x2.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import nextjs from "./assets/techstack/nextjs.svg";
import laravel from "./assets/techstack/laravel.png";
import php from "./assets/techstack/php.png";
import vue from "./assets/techstack/vue.png";
import wordpress from "./assets/techstack/wordpress.png";
import pinia from "./assets/techstack/pinia.svg";
import nuxt from "./assets/techstack/nuxt.svg";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import mysql from "./assets/techstack/mysql.png";
import postresql from "./assets/techstack/postresql.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import PoolTowelMonitoring_1 from "./assets/projects/PoolTowelMonitoring_1.png";
import ManpowerManning_1 from "./assets/projects/ManpowerManning_1.PNG";
import PrinceCourtHotelsSuites_1 from "./assets/projects/PrinceCourtHotelsSuites_1.PNG";
import StarCruizesBackoffice_1 from "./assets/projects/StarCruizesBackoffice_1.PNG";
import REDHQ from "./assets/projects/REDHQ.jpg";
import NewReaderMedia_1 from "./assets/projects/NewReaderMedia_1.PNG";
import StandardElevatorSystem from "./assets/projects/StandardElevatorSystem.png";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Christian Martin Cabucos",
  tagline: "Full-stack Web Developer",
  img: profile,
  about: `I'm Christian Martin Cabucos, a passionate web developer who loves to build functional and aesthetically pleasing websites. With a strong foundation in various web technologies, I strive to create web solutions that not only meet client requirements but also provide an engaging user experience. My journey in web development started in 2019, and since then, I've been constantly learning and adapting to the ever-evolving web landscape.`,
};
// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/christian-martin-cabucos-1ba642155/",
  github: "https://github.com/christianmartincabucos",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/christianmartincabucos/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    role: "Full-Stack Web Developer",
    company: "Nagarro",
    startDate: "02/05/2022",
    endDate: "04/03/2024",
    city: "Cebu",
    country: "Philippines",
    type: 'Full-time',
    responsibilities: [
      "Produce fully functional programs writing clean, testable code using Laravel 8, Vuejs 3, TypeScript, Next.js, MySQL.",
      "Write clean and secure modular codes that have undergone strict testing and evaluation.",
      "Ensure HTML, CSS, and shared JavaScript is valid and consistent across applications.",
      "Setup and Deploy Project using Centos 7 in AWS EC2.",
      "Collaborate with the team and research “best-in-class” website practices to apply advanced design elements to company websites."
    ]
  },
  {
    role: "Full-Stack Web Developer",
    company: "REDHQ",
    startDate: "10/2021",
    endDate: "05/2022",
    city: "Sydney",
    country: "Australia",
    type: 'Full-time',
    responsibilities: [
      "Upgraded and maintain Laravel to the latest version.",
      "Developed and maintain web pages using HTML, CSS, and Twitter Bootstrap 4.",
      "Managed and maintain databases using MySQL.",
      "Used Git for version control.",
      "Enhanced user experience by utilizing JavaScript and common libraries like React and jQuery.",
      "Improved website design and functionality by applying front-end development skills.",
      "Ensured smooth operation by administering Linux servers."
    ]
  },
  {
    role: "Full-Stack Web Developer",
    company: "Clique Interface Inc.",
    startDate: "04/2020",
    endDate: "10/2021",
    city: "Cebu",
    country: "Philippines",
    type: 'Full-time',
    responsibilities: [
      "Develop and maintain web-based PHP and JavaScript applications.",
      "Collaborate with the team to build innovative applications.",
      "Ensure that HTML, CSS, and shared JavaScript are valid and consistent across applications.",
      "Prepare and maintain all applications utilizing standard development tools.",
      "Contribute to increasing existing data services API by utilizing backend data services.",
      "Lead the entire web application development life cycle from concept stage to delivery and postlaunch support.",
      "Communicate effectively about task progress, evaluations, suggestions, schedules, technical and process issues."
    ]
  },
  {
    role: "Application Developer",
    company: "Crown Regency Hotels & Resorts",
    startDate: "04/2019",
    endDate: "03/2020",
    city: "Cebu",
    country: "Philippines",
    type: 'Full-time',
    responsibilities: [
      "Create and implement the source code of new applications from scratch.",
      "Test and debug both front-end and back-end code",
      "Maintain and support existing websites while developing new interfaces and website structures"
    ]
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    role: "Bachelor of Science in Information Technology",
    company: "Asian College of Technology - International Educational Foundation",
    startDate: "07/2015",
    endDate: "03/2019",
    city: "Cebu",
    country: "Philippines",
    type: 'Graduate',
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  php: php,
  wordpress: wordpress,
  laravel: laravel,
  vue: vue,
  pinia: pinia,
  nuxt: nuxt,
  nextjs: nextjs,
  react: react,
  redux: redux,
  mysql: mysql,
  postresql: postresql,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Standard Elevator System",
    image: StandardElevatorSystem,
    description: `Standard Elevator Systems (SES) Established in 2013, is
dedicated in whole elevator package and the elevator modernization
market. As the orientation of a global company, its business spreads to
the areas like North America, South America, East Europe and South
Africa. Now, the company has established its offices in US, Brazil, India,
Poland and China to offer the local complete elevator and component
solution to customers directly.`,
    techstack: "AWS EC2, Centos, Laravel 8, Vue.js  3, API Integration, REST API, Php, Wordpress and Mysql.",
    previewLink: "https://china.standard-elevators.com/",
    githubLink: "",
  },
  {
    title: "REDHQ",
    image: REDHQ,
    description: `REDHQ is a leading provider of software, marketing & related
solutions to real estate industries`,
    techstack: "Laravel 8, Vue.js  3, API Integration, REST API, Php, and Mysql",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "New Reader Media",
    image: NewReaderMedia_1,
    description: `New Reader Media is a marketing and publicity firm for
creatives, artists, and independent authors`,
    techstack: "HTML 5, JavaScript, Vue.js 2, CSS, Bootstrap 4, Jquery, Axios, PHP, Laravel and MySQL.",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "New Reader Hub",
    image: projectImage6,
    description: `New Reader Hub is website where you can create account, post
moments, articles, games, and you can interact with users `,
    techstack: "HTML 5, JavaScript, Vue.js 2, Vuex, CSS, Bootstrap 4, Axios, PHP, Laravel and MySQL",
    previewLink: "",
    githubLink: "https://github.com/christianmartincabucos/NewReaderHub/",
  },
//   {
//     title: "New Reader Magazine",
//     image: projectImage6,
//     description: `New Reader Magazine is a quarterly arts, literature, and culture
// journal. Our purpose is to publish fearless literary works, groundbreaking
// visual art and conspicuous identities. We want to introduce the world to all
// the weird and wonderful people who are making things happen.`,
//     techstack: "HTML 5, JavaScript, Vuejs, Vuex, CSS, Bootstrap 4, Axios, PHP, Laravel and MySQL",
//     previewLink: "",
//     githubLink: "",
//   },
  {
    title: "Pool Towel Monitoring",
    image: PoolTowelMonitoring_1,
    description: `Towel Management System is sort of a vending machine
powered with a state of the art facility management software.`,
    techstack: "HTML, JavaScript, CSS, Bootstrap, Jquery, Ajax, PHP and MSSQL",
    previewLink: "",
    githubLink: "https://github.com/christianmartincabucos/newreadermedia_v2",
  },
  {
    title: "Manpower Manning",
    image: ManpowerManning_1,
    description: `Manning refers to the supplying of man power to a
particular department of the company depending up on the need of the
department.`,
    techstack: "HTML, JavaScript, CSS, Bootstrap, Jquery, Ajax, PHP and MSSQL.",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Prince Court Hotels & Suites",
    image: PrinceCourtHotelsSuites_1,
    description: `Hotel Management System is a type of properly management system that facilitates the management of hotel operations and functions; main operations such as front office, sales, planning, and accounting.t`,
    techstack: "HTML, JavaScript, CSS, Bootstrap, Jquery, Ajax, PHP and MSSQL.",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "StarCruizes Back office",
    image: StarCruizesBackoffice_1,
    description: `E-Commerce back-office processes include ERP and CRM software, inventory management, fulfillment processes, accounting and staff management.`,
    techstack: "HTML, JavaScript, CSS, Bootstrap, Jquery, Ajax, PHP and MSSQL.",
    previewLink: "",
    githubLink: "",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "christianmartincabucos@gmail.com",
  phone: "+63 961 4226 268",
};
