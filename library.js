// Add new books here. The bookshelf, reviews list, and review form dropdown all use this one list.
const books = [
  {
    title: "Birds of Harperrig",
    image: "images/birds-of-harperrig.png",
    imageAlt: "Cover for Birds of Harperrig by Finlay",
    description: "Chirp, chirp! Welcome to Birds of Harperrig! Get ready to discover oodles of feathered friends, fluttery facts, and so much more!",
    facts: [
      "✨ Written and illustrated by Finlay",
      "🐦 Harperrig bird facts",
      "🌿 Feathered friends"
    ],
    reviews: []
  },
  {
    title: "Laugh Your Way Around Scotland",
    image: "images/laugh-your-way-around-scotland.png",
    imageAlt: "Cover for Laugh Your Way Around Scotland by Finlay",
    description: "Get ready to giggle your way through Scotland! Discover amazing animals, yummy food, super-silly weather, and loads more funny facts about this wonderful country.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "🌍 Funny Scotland facts",
      "🌦️ Weird weather and silly facts"
    ],
    reviews: []
  },
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
  },
  {
    title: "Rob the Lobster goes on Holiday",
    image: "images/rob-the-lobster-holiday.jpg",
    imageAlt: "Cover for Rob the Lobster goes on Holiday by Finlay",
    description: "Rob the Lobster heads off for a sunny seaside holiday, ready for waves, surprises, and a shellfish amount of adventure.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "🦞 Holiday adventure",
      "🌊 Seaside story"
    ],
    reviews: [
      {
        rating: 5,
        reviewer: "Finlay Lamb",
        text: "Lovely\nThis is such a good book. I guarantee you should get it."
      }
    ]
  },
  {
    title: "The Family Mystery",
    image: "images/the-family-mystery.jpg",
    imageAlt: "Cover for The Family Mystery by Finlay",
    description: "A family detective story with clues, suspicious looks, and a mystery that needs solving before anyone can relax.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "🕵️ Mystery adventure",
      "🔎 Clues to discover"
    ],
    reviews: []
  },
  {
    title: "The Lonely Gnome",
    image: "images/the-lonely-gnome.jpg",
    imageAlt: "Cover for The Lonely Gnome by Finlay",
    description: "A sad little gnome stands alone in the garden, waiting for friendship, kindness, and maybe a much better day.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "🍄 Garden story",
      "💛 Friendship theme"
    ],
    reviews: []
  },
  {
    title: "The Edinburgh Derby",
    image: "images/the-edinburgh-derby.jpg",
    imageAlt: "Cover for The Edinburgh Derby by Finlay",
    description: "Hearts and Hibs meet in an Edinburgh derby packed with rivalry, goals, and proper football drama.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "⚽ Hearts v Hibs",
      "🏟️ Edinburgh football story"
    ],
    reviews: []
  },
  {
    title: "Five stories",
    image: "images/five-stories.jpg",
    imageAlt: "Cover for Five stories by Finlay",
    description: "A collection of five Finlay stories gathered together in one book, full of different ideas, characters, and adventures.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "📚 Story collection",
      "5️⃣ Five stories inside"
    ],
    reviews: []
  },
  {
    title: "The Weird Fish!",
    image: "images/01-the-weird-fish.jpg",
    imageAlt: "Cover for The Weird Fish! by Finlay",
    description: "Finlay and Daddy head out for a quiet fishing trip, but the fish they meet is anything but ordinary. It may be weird, it may be wiggly, and it might just become their strangest new friend.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "🎣 Fishing adventure",
      "🐟 Unexpected friend"
    ],
    reviews: []
  },
  {
    title: "The Strange Weird Phone Call",
    image: "images/02-the-strange-weird-phone-call.jpg",
    imageAlt: "Cover for The Strange Weird Phone Call by Finlay",
    description: "Finlay answers a very strange phone call and suddenly everyone seems to think he is the perfect person for a very important job. Nobody warned him there might be speeches, decisions, and possibly biscuits.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "☎️ Mystery phone call",
      "🍪 Important job"
    ],
    reviews: []
  },
  {
    title: "The Mystery Phone Call",
    image: "images/03-the-mystery-phone-call.jpg",
    imageAlt: "Cover for The Mystery Phone Call by Finlay",
    description: "Finlay gets another mysterious phone call, and this time it sends him straight into the middle of a very important football match. There are big crowds, bigger nerves, and probably someone shouting instructions from the sidelines.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "☎️ Mystery phone call",
      "⚽ Football adventure"
    ],
    reviews: []
  },
  {
    title: "The Magic Lawnmower",
    image: "images/04-the-magic-lawnmower.jpg",
    imageAlt: "Cover for The Magic Lawnmower by Finlay",
    description: "PapaD only meant to fix the lawnmower, but after some new wheels go on, it suddenly has plans of its own. The grass had better look busy.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "🛠️ PapaD project",
      "🌱 Garden chaos"
    ],
    reviews: [
      {
        rating: 5,
        reviewer: "Finlay Lamb",
        text: "Loved it"
      },
      {
        rating: 5,
        reviewer: "Donald Lamb",
        text: "Excellent! 😊"
      }
    ]
  },
  {
    title: "Michael the Magic Mouse",
    image: "images/05-michael-the-magic-mouse.jpg",
    imageAlt: "Cover for Michael the Magic Mouse by Finlay",
    description: "Finlay and Dad are ready for a football match when they discover something very unexpected under the ball: Michael the Magic Mouse. He may be tiny, but he is definitely joining the team.",
    facts: [
      "✨ Written and illustrated by Finlay",
      "🐭 Magic mouse",
      "⚽ Football friend"
    ],
    reviews: []
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
renderReviewsList();
renderReviewOptions();
attachReviewEmailHandler();
