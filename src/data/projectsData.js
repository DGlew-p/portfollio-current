import one from "../assets/png/loadScreen.png";
import two from "../assets/png/your_space_prototype.png";
import three from "../assets/png/share-it-1.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Soothing Lights and Sounds",
    projectDesc: `A 5 Button memory procession attempting to be engaging and rewarding while minimizing the frustration augmenting aspects of similar games. In the current state a "Win" can be achieved after 7 rounds.`,
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/DGlew-p/soothing-light-and-sounds/",
    demo: "https://dglew-p.github.io/soothing-light-and-sounds/",
    image: one,
  },
  {
    id: 2,
    projectName: "/your-space/",
    projectDesc:
      "What does the future of workspace look like? As workspaces start to open up, it can be a struggle to find an ideal space as a freelancer. They need to find a remote-friendly solution to schedule time in the office.",
    tags: ["python", "Django", "AWS S3"],
    code: "https://github.com/DGlew-p/Progect-3/tree/development",
    demo: "https://your-spaces.herokuapp.com/",
    image: two,
  },
  {
    id: 3,
    projectName: "Share-It",
    projectDesc:
      "Welcome to Share-it a site made for developers by developers. Our aim is to create a site that lets developers have access to a platform to share ideas and make friends. So welcome our credo is when you have a good idea just share-it.",
    tags: ["React", "NodeJs", "MongoDB", "Styled Components"],
    code: "https://github.com/DGlew-p/your-space",
    demo: "https://share-it-app.herokuapp.com/",
    image: three,
  },
];
