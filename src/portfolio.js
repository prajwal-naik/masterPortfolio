/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Prajwal's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Prajwal Naik Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/", //To change
  },
};

//Home Page
const greeting = {
  title: "Prajwal Naik",
  logo_name: "PrajwalNaik",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1jjilX0wjA81TCIWfh8SvZeJ1nt2eJizDkpvyKc4qAl0/edit?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/prajwal-naik",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/prajwal-naik",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prajwal-naik/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:naikprajwal40@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_prajwal.naik_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Software Development",
      // fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with multiple languages",
        "⚡ Writing libraries from scratch in C",
        "⚡ Implementing ML and AI algorithms in Python",
        "⚡ Developing complex multi-module applications for servers",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f0931c",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#47A248",
          },
        },
      ],
    },

    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React/Next",
        "⚡ High level proficiency in vanilla HTML, CSS and JavaScript",
        "⚡ Creating application backend in Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "cib:next-js",
          style: {
            backgroundColor: "#fff",
            color: "#000000",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            backgroundColor: "#fff",
            color: "#dc0431",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },

    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Modelling for forecasting",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    // {
    // 	title: "UI/UX Design",
    // 	fileName: "DesignImg",
    // 	skills: [
    // 		"⚡ Designing highly attractive user interface for mobile and web applications",
    // 		"⚡ Customizing logo designs and building logos from scratch",
    // 		"⚡ Creating the flow of application functionalities to optimize user experience",
    // 	],
    // 	softwareSkills: [
    // 		{
    // 			skillName: "Adobe XD",
    // 			fontAwesomeClassname: "simple-icons:adobexd",
    // 			style: {
    // 				color: "#FF2BC2",
    // 			},
    // 		},
    // 		{
    // 			skillName: "Figma",
    // 			fontAwesomeClassname: "simple-icons:figma",
    // 			style: {
    // 				color: "#F24E1E",
    // 			},
    // 		},
    // 		{
    // 			skillName: "Adobe Illustrator",
    // 			fontAwesomeClassname: "simple-icons:adobeillustrator",
    // 			style: {
    // 				color: "#FF7C00",
    // 			},
    // 		},
    // 		{
    // 			skillName: "Inkscape",
    // 			fontAwesomeClassname: "simple-icons:inkscape",
    // 			style: {
    // 				color: "#000000",
    // 			},
    // 		},
    // 	],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#f79d16",
      },
      profileLink: "https://leetcode.com/prajwal-naik/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/naikprajwal40",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@naikprajwal40",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "PES University",
      subtitle: "Bachelor of Technology in Computer Science and Engineering",
      logo_path: "pesu.png",
      alt_name: "PESU",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Studied fundamental software engineering courses like DSA, Operating Systems, Computer Networks etc.",
        "⚡ Completed courses on Machine Learning, Data Science, Cloud Computing and Full Stack Development",
        "⚡ Recieved distiction awards for every semester",
      ],
      website_link: "http://pes.edu",
    },
    {
      title: "Deeska Center for Learning",
      subtitle: "Pre-University Education",
      logo_path: "deeksha.png",
      alt_name: "deeksha",
      duration: "2016 - 2018",
      descriptions: [
        "Passed with distinction with a final percentage of 98% in Karnataka PU Board Examinations",
      ],
      website_link: "https://deekshalearning.com/",
    },
    {
      title: "Sindhi High School",
      subtitle: "Secondary School Leaving Certificate",
      logo_path: "shs.png",
      alt_name: "shs",
      duration: "2003 - 2016",
      descriptions: ["Passed with distinction with a final CGPA of 10"],
      website_link: "http://www.sindhihighschool.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "NLP with Python for Machine Learning Essential Training",
      subtitle: "- LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://drive.google.com/file/d/1B7XUQjkN2tp01KR4BdbOvFV33leu2ST2/view",
      alt_name: "Linkedin",
      color_code: "#ffffff",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Hong Kong University of Science and Technology",
      logo_path: "hkust.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/BBD3BPFET9WY",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Front End Web UI Frameworks & Tools: Bootstrap 4",
      subtitle: "- Hong Kong University of Science and Technology",
      logo_path: "hkust.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XWGSJYR2MNP8",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "R Programming",
      subtitle: "- Johns Hopkins University",
      logo_path: "jhu.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XWGSJYR2MNP8",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Explore ML Workshop",
      subtitle: "- Google Developer Student Clubs",
      logo_path: "dsc.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1Or1QpWbYVvVZddKP57yaRCu9wenXyIRt/view",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Python & ML Masterclass",
      subtitle: "- PESU I/O",
      logo_path: "pesuio.png",
      certificate_link:
        "https://drive.google.com/file/d/1O-D2cLNj-cdl2eoOhDWjwHoE-pQ7iUM9/view",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I believe in gaining hands-on experience over rote learning. I've interned at a number of leading organisations. My work in these places have mostly been about product development using various cutting edge techstacks.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Project Intern",
          company: "Hewlett Packard Interprise",
          company_url: "https://www.hpe.com/us/en/home.html/",
          logo_path: "hpe.png",
          duration: "April 2021 - June 2019",
          location: "Bangalore, Karnataka",
          description:
            "Worked on developing an application to automatically handle edgeline server updates using NLP of driver update notes. This application reduces the human interaction by around 40%.",
          color: "#00b389",
        },
        {
          title: "Research Intern",
          company: "Centre for Cloud Computing and Big Data",
          company_url: "https://research.pes.edu/cloud-computing-big-data/",
          logo_path: "ccbd-pes.jpg",
          duration: "June 2020 - Dec 2020",
          location: "PES University, Bangalore",
          description:
            "This is the cutting edge cloud computing research lab of PES University. Initially starting research on distributed SQL systems like Cockroach DB, I moved on to research about the performance of spatial join algorithms using in mapping in most of the location based applications.",
          color: "#3e7f97",
        },
        {
          title: "Product Development Intern",
          company: "PESU Venture Labs",
          company_url: "https://www.pesuventurelabs.com/",
          logo_path: "pvl.png",
          duration: "June 2020 - Dec 2020",
          location: "PES University, Bangalore",
          description:
            "This is PES University's incubator working on a number of ambitious startups. I worked on the development of an application to streamline the process of college guest lectures by easing the process of matching lecturers to any college's requirements.",
          color: "#fccc3c",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Teaching Volunteer",
          company: "Project Sitara Foundation",
          company_url: "https://projectsitara.org/",
          logo_path: "psf.png",
          duration: "September 2021 - Present",
          location: "Hyderabad, Telangana",
          description:
            "Project Sitara Foundation is a not-profit organisation working towards enabling children from underserved communities in Karnataka, India to become self-sufficient.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. The objective behind these is to develop something which can be of use in the real world.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my-avatar.png",
    description:
      "Highly available individual with presence over multiple social media networks. My social media presence should be the de-facto standards for cloud applications - Distributed and Higly Available😜",
  },

  addressSection: {
    title: "Address",
    subtitle:
      "A004, Sterling Gardens Apartments, Kempapura, Hebbal, Bangalore - 560024",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9539974,77.6309395,11z/data=!4m2!3m1!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8951690698",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
