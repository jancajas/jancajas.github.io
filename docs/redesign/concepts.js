const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });
document.querySelectorAll('.work h2, .product h3, .product p, .product .btn, .product img, .about h2, .about p, .about a').forEach(element => observer.observe(element));
