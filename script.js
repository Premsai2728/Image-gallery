const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const modeBtn = document.getElementById('mode-btn');
let currentIndex = 0;
let slideInterval;

const captions = [
  "Tower Bridge — London, United Kingdom",
  "Golden Gate Bridge — San Francisco, USA",
  "Burj Al Arab — Dubai, United Arab Emirates",
  "Taj Mahal — Agra, India",
  "Sanctuary of Truth — Pattaya, Thailand",
  "Big Ben & Palace of Westminster — London, UK",
  "Red Fort — Delhi, India",
  "Pagoda at Nachi Falls — Japan",
  "Dal Lake — Srinagar, Kashmir, India",
  "Mount Rushmore — South Dakota, USA",
  "Sydney Skyline — Sydney, Australia",
  "Atlantis The Palm — Dubai, UAE"
];

// Open Modal
function openModal(index) {
  currentIndex = index;
  modal.style.display = 'flex';
  showImage();
  startSlideshow();
}

// Close Modal
function closeModal() {
  modal.style.display = 'none';
  clearInterval(slideInterval);
}

// Show Image
function showImage() {
  modalImg.src = images[currentIndex].src;
  captionText.innerText = captions[currentIndex];
}

// Prev Image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

// Next Image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

// Auto Slideshow
function startSlideshow() {
  slideInterval = setInterval(nextImage, 3500); 
}

// Toggle Dark/Light Mode
function toggleMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    modeBtn.innerText = 'Light Mode';
  } else {
    modeBtn.innerText = 'Dark Mode';
  }
}
