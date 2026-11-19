import learnhubImage from "../assets/images/learnhub.webp";
import sparkBeautyImage from "../assets/images/spark-beauty.webp";
import portfolioImage from "../assets/images/portfolio.webp";

export const projects = [
  {
    title: "LearnHub",
    subtitle: "Full-stack learning platform",
    image: learnhubImage,
    imageAlt:
      "LearnHub landing page with a course search bar and featured learning banner",
    description:
      "A full-stack learning platform: a React frontend backed by a from-scratch Express and MongoDB REST API, with separate student, instructor and admin experiences.",
    features: [
      "JWT authentication with rotating refresh cookies and optional two-factor login",
      "Role-based dashboards for students, instructors and admins",
      "Course catalog, enrollments, reviews and mock checkout with refunds",
      "Admin analytics, CSV exports and notification modules",
      "Frontend on Vercel, API and static mirror on Render",
    ],
    stack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Vercel",
      "Render",
    ],
    live: "https://learn-hub-ai-alpha.vercel.app",
    repo: "https://github.com/sk2003-sk/LearnHubAI",
    period: "Oct – Nov 2026",
  },
  {
    title: "Spark Beauty Parlour",
    subtitle: "MERN salon booking app",
    image: sparkBeautyImage,
    imageAlt:
      "Spark Beauty Parlour homepage with a service booking call to action and service categories",
    description:
      "A full-stack salon booking application where customers discover services and book appointments by date and time.",
    features: [
      "Service discovery with prices",
      "Booking flow with date and time selection",
      "Booking history for signed-in customers",
      "Admin management for services and bookings",
      "REST API integration with a Node.js backend",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Vite"],
    live: "https://spark-beauty-parlour.vercel.app",
    repo: "https://github.com/sk2003-sk/Spark-Beauty-parlour",
    period: "Oct – Nov 2026",
  },
  {
    title: "Personal Portfolio",
    subtitle: "This website",
    image: portfolioImage,
    imageAlt:
      "Sashank B portfolio homepage on a dark theme with a purple accent",
    description:
      "The site you are on — a hand-built React portfolio with its own design system, accessible interactions and a working contact form.",
    features: [
      "Responsive single-page layout",
      "Custom CSS design system with design tokens",
      "Scroll reveals with reduced-motion support",
      "Accessible navigation and form states",
      "SEO metadata and structured data",
    ],
    stack: ["React.js", "Vite", "CSS3", "EmailJS"],
    live: "https://sashank-portfolio-mu.vercel.app",
    repo: "https://github.com/sk2003-sk/sashank-portfolio",
    period: "2026",
  },
];
