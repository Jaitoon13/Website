export const projects = [
  // {
  //   title: 'A Cloud Native Project',
  //   description: "Coming Soon!",
  //   image: '/images/9.png',
  //   tags: ['Google Cloud Platform', 'C++'],
  //   source: '/#',
  //   visit: '/#',
  //   id: 9,
  // },
  {
    title: 'Student Inventory - Containerized',
    description: "This spring project demonstrates a 3-layer architecture for data handling, uses postgres for GET, POST, PUT, and DELETE operations, and is currently being deployed over a docker container using docker-compose.",
    image: '/images/8.png',
    tags: ['Spring', 'Maven', 'PostgreSQL', 'Docker-Compose'],
    source: 'https://github.com/pro1zero/Spring-JPA-PostgreSQL-Docker-Compose#readme',
    visit: 'https://github.com/pro1zero/Spring-JPA-PostgreSQL-Docker-Compose/tree/main/src/main',
    id: 8,
  },
  {
    title: 'Quick Sort Visualizer',
    description: "Currently a work in progress, this mini-project visualizes the quick sort algorithm on a fixed length of integer values. Use front and back values to observe the sorting steps in detail. Orange represents a pivot, red represents the current elements being compared, and green being sorted.",
    image: '/images/7.png',
    tags: ['Javascript', 'Yarn', 'React'],
    source: 'https://quicksortvisualizer.netlify.app/',
    visit: 'https://github.com/pro1zero/Visualizer',
    id: 7,
  },
  {
    title: 'HTTPC (with Docker)',
    description: "A basic c-URL like application made in a team of 2, 'HTTPC' - mimics the basic functionality to execute GET and POST requests. Supports page redirection and File i/o. Built in java, this project is also deployed over a Docker container.",
    image: '/images/6.png',
    tags: ['Java', 'Docker', 'Sockets'],
    source: 'https://github.com/pro1zero/COMP-6461/blob/main/README.md',
    visit: 'https://github.com/pro1zero/COMP-6461/tree/main/dockerHTTPC',
    id: 5,
  },
 
  {
    title: 'Jenish\'s Portfolio',
    description: "Essentially the webiste that you're currently exploring. This is my personal portfolio which is built using Next.js and hosted on the domain jenishsoni.com",
    image: '/images/1.png',
    tags: ['JavaScript', 'Next.js'],
    source: 'https://jenishsoni.com',
    visit: 'https://github.com/pro1zero/Personal-Portfolio/tree/main/src',
    id: 0,
  },
  {
    title: 'Lively - FillActive',
    description: "A chat application designed for FillActive (an NPO based in Quebec) which is built on top of chatEngine.io that supports features such as direct messaging, group chat, read recipients, and sharing media over IP.",
    image: '/images/2.png',
    tags: ['JavaScript', 'React', 'ChatEngine.io'],
    source: 'https://fillactive-chat-app.netlify.app/',
    visit: 'https://github.com/pro1zero/FillActive-Chat-App',
    id: 1,
  },
  {
    title: 'IntelligentSIDC',
    description:"Dynamic system which can sort, traverse, and output more than a million keys in less than 3 seconds. Uses an array of hashtable of linked-lists nodes for smaller thresholds. Transforms into an abstract data type made up of AVL Trees and Red-Black Trees if the threshold exceeds the size. ",
    image: '/images/3.png',
    tags: ['Java', 'Data-Structures', 'Object-Oriented'],
    source: 'https://github.com/pro1zero/IntelligentSIDC',
    visit: 'https://github.com/pro1zero/IntelligentSIDC',
    id: 2,
  },
  {
    title: 'JSON Parser',
    description: "JSON parser is responsible to parse raw data into IEEE, NJ, and ACN formats. Uses fail-safe string algorthims, mapping structures, and custom made exception classes for exception handling.",
    image: '/images/4.png',
    tags: ['Java', 'Algorithms', 'Object-Oriented'],
    source: 'https://github.com/pro1zero/BibCreator/blob/main/BibCreator.java',
    visit: 'https://github.com/pro1zero/BibCreator/blob/main/BibCreator.java',
    id: 3,
  },
];

export const TimeLineData = [
  { year: "June 2015", text: 'Started B.E in Information and Communication Technology.', },
  { year: "Late 2019", text: 'Graduated my UnderGrads - Started Master\'s in Computer Science.', },
  { year: "December 2021", text: 'Graduated my Master\'s program from Concordia University.', },
  { year: "Currently", text: 'am a Software Engineer at Getty Images', },
];