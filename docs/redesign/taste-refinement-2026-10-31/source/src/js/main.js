const targets=document.querySelectorAll('.product-copy>*,.ghost-visual img,.sonar-intro>*,.sonar-description>*,.sonar-screen,.studio>*,.detail-section h2,.detail-section p,.detail-section .detail-image,.app-hero h1,.app-hero p,.app-hero .screenshot-link,.access h2,.access p,.access .button,.faq h2,.faq details');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('arrived');observer.unobserve(entry.target)}}},{threshold:.1});targets.forEach(el=>observer.observe(el));}

// Mobile navigation stays visible when JavaScript is unavailable.
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('#site-links');
if (menu && links) {
  const smallScreen = window.matchMedia('(max-width: 650px)');
  const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); links.hidden = smallScreen.matches; };
  const syncMenu = () => { menu.hidden = !smallScreen.matches; closeMenu(); };
  syncMenu();
  smallScreen.addEventListener('change', syncMenu);
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!expanded));
    links.hidden = expanded;
  });
  links.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
  });
}

// Real image links are the no-script fallback; dialog adds keyboard-friendly enlargement.
if (typeof HTMLDialogElement !== 'undefined' && 'showModal' in HTMLDialogElement.prototype) {
  const viewer = document.createElement('dialog');
  viewer.className = 'screenshot-viewer';
  viewer.setAttribute('aria-label', 'Enlarged app screenshot');
  viewer.innerHTML = '<button class="viewer-close" type="button" autofocus>Close screenshot</button><p class="viewer-caption"></p><img alt="">';
  document.body.append(viewer);
  const close = () => viewer.close();
  viewer.querySelector('button').addEventListener('click', close);
  viewer.addEventListener('click', event => { if (event.target === viewer) { const rect = viewer.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close(); } });
  document.querySelectorAll('[data-screenshot]').forEach(link => link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    const source = link.querySelector('img');
    const enlarged = viewer.querySelector('img');
    enlarged.src = link.href;
    enlarged.alt = source.alt;
    viewer.querySelector('p').textContent = source.alt;
    viewer.showModal();
  }));
}
