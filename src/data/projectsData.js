import one from "../assets/png/loadScreen.png";
import two from "../assets/png/your_space_prototype.png";
import three from "../assets/png/share-it-1.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Soothing Lights and Sounds",
    projectDesc: `A 5 Button memory procession attempting to produce a state of Flow`,
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/DGlew-p/soothing-light-and-sounds/",
    demo: "https://dglew-p.github.io/soothing-light-and-sounds/",
    image: one,
  },
  {
    id: 2,
    projectName: "/your-space/",
    projectDesc:
      "What does the future of workspace look like? A remote-friendly solution to schedule time in the office.",
    tags: ["python", "Django", "AWS S3"],
    code: "https://github.com/DGlew-p/Progect-3/tree/development",
    demo: "https://your-spaces.herokuapp.com/",
    image: two,
  },
  {
    id: 3,
    projectName: "Share-It",
    projectDesc:
      "Welcome to Share-it a site made for developers. Access a platform to share ideas and make friends.",
    tags: ["React", "Node.js", "MongoDB", "Styled Components"],
    code: "https://github.com/DGlew-p/your-space",
    demo: "https://share-it-app.herokuapp.com/",
    image: three,
  },
];
