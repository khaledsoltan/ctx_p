/**
 * Navbar Style Enforcer - Figma Design
 * Forces all navbar elements to match Figma design using JavaScript
 * No new elements - just overrides existing styles
 */

console.log('📦 navbar.js loaded successfully');

(function() {
  'use strict';

  console.log('🔧 Navbar enforcer IIFE executing...');

  // Wrap entire script in try-catch to prevent breaking the app
  try {

  // Figma Design Colors
  const FIGMA = {
    bg: '#E8E6E1',
    textBlack: '#000000',
    textDark: '#344054',
    green: '#42966A',
    redBadge: '#E31C1C',
    white: '#FFFFFF',
    hoverBg: 'rgba(0, 0, 0, 0.05)',
    border: '#D0D5DD'
  };

  function forceStyles(element, styles, preserveHandlers = true) {
    if (!element) return;

    // Preserve handlers
    const onclick = preserveHandlers ? element.getAttribute('onclick') : null;
    const title = preserveHandlers ? element.getAttribute('title') : null;

    // Apply styles using cssText for maximum priority
    const styleString = Object.entries(styles)
      .map(([key, value]) => `${key}: ${value} !important`)
      .join('; ');
    element.style.cssText = styleString;

    // Restore handlers
    if (onclick) element.setAttribute('onclick', onclick);
    if (title) element.setAttribute('title', title);
  }

  function enforceNavbarFigmaDesign() {
    try {
      const navbar = document.querySelector('[data-cy="navbar"]');

      if (!navbar) {
        console.warn('⚠️ Navbar element not found - waiting for DOM...');
        return;
      }

      console.log('✅ Navbar found, applying Figma design...');

    // 1. NAVBAR - Force background and layout
    forceStyles(navbar, {
      'background-color': FIGMA.bg,
      'background': FIGMA.bg,
      'border-bottom': `1px solid ${FIGMA.border}`,
      'box-shadow': '0 2px 4px rgba(0, 0, 0, 0.04)',
      'min-height': '64px',
      'padding': '0'
    }, false);

    // 2. CONTAINER - Force layout
    const container = navbar.querySelector('.container-fluid');
    if (container) {
      forceStyles(container, {
        'max-width': '1440px',
        'margin': '0 auto',
        'padding': '0 24px',
        'height': '64px'
      }, false);
    }

    // 3. BRAND LINK - Remove padding
    const brandLink = navbar.querySelector('.navbar-brand a');
    if (brandLink) {
      forceStyles(brandLink, {
        'padding': '0',
        'display': 'flex',
        'align-items': 'center'
      }, false);
    }

    // 4. MENU CONTAINER - Centralize menu items (DATA, VIEW, TOOLS)
    const mainNav = navbar.querySelector('.navbar-collapse > .navbar-nav:first-child');
    if (mainNav) {
      forceStyles(mainNav, {
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'flex': '1',
        'gap': '32px',
        'margin': '0',
        'width': 'auto'
      }, false);
      console.log('✅ Menu items centralized');
    } else {
      console.warn('⚠️ Menu container not found');
    }

    // 5. MENU ITEMS - Force text style
    const menuLinks = navbar.querySelectorAll('.navbar-nav .nav-item .nav-link');
    menuLinks.forEach(link => {
      forceStyles(link, {
        'color': FIGMA.textBlack,
        'font-size': '16px',
        'font-weight': '500',
        'padding': '8px 16px',
        'text-transform': 'capitalize',
        'border-radius': '6px',
        'background': 'transparent'
      }, false);
    });

    // 6. SHOPPING CART - Keep in place, don't move it
    // User requested to NOT override/move the shopping cart button
    console.log('✅ Shopping cart kept in original position (not moved)');

    // 7. SHOPPING CART ICON - Force icon color
    const cartSvg = document.querySelector('.fa-shopping-cart');
    if (cartSvg) {
      cartSvg.removeAttribute('color');
      cartSvg.removeAttribute('style');
      forceStyles(cartSvg, {
        'color': FIGMA.textDark,
        'fill': FIGMA.textDark,
        'width': '20px',
        'height': '20px'
      }, false);
    }

    // Cart wrapper
    const cartWrapper = document.querySelector('.navbar-nav.ml-auto > a > div, .navbar-nav.ms-auto > a > div');
    if (cartWrapper) {
      forceStyles(cartWrapper, {
        'position': 'relative',
        'display': 'inline-block',
        'padding-right': '10px'
      }, false);
    }

    // 8. SHOPPING CART BADGE - Force red badge
    const cartBadge = document.querySelector('.shopping-cart-counter');
    if (cartBadge) {
      forceStyles(cartBadge, {
        'position': 'absolute',
        'top': '-4px',
        'right': '-4px',
        'background-color': FIGMA.redBadge,
        'color': FIGMA.white,
        'font-size': '11px',
        'font-weight': '600',
        'line-height': '1',
        'padding': '3px 6px',
        'border-radius': '10px',
        'min-width': '20px',
        'text-align': 'center',
        'border': `2px solid ${FIGMA.bg}`
      }, false);
    }

    // 9. USER ICON - Force icon color
    const userSvg = navbar.querySelector('.fa-user');
    if (userSvg) {
      userSvg.removeAttribute('color');
      forceStyles(userSvg, {
        'color': FIGMA.textDark,
        'fill': FIGMA.textDark,
        'width': '20px',
        'height': '20px'
      }, false);
    }

    // User name text
    const userName = navbar.querySelector('.navbar-user-icon span');
    if (userName) {
      forceStyles(userName, {
        'color': FIGMA.textBlack,
        'font-size': '14px',
        'font-weight': '500'
      }, false);
    }

    // 10. DASHBOARD BUTTONS - Force green buttons (AR, Theme, MX)
    const dashboardItems = navbar.querySelectorAll('.dashboardItem.option');
    dashboardItems.forEach(item => {
      forceStyles(item, {
        'justify-content': 'center',
        'display': 'flex',
        'align-content': 'center',
        'flex-wrap': 'wrap',
        'width': 'fit-content',
        'min-width': '3.5rem',
        'padding': '6px 12px',
        'background-color': FIGMA.green,
        'border': `1px solid ${FIGMA.green}`,
        'border-radius': '6px',
        'color': FIGMA.white,
        'cursor': 'pointer',
        'height': '36px',
        'transition': 'all 0.2s ease'
      });

      // Force SVG colors
      const svg = item.querySelector('svg');
      if (svg) {
        svg.removeAttribute('color');
        forceStyles(svg, {
          'color': FIGMA.white,
          'fill': FIGMA.white,
          'width': '18px',
          'height': '18px',
          'font-size': '18px',
          'line-height': 'normal'
        }, false);
      }

      // Force span colors
      const span = item.querySelector('span');
      if (span) {
        forceStyles(span, {
          'color': FIGMA.white,
          'font-size': '14px',
          'font-weight': '500',
          'line-height': '19px',
          'margin-left': '0.2rem'
        }, false);
      }
    });

    // 11. ALL SVGs - Remove conflicting color attributes
    const allSvgs = navbar.querySelectorAll('svg[color]');
    allSvgs.forEach(svg => svg.removeAttribute('color'));

    // 12. Force navbar collapse layout - KEEP IT EXPANDED (DON'T COLLAPSE)
    const navbarCollapse = navbar.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      // Force it to stay expanded
      navbarCollapse.classList.add('show');
      navbarCollapse.classList.remove('collapse', 'collapsing');

      forceStyles(navbarCollapse, {
        'display': 'flex',
        'flex-basis': 'auto',
        'width': '100%',
        'justify-content': 'space-between',
        'align-items': 'center',
        'visibility': 'visible',
        'height': 'auto',
        'overflow': 'visible'
      }, false);

      // Force the first navbar-nav (DATA, VIEW, TOOLS) to be centered
      const firstNav = navbarCollapse.querySelector('.navbar-nav:not(.ml-auto):not(.ms-auto)');
      if (firstNav) {
        forceStyles(firstNav, {
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'center',
          'flex': '1',
          'gap': '32px',
          'margin': '0',
          'visibility': 'visible'
        }, false);
        console.log('✅ First nav menu (DATA, VIEW, TOOLS) centered and visible');
      }

      // Force the second navbar-nav (right side) to stay on the right
      const rightNav = navbarCollapse.querySelector('.navbar-nav.ml-auto, .navbar-nav.ms-auto');
      if (rightNav) {
        forceStyles(rightNav, {
          'display': 'flex',
          'align-items': 'center',
          'gap': '12px',
          'margin-left': 'auto',
          'flex': '0',
          'visibility': 'visible'
        }, false);
        console.log('✅ Right nav menu positioned correctly and visible');
      }
    }

    // 13. Prevent navbar from collapsing on any screen size
    const navbarToggler = navbar.querySelector('.navbar-toggler');
    if (navbarToggler) {
      forceStyles(navbarToggler, {
        'display': 'none'
      }, false);
      console.log('✅ Navbar toggler hidden - navbar will not collapse');
    }

      console.log('✅ Figma design enforced successfully');
      console.log('📊 Summary:');
      console.log('  - Background: #E8E6E1 (beige)');
      console.log('  - Menu text: #000000 (black)');
      console.log('  - Icons: #344054 (dark gray)');
      console.log('  - Green buttons: #42966A');
      console.log('  - Red badge: #E31C1C');

    } catch (error) {
      console.error('❌ Error in enforceNavbarFigmaDesign:', error);
      console.error('Stack trace:', error.stack);
      // Don't throw - let the app continue running
    }
  }

  // Track if navbar has been found
  let navbarFound = false;
  let attemptCount = 0;

  // Enhanced enforcement function
  function tryEnforceNavbar() {
    attemptCount++;

    if (navbarFound) {
      return; // Already applied, skip
    }

    const navbar = document.querySelector('[data-cy="navbar"]');

    if (navbar) {
      navbarFound = true;
      console.log(`✅ Navbar found on attempt #${attemptCount}`);
      enforceNavbarFigmaDesign();
    } else {
      console.warn(`⚠️ Attempt #${attemptCount}: Navbar with data-cy="navbar" not found yet...`);
    }
  }

  // Execute immediately
  console.log('🚀 Starting Figma design enforcement...');
  tryEnforceNavbar();

  // Execute on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryEnforceNavbar);
  }

  // Execute with progressive delays (up to 5 seconds)
  setTimeout(tryEnforceNavbar, 100);
  setTimeout(tryEnforceNavbar, 250);
  setTimeout(tryEnforceNavbar, 500);
  setTimeout(tryEnforceNavbar, 1000);
  setTimeout(tryEnforceNavbar, 1500);
  setTimeout(tryEnforceNavbar, 2000);
  setTimeout(tryEnforceNavbar, 3000);
  setTimeout(tryEnforceNavbar, 5000);

  // Watch for navbar being added to DOM
  const bodyObserver = new MutationObserver((mutations) => {
    try {
      if (navbarFound) {
        bodyObserver.disconnect();
        return;
      }

      for (let mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          const navbar = document.querySelector('[data-cy="navbar"]');
          if (navbar) {
            console.log('✅ Navbar detected via MutationObserver');
            bodyObserver.disconnect();
            navbarFound = true;
            enforceNavbarFigmaDesign();

            // Start observing the navbar for changes
            const navbarObserver = new MutationObserver(() => {
              try {
                enforceNavbarFigmaDesign();
              } catch (error) {
                console.error('❌ Error in navbarObserver:', error);
              }
            });

            navbarObserver.observe(navbar, {
              attributes: true,
              attributeFilter: ['style', 'class'],
              childList: true,
              subtree: true
            });

            break;
          }
        }
      }
    } catch (error) {
      console.error('❌ Error in bodyObserver:', error);
    }
  });

  // Start observing body for navbar addition
  try {
    if (document.body) {
      bodyObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    } else {
      // Body doesn't exist yet, wait for it
      document.addEventListener('DOMContentLoaded', () => {
        try {
          bodyObserver.observe(document.body, {
            childList: true,
            subtree: true
          });
        } catch (error) {
          console.error('❌ Error starting bodyObserver on DOMContentLoaded:', error);
        }
      });
    }
  } catch (error) {
    console.error('❌ Error setting up bodyObserver:', error);
  }

  // Fallback: Keep checking every 500ms for up to 10 seconds
  let checkCount = 0;
  const maxChecks = 20; // 20 * 500ms = 10 seconds

  const intervalId = setInterval(() => {
    checkCount++;

    if (navbarFound) {
      clearInterval(intervalId);
      console.log('✅ Navbar found, stopping interval checks');
      return;
    }

    if (checkCount >= maxChecks) {
      clearInterval(intervalId);
      console.error('❌ NAVBAR NOT FOUND after 10 seconds. Please check:');
      console.error('   1. Does the navbar have data-cy="navbar" attribute?');
      console.error('   2. Is the navbar being loaded dynamically?');
      console.error('   3. Check the HTML structure');
      return;
    }

    tryEnforceNavbar();
  }, 500);

  } catch (globalError) {
    console.error('❌ CRITICAL ERROR in navbar.js:', globalError);
    console.error('Stack trace:', globalError.stack);
    console.error('The app will continue running, but navbar styling may not be applied.');
  }

})();
