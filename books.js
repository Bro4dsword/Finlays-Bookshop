// Add new books here. The bookshelf, gallery, reviews list, and review form dropdown all use this one list.
const books = [
  {
    title: "Finlay Goes to Gaul",
    image: "images/book1.JPG",
    imageAlt: "Cover for Finlay Goes to Gaul",
    description: "A cartoony adventure full of imagination, travelling, and heroic bookshop-level nonsense. Proper description coming soon.",
    facts: [
      "✨ Written by Finlay",
      "🎨 Cover gallery coming soon",
      "🛒 Requests handled by Donald"
    ],
    reviewAverage: null,
    reviewCount: 0
  },
  {
    title: "The Liverpool Derby",
    image: "images/book2-liverpool-derby.jpg",
    imageAlt: "Cover for The Liverpool Derby by Finlay",
    description: "A dramatic FA Cup final showdown: Everton versus Liverpool, settled on penalties. Football chaos, as all proper derbies should be.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "⚽ Everton 2 — Liverpool 12",
      "🥅 3 — 4 on pens"
    ],
    reviewAverage: null,
    reviewCount: 0
  }
];

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function ratingStars(average) {
  if (!average) {
    return "☆☆☆☆☆";
  }

  const rounded = Math.round(average * 2) / 2;
  const fullStars = Math.floor(rounded);
  const hasHalfStar = rounded % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return "⭐".repeat(fullStars) + (hasHalfStar ? "½" : "") + "☆".repeat(emptyStars);
}

function reviewSummary(book) {
  const reviewWord = book.reviewCount === 1 ? "review" : "reviews";
  return `${ratingStars(book.reviewAverage)} (${book.reviewCount} ${reviewWord})`;
}

function renderBookshelf() {
  const bookshelf = document.getElementById("bookshelf-list");
  if (!bookshelf) return;

  bookshelf.innerHTML = books.map(book => `
    <article class="book-card">
      <img src="${escapeHtml(book.image)}" alt="${escapeHtml(book.imageAlt)}" />
      <div>
        <h3>${escapeHtml(book.title)} <span class="star-rating" aria-label="${book.reviewCount} reviews">${reviewSummary(book)}</span></h3>
        <p>${escapeHtml(book.description)}</p>
        <ul class="book-facts">
          ${book.facts.map(fact => `<li>${escapeHtml(fact)}</li>`).join("")}
        </ul>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  const gallery = document.getElementById("gallery-list");
  if (!gallery) return;

  gallery.innerHTML = books.map(book => `
    <figure><img src="${escapeHtml(book.image)}" alt="${escapeHtml(book.imageAlt)}"><figcaption>${escapeHtml(book.title)}</figcaption></figure>
  `).join("") + '<figure class="coming-soon">Character art soon!</figure>';
}

function renderReviewsList() {
  const reviewsList = document.getElementById("reviews-list");
  if (!reviewsList) return;

  reviewsList.innerHTML = books.map(book => `
    <h3>${escapeHtml(book.title)} <span class="star-rating" aria-label="${book.reviewCount} reviews">${reviewSummary(book)}</span></h3>
    <p>No reviews yet. Be the first!</p>
  `).join("");
}

function renderReviewOptions() {
  const bookSelect = document.getElementById("review-book-title");
  if (!bookSelect) return;

  bookSelect.innerHTML = '<option value="">Choose a book...</option>' +
    books.map(book => `<option value="${escapeHtml(book.title)}">${escapeHtml(book.title)}</option>`).join("") +
    '<option value="Other">Other (please specify in review text)</option>';
}

renderBookshelf();
renderGallery();
renderReviewsList();
renderReviewOptions();
