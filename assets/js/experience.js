AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Independent Learning and Development",
    cardImage: "assets/images/experience-page/blockchain_logo.jpg",
    place: "Career Break [Focused on Blockchain Upskilling]",
    time: "Bengaluru, India (Dec. 2022 - PRESENT)",
    desp: "<li>Conducted an in-depth study of <span class='text-highlight'>blockchain architecture</span>, with a focus on Layer 1 and Layer 2 <span class='text-highlight'>scalability solutions</span>, acquiring a robust understanding of <span class='text-highlight'>consensus mechanisms</span>.</li> \
    <li>Developed a series of <span class='text-highlight'>interconnected blockchain projects</span>, progressively pushing the boundaries of my knowledge and skills in <span class='text-highlight'>end-to-end DApp development</span>.</li> \
    <li>Deployed and explored a <span class='text-highlight'>private blockchain devnet</span> (execution, consensus, and validator layers) using the <span class='text-highlight'>Kurtosis ethereum-package</span>, enabling hands-on experimentation and real-time analysis of blockchain internals, covering transaction processing, smart contract execution, data storage, state management, block production, inter-node communication and consensus for a comprehensive understanding of blockchain systems.</li> \
    <li>Engaged with various <span class='text-highlight'>open-source blockchain projects</span>, delving into source code to analyze and understand architecture, system design, and implementation of <span class='text-highlight'>blockchain protocols</span>. Building foundational expertise to contribute meaningfully to the <span class='text-highlight'>Ethereum ecosystem</span> and other blockchain projects in the future.</li>",
  },
  {
    title: "Software Development Engineer II",
    cardImage: "assets/images/experience-page/jio_fynd_logo.jpeg",
    place: "Jio Fynd [Startup - Retail Tech, On-site]",
    time: "Bengaluru, India (Aug. 2022 - Nov. 2022)",
    desp: "<li>Designed and implemented <span class='text-highlight'>Product Variants feature</span>, enabling sellers to list products with customizable attributes, enhancing user experience and expanding seller capabilities.</li> \
    <li><span class='text-highlight'>Python ~ Node.js ~ Microservices ~ Event Loop ~ Kafka ~ Redis ~ ORM ~ Solr ~ Sentry ~ New Relic ~ AWS</span></li>",
  },
  {
    title: "R&D Engineer I",
    cardImage: "assets/images/experience-page/jukshio_logo.jpeg",
    place: "Jukshio [Startup - AI, Remote]",
    time: "Hyderabad, India (Jan. 2022 - Jul. 2022)",
    desp: "<li>Developed scalable and reliable <span class='text-highlight'>RESTful APIs</span> to expose ML models, achieving a <span class='text-highlight'>95% reduction</span> in data curation time.</li> \
    <li>Designed and developed a <span class='text-highlight'>Django REST Framework</span> application, enabling employees to efficiently book and manage meeting rooms, parking slots, and workspaces.</li> \
    <li>Implemented a <span class='text-highlight'>high-performance ETL pipeline</span> using <span class='text-highlight'>Apache Airflow</span> to optimize data loading and visualization, reducing latency from <span class='text-highlight'>5 minutes to 15 seconds</span>.</li> \
    <li><span class='text-highlight'>Flask ~ Celery ~ Multithreading ~ gRPC ~ Docker ~ Kubernetes ~ RabbitMQ ~ PostgreSQL ~ Superset ~ GCP</span></li>",
  },
  {
    title: "Intern, Software Engineer I, Software Engineer II",
    cardImage: "assets/images/experience-page/philips_logo.jpeg",
    place: "Philips [MNC - Healthcare, Hybrid]",
    time: "Bengaluru, India (Jan. 2019 - Dec. 2021)",
    desp: "<li>Engineered a <span class='text-highlight'>scalable web-based dashboard</span> to enable <span class='text-highlight'>real-time monitoring</span> of infrastructure, platforms, managed services, and healthcare applications, streamlining system diagnostics and enhancing operational efficiency.</li> \
    <li>Contributed to <span class='text-highlight'>Philips' open-source initiative Nethra</span>, by developing a dashboard for actionable insights into team performance and project timelines, fostering transparency and collaboration across internal departments.</li> \
    <li>Optimized application <span class='text-highlight'>performance</span> by reducing initial load times from <span class='text-highlight'>90 seconds to 5 seconds</span> through <span class='text-highlight'>lazy initialization</span> and <span class='text-highlight'>builder design pattern</span>, enhancing user experience.</li> \
    <li><span class='text-highlight'>MongoDB ~ JavaScript ~ Bootstrap ~ Prometheus ~ Grafana ~ Terraform ~ Ansible ~ SonarQube ~ CI/CD ~ Azure</span></li>",
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
            <ul>
              ${desp}
            </ul>
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
];

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
          <!-- <a href="${href}" class="blog-slider__button">Read More</a> -->
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
