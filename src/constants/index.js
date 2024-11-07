import project1 from "../assets/projects/googledoc.jpg";
import project2 from "../assets/projects/Coffeeapp.jpg";
import project3 from "../assets/projects/aivoice.jpg";


export const HERO_CONTENT = `I'm a passionate full-stack developer with a Computer Science degree, skilled in React, Node.js, and PostgreSQL. I create robust, user-focused applications that prioritize performance and seamless functionality. Passionate about technology and continuous learning, I’m driven to build solutions that make an impact.`;

export const ABOUT_TEXT = `I am a full-stack developer with a Computer Science degree and a commitment to delivering high-quality, impactful digital solutions. Proficient in a broad tech stack, including React, Node.js, and PostgreSQL, I bring a balanced approach to both front-end and back-end development. I focus on creating seamless, user-focused applications with robust architectures, optimized performance, and intuitive interfaces. My passion for technology drives me to continually deepen my expertise, embrace emerging trends, and solve complex problems through innovative thinking. Dedicated to professional growth, I am excited to contribute my skills to projects that prioritize both functionality and user experience.`;
export const EXPERIENCES = [
  {
    year: "Jan 2024 – Jun 2024",
    role: "Design Engineer Intern",
    company: " Atlas Copco",
    description: `Developed a Controller Booking System using JavaScript, Node.js, and MySQL. Deployed the system using Docker for containerization, collaborating with cross-functional teams to integrate and deploy the solution. Conducted thorough testing and debugging to ensure stability and performance.`,
    technologies: ["JavaScript", "Node.js", "MySQL", "Docker"],
  },
  {
    year: "Jan 2023 – Dec 2023",
    role: "Research Intern",
    company: "Applied Technical Solutions Ltd.",
    description: `Implemented FHIR guidelines for enhanced provenance management with NTP clock connectivity. Contributed to DAO, DTO, and web services on Java/Spring Boot platforms, developed a no-code feature to reduce development time, and generated unit test cases to ensure CRUD functionality with PostgreSQL.`,
    technologies: ["Java", "Spring Boot", "PostgreSQL", "DAO", "DTO", "REST API"],
  }
];


export const PROJECTS = [
  {
    title: "Google Doc Clone",
    image: project1,
    description:
      "A real-time collaboration system modeled after Google Docs, enabling seamless document editing and multi-user interaction. Key features include user presence tracking, version history management, and secure user authentication.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Git"],
  },
  {
    title: "Coffee Store App",
    image: project2,
    description:
      "An Android application integrating personalized user profiles and real-time order tracking, improving transaction safety and providing up-to-date order status.",
    technologies: ["Java", "Android"],
  },
  {
    title: "AI Desktop Voice Assistant",
    image: project3,
    description:
      "A virtual assistant incorporating speech recognition, natural language processing, and task automation. Enhanced with text-to-speech and multi-language support, and optimized using machine learning algorithms.",
    technologies: ["Python", "NLP", "Machine Learning"],
  }
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+1 (508)-769-1511 ",
  email: "masnimantri902@gmail.com",
};
