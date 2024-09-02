import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
  IconPhone,
  // IconBrandUpwork,
  // IconGlobe,
  // IconBrandX,
} from "@tabler/icons-react";
// import zaidImage from "./ZAID_AKHTER_GERMANY.jpg";
import zaidImage from "./zaid-new-dark.png";
import { InlineLink } from "./components";

export const data = {
  name: "Muhammad Zaid Akhter",
  position: "Software Engineer",
  image: zaidImage,
  links: [
    {
      name: "Email",
      text: "zaidakhter1202@gmail.com",
      href: "mailto:zaidakhter1202@gmail.com",
      icon: <IconMail size={14} />,
    },
    {
      name: "Phone",
      text: "+92 331 8101315",
      href: "tel:+923318101315",
      icon: <IconPhone size={14} />,
    },
    {
      name: "LinkedIn",
      text: "linkedin.com/in/zaidakhterr",
      href: "https://www.linkedin.com/in/zaidakhterr/",
      icon: <IconBrandLinkedin size={14} />,
    },
    {
      name: "GitHub",
      text: "github.com/zaidakhterr",
      href: "https://github.com/zaidakhterr",
      icon: <IconBrandGithub size={14} />,
    },
    {
      name: "Location",
      text: "Karachi, PK",
      href: "https://www.google.com/maps/place/Karachi",
      icon: <IconMapPin size={14} />,
    },
    // {
    //   name: "Upwork",
    //   text: "upwork.com/freelancers/zaid",
    //   href: "https://www.upwork.com/freelancers/zaid",
    //   icon: <IconBrandUpwork size={14} />,
    // },
    // {
    //   name: "Website",
    //   text: "zaidakhter.com",
    //   href: "https://zaidakhter.com",
    //   icon: <IconGlobe size={14}/>,
    // },
    // {
    //   name: "(X) Twitter",
    //   text: "x.com/zaidakhterr",
    //   href: "https://x.com/zaidakhterr",
    //   icon: <IconBrandX size={14}/>,
    // },
  ],
  summary:
    "As a software engineer with over 3 years of experience, I have worked extensively with technologies such as React.js and Node.js. I have successfully delivered projects for businesses of all sizes worldwide and I am now seeking opportunities to further expand my knowledge and create a positive impact with my skills.",

  experience: [
    {
      company: "Upwork",
      location: "Remote",
      position: "Full-stack Developer",
      period: "Sep 2020 - Jul 2024",
      link: "https://www.upwork.com/freelancers/zaid",
      details: [
        "Achieved the Top Rated Plus badge (top 3% of Upwork talent), while maintaining a professional and responsive approach resulting in a 100% job success score.",
        "Completed 10+ projects for clients from the United States, Australia, Germany, Singapore, etc.",
        // "Completed projects for clients from the United States, Australia, the UK, Germany, Singapore, and other countries.",
      ],
    },
    {
      company: "Zenveus",
      location: "Karachi, PK",
      position: "Associate JavaScript Developer",
      period: "Mar 2020 - Dec 2020",
      link: "https://zenveus.com/",
      details: [
        "Responsibilities included writing modern and performant code for a diverse array of clients, developing pixel-perfect user interfaces, and debugging code.",
        // "Communicated and collaborated with a team of engineers and clients on a weekly basis, using platforms such as Slack, Trello, Skype, and Zoom",
        "Worked on several full-stack applications and implemented key features such as a real-time notification system, localization for an eCommerce site, a custom video player for a driving hazards test, a Kanban board to manage deals, etc.",
      ],
    },
  ],

  projects: [
    {
      company: "Booking Platform",
      // company: "Into the Wild Escapes",
      // link: "https://intothewildescapes.com",
      // position: "Full-stack Developer",
      period: "Mar 2022 - Jul 2024",
      details: [
        // "Into The Wild Escapes offers restorative experiences in secluded regional areas across Australia.",
        <>
          Collaborated with <InlineLink href="https://wpmdigital.com.au">WPM Digital</InlineLink> to build a booking
          platform that offers restorative experiences in secluded regional areas across Australia.
        </>,
        "Engineered a custom headless e-commerce solution using WordPress (as a headless CMS), Redis, Next.js, and several third-party APIs such as Google Maps, Stripe, MailGun, etc.",
        "Implemented a seamless checkout system with Afterpay (buy now, pay later) and GiftUp (gift cards) integrations to increase sales.",
      ],
    },
    {
      company: "ConcertRx",
      link: "https://concertrx.com",
      // position: "Full-stack Developer",
      period: "Apr 2022 - Apr 2024",
      details: [
        "ConcertRx is a software to help pharmacies deliver a superior patient experience through effortless, personalized, and proactive interventions.",
        "Designed and deployed the software from scratch, leading a team of 2 to build it using React.js, Nest.js, Redis, Auth0, Stripe, Twilio, and MySQL.",
        "Built internal tools to help the team verify customer information and onboard them efficiently.",
      ],
    },

    {
      company: "Datta + Baum Studio",
      link: "https://dattabaumstudio.com",
      // position: "Front-end Developer",
      period: "Jun 2023 - Dec 2023",
      details: [
        "Datta + Baum Studio is a product design studio that creates thought-provoking designs.",
        "Developed an already designed website using Astro, React.js and Tailwind CSS and integrated web serial to allow for resetting the watch time from the browser.",
        "Optimized the site for performance and accessibility, scoring 95+ for all pages on Lighthouse.",
      ],
    },
    {
      company: "MarketX",
      link: "https://marketxventures.com",
      // position: "Full-stack Developer",
      period: "Feb 2022 - Aug 2023",
      details: [
        "MarketX provides high-net-worth investors access to private tech investment opportunities.",
        "Enhanced existing user-facing pages and created new admin pages, as well as several landing pages for marketing, using Next.js, TypeScript, Prisma ORM, GraphQL, and Tailwind CSS.",
        <>
          Completed a redesign of the <InlineLink href="https://app.inf.finance">Infinify</InlineLink> platform
          improving the overall user experience and composed a landing page for the platform.
        </>,
      ],
    },
    // {
    //   company: "PrivacyBrain",
    //   link: "https://www.linkedin.com/company/privacybrain/about/",
    //   // position: "Full-stack Developer",
    //   period: "Sep 2021 - Sep 2022",
    //   details: [
    //     "PrivacyBrain is a service that helps companies safeguard their employees by removing their exposed personal information from the internet.",
    //     "Developed parts of the insights dashboard and automated workflows using Retool and PostgREST.",
    //     "Improved performance and reliability by eliminating unnecessary code from the project and upgrading old React class components to use hooks.",
    //   ],
    // },
    {
      company: "Planlogic",
      link: "https://www.planlogic.com.au",
      // position: "Front-end Developer",
      period: "Oct 2020 - Aug 2022",
      details: [
        "Planlogic offers financial planning solutions to simplify the advice process for financial advisers throughout Australia.",
        <>
          Performed as the lead front-end developer in a team of 4 to build the{" "}
          <InlineLink href="https://www.planlogic.com.au/pay-as-you-go-paraplanning/">Digital Request Form</InlineLink>,
          adding key features such as data visualization, real-time editing, drag-and-drop editing, and chat.
        </>,
        <>
          Spearheaded the development of the <InlineLink href="https://digitalsoa.com.au/">Digital SOA Tool</InlineLink>{" "}
          using React.js and Tailwind CSS and added engaging visuals to make complex information accessible to financial
          planners.
        </>,
      ],
    },
  ],

  education: [
    {
      institution: "NED University of Engineering and Technology",
      location: "Karachi, PK",
      degree: "Bachelor of Engineering, Software",
      period: "Oct 2018 - Oct 2022",
      details: ["Final Grade: 3.62/4"],
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
    {
      title: "Software Engineering",
      details: ["Data Structures and Algorithms, Software Design and Architecture, Project Management."],
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
      details: [
        "Node.js, Express.js, Nest.js, MySQL, PostgreSQL, MongoDB, Redis, WebSockets, REST APIs, GraphQL APIs, Serverless functions.",
      ],
    },
    // {
    //   title: "Databases",
    //   details: ["MySQL, PostgreSQL, MongoDB, Firestore, Redis."],
    // },
    {
      title: "Platforms & Tools",
      details: [
        "Git, GitHub, AWS, Stripe, Twilio, Auth0, Planetscale, Supabase, Firebase, Cloudflare, Vercel, Contentful, WordPress, Strapi, DatoCMS.",
      ],
    },
  ],
};
