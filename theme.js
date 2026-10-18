/* Dark / light theme toggle — shared across all pages */
(function () {
  'use strict';

  const KEY = 'truth-theme';
  const btn = document.getElementById('themeToggle');

  function label(dark) {
    const zh = (document.documentElement.lang || 'zh-CN').indexOf('zh') === 0;
    return zh
      ? (dark ? '切换浅色模式' : '切换深色模式')
      : (dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function apply(dark, save) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    if (btn) {
      btn.textContent = dark ? '☀️' : '🌙';
      btn.setAttribute('aria-label', label(dark));
    }
    if (save) {
      try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch (e) { /* private mode */ }
    }
  }

  // The inline <head> snippet already set data-theme early (no FOUC);
  // here we just sync the button state.
  apply(document.documentElement.dataset.theme === 'dark', false);

  if (btn) {
    btn.addEventListener('click', () => {
      apply(document.documentElement.dataset.theme !== 'dark', true);
    });
  }
})();