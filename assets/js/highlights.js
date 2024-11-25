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
AOS.init();
const fillData = () => {
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
document.addEventListener("DOMContentLoaded", fillData);
