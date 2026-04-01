const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 8700,
    imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/deseretnews/3RHCSLWZOFD7ZGPHQEMZPGVP5Y.JPG"
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, June, 5",
    area: 12000,
    imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/deseretnews/NAIMUKR6ILQI2ZZMCU5VNKESRQ.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1989, December, 17",
    area: 28700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-27491.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253067,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-69474.jpg"
  },
  {
    templeName: "York England",
    location: "York, England, United Kingdom",
    dedicated: "2001, July, 20",
    area: 11200,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/London-England-Temple1a.jpg"
  }
];

const gallery = document.querySelector(".gallery");
const filterInfo = document.getElementById("filterInfo");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

function renderGallery(items) {
  gallery.innerHTML = "";

  if (!items.length) {
    gallery.innerHTML = "<p>No temples found.</p>";
    filterInfo.textContent = "No temples to display.";
    return;
  }

  items.forEach((temple) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${temple.templeName}</strong><br>
      ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq ft
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });

  filterInfo.textContent = `Showing ${items.length} temples.`;
}

function getTempleYear(temple) {
  const match = temple.dedicated.match(/\d{4}/);
  return match ? Number(match[0]) : 0;
}

function applyFilter(action) {
  let result = [...temples];
  switch (action) {
    case "old":
      result.sort((a, b) => getTempleYear(a) - getTempleYear(b));
      filterInfo.textContent = "Sorted by oldest dedication date.";
      break;
    case "new":
      result.sort((a, b) => getTempleYear(b) - getTempleYear(a));
      filterInfo.textContent = "Sorted by newest dedication date.";
      break;
    case "large":
      result.sort((a, b) => b.area - a.area);
      filterInfo.textContent = "Sorted by largest area.";
      break;
    case "small":
      result.sort((a, b) => a.area - b.area);
      filterInfo.textContent = "Sorted by smallest area.";
      break;
    default:
      filterInfo.textContent = "Showing all temples.";
  }
  renderGallery(result);
}

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  if (menuBtn.textContent === "☰") {
    menuBtn.textContent = "✖";
  } else {
    menuBtn.textContent = "☰";
  }
});

navMenu.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") return;
  event.preventDefault();

  const action = event.target.textContent.trim().toLowerCase();
  applyFilter(action);

  navMenu.querySelectorAll("a").forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");

  if (window.innerWidth < 768) {
    navMenu.classList.remove("show");
    menuBtn.textContent = "☰";
  }
});

// Footer Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Last Modified
const lastModifiedEl = document.getElementById("lastModified");
if (lastModifiedEl) lastModifiedEl.textContent = document.lastModified;

// Initialize
applyFilter("home");