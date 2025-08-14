const sectors = {
    "Online Banks": [
      { name: "Monzo", link: "https://monzo.com/referral-link" },
      { name: "Revolut", link: "https://revolut.com/referral-link" }
    ],
    "Betting Offers": [
      { name: "Bet365 Signup £30 Free", link: "https://bet365.com/ref" }
    ],
    "Shopping Bonuses": [
      { name: "TopCashback £10 Offer", link: "https://topcashback.co.uk/ref" },
      { name: "Quidco £15 Signup", link: "https://quidco.com/ref" }
    ],
    "Crypto Rewards": [
      { name: "Coinbase", link: "https://coinbase.com/join" },
      { name: "Swissborg", link: "https://swissborg.com/referral" }
    ]
  };
  
  const container = document.getElementById("referral-sectors");
  
  Object.entries(sectors).forEach(([sector, links]) => {
    const section = document.createElement("section");
    section.className = "sector";
  
    const heading = document.createElement("h2");
    heading.className = "sector-title";
    heading.textContent = sector;
    section.appendChild(heading);
  
    links.forEach(({ name, link }) => {
      const a = document.createElement("a");
      a.href = link;
      a.className = "affiliate-button";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = name;
  
      // Track clicks (optional future integration)
      a.addEventListener("click", () => {
        console.log(`Clicked: ${name}`);
      });
  
      // QR toggle
      const qrToggle = document.createElement("button");
      qrToggle.textContent = "📱 Show QR";
      qrToggle.className = "qr-toggle";
  
      const qrImg = document.createElement("img");
      qrImg.src = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(link)}`;
      qrImg.className = "qr-img";
      qrImg.style.display = "none";
  
      qrToggle.onclick = () => {
        qrImg.style.display = qrImg.style.display === "none" ? "block" : "none";
      };
  
      section.appendChild(a);
      section.appendChild(qrToggle);
      section.appendChild(qrImg);
    });
  
    container.appendChild(section);
  });
  