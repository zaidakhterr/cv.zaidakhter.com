import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  // IconGlobe,
  // IconBrandUpwork,
  // IconBrandX,
} from "@tabler/icons-react";
import { Link } from "./components";

export const data = {
  name: "Muhammad Zaid Akhter",
  position: "Software Engineer",
  links: [
    {
      name: "Email",
      text: "zaidakhter1202@gmail.com",
      href: "mailto:zaidakhter1202@gmail.com",
      icon: <IconMail />,
    },
    {
      name: "LinkedIn",
      text: "linkedin.com/in/zaidakhterr",
      href: "https://www.linkedin.com/in/zaidakhterr/",
      icon: <IconBrandLinkedin />,
    },
    {
      name: "GitHub",
      text: "github.com/zaidakhterr",
      href: "https://github.com/zaidakhterr",
      icon: <IconBrandGithub />,
    },
    // {
    //   name: "Website",
    //   text: "zaidakhter.com",
    //   href: "https://zaidakhter.com",
    //   icon: <IconGlobe/>,
    // },
    // {
    //   name: "Upwork",
    //   text: "upwork.com/freelancers/zaid",
    //   href: "https://www.upwork.com/freelancers/zaid",
    //   icon: <IconBrandUpwork/>,
    // },
    // {
    //   name: "(X) Twitter",
    //   text: "x.com/zaidakhterr",
    //   href: "https://x.com/zaidakhterr",
    //   icon: <IconBrandX/>,
    // },
  ],
  summary:
    "I am a software engineer with 4+ years of experience and a proven track record in developing innovative applications. I have successfully delivered projects for businesses of all sizes and am now seeking a full-time, high-impact technical role.",

  experience: [
    {
      company: "Upwork",
      location: "Remote",
      position: "Full-stack Developer (Freelancer)",
      period: "Sep 2020 - Present",
      details: [
        // <>
        //   Profile Link: <Link href="https://www.upwork.com/freelancers/zaid">upwork.com/freelancers/zaid</Link>
        // </>,
        <>Achieved the Top Rated Plus badge (top 3% of Upwork talent) with a 100% job success rate.</>,
        <>
          <Link href="https://planlogic.com.au">Planlogic</Link>: Developed the front end of their user-facing
          dashboard, a custom presentation app, and several internal tools while implementing key features such as data
          visualization, real-time editing, drag-and-drop editing, and chat.
        </>,
        <>
          <Link href="https://marketxventures.com">MarketX</Link>: Enhanced their existing user-facing pages and
          developed new admin pages, as well as several landing pages for marketing the platform, using Next.js,
          TypeScript, Prisma ORM, GraphQL, and Tailwind CSS.
        </>,
        <>
          <Link href="https://www.linkedin.com/company/privacybrain/about/">PrivacyBrain</Link>: Built multiple pages
          for their insights dashboard, automated various internal workflows using Retool and Airtable, eliminated
          unnecessary code from the project, and upgraded old React class components to use hooks, enhancing reliability
          and performance.
        </>,
        <>
          <Link href="https://dattabaumstudio.com">Datta+Baum Studio</Link>: Developed an already designed website using
          Astro and Tailwind CSS, added interactive components using React and integrated web serial to allow for
          resetting watch time.
        </>,
        <>
          <Link href="https://wpmdigital.com.au">WPM Digital</Link>: Collaborated with WPM Digital to build a custom
          headless e-commerce solution using WordPress (as a Headless CMS), Redis, Next.js, and several third-party
          APIs, such as Google Maps, Stripe, MailGun, Afterpay, GiftUp, and more.
        </>,
        <>
          <Link href="https://concertrx.com">ConcertRx</Link>: Built a web-based software to enhance the pharmacy
          patient experience using React.js, Nest.js, Redis, Auth0, Stripe, Twilio, MySQL. I also deployed the backend
          on AWS EC2 and built the landing page using Next.js.
        </>,
      ],
    },
    {
      company: "Zenveus",
      location: "Karachi, PK",
      position: "Associate JavaScript Developer",
      period: "Mar 2020 - Dec 2020",
      details: [
        "Responsibilities included writing modern and performant code for a diverse array of clients, developing pixel-perfect user interfaces, and debugging code.",
        "Communicated and collaborated with a team of engineers and clients on a weekly basis, using platforms such as Slack, Trello, Skype, and Zoom",
        "Worked on several full-stack applications and implemented key features such as a real-time notification system, localization for an eCommerce site, a custom video player for a driving hazards test, a Kanban board to manage deals, etc.",
      ],
    },
  ],

  education: [
    {
      institution: "NED University of Engineering and Technology",
      location: "Karachi, PK",
      degree: "Bachelor of Engineering, Software. (CGPA: 3.62)",
      period: "Oct 2018 - Oct 2022",
    },
  ],

  activities: [
    {
      club: "Google Developer Student Clubs",
      location: "Karachi, PK",
      position: "Management Lead",
      period: "Aug 2021 - Aug 2022",
      details: [
        "Established strong channels of communication with team members, vendors, and participants.",
        "Successfully conducted workshops on Flutter, Web 3.0, and Entrepreneurship for students.",
      ],
    },
    {
      club: "ACM NEDUET",
      location: "Karachi, PK",
      position: "Manager Registrations",
      period: "Aug 2021 - Aug 2022",
      details: [
        "Streamlined the registration process for attendees by improving communication and eliminating unnecessary steps, making it more effective and simplified.",
        "Co-led a student team to facilitate smooth operations during ITEC and coordinated logistics, scheduling, and resource management for the event.",
      ],
    },
  ],

  certifications: [
    {
      name: "Upwork Skill Certification - Javascript Front-End Development",
      provider: "Upwork",
      issued: "Dec 2021",
    },
    {
      name: "Introduction to Programming Using HTML and CSS Exam 98-383",
      provider: "Microsoft",
      issued: "Dec 2020",
      certificationId: "2rC3-XMhk",
    },
  ],

  skills: [
    // {
    //   title: "Soft Skills",
    //   details: [
    //     "Excellent written and verbal communication, strong problem-solving skills, good time management, team collaboration, ability to work under pressure, and meet deadlines.",
    //   ],
    // },
    {
      title: "Software Engineering",
      details: [
        "Software Design and Architecture, Software Requirement Gathering, Project Management, Team Collaboration, and good Time Management",
      ],
    },
    {
      title: "Programming Languages",
      details: ["JavaScript, TypeScript, SQL, C, C++, Python."],
    },
    {
      title: "Front-end Technologies",
      details: ["HTML, CSS, ReactJS, NextJS, Remix, GatsbyJS, Redux, Tailwind CSS, GraphQL."],
    },
    {
      title: "Back-end Technologies",
      details: ["Node.js, Express.js, Nest.js, REST APIs, GraphQL APIs, WebSockets, Serverless functions."],
    },
    {
      title: "Databases",
      details: ["MySQL, PostgreSQL, MongoDB, Firestore, Redis."],
    },
    {
      title: "Platforms & Tools",
      details: [
        "Git, GitHub, AWS, Stripe, Twilio, Auth0, Planetscale, Supabase, Firebase, Cloudflare, Vercel, Contentful, WordPress, Strapi, DatoCMS.",
      ],
    },
  ],
};
