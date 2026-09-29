(() => {
  const PHONE = '919945733200';
  const SITE_NAME = 'Vishal Park Phase 4';

  // Optional Google Ads / GA4 integration.
  // Add your Google tag to <head> only after you have the correct measurement ID.
  const GOOGLE_TAG_ID = '';

  if (GOOGLE_TAG_ID) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GOOGLE_TAG_ID)}`;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GOOGLE_TAG_ID, { anonymize_ip: true });
  }

  const track = (name, params = {}) => {
    const payload = { event: name, page: location.pathname, ...params };
    if (Array.isArray(window.dataLayer)) window.dataLayer.push(payload);
    if (GOOGLE_TAG_ID && typeof window.gtag === 'function') {
      window.gtag('event', name, params);
    }
  };

  document.querySelectorAll('[data-track]').forEach(link => {
    link.addEventListener('click', () => track('contact_action', { action: link.dataset.track }));
  });

  const menuBtn = document.querySelector('.menu');
  const mobileMenu = document.querySelector('#mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!open));
      mobileMenu.hidden = open;
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.hidden = true;
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  const leadForm = document.querySelector('#leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const fd = new FormData(leadForm);
      const name = String(fd.get('name') || '').trim();
      const phone = String(fd.get('phone') || '').trim();
      const requirement = String(fd.get('requirement') || 'Plot enquiry').trim();
      const message = String(fd.get('message') || '').trim();
      const text = [
        `Hi, I’m interested in ${SITE_NAME} in Hubballi.`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Requirement: ${requirement}`,
        message ? `Message: ${message}` : '',
        'Please share current plot sizes, price, availability and site-visit details.'
      ].filter(Boolean).join('\n');
      track('whatsapp_lead', { requirement });
      window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    });
  }

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
