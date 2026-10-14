// Deer Park Lumber independent website concept — vanilla JavaScript, no tracking.
(() => {
  'use strict';
  const $ = (q, root = document) => root.querySelector(q);
  const $$ = (q, root = document) => [...root.querySelectorAll(q)];
  const navToggle = $('.nav-toggle');
  const navLinks = $('#main-nav');
  if (navToggle && navLinks) {
    const closeMenu = () => {navLinks.classList.remove('open'); navToggle.classList.remove('active'); navToggle.setAttribute('aria-expanded', 'false');};
    navToggle.addEventListener('click', () => {
      const opening = !navLinks.classList.contains('open');
      navLinks.classList.toggle('open', opening);
      navToggle.classList.toggle('active', opening);
      navToggle.setAttribute('aria-expanded', String(opening));
    });
    $$('#main-nav a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => {if (e.key === 'Escape') closeMenu();});
    window.addEventListener('resize', () => {if (innerWidth > 940) closeMenu();});
  }
  const header = $('#header');
  if (header) window.addEventListener('scroll', () => header.classList.toggle('stuck', scrollY > 50), {passive:true});
  const year = $('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  // Client-side category filtering: no external data or inventory claims.
  const search = $('#product-search');
  const cards = $$('[data-product-card]');
  const count = $('#result-count');
  const noResults = $('#no-results');
  function filterProducts() {
    if (!search) return;
    const term = search.value.toLowerCase().trim();
    let visible = 0;
    cards.forEach(card => {
      const matches = !term || card.dataset.search.includes(term);
      card.hidden = !matches;
      visible += Number(matches);
    });
    if (count) count.textContent = `SHOWING ${visible} OF ${cards.length} MATERIAL CATEGORIES`;
    if (noResults) noResults.hidden = visible !== 0;
  }
  if (search) {
    search.addEventListener('input', filterProducts);
    $('#clear-search')?.addEventListener('click', () => {search.value=''; filterProducts(); search.focus();});
    filterProducts();
  }
  // Quote form is intentionally email-draft only: no backend or storage.
  const form = $('#quote-form');
  const feedback = $('#form-feedback');
  const validate = () => {
    const data = new FormData(form);
    const mustHave = ['name','email','phone','message'];
    let firstBad = null;
    mustHave.forEach(name => {
      const el = form.elements[name];
      const value = String(data.get(name) || '').trim();
      const valid = !!value && (name !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
      el.setAttribute('aria-invalid', String(!valid));
      if (!valid && !firstBad) firstBad = el;
    });
    if (firstBad) {
      feedback.textContent = 'Please complete your name, valid email, phone, and material list.';
      feedback.className = 'form-feedback error';
      firstBad.focus();
      return null;
    }
    return data;
  };
  function buildMessage(data) {
    return `DEER PARK LUMBER — MATERIAL INQUIRY\n\nName: ${data.get('name') || ''}\nCompany: ${data.get('company') || ''}\nEmail: ${data.get('email') || ''}\nPhone: ${data.get('phone') || ''}\nCategory: ${data.get('category') || ''}\nTarget Date: ${data.get('date') || 'Not specified'}\n\nMATERIALS / PROJECT NOTES\n${data.get('message') || ''}\n\nPrepared from an independent website redesign concept. Please confirm prices, availability, and fulfillment directly with Deer Park Lumber.`;
  }
  if (form) {
    form.addEventListener('submit', ev => {
      ev.preventDefault();
      const data = validate();
      if (!data) return;
      const subject = encodeURIComponent(`Material inquiry — ${String(data.get('company') || data.get('name')).trim()}`);
      const body = encodeURIComponent(buildMessage(data));
      const recipient = 'jhatfield@deerparklumber.com';
      feedback.textContent = 'Opening your email app with a prepared draft. Review and send it there; nothing has been submitted automatically.';
      feedback.className = 'form-feedback';
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
    $('#copy-inquiry')?.addEventListener('click', async () => {
      const data = validate();
      if (!data) return;
      const message = buildMessage(data);
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(message);
        feedback.textContent = 'Inquiry copied. Paste it into an email or share it with Deer Park Lumber by phone.';
        feedback.className = 'form-feedback';
      } catch {
        const textarea = form.elements.message;
        textarea.focus(); textarea.select();
        feedback.textContent = 'Clipboard access is unavailable here. Select and copy your project notes, or use the email-draft button.';
        feedback.className = 'form-feedback';
      }
    });
  }
})();
