import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import React from 'react';

export const HERO_CONTENT = `I am a driven and detail-oriented software developer with expertise in full-stack web development and a strong foundation in data science. With hands-on experience in cutting-edge technologies like Next.js, React, Node.js, and MongoDB, I specialize in crafting scalable and user-centric solutions. `;


export const ABOUT_TEXT = `I am a versatile software developer driven by a passion for building efficient, user-friendly web applications and leveraging data-driven insights to create impactful solutions. My expertise spans front-end technologies like React and Next.js, and back-end technologies such as Node.js and MongoDB. My journey has been enriched through projects like CarePulse, a healthcare management app, and internships at Sabudh Foundation, where I applied data science and predictive modeling to solve real-world challenges. I thrive on creating meaningful applications that drive innovation and enhance user experiences. With a continuous desire to learn, I excel in collaborative environments, solving complex problems, and contributing to open-source initiatives. Beyond coding, I enjoy exploring emerging technologies, mentoring peers, and actively participating in tech-driven communities.`;


export const EXPERIENCES = [
    {
      year: "Jul 2024 - Nov 2024",
      role: "Data Science Intern",
      company: "Sabudh Foundation",
      description: `Analyzed and processed large datasets for social impact projects. Built predictive models to support community initiatives. Collaborated on data-driven solutions for real-world challenges. Applied data science skills to support decision-making.`,
      technologies: ["Data Science", "Predictive Modeling", "Collaboration Tools"],
    },
    {
      year: "Jul 2024 - Aug 2024",
      role: "ML Summer School Participant",
      company: "Amazon",
      description: `Learned key ML topics through immersive and interactive sessions with Amazon Scientists. Engaged in Q&A sessions to enhance understanding of ML concepts and practical industry applications. Networked with leading ML experts.`,
      technologies: ["Machine Learning", "Industry Applications"],
    },
    {
      year: "May 2024 - Aug 2024",
      role: "Contributor",
      company: "Social Summer of Code",
      description: `Contributed to open-source projects as part of a collaborative coding program.`,
      technologies: ["Open Source", "Collaborative Development"],
    },
    {
      year: "May 2024 - Aug 2024",
      role: "Contributor",
      company: "GirlScript Summer of Code",
      description: `Collaborated on coding projects to support community initiatives and open-source contributions.`,
      technologies: ["Open Source", "Community Development"],
    },
  ];  

  export const PROJECTS = [
        {
          title: "CarePulse - Healthcare Management App",
          image: project1,  // Replace with the actual image path
          description:
            "Enabled 200+ patients to book and manage medical appointments online with a seamless Next.js interface.",
          technologies: ["Next.js", "Appwrite", "Twilio", "TypeScript", "TailwindCSS", "ShadCN"],
          liveDemo: "https://care-pulse-healthcare-app.vercel.app/",  // Replace with actual URL
          github: "https://github.com/Tanisha2174/CarePulse-Healthcare-app",  // Replace with actual URL
        },
        // Add other projects here  
    {
        title: "Portfolio Website",
        image: project2,
        description:
          "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Framer","TailwindCSS","Next.js"],
        liveDemo: "https://portfolio-topaz-eta-17.vercel.app/", 
        github: "https://github.com/Tanisha2174/Portfolio",  
      },
  ];
  

export const CONTACT = {
  address: "Delhi, India",
  phoneNo: "+91 9654 116 989 ",
  email: "tpanesar2174@gmail.com",
};
