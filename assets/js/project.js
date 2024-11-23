AOS.init();
/* Project Cards */

const blockchainProjectcards = document.querySelector(
  ".blockchain-projectcards"
);
const graduationProjectcards = document.querySelector(
  ".graduation-projectcards"
);
const hobbyProjectcards = document.querySelector(".hobby-projectcards");

// Array of object for projects
const blockchainProjects = [
  {
    title: "Blockchain Network",
    cardImage: "assets/images/project-page/blockchain.png",
    description: "A simple blockchain network implementation in JavaScript.",
    Previewlink: "https://github.com/anuprshetty/blockchain",
    Githublink: "https://github.com/anuprshetty/blockchain",
  },
  {
    title: "NFT Minter",
    cardImage: "assets/images/project-page/nft_minter.jpeg",
    description: "A dapp for minting NFTs.",
    Previewlink: "https://nft-minter.onrender.com/",
    Githublink: "https://github.com/anuprshetty/nft_minter",
  },
  {
    title: "NFT Staker",
    cardImage: "assets/images/project-page/nft_staker.jpg",
    description: "A dapp for staking NFTs.",
    Previewlink: "https://github.com/anuprshetty/nft_staker",
    Githublink: "https://github.com/anuprshetty/nft_staker",
  },
  {
    title: "NFT Marketplace",
    cardImage: "assets/images/project-page/nft_marketplace.avif",
    description: "A dapp for selling and purchasing NFTs.",
    Previewlink: "https://github.com/anuprshetty/nft_marketplace",
    Githublink: "https://github.com/anuprshetty/nft_marketplace",
  },
  {
    title: "NFT Bridge",
    cardImage: "assets/images/project-page/nft_bridge.jpg",
    description: "A dapp for moving NFTs from one blockchain to another.",
    Previewlink: "https://github.com/anuprshetty/nft_bridge",
    Githublink: "https://github.com/anuprshetty/nft_bridge",
  },
  {
    title: "Hash Wallet",
    cardImage: "assets/images/project-page/hash_wallet.png",
    description: "A crypto wallet (chrome extension) for web3 development.",
    Previewlink: "https://github.com/anuprshetty/hash_wallet",
    Githublink: "https://github.com/anuprshetty/hash_wallet",
  },
  {
    title: "Hardhat Network",
    cardImage: "assets/images/project-page/hardhat_network.jpeg",
    description: "Hardhat network deployment on docker container.",
    Previewlink: "https://github.com/anuprshetty/hardhat_network",
    Githublink: "https://github.com/anuprshetty/hardhat_network",
  },
  {
    title: "IPFS Node",
    cardImage: "assets/images/project-page/ipfs_node.png",
    description: "IPFS node deployment on docker container.",
    Previewlink: "https://github.com/anuprshetty/ipfs_node",
    Githublink: "https://github.com/anuprshetty/ipfs_node",
  },
  {
    title: "Dwitter",
    cardImage: "assets/images/project-page/dwitter.png",
    description: "A decentralized Twitter.",
    Previewlink: "https://github.com/anuprshetty/dwitter",
    Githublink: "https://github.com/anuprshetty/dwitter",
  },
];

const graduationProjects = [
  {
    title: "Chandassu",
    cardImage: "assets/images/project-page/chandassu.png",
    description:
      "Prosody analysis and identification of metrics for Kannada verses using rule-based approach.",
    Previewlink: "https://chandassu.onrender.com/",
    Githublink: "https://github.com/anuprshetty/chandassu",
  },
];

const hobbyProjects = [
  {
    title: "Chatbox",
    cardImage: "assets/images/project-page/chatbox.png",
    description: "An instant messaging app.",
    Previewlink: "https://chatbox-51xp.onrender.com/",
    Githublink: "https://github.com/anuprshetty/chatbox",
  },
  {
    title: "Sudoku Solver",
    cardImage: "assets/images/project-page/sudoku_solver.png",
    description: "An app that solves any sudoku puzzle.",
    Previewlink: "https://anuprshetty.github.io/sudoku_solver/",
    Githublink: "https://github.com/anuprshetty/sudoku_solver",
  },
  {
    title: "Meetup",
    cardImage: "assets/images/project-page/meetup.png",
    description: "A web application.",
    Previewlink: "https://github.com/anuprshetty/meetup",
    Githublink: "https://github.com/anuprshetty/meetup",
  },
  {
    title: "My Age Viewer",
    cardImage: "assets/images/project-page/my_age_viewer.png",
    description: "A web application.",
    Previewlink: "https://anuprshetty.github.io/my_age_viewer/",
    Githublink: "https://github.com/anuprshetty/my_age_viewer",
  },
  {
    title: "Guess The Word",
    cardImage: "assets/images/project-page/guess_the_word.png",
    description: "A game of guessing an unknown word.",
    Previewlink: "https://anuprshetty.github.io/guess_the_word/",
    Githublink: "https://github.com/anuprshetty/guess_the_word",
  },
  {
    title: "Tic Tac Toe",
    cardImage: "assets/images/project-page/tic_tac_toe.png",
    description: "A console based game to play with computer.",
    Previewlink: "https://github.com/anuprshetty/tic_tac_toe",
    Githublink: "https://github.com/anuprshetty/tic_tac_toe",
  },
];

// function for rendering project cards data
const showCards = (projects, projectcards) => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) => {
      output += `       
        <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
                <div class="description">${description}</div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
    }
  );
  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", () => {
  const projectPairs = [
    {
      projects: blockchainProjects,
      projectcards: blockchainProjectcards,
    },
    {
      projects: graduationProjects,
      projectcards: graduationProjectcards,
    },
    {
      projects: hobbyProjects,
      projectcards: hobbyProjectcards,
    },
  ];

  projectPairs.forEach(({ projects, projectcards }) =>
    showCards(projects, projectcards)
  );
});
