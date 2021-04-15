const closeInfoCard = () => {
  asanaContainer.style.opacity = "1";
  input.style.opacity = "1";

  infoContainer.style.animation = "asana-exit 0.4s linear forwards"

  let ct = infoContainer.childElementCount;
  for (let i = 0; i < ct; i++) {
    infoContainer.firstChild.remove();
  }
}


const createAsanaCard = (asana) => {
  const card = document.createElement("div");
  card.classList.add("col-12");
  card.classList.add("col-lg-3");
  card.classList.add("asana-card");

  let longSansName = asana.sanskrit_name;
  if (asana.sanskrit_name.length > 15) {
    longSansName = asana.sanskrit_name.substr(0, 15 ) + "...";
  }

  card.innerHTML = `${asana.english_name} <br> <span class="sanskrit-name">(${longSansName})</span> `;


  const asanaIcon = document.createElement("img");
  // asanaIcon.style.backgroundImage = `url("../assets/icons/ICON${asana.id}.png")`
  let url = `../assets/icons/ICON${asana.id}.png`;
  // ../assets/icons/ICON${asana.id}.png
  asanaIcon.setAttribute("src", url);
  asanaIcon.classList.add("asana-image");
  // if (window.innerWidth < 860) {
  //   let spcAsanasId = [4, 17, 20, 43, 25];
  //   if (spcAsanasId.includes(asana.id)) {
  //     asanaIcon.classList.remove("asana-image");
  //     asanaIcon.classList.add("asana4-image");
  //   }
  // }

  card.append(asanaIcon);

  card.addEventListener("click", () => {
    infoContainer.style.display = "block";
    // bPage.style.display = "block";
    infoContainer.style.animation = "asana-entry 0.4s linear forwards";

    //blurring out the stuff
    asanaContainer.style.opacity = "0.3";
    input.style.opacity = "0.3";

    const asanaImageContainer = document.createElement("div");
    const asanaData = document.createElement("div");
    asanaImageContainer.classList.add("asana-image-container");
    asanaImageContainer.classList.add("col-12");
    asanaImageContainer.classList.add("col-lg-5");
    asanaData.classList.add("asana-data");
    asanaData.classList.add("col-12");
    asanaData.classList.add("col-lg-7");

    const imgC = document.createElement("div");
    imgC.classList.add("img-c");
    asanaImageContainer.append(imgC);


    // const bAsanaIcon = document.createElement("img");
    infoContainer.append(asanaImageContainer, asanaData);
    // bAsanaIcon.setAttribute("src", `../assets/icons/ICON${asana.id}.png`);
    // bAsanaIcon.classList.add("info-asana-image");
    // asanaImageContainer.append(bAsanaIcon);
    imgC.style.backgroundImage = `url("../assets/icons/ICON${asana.id}.png")`;

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "&Cross;"
    asanaData.append(closeBtn);

    closeBtn.addEventListener("click", closeInfoCard);

    // const head = document.createElement("div");
    // head.classList.add("head");

    const headings = document.createElement("span");
    headings.classList.add("headings");
    headings.innerHTML = `<p>${asana.english_name}</p>`;
    asanaData.append(headings);

    const sankskritName = document.createElement("div");
    sankskritName.innerHTML = `<p>Sanskrit Name:- ${asana.sanskrit_name}</p>`;
    sankskritName.classList.add("sanskrit-name2");
    asanaData.append(sankskritName);

    const benefits = document.createElement("div");
    benefits.classList.add("benefits");
    benefits.innerHTML = `ADVANTAGES : <br/><br/>`
    asanaData.append(benefits);

    let ctr = asana.advantages.length;
    for (let i = 1; i <= ctr; i++) {
      const benefit = document.createElement("p");
      benefit.classList.add("benefit");
      benefit.innerHTML = `${i}. ${asana.advantages[i-1]}`;
      benefits.append(benefit);
    }

    const videoSection = document.createElement("div");
    videoSection.classList.add("video-section");
    // videoSection.innerHTML = `VIDEO: <br/><br/><iframe width="420" height="270" src="${asana.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    let videoLinkDesktop = `VIDEO: <br/><br/><iframe width="420" height="270" src="${asana.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    let videoLinkMobile = `VIDEO: <br/><br/><iframe width="310" height="170" src="${asana.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    if(window.innerWidth > 860){
      videoSection.innerHTML = videoLinkDesktop;
    }
    else{
      videoSection.innerHTML = videoLinkMobile;
    }
    asanaData.append(videoSection);

    const info = document.createElement("div");
    info.classList.add("video-section");
    info.innerHTML = `DESCRIPTION: <br/><br/> ${asana.description}`;
    asanaData.append(info);
  });
  return card;
}

const addAllAsanas = (data) => {
  for (let asana of data) {
    asanaContainer.append(createAsanaCard(asana));
  }
}

const clearAllAsanas = () => {
  let count = asanaContainer.childElementCount;
  for (let i = 0; i < count; i++) {
    asanaContainer.firstChild.remove();
  }
}