const shortlisted_template = `
<div class="shortlisted_container">
    <div class="delete">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 5.98001C17.67 5.65001 14.32 5.48001 10.98 5.48001C9 5.48001 7.02 5.58001 5.04 5.78001L3 5.98001" stroke="#F24747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#F24747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.8499 9.14001L18.1999 19.21C18.0899 20.78 17.9999 22 15.2099 22H8.7899C5.9999 22 5.9099 20.78 5.7999 19.21L5.1499 9.14001" stroke="#F24747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.3301 16.5H13.6601" stroke="#F24747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.5 12.5H14.5" stroke="#F24747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>                      
    </div>
    <img class="shortlisted_image" src="../assets/img_5.jpeg"></img>
    <div class="shortlisted_info">
    <div class="shortlisted_name">Alp Nik</div>
    <div class="shortlisted_desc">
        Likes walking dogs. Interested in watching movies. Prefers
        staying out.
    </div>
    <div class="shortlisted_details">
        <div class="left_details">
        <div class="age_highlight highlight">Age: 26</div>
        <div class="gender_highlight highlight">
            ♂️
            <div class="gender_text">MALE</div>
        </div>
        <div class="activity_status highlight">ACTIVE</div>
        <div class="budget">€250 - €750</div>
        </div>
        <button class="search_primary_button card_button">Send Invite</button>
    </div>
    </div>
</div>
`;

const matchgrid_template = `
<div class="matchmaking_grid">
    <div class="matchmaking_card">
        <div class="name">Alp Nik</div>
        <div class="details_row">
            <img class="matchmaking_image" src="../assets/img_5.jpeg"></img>
            <div class="bio">
            <div class="bio_title">Bio:</div>
            <div class="bio_text">
                Likes walking dogs. Interested in watching movies. Prefers staying out.
            </div>
            <div class="match_budget">€250 - €750</div>
            </div>
        </div>
        <div class="match_buttons">
            <button class="reject_button">Reject</button>
            <button class="search_primary_button">Shortlist</button>
        </div>
        </div>
    <div class="matchmaking_card">
        <div class="name">Alp Nik</div>
        <div class="details_row">
            <img class="matchmaking_image" src="../assets/img_5.jpeg"></img>
            <div class="bio">
            <div class="bio_title">Bio:</div>
            <div class="bio_text">
                Likes walking dogs. Interested in watching movies. Prefers staying out.
            </div>
            <div class="match_budget">€250 - €750</div>
            </div>
        </div>
        <div class="match_buttons">
            <button class="reject_button">Reject</button>
            <button class="search_primary_button">Shortlist</button>
        </div>
    </div>
    <div class="matchmaking_card">
        <div class="name">Alp Nik</div>
        <div class="details_row">
            <img class="matchmaking_image" src="../assets/img_5.jpeg"></img>
            <div class="bio">
            <div class="bio_title">Bio:</div>
            <div class="bio_text">
                Likes walking dogs. Interested in watching movies. Prefers staying out.
            </div>
            <div class="match_budget">€250 - €750</div>
            </div>
        </div>
        <div class="match_buttons">
            <button class="reject_button">Reject</button>
            <button class="search_primary_button">Shortlist</button>
        </div>
        </div>
    <div class="matchmaking_card">
        <div class="name">Alp Nik</div>
        <div class="details_row">
            <img class="matchmaking_image" src="../assets/img_5.jpeg"></img>
            <div class="bio">
            <div class="bio_title">Bio:</div>
            <div class="bio_text">
                Likes walking dogs. Interested in watching movies. Prefers staying out.
            </div>
            <div class="match_budget">€250 - €750</div>
            </div>
        </div>
        <div class="match_buttons">
            <button class="reject_button">Reject</button>
            <button class="search_primary_button">Shortlist</button>
        </div>
    </div>
</div>

`;

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".glide__slide");

  //   To enforce width as glide_slide--active overrides the width.
  slides.forEach((slide) => {
    slide.classList.remove("glide__slide--active");
    slide.style.width = "100%";
    slide.style.marginLeft = "0";
    slide.style.marginRight = "0";
  });

  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    gap: 0,
  }).mount();

  displayShortlisted();
});

const deselect = () => {
  const subsections = document.getElementsByClassName("subsection");
  for (const subsection of subsections) {
    subsection.classList.remove("selected");
  }
};

const displayShortlisted = () => {
  deselect();
  const shortlistedButton = document.getElementById("shortlisted_section");
  shortlistedButton.classList.add("selected");
  const slides = document.getElementsByClassName("glide__slide");
  for (const slide of slides) {
    slide.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      slide.innerHTML += shortlisted_template;
    }
  }
};

const displayMatchmaking = () => {
  deselect();
  const matchmakingButton = document.getElementById("fast_matches_section");
  matchmakingButton.classList.add("selected");
  const slides = document.getElementsByClassName("glide__slide");
  for (const slide of slides) {
    slide.innerHTML = matchgrid_template;
  }
};
