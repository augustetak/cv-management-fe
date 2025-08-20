export interface Contact {
  name: string;
  email: string;
  phone: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  context: string;
  actions: string[];
  environment: string[];
}

export interface Education {
  year: string;
  degree: string;
  institution: string;
}

export interface Language {
  lang: string;
  level: string;
}

export interface CVData {
  name: string;
  title: string;
  contact: Contact;
  intro: string;
  skills: SkillCategory[];
  experiences: Experience[];
  education: Education[];
  languages: Language[];
}

export const cvData: CVData = {
  name: "AUGUSTIN TANKAM",
  title: "Full Stack Developer, Java / SpringBoot / Angular / ReactJS",
  contact: {
    name: "Laurie BARBOSA",
    email: "laurie.barbosa@davidson.eu",
    phone: "+352661871212"
  },
  intro: "Fullstack Developer, I work for Davidson Luxembourg, on assignment for PWC. Quality- and solutions-oriented, with a strong team spirit, I help our customers to overcome their challenges and problems. Passionate about my job, consultancy allows me to evolve in different and complex environments, which enables me to gain diverse experience.",
  skills: [
    { category: "Languages / Frameworks", skills: ["Java 11", "Spring (Core, Boot, JPA, MVC, Security, Cloud, Data)", "Hibernate", "Rest", "TypeScript / Bootstrap", "JMS", "Lombok", "Angular 8 / Angular Material", "HTML, CSS, JavaScript, TypeScript", "ActiveMQ", "reactJS"] },
    { category: "Databases", skills: ["SQL/ PL SQL", "PostgreSQL", "MySQL", "CouchBase", "Oracle", "MongoDB", "SQL Server"] },
    { category: "Tools", skills: ["Eclipse", "SQL Developer", "IntelliJ", "Visual studio code"] },
    { category: "Servers", skills: ["Tomcat", "WAS 9", "Nginx, Apache"] },
    { category: "DevOps", skills: ["Jenkins, CI/CD, Docker", "GitLab"] },
    { category: "Methodologie", skills: ["Scrum", "TDD", "Agile"] },
    { category: "Functional Skill", skills: ["Project Management", "Jira", "Development", "Confluence"] },
    { category: "Software Craftsmanship", skills: ["Microservices"] },
    { category: "Cloud", skills: ["Spring Cloud"] },
    { category: "JAVA Environment", skills: ["jboss", "Maven", "Java SE", "Rest", "J2EE", "Hibernate", "Java 8", "Spring"] },
    { category: "DevOps tools & Containers", skills: ["OpenShift", "AZure"] }
  ],
  experiences: [
    {
      company: "DAVIDSON LUXEMBOURG",
      role: "Davidson Consultant",
      period: "Depuis Février 2022",
      context: "",
      actions: [],
      environment: []
    },
    {
      company: "PWC – LUXEMBOURG",
      role: "Full Stack Developer (Java / React)",
      period: "Depuis Mars 2023",
      context: "Design, development, and maintenance of internal HR management applications for the HR team.",
      actions: ["Requirements analysis and technical specifications", "Full stack development and unit testing", "Deployment across multiple environments (DEV, UAT, PROD)", "Use of MS SQL Server, Nexus, and Helm Charts", "Ongoing maintenance and support"],
      environment: ["Back-End: Spring Boot, Spring Security, Spring Cloud, Hibernate, JPA", "Front-End: React.js, Redux, Axios, Material UI", "Security: Keycloak, OAuth2, OpenID Connect, JWT", "Rules Engine: Drools", "Databases: SQL Server, MySQL, PostgreSQL", "DevOps / Cloud / Infra: Docker, Kubernetes, Azure DevOps, Jenkins, Git, Maven, Terraform, Helm, Nexus", "Testing & Quality: JUnit, Mockito, Postman, Swagger/OpenAPI, SonarQube"]
    },
    {
      company: "BIL BANQUE INTERNATIONALE À LUXEMBOURG",
      role: "Full stack developer",
      period: "De Février 2022 à mars 2023",
      context: "Mission : ML-FRAUD Anti-Money Laundering project enabling the bank to fight against fraud, money laundering and terrorist financing by applying the principles of agility",
      actions: ["Analysis of MX payments from a Transact core banking system.", "Transformation of data to communicate with a CFRM anti-fraud application via REST API.", "Transformation of data to communicate with an anti-money laundering application Safewatch via MQ", "Participation in the different agile ceremonies (daily, refinement, sprint planning, sprint review, sprint retrospective)", "Design and writing of user stories in collaboration with the Product Owner", "Design and writing of technical specifications in collaboration with the technical architect", "Code review", "Development of unit tests, integration tests, non-regression tests", "Versioning, Merge and release preparation in collaboration with the application infrastructure managers", "Versioning of databases", "Debugging of the various applications, technical improvement proposals (performance, security)", "Support for the test team to enable rapid resolution of defects"],
      environment: ["Java 11, Oracle, Openshift, Maven, XLrelease, JMS, Postman, Jira, Confluence, IBM websphere, Jenkins, Flyway, newman, GIT, Maven, Spring"]
    },
    {
      company: "SKY ITALIE SPA MILAN",
      role: "Full-Stack Engineer",
      period: "De Juillet 2018 à janvier 2022",
      context: "Mission : Design and implementation of audio and video flow management applications for the OTT sky department. The purpose of the platforms is to manage the personnel, the products, the programming of the events, and the configuration of the client boxes. The different modules are : Command Scheduler for the retrieval of events from the suppliers' platforms through SOAP and REST webservices Executor for the transfer via api of the commands that will be executed to the encoder TelcoCheck For the configuration of client boxes and maintenance of the applications installed on them DMC (Digital Media Controller) module responsible for Encoding/Transcoding/Upload of multimedia playlist contents Printing of PDF, Word and Excel reports Emailing The scope consists of 2 parts : - Backend : Aims to centralize, process and redistribute all Data. - Frontend : Used to expose data and make management parameters configurable.",
      actions: ["Costing and estimation of the various development requests", "Design and drafting of technical specifications", "Code review", "Development of unit and integration tests", "Versioning, Merge and Release Preparation", "Back-end and front-end development", "Database Versioning", "Support"],
      environment: ["Java8, TypeScript, HTML5, CSS, Spring Boot, REST, Spring data, Angular 8+,SAOP, Hibernate, Mysql , Spring security, Elasticsearch, Apache Tomcat, Maven, Git, Linux , script, ActiveMQ, Liquibase. , Jira, Confluence, Docker, Oracle, Kibana, CouchBase, Postman, script php, TDD, Junit, Mockito"]
    },
    {
      company: "SKY ITALIE SPA MILAN",
      role: "Full-Stack Engineer",
      period: "De Mai 2018 à juin 2018",
      context: "Mission : Design and implementation of Linux scripts for the automatic start-up of applications. The aim of the project is to create scripts that allow the automatic starting of applications running on different servers in case of an error.",
      actions: ["Production of linux scripts, testing and installation on different servers", "app collection, analysis and production of linux scripts, testing and installation on different servers"],
      environment: ["Scripts linux, services linux, Shell"]
    },
    {
      company: "SKY ITALIE SPA MILAN",
      role: "Full-Stack Engineer",
      period: "De Février 2018 à avril 2018",
      context: "Mission : Data Base migration Tool The aim of this project is to develop an application for the management of databases during releases",
      actions: ["Analysis and technological choices", "Estimation et développement", "Assessment and development", "Versioning, Merge and Release Preparation", "Unit testing", "Costing and estimation of the various development requests", "Back end"],
      environment: ["Java 8, Spring Boot, Liquibase, Mysql, MariaDB, Oracle, git, Maven, XML."]
    },
    {
      company: "SKY ITALIE SPA MILAN",
      role: "Full-Stack Engineer",
      period: "De Octobre 2017 à janvier 2018",
      context: "Mission : Building and setting up ELK Stack The goal of this project is to build and implement the ELK stack to collect and filter logs with Logstash and store them with Elasticsearch to visualize logs from Spring boot applications.",
      actions: ["Collect and filter logs with Logstash", "Store and index logs with Elasticsearch"],
      environment: ["Eclipse, Angular, Spring data, Spring boot, Bootstrap, Postman, Elasticsearch, Logstash, Kibana, Linux, Maven, GIT."]
    },
    {
      company: "SKY ITALIE SPA MILAN",
      role: "Full-Stack Engineer",
      period: "De Septembre 2017 à novembre 2017",
      context: "Mission : Design and implementation of a data processing API with Java This API's role is to receive a temporal range and invoke algorithms to collect and filter data that will later be deleted from Elasticsearch.",
      actions: ["Collect and filter data (Transcoding, Encoding, Upload query)", "Create an API with Spring boot and create a custom interface", "Installation on different servers"],
      environment: ["Spring Boot, java8, Spring Security, Tomcat, Kibana, Elasticsearch.script linux"]
    },
    {
      company: "SKY ITALIE SPA MILAN",
      role: "Full-Stack Engineer",
      period: "De Février 2017 à septembre 2017",
      context: "Mission : Migration of PrimeFaces web applications to Angular 8 Converting applications based on PrimeFaces to Angular 8 The scope consists of 2 parts : Back end, API : Its purpose is to centralize, process and redistribute all data. Front end, Angular application : used to expose the data.",
      actions: ["Costing and estimating different evolution requests.", "Design and writing of technical specifications.", "Code review.", "Version management, Merge and release preparation.", "Back-end and front-end development"],
      environment: ["Type Script, HTML, CSS, Spring Boot, Spring data, Angular 6+, Spring security, Ldap, Tomcat, Hibernate, Java8, Mysql, Oracle, CouchBase, Angular Material, Docker, GIT, Maven"]
    },
    {
      company: "UNIT CREDIT - UBIS MILAN",
      role: "Java Developer",
      period: "De Novembre 2015 à février 2017",
      context: "UNIT CREDIT SPA is an Italian bank and UBIS (Unicredit Business Integrated Solutions) is its IT department. Mission : Credit Revolution This project is a significant part of a risk management project and is used to manage overdrafts and personal and SME credit cards.",
      actions: ["Implementing the entire business logic according to guidelines and integration", "Gathering customer requirements, feasibility analysis, development, testing and deployment", "Costing and estimating various requests for change", "Designing and writing technical specifications", "Code review and mentoring new hires", "Developing unit tests and integration tests", "Participating and contributing to the creation of technical and detailed project documents", "Creating SOAP webservices for communication in a distributed architecture"],
      environment: ["Java EE, Hibernate, Spring MVC, Spring Boot, Spring Security, Oracle, JAX-WS, SOAP, JSF, X-Frame 1 et 2"]
    },
    {
      company: "UNIT CREDIT - UBIS MILAN",
      role: "Java Developer",
      period: "De Janvier 2015 à octobre 2015",
      context: "UNIT CREDIT SPA is an Italian banking institution where UBIS (Unicredit Business Integrated Solutions) is its IT direction. Mission : Application server migration The goal of this project is to migrate the WebSphere application server on which all the bank's applications run to JBOSS.",
      actions: ["Upgrade java version from 4 to 8", "Analysis of existing application server, databases, JBOSS Configuration", "Test"],
      environment: ["JEE, Linux, JSF, JNDI"]
    },
    {
      company: "SYNCLAB Milan (Italie)",
      role: "Java Developer",
      period: "De Août 2014 à janvier 2015",
      context: "Design and implementation of an employee and supplier management platform. The GeFoca platform aims to manage personnel, personnel missions at customer sites, and suppliers. The different modules are : -Personnel management -Work hours and payroll management -Client management -PDF, Word, and Excel report printing -Emailing The scope consists of 2 parts : Backend : Aim to centralize, process, and redistribute all data. Frontend : Used to display data and generate and export reports.",
      actions: ["Cost and estimate of different evolution requests.", "Design and writing of technical specifications.", "Code review.", "Version control, merge, and release preparation.", "Backend and frontend development."],
      environment: ["Java 7, Hibernate, JPA 2, Oracle, git"]
    },
    {
      company: "MONDADORI SPA Milan (Italie)",
      role: ".Net and Java Developer",
      period: "De Septembre 2009 à juin 2013",
      context: "Design and implementation of data flow management applications for Mondadori suppliers. The scope is only for the back end part.",
      actions: ["Gathering client needs, feasibility analysis, development, testing and production.", "Automating customer order management processes.", "Analysis and parsing of customer orders."],
      environment: ["Visual studio, ftp, Vba, Webservices SAOP, java 5, eclipse"]
    }
  ],
  education: [
    { year: "2015", degree: "Information Systems Option IT Engineer", institution: "UNIVERSITY OF BERGAME ITALIE" },
    { year: "2010", degree: "Telecommunications Computing Bachelor's Degree", institution: "UNIVERSITÀ DEGLI STUDI DE MILAN" },
    { year: "2005", degree: "Bachelor of General Education from the Ecole Normale Supérieure", institution: "" }
  ],
  languages: [
    { lang: "Français", level: "" },
    { lang: "Anglais", level: "" },
    { lang: "Italien", level: "" }
  ]
};