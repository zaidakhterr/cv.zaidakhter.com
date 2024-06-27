import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
  // IconPhone
} from "@tabler/icons-react";
// import { InlineLink } from "./components";

export const data = {
  name: "SAJID ALI SADRUDDIN",
  position: "Software Engineer",
  links: [
    // {
    //   name: "Phone",
    //   text: "+92 334 3922889",
    //   href: "tel:+923343922889",
    //   icon: <IconPhone size={14} />,
    // },
    {
      name: "Email",
      text: "sajidali12@outlook.com",
      href: "mailto:sajidali12@outlook.com",
      icon: <IconMail size={14} />,
    },
    {
      name: "LinkedIn",
      text: "linkedin.com/in/sajid-ali-sadruddin",
      href: "https://www.linkedin.com/in/sajid-ali-sadruddin/",
      icon: <IconBrandLinkedin size={14} />,
    },
    {
      name: "GitHub",
      text: "github.com/sajidali22",
      href: "https://github.com/sajidali22",
      icon: <IconBrandGithub size={14} />,
    },
    {
      name: "Location",
      text: "Karachi, PK",
      href: "https://www.google.com/maps/place/Karachi",
      icon: <IconMapPin size={14} />,
    },
  ],
  summary:
    "Self-driven and focused Software Engineer with knowledge of Machine Learning field. Results-driven professional with good technical skills, firm grasp of business needs and understanding of user requirements gathering. Assesses risks, troubleshoots problems and conducts tests. Excellent communication and planning abilities.",

  experience: [
    {
      company: "Entrollics",
      location: "Remote",
      position: "Senior Python Developer",
      period: "Mar 2024 - Present",
      link: "https://entrolics.com/",
      details: [
        "Developed a multi-tenant micro-service using FastAPI to integrate with large language models (Gemini, OpenAI, Anthropic) for document-based conversational AI, leveraging Redis for conversation history management.",
        "Deployed scalable micro services on Google Kubernetes Engine (GKE) with Google authentication, ensuring robust and secure deployment pipelines.",
        "Designed and implemented Airflow DAGs to extract relevant context from Elasticsearch via vector search, facilitating accurate information retrieval for LLM-based query responses.",
        "Architected backend solutions on Google Vertex AI, utilizing BigQuery for managing large-scale unstructured data and Google Datastore for creating user-specific search engines.",
        "Developed a custom load balancer for a file conversion microservice using TypeScript, utilizing etcd for distributed key-value storage to manage pod-to-file URL mappings. Enhanced system reliability and efficiency, reducing file conversion times by 30% and ensuring immediate user feedback.",
      ],
    },
    {
      company: "Folio3",
      location: "Karachi, PK",
      position: "Software Engineer",
      period: "Jul 2022 - Feb 2024",
      link: "https://folio3.com/",
      details: [
        "Developed and maintained DocuScan, an OCR product that reads receipts and invoices of any format and syncs information to Dynamics 365 ERP system.",
        "Revised existing Flask modules and directly involved in designing architecture for DocuScan product to reduce processing time and increase consumer accessibility.",
        "Worked on new developmental features such as Azure feature management for Folio3 integration product “Burq”, which is a low-code no-code integration solution for ERP and E-commerce.",
      ],
    },
    {
      company: "The Disrupt Labs",
      location: "Karachi, PK",
      position: "AI Engineer",
      period: "Dec 2020 - Mar 2022",
      link: "https://thedisruptlabs.com/",
      details: [
        "Developed an industrial computer vision solution that identifies torn and unclean loom surfaces using object detection models (Yolov5) trained on over 30k images using PyTorch and image augmentation libraries.",
        "Trained multiple state-of-the-art object detection and classification models using AWS EC2 instances and multi-GPU servers, now deployed in multiple industrial factories.",
        "Responsible for developing these systems end-to-end: dataset collection, prototyping/evaluating different algorithms, and productionizing them to run at scale.",
      ],
    },
  ],

  projects: [],

  education: [
    {
      institution: "NED University of Engineering and Technology",
      location: "Karachi, PK",
      degree: "Bachelor of Engineering, Software (3.487 CGPA)",
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
      name: "Deep Learning.AI TensorFlow Developer",
      provider: "Coursera",
      issued: "Nov 2020",
      link: "https://coursera.org/share/5b96d9e9571a12be95fa786c191f2a01",
    },
    {
      name: "Fundamental course in the AWS Machine Learning",
      provider: "Udacity",
      issued: "Jul 2020",
    },
  ],

  skills: [
    {
      details: [
        "Proficient in languages like Python and C#",
        "Skilled in FastAPI, Flask, Airflow, ElasticSearch and Langchain technologies",
        "Experienced with messaging queues, RabbitMq and Redis",
        "Familiarity with cloud technologies in Google cloud, Azure and Aws",
        "Knowledgeable in Google Vertex AI, Big query, Google Data-stores",
      ],
    },
  ],
};
