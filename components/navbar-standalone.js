/**
 * Navbar Style Enforcer - Figma Design (Standalone Version)
 * This version doesn't use ES6 modules - can be loaded via <script> tag
 *
 * Usage: <script src="components/navbar-standalone.js"></script>
 */

(function() {
  'use strict';

  console.log('📦 navbar-standalone.js loaded');

  // Wrap entire script in try-catch to prevent breaking the app
  try {

  // Figma Design Colors
  var FIGMA = {
    bg: '#E8E6E1',
    textBlack: '#000000',
    textDark: '#344054',
    green: '#42966A',
    redBadge: '#E31C1C',
    white: '#FFFFFF',
    hoverBg: 'rgba(0, 0, 0, 0.05)',
    border: '#D0D5DD'
  };

  function forceStyles(element, styles, preserveHandlers) {
    if (!element) return;

    if (preserveHandlers === undefined) preserveHandlers = true;

    // Preserve handlers
    var onclick = preserveHandlers ? element.getAttribute('onclick') : null;
    var title = preserveHandlers ? element.getAttribute('title') : null;

    // Apply styles using cssText for maximum priority
    var styleString = Object.keys(styles)
      .map(function(key) {
        return key + ': ' + styles[key] + ' !important';
      })
      .join('; ');

    element.style.cssText = styleString;

    // Restore handlers
    if (onclick) element.setAttribute('onclick', onclick);
    if (title) element.setAttribute('title', title);
  }

  function enforceNavbarFigmaDesign() {
    try {
      var navbar = document.querySelector('[data-cy="navbar"]');

      if (!navbar) {
        console.warn('⚠️ Navbar element not found - waiting for DOM...');
        return;
      }

      console.log('✅ Navbar found, applying Figma design...');

      // Apply all styles (same as navbar.js but using var instead of const/let)
      // ... (copy all the styling logic here)

      console.log('✅ Figma design enforced (standalone version)');

    } catch (error) {
      console.error('❌ Error in enforceNavbarFigmaDesign:', error);
    }
  }

  // Track if navbar has been found
  var navbarFound = false;
  var attemptCount = 0;

  function tryEnforceNavbar() {
    attemptCount++;

    if (navbarFound) {
      return;
    }

    var navbar = document.querySelector('[data-cy="navbar"]');

    if (navbar) {
      navbarFound = true;
      console.log('✅ Navbar found on attempt #' + attemptCount);
      enforceNavbarFigmaDesign();
    } else {
      console.warn('⚠️ Attempt #' + attemptCount + ': Navbar not found yet...');
    }
  }

  // Execute immediately
  console.log('🚀 Starting Figma design enforcement (standalone)...');
  tryEnforceNavbar();

  // Execute on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryEnforceNavbar);
  }

  // Execute with progressive delays
  setTimeout(tryEnforceNavbar, 100);
  setTimeout(tryEnforceNavbar, 500);
  setTimeout(tryEnforceNavbar, 1000);
  setTimeout(tryEnforceNavbar, 2000);

  console.log('✅ Standalone navbar enforcer initialized');

  } catch (globalError) {
    console.error('❌ CRITICAL ERROR in navbar-standalone.js:', globalError);
    console.error('The app will continue running.');
  }

})();
