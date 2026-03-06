/* ── Nav scroll shadow ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

/* ── Dock-stack card interaction ── */
const stack = document.getElementById('cardStack');
const cards = Array.from(stack.querySelectorAll('.bento-card'));

function activate(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('is-active', i === index);
  });
}

function deactivate() {
  cards.forEach(card => card.classList.remove('is-active'));
}

cards.forEach((card, i) => {
  card.addEventListener('mouseenter', () => activate(i));
});

stack.addEventListener('mouseleave', deactivate);

/* ── Touch / tap support for mobile ── */
cards.forEach((card, i) => {
  card.addEventListener('click', (e) => {
    // If this card is already active, follow the CTA link if clicked on it
    if (card.classList.contains('is-active')) return;
    e.preventDefault();
    activate(i);
  });
});
