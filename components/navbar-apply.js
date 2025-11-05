/**
 * Simple Navbar Style Applier
 * No loops, no observers, just simple one-time application
 */

console.log('📦 navbar-apply.js loaded');

(function() {
  'use strict';

  // Simple function - runs once when called
  function applyNavbarStyles() {
    console.log('🎨 Applying navbar styles...');

    var navbar = document.querySelector('[data-cy="navbar"]');

    if (!navbar) {
      console.warn('⚠️ Navbar not found');
      return;
    }

    console.log('✅ Navbar found');

    // Just add a class to enable styles
    navbar.classList.add('figma-styled');

    // Force navbar to stay expanded
    var collapse = navbar.querySelector('.navbar-collapse');
    if (collapse) {
      collapse.classList.add('show');
      collapse.classList.remove('collapse', 'collapsing');
    }

    console.log('✅ Styles applied');
  }

  // Try once immediately
  applyNavbarStyles();

  // Try once on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      console.log('📄 DOM loaded, applying styles...');
      applyNavbarStyles();
    });
  }

  // Try once on window load (final fallback)
  window.addEventListener('load', function() {
    console.log('🪟 Window loaded, applying styles...');
    applyNavbarStyles();
  });

  console.log('✅ navbar-apply.js initialized');

})();
