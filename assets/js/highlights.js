/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Metric Analyzer for Kannada Verse Using Rule-Based Approach.",
    authors: "Anup Shetty, Prathibha RJ, Juned S, Shashank BV, Manju Skanda KH",
    publicationUrl: "https://doi.org/10.1166/jctn.2020.9009",
    conferences:
      "Journal of Computational and Theoretical Nanoscience, Volume 17, Numbers 9-10, September/October 2020, pp. 4007-4011(5).",
    researchYr: "2020, JSS Science and Technology University, Mysuru",
    citebox: "popup1",
    image: "assets/images/highlights-page/chandassu_research.png",
    citation: {
      vancouver:
        "Anup Shetty, Prathibha RJ, Juned S, Shashank BV, Manju Skanda KH. <br/> Metric Analyzer for Kannada Verse Using Rule-Based Approach. <br/> Journal of Computational and Theoretical Nanoscience, Volume 17, Numbers 9-10, September/October 2020, pp. 4007-4011(5).",
    },
    abstract:
      "Metrical poetry in any language is called Chandassu (ಛಂದಸ್ಸು). It generates rhythm to poem when the predefined metric rules are properly followed. The classification of Chandassu is done with the help of syllables known as Laghu (ಲಘು), Guru (ಗುರು) and Gana (ಗಣ). <br/> The proposed metric analyzer for Kannada verse is a rule-based teaching and learning tool devised to identify and classify the Chandassu of Kannada poems. This tool also contains an exercise module to test the level of understanding of learners about metric analysis. Accuracy obtained by the proposed system is very good.",
    absbox: "absPopup1",
  },
];

const awardswiper = document.querySelector(".swiper-wrapper");
const award = [
  // eslint-disable-next-line linebreak-style
  {
    title: "Recognition - Philips",
    image: "assets/images/highlights-page/philips_ownership_award.jpeg",
  },
  {
    title: "Hackathon - Philips",
    image: "assets/images/highlights-page/philips_team_up_award.jpeg",
  },
  {
    title: "Finalist - Graduation Project",
    image: "assets/images/highlights-page/chandassu_award.jpeg",
  },
  {
    title: "Won Coding Event - Graduation",
    image: "assets/images/highlights-page/jss_bug_c_award.jpeg",
  },
  {
    title: "Competitive Coding Workshop",
    image: "assets/images/highlights-page/jss_workshop.jpeg",
  },
  // {
  //   title: "Yoga Participation",
  //   image: "assets/images/highlights-page/yoga_participation.jpeg",
  // },
];

AOS.init();
const researchFillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      publicationUrl,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${publicationUrl}" class="paperTitle" target="_blank"> ${title} </a> 
                    <br/><br/>
                    <div class = "authors"> ${authors} </div> 
                    <br/>
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                      <div>
                      <a href="${publicationUrl}" class="paperTitle" target="_blank"> 
                        <button class="button button-accent button-small text-right button-abstract " type="button">
                        VIEW PUBLICATION
                        </button>
                      </a>
                      </div>

                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", researchFillData);

function awardFillData() {
  let output = "";
  for (let x = 0; x < award.length; x++) {
    output += `
  <div class="swiper-slide">
  <div class="img-container">
    <img src=${award[x].image} alt="" class="img-fluid" />
  </div>
  <div class="container arrow_contain">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="wrapper">
          <div class="content">
            <div class="title">
              <div class="text-wrapper">
                <div class="text-inner">
                ${award[x].title}
                </div>
              </div>
            </div>
          </div>
        </div>
       </div> 
        <!-- wraper freee -->
    </div>
  </div>
</div>`;
  }
  awardswiper.innerHTML = output;
}
document.addEventListener("DOMContentLoaded", awardFillData());

const parallaxSliderOptions = {
  speed: 1000,
  effect: "coverflow",
  autoplay: false,
  parallax: true,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 30,
    depth: 20,
    stretch: 0,
    modifier: 1,
    slideShadows: true,
  },
  // parallax effect
  on: {
    init: function () {
      const swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        $(swiper.slides[i])
          .find(".img-container")
          .attr({
            "data-swiper-parallax": 0.75 * swiper.width,
            "data-swiper-paralalx-opacity": 0.5,
          });
      }
      const index = swiper.activeIndex;
      $(swiper.slides).removeClass("active");
      $(swiper.slides[index]).addClass("active");
    },
    transitionEnd: function () {
      const swiper = this;
      const index = swiper.activeIndex;
      $(swiper.slides).removeClass("active");
      $(swiper.slides[index]).addClass("active");
    },
    resize: function () {
      this.update();
    },
  },
  navigation: {
    nextEl: ".image-slider .next-ctrl",
    prevEl: ".image-slider .prev-ctrl",
  },
};
// initializing swiper
const slider = new Swiper(".image-slider", parallaxSliderOptions);
