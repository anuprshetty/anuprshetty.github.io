AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Independent Learning and Development",
    cardImage: "assets/images/experience-page/blockchain_logo.jpg",
    place: "Career Break [Focused on Blockchain Upskilling]",
    time: "Bengaluru, India (Dec. 2022 - PRESENT)",
    desp: "<li>Conducted an in-depth study of blockchain architecture, with a focus on Layer 1 and Layer 2 scalability solutions, acquiring a robust understanding of consensus mechanisms.</li> \
    <li>Developed a series of interconnected blockchain projects, progressively pushing the boundaries of my knowledge and skills in end-to-end DApp development.</li> \
    <li>Deployed and explored a private blockchain devnet (execution, consensus, and validator layers) using the Kurtosis ethereum-package, enabling hands-on experimentation and real-time analysis of blockchain internals, covering transaction processing, smart contract execution, data storage, state management, block production, inter-node communication and consensus for a comprehensive understanding of blockchain systems.</li> \
    <li>Engaged with various open-source blockchain projects, delving into source code to analyze and understand architecture, system design, and implementation of blockchain protocols. Building foundational expertise to contribute meaningfully to the Ethereum ecosystem and other blockchain projects in the future.</li>",
  },
  {
    title: "Software Development Engineer II",
    cardImage: "assets/images/experience-page/jio_fynd_logo.jpeg",
    place: "Jio Fynd [Startup - Retail Tech, On-site]",
    time: "Bengaluru, India (Aug. 2022 - Nov. 2022)",
    desp: "<li>Designed and implemented Product Variants feature, enabling sellers to list products with customizable attributes, enhancing user experience and expanding seller capabilities.</li> \
    <li>Python ~ Node.js ~ Microservices ~ Event Loop ~ Kafka ~ Redis ~ ORM ~ Solr ~ Sentry ~ New Relic ~ AWS</li>",
  },
  {
    title: "R&D Engineer I",
    cardImage: "assets/images/experience-page/jukshio_logo.jpeg",
    place: "Jukshio [Startup - AI, Remote]",
    time: "Hyderabad, India (Jan. 2022 - Jul. 2022)",
    desp: "<li>Developed scalable and reliable RESTful APIs to expose ML models, achieving a 95% reduction in data curation time.</li> \
    <li>Designed and developed a Django REST Framework application, enabling employees to efficiently book and manage meeting rooms, parking slots, and workspaces.</li> \
    <li>Implemented a high-performance ETL pipeline using Apache Airflow to optimize data loading and visualization, reducing latency from 5 minutes to 15 seconds.</li> \
    <li>Flask ~ Celery ~ Multithreading ~ gRPC ~ Docker ~ Kubernetes ~ RabbitMQ ~ PostgreSQL ~ Superset ~ GCP</li>",
  },
  {
    title: "Intern, Software Engineer I, Software Engineer II",
    cardImage: "assets/images/experience-page/philips_logo.jpeg",
    place: "Philips [MNC - Healthcare, Hybrid]",
    time: "Bengaluru, India (Jan. 2019 - Dec. 2021)",
    desp: "<li>Engineered a scalable web-based dashboard to enable real-time monitoring of infrastructure, platforms, managed services, and healthcare applications, streamlining system diagnostics and enhancing operational efficiency.</li> \
    <li>Contributed to Philips' open-source initiative Nethra, by developing a dashboard for actionable insights into team performance and project timelines, fostering transparency and collaboration across internal departments.</li> \
    <li>Optimized application performance by reducing initial load times from 90 seconds to 5 seconds through lazy initialization and builder design pattern, enhancing user experience.</li> \
    <li>MongoDB ~ JavaScript ~ Bootstrap ~ Prometheus ~ Grafana ~ Terraform ~ Ansible ~ SonarQube ~ CI/CD ~ Azure</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Nethra, Philips Open Source Initiative",
    cardImage: "assets/images/experience-page/nethra_insights_logo.png",
    description:
      "A dashboard for actionable insights into team performance and project timelines across internal departments.",
  },
  // {
  //   title: "StudentCode-in 2020",
  //   cardImage: "assets/images/experience-page/2.jpg",
  //   description:
  //     "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  // },
  // {
  //   title: "PClub Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/3.jpg",
  //   description:
  //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  // },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "ISEE-HSOP Hackathon",
    subtitle: "Philips",
    image: "assets/images/experience-page/philips_hackathon.png",
    desp: "Recognition for exhibiting Philips behavior - Team up to win.",
    href: "#",
  },
  // {
  //   title: "ULHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/ulhacks.png",
  //   desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  //   href: "https://ulhacks.com/",
  // },
  // {
  //   title: "WaffleHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/wafflehacks.png",
  //   desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  //   href: "https://wafflehacks.org/",
  // },
  // {
  //   title: "Elevate Tech",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/elevate.png",
  //   desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  //   href: "https://elevatetech.codes/",
  // },
  // {
  //   title: "PitchTeen",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/pitchteen.png",
  //   desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  //   href: "https://www.linkedin.com/company/pitchteen/about/",
  // },
  // {
  //   title: "Hack-A-Solution",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hackasolution.png",
  //   desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  //   href: "https://hackasolution.devpost.com/",
  // },
  // {
  //   title: "UniGlobe Hacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/uniglobe.png",
  //   desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  //   href: "https://uniglobe-hacks.devpost.com/",
  // },
  // {
  //   title: "AtlasHacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/atlas.png",
  //   desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  //   href: "https://atlashacks2.devpost.com/",
  // },
  // {
  //   title: "NeoHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/neo.png",
  //   desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  //   href: "https://neohacks.org/",
  // },
  // {
  //   title: "Mission Inspired",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/mission.png",
  //   desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  //   href: "https://www.missioninspired.org/hackathon",
  // },
  // {
  //   title: "Hack3",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hack3.png",
  //   desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  //   href: "https://hack3.co/",
  // },
  // {
  //   title: "JITHack",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/jithack.png",
  //   desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  //   href: "https://jithack.netlify.app/",
  // },
  // {
  //   title: "Recess Hacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/recess.png",
  //   desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  //   href: "https://recesshacks.com/",
  // },
  // {
  //   title: "Citro Tech",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/citro.png",
  //   desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  //   href: "https://citro.tech/",
  // },
  // {
  //   title: "NHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/nhacks.png",
  //   desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  //   href: "https://nhacks-vi.devpost.com/",
  // },
];

// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, subtitle, desp, href }) =>
//       (output += `
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="${href}" class="blog-slider__button">Read More</a>
//         </div>
//       </div>
//       `)
//   );
//   hackathonsection.innerHTML = output;
// };

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
