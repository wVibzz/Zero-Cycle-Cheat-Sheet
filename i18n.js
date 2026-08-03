// Translation loader. Language files live in lang/<code>.json.
// Every lookup falls back to the English text already in the markup (or the
// fallback passed to t), so a missing or unreachable file degrades to English
// instead of blanking the page.
window.I18N = (function() {
  const STORAGE_KEY = 'zc-lang';
  let strings = {};

  function current() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function t(key, fallback) {
    const v = strings[key];
    return (typeof v === 'string' && v !== '') ? v : (fallback !== undefined ? fallback : key);
  }

  function apply(root) {
    (root || document).querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'), el.textContent.trim());
    });
    (root || document).querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', t(key, el.getAttribute('aria-label') || ''));
    });
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) document.title = titleEl.textContent;
  }

  const ready = fetch(`lang/${current()}.json?t=` + Date.now())
    .then(r => r.ok ? r.json() : {})
    .then(json => { strings = json || {}; })
    .catch(() => { strings = {}; })
    .then(() => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => apply());
      } else {
        apply();
      }
    });

  // Available languages from lang/index.json; English is assumed if the
  // registry cannot be read (e.g. opened over file://).
  function list() {
    return fetch('lang/index.json?t=' + Date.now())
      .then(r => r.ok ? r.json() : null)
      .then(l => (Array.isArray(l) && l.length) ? l : [{ code: 'en', name: 'English' }])
      .catch(() => [{ code: 'en', name: 'English' }]);
  }

  function set(code) {
    localStorage.setItem(STORAGE_KEY, code);
    location.reload();
  }

  return { t, apply, ready, current, list, set };
})();
