const itemsPerPage = 8;
const allCards = Array.from(document.querySelectorAll('.alat-card'));
const pagination = document.querySelector('.pagination');
const pageButtons = Array.from(document.querySelectorAll('.page-btn'));

let currentFilter = 'all';

function getFilteredCards() {
  return allCards.filter(card =>
    currentFilter === 'all' || card.classList.contains(currentFilter)
  );
}

function showPage(page) {
  const filteredCards = getFilteredCards();
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  allCards.forEach(card => card.style.display = 'none');
  filteredCards.forEach((card, index) => {
    if (index >= start && index < end) {
      card.style.display = 'block';
    }
  });

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  pageButtons.forEach((btn, idx) => {
    if (idx < totalPages) {
      btn.style.display = 'inline-block';
    } else {
      btn.style.display = 'none';
    }
    btn.classList.toggle('active', idx === page - 1);
  });

  pagination.style.display = (totalPages > 1) ? 'block' : 'none';
}

function setFilter(kategori) {
  currentFilter = kategori;
  showPage(1);
}

window.onload = () => {
  setFilter("all");
};
