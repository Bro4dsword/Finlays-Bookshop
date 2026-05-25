// Add new books here. The bookshelf, gallery, reviews list, and review form dropdown all use this one list.
const books = [
  {
    title: "Finlay Goes to Gaul",
    image: "images/book1.JPG",
    imageAlt: "Cover for Finlay Goes to Gaul",
    description: "A cartoony adventure full of imagination, travelling, and heroic library-level nonsense. Proper description coming soon.",
    facts: [
      "✨ Written by Finlay",
      "🎨 Cover gallery coming soon",
      "🛒 Requests handled by Donald"
    ],
    reviews: [
      {
        rating: 5,
        reviewer: "Daddy",
        text: "Loved it! Brought me back to my youth!"
      }
    ]
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
    reviews: [
      {
        rating: 5,
        reviewer: "Finlay Lamb",
        text: "This is my favourite book includes my team Liverpool I love it 😻❤️❤️❤️❤️❤️❤️"
      }
    ]
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

function reviewCount(book) {
  return book.reviews.length;
}

function reviewAverage(book) {
  if (reviewCount(book) === 0) {
    return null;
  }

  const total = book.reviews.reduce((sum, review) => sum + review.rating, 0);
  return total / reviewCount(book);
}

function reviewSummary(book) {
  const count = reviewCount(book);
  const reviewWord = count === 1 ? "review" : "reviews";
  return `${ratingStars(reviewAverage(book))} (${count} ${reviewWord})`;
}

function renderBookshelf() {
  const bookshelf = document.getElementById("bookshelf-list");
  if (!bookshelf) return;

  bookshelf.innerHTML = books.map(book => `
    <article class="book-card">
      <img src="${escapeHtml(book.image)}" alt="${escapeHtml(book.imageAlt)}" />
      <div>
        <h3>${escapeHtml(book.title)} <span class="star-rating" aria-label="${reviewCount(book)} reviews">${reviewSummary(book)}</span></h3>
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
    <h3>${escapeHtml(book.title)} <span class="star-rating" aria-label="${reviewCount(book)} reviews">${reviewSummary(book)}</span></h3>
    ${book.reviews.length === 0
      ? "<p>No reviews yet. Be the first!</p>"
      : book.reviews.map(review => `
        <blockquote>
          <p>${escapeHtml(review.text)}</p>
          <footer>${ratingStars(review.rating)} — ${escapeHtml(review.reviewer)}</footer>
        </blockquote>
      `).join("")
    }
  `).join("");
}

function renderReviewOptions() {
  const bookSelect = document.getElementById("review-book-title");
  if (!bookSelect) return;

  bookSelect.innerHTML = '<option value="">Choose a book...</option>' +
    books.map(book => `<option value="${escapeHtml(book.title)}">${escapeHtml(book.title)}</option>`).join("") +
    '<option value="Other">Other (please specify in review text)</option>';
}

function attachReviewEmailHandler() {
  const reviewForm = document.getElementById("review-form");
  if (!reviewForm) return;

  reviewForm.addEventListener("submit", event => {
    event.preventDefault();

    const bookTitle = document.getElementById("review-book-title").value;
    const starRating = document.getElementById("review-star-rating").value;
    const reviewerName = document.getElementById("reviewer-name").value.trim();
    const reviewText = document.getElementById("review-text").value.trim();

    const subject = `Review approval request: ${bookTitle}`;
    const body = `Approve this review:
Book: ${bookTitle}
Rating: ${starRating} stars
Reviewer: ${reviewerName}
Review: ${reviewText}`;

    window.location.href = `mailto:donlamb@compuserve.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

renderBookshelf();
renderGallery();
renderReviewsList();
renderReviewOptions();
attachReviewEmailHandler();
