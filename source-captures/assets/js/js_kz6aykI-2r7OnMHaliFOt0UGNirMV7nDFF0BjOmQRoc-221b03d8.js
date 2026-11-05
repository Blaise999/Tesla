/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
{
(function () {
  const optimizelyUrl = '/assets/js/27160410180-5d406fde.js';
  const cookieBannerStageSrc = 'https://digitalassets.tesla.com/raw/upload/emea-market-assets/stage/cookie-banner.js';
  const cookieBannerProdSrc = '/assets/js/cookie-banner-fc807fbe.js';
  const gtmUrl = 'https://www.googletagmanager.com/ns.html?id=GTM-KMG5DM';

  function addScriptToParent(src, parentElement) {
      const scriptElement = document.createElement('script');
      scriptElement.setAttribute('src', src);
      scriptElement.setAttribute('type', 'text/javascript');

      parentElement.append(scriptElement);
  }

  document.addEventListener('tsla-cookie-consent', (consent) => {
      console.info('[Cookie Consent] Decision: ' + consent.detail.decision);
      if (consent.detail.decision === 'accepted') {
          // Add Optimizely snippet
          addScriptToParent(optimizelyUrl, document.body);

          // Add Google Analytics (GA) snippet
          window.dataLayer = [];
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KMG5DM');

          const iframe = document.createElement("iframe");
          iframe.style.display = "none";
          iframe.style.visibility ="hidden";
          iframe.src = gtmUrl;
          document.body.appendChild(iframe);
          window.TSLA_ANALYTICS.init();
          window.addEventListener(
              'scroll',
              () => {
                  window.TSLA_ANALYTICS.genericScrollEventHandler();
              },
              false
          );
      }
  });

  (function (onReady) {
      if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', onReady, { once: true });
      } else {
          onReady();
      }
  })(() => {
      if (document && document.body && document.head) {
          const currentRegion = window.drupalSettings.path.currentLanguage || 'en_us';

          // For CN we dont even inject the cookie banner,
          // Which leads to also not having Optimizely and GA injected (as those rely on the consent decision from the cookie banner)
          if (currentRegion === 'zh_cn') return;

          // Initiate cookie banner script:
          const isProd = window.location.host === 'www.tesla.com'
          const cookieBannerSrc = isProd ? cookieBannerProdSrc : cookieBannerStageSrc;
          addScriptToParent(cookieBannerSrc, document.body);
      }
  });
})();
}
{
window['cua-chat'] = window['cua-chat'] || {};
window['cua-chat'].actions = window['cua-chat'].actions || {};
window['cua-chat'].chatAskAQuestionMode = true; // Enable chat ask a question mode
window['cua-chat'].manualIconRender = true;

const showStickyBar = () => {

  const pageBody = document.querySelector("body");

  const stickyBar = document.createElement("div");
  stickyBar.className = "tcl-sticky-bar";

  const chatContainer = document.createElement('div');
  chatContainer.className = 'chat-container';
  // DWP-19697: Start add drive CTA to US & CA Product pages
  // Code pulled from homepage sticky bar
  // get current url and path parts
  const pageUrl = new URL(window.location.href);
  const pathParts = pageUrl.pathname.split('/').filter(part => part);
  const lang = document.documentElement.lang;
  const driveButtonPages = ['/modely','/model3','/cybertruck'];
  const driveButton = document.createElement("button");
  driveButton.className = "tds-btn tcl-sticky-bar__button tcl-sticky-bar__drive-cta";
  driveButton.onclick = function () {
    window.dataLayer.push({
      event: 'navigation',
      interaction: 'schedule-demo-drive',
      label: 'directions-sticky'
    });
    // set redirection based on locale and model
    if (pathParts.length > 1) {
      const locale = pathParts[0];
      window.location.href = pageUrl.origin + "/" + locale + "/drive?selectedModel=" + pathParts[1];
    }
    else {
      window.location.href = pageUrl.origin + "/drive?selectedModel=" + pathParts[0];
    }
  };
  // DWP-19697: button translations in case new markets are added later
  const driveButtonTexts = {
    'ar-ae': 'حدد موعدًا للقيادة',
    'cs-cz': 'Naplánování testovací jízdy',
    'da-dk': 'Book en prøvetur',
    'de-de': 'Probefahrt buchen',
    'el-gr': 'Προγραμματίστε ένα test drive',
    'es-es': 'Reserve una prueba de conducción',
    'fi-fi': 'Varaa koeajo',
    'fr-ca': 'Planifier un essai routier',
    'fr-fr': 'Réserver un essai',
    'he-il': 'תיאום נסיעה',
    'hr-hr': 'Zakazivanje probne vožnje',
    'hu-hu': 'Jelentkezés vezetésre',
    'is-is': 'Bóka akstur',
    'it-it': 'Programma un test drive',
    'lt-lt': 'Suplanuokite važiavimą',
    'nl-nl': 'Plan een testrit',
    'no-no': 'Avtal en prøvekjøring',
    'pl-pl': 'Umów się na jazdę',
    'pt-pt': 'Marcar um teste drive',
    'ro-ro': 'Programați un test drive',
    'sl-si': 'Načrtujte vožnjo',
    'sv-se': 'Boka en körning',
    'tr-tr': 'Test Sürüşü Planlayın',
    'en': 'Schedule a Drive Today',
    'en-us': 'Schedule a Drive Today',
    'en-gb': 'Schedule a Drive',
    'en-ca': 'Schedule a Drive Today',
    'en-eu': 'Schedule a Drive',
    'en-ae': 'Schedule a Drive',
    'en-qa': 'Schedule a Drive',
    'en-sa': 'Schedule a Drive',
    'en-au': 'Schedule a Drive',
    'en-nz': 'Schedule a Drive',
    'en-sg': 'Schedule a Drive',
    'en-hk': 'Schedule a Drive',
    'en-mo': 'Schedule a Drive',
    'en-my': 'Schedule a Drive',
    'en-ph': 'Schedule a Drive',
    'en-th': 'Schedule a Drive',
    'en-in': 'Schedule a Drive',
    'fr-be': 'Planifier un essai routier',
    'nl-be': 'Plan een proefrit',
    'fr-lu': 'Planifier un essai routier',
    'de-lu': 'Probefahrt buchen',
    'de-at': 'Probefahrt buchen',
    'it-ch': 'Programma un test drive',
    'fr-ch': 'Réserver un essai',
    'de-ch': 'Probefahrt buchen',
    'ar-qa': 'حدد موعدًا للقيادة',
    'ar-sa': 'حدد موعدًا للقيادة',
    'zh-cn': '预约试驾',
    'zh-hk': '預約試駕',
    'ja-jp': '試乗予約',
    'ko-kr': '시승 일정 예약하기',
    'zh-tw': '預約試駕',
    'th-th': 'กำหนดเวลาการขับ',
    'zh-mo': '預約試駕',
  };
  // get button label and build button HTML
  const driveText = driveButtonTexts[lang.toLowerCase()] || 'Schedule a Drive Today';
  driveButton.innerHTML =
    "<svg class='tds-icon tds-icon-steering-wheel' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><use href='#tds-icon-steering-wheel'></use></svg><div class='tcl-sticky-bar__text'>" +
    driveText +
    "</div>";
  // Append chat & new button to sticky bar
  stickyBar.appendChild(chatContainer);
  const showDriveButton = pathParts.some((part) => driveButtonPages.includes('/' + part));
  if (showDriveButton) {
    stickyBar.appendChild(driveButton);
  }

  // Lock the layout mode to the viewport width at page load. If the page
  // opens at >=1200px, keep the desktop sticky footer even when the user
  // later resizes narrower (the marker class lets the CSS keep the footer
  // styling below 1200px). If it opens narrow, use the mobile behavior
  // (floating chat icon, no footer).
  if (window.innerWidth < 1200) {
    window['cua-chat'].chatAskAQuestionMode = false; //no as a question text box. Show floating icon if false.
    window['cua-chat'].manualIconRender = false; // no footer 
    stickyBar.style.display = 'none';
  } else {
    pageBody.classList.add('tcl-sticky-bar--persist');
  }
  
  // DWP-19697: End add drive CTA to US & CA Product pages
  const bannerHeight = getComputedStyle(stickyBar).height;
  if (bannerHeight && bannerHeight != 'auto') {
  	document.documentElement.style.setProperty('--tcl-bottom-banner-height', bannerHeight);
  }

  const onChatLoaded = () => {
    // Wait for cua-chat to be available
    pageBody.appendChild(stickyBar); // Append first
    const checkChatAvailable = (retryCount = 0) => {
      const maxRetries = 50; // 5 seconds max

      if (retryCount >= maxRetries) {
        console.error('Chat failed to load after maximum retries');
        return;
      }

      if (window['cua-chat']?.manualIconRender === true) {
        const actions = window['cua-chat']?.actions;
        // Find the chat container by class name or another selector
        const chatContainer = document.querySelector('.chat-container');
        if (typeof actions?.renderIcon === 'function' && chatContainer) {
          actions.renderIcon(chatContainer);
        }
      } else {
        // Retry after a short delay if cua-chat is not ready
        setTimeout(() => checkChatAvailable(retryCount + 1), 100);
      }
    };
    checkChatAvailable();
  };

  document.addEventListener('cua-chat-initialized', onChatLoaded);
};


(function (onReady) {
    if (document.readyState === 'loading') {
        window.addEventListener("DOMContentLoaded", onReady, { once: true });
    } else {
        onReady();
    }
})(() => {
  try {
    showStickyBar();
  } catch (err) {
    console.log("error handler called: ", err);
  }
});
}
{
/**
 * TCL GTM Click Tracking Script
 *
 * This script provides comprehensive click tracking for Google Tag Manager (GTM).
 * It automatically tracks user interactions with links, buttons, and other clickable elements,
 * sending structured data to the GTM dataLayer for analytics and conversion tracking.
 *
 * Features:
 * - Automatic click tracking for links and buttons
 * - Role-based categorization using ARIA roles
 * - Drawer/section context tracking using data attributes
 * - React component lifecycle support
 * - Production-safe error handling
 * - Duplicate listener prevention
 *
 * Expected HTML attributes:
 * - data-tcl-gtm-drawer="{{ drawer_id }}" - Identifies the section/drawer context
 * - role="button|link|tab|menuitem|navigation" - ARIA role for categorization
 * - aria-label, title, or innerText - Used for interaction labeling
 *
 * Events sent to GTM:
 * - 'tcl-click' - Main click tracking event with detailed metadata including CSS selector path
 * - 'drawer-interaction' - Specific drawer/section interaction event
 *
 * Event Data Structure:
 * - cssSelectorPath: Full hierarchical CSS selector (e.g., "body > div#container > main > a.btn")
 * - elementId: Element ID if available
 * - tagName: HTML tag name
 * - classList: Space-separated CSS classes
 * - section: Drawer/section context from data-tcl-gtm-drawer
 * - role: ARIA role attribute
 * - text: Sanitized text content
 * - href: Link URL if applicable
 *
 * @version 2.1.0
 * @requires Google Tag Manager dataLayer
 */

(function() {
    'use strict'; // Enable strict mode for better error catching

    // Configuration constants for easier maintenance
    var CONFIG = {
        MAX_LABEL_LENGTH: 1024,
        LISTENER_ATTRIBUTE: 'data-gtm-listener-attached',
        DRAWER_ATTRIBUTE: 'data-tcl-gtm-drawer',
        MAX_DOM_TRAVERSAL: 20, // Prevent infinite loops in malformed DOM when searching for drawer context
        DEBUG_MODE: false, // Set to true for development debugging
        NAVIGATION_DELAY: 0, // Delay in ms for navigation to ensure tracking events are sent
        EXCLUDED_DOMAINS: [/\.cn$/i], // Array of regex patterns for domains to exclude from tracking
        EXCLUDED_REGIONS: ['cn'] // Array of regions to exclude from tracking (case-insensitive)
    };

    /**
     * Escapes CSS identifiers to make them safe for use in CSS selectors
     * Manual implementation of CSS.escape() for jsqueeze compatibility
     *
     * @param {string} str - The string to escape
     * @returns {string} - The escaped string
     */
    function cssEscape(str) {
        if (!str) return str;
        return str.replace(/([\\.:[\]()])/g, '\\$1');
    }

    // CSS selectors for clickable elements that should be tracked
    var TRACKABLE_SELECTORS = [
        'a[href]',                    // Links with href attribute
        'button',                     // All button elements
        'input[type="button"]',       // Button-type inputs
        'input[type="submit"]',       // Submit-type inputs
        '.tds-btn'                    // Custom button class
    ].join(', ');

    /**
     * Generates a full CSS selector path for an element by traversing up the DOM tree
     * Creates a unique selector similar to Chrome's "Copy selector" feature
     * Uses nth-of-type for better semantic meaning and uniqueness
     *
     * @param {HTMLElement} element - The element to generate a selector for
     * @returns {string} - CSS selector path or empty string if generation fails
     */
    function generateCSSSelectorPath(element) {
        if (!element || typeof element.getAttribute !== 'function') {
            return '';
        }

        try {
            var selectors = [];
            var currentElement = element;
            var depth = 0;

            // Traverse up the DOM tree until we reach body or hit max depth
            while (currentElement && currentElement !== document.body && depth < CONFIG.MAX_DOM_TRAVERSAL) {
                var selector = currentElement.tagName.toLowerCase();

                // Add ID if present (most specific and unique)
                var id = currentElement.id;
                if (id && id.trim()) {
                    selector += '#' + cssEscape(id);
                } else {
                    // Add classes if present (helps with specificity)
                    var classes = [];
                    var classList = currentElement.classList || [];
                    for (var i = 0; i < classList.length; i++) {
                        var cls = classList[i];
                        if (cls && cls.trim()) {
                            classes.push('.' + cssEscape(cls));
                        }
                    }
                    classes = classes.slice(0, 3).join('');

                    selector += classes;

                    // For elements without unique IDs, add nth-of-type for disambiguation
                    // This is similar to Chrome's approach but more semantic than nth-child
                    var parent = currentElement.parentElement;
                    if (parent) {
                        var siblingsOfSameType = [];
                        var parentChildren = parent.children;
                        for (var j = 0; j < parentChildren.length; j++) {
                            if (parentChildren[j].tagName === currentElement.tagName) {
                                siblingsOfSameType.push(parentChildren[j]);
                            }
                        }
                        var indexAmongSameType = siblingsOfSameType.indexOf(currentElement);

                        // Only add nth-of-type if there are multiple siblings of the same type
                        // and this isn't the first one, or if we have classes but still might be ambiguous
                        if (siblingsOfSameType.length > 1 &&
                            (indexAmongSameType > 0 || (classes && siblingsOfSameType.length > 1))) {
                            selector += ':nth-of-type(' + (indexAmongSameType + 1) + ')';
                        }
                    }
                }

                selectors.unshift(selector);
                currentElement = currentElement.parentElement;
                depth++;
            }

            // Add body at the beginning if we didn't start from it
            if (selectors.length > 0 && !selectors[0].startsWith('body')) {
                selectors.unshift('body');
            }

            return selectors.join(' > ');

        } catch (error) {
            console.warn('[GTM] Error generating CSS selector path:', error);
            return '';
        }
    }

    /**
     * Sanitizes and truncates text labels for consistent analytics data
     * Removes extra whitespace and limits length to prevent data bloat
     *
     * @param {string} str - The raw text to sanitize
     * @returns {string} - Cleaned and truncated text
     */
    function sanitizeLabel(str) {
        if (!str) return '';

        try {
            return str
                .toString()                           // Ensure it's a string
                .trim()                               // Remove leading/trailing whitespace
                .replace(/\s+/g, ' ')                 // Normalize internal whitespace
                .substring(0, CONFIG.MAX_LABEL_LENGTH); // Limit length for performance
        } catch (error) {
            console.warn('[GTM] Error sanitizing label:', error);
            return '';
        }
    }

    /**
     * Safely sends events to the Google Tag Manager dataLayer
     * Ensures dataLayer exists and handles potential errors gracefully
     *
     * @param {Object} eventData - The event object to send to GTM
     */
    function sendGtagEvent(eventData) {
        try {
            // Ensure dataLayer exists (GTM dependency)
            if (typeof window === 'undefined') {
                console.warn('[GTM] Window object not available');
                return;
            }

            window.dataLayer = window.dataLayer || [];

            // Validate that eventData is an object
            if (!eventData || typeof eventData !== 'object') {
                console.warn('[GTM] Invalid event data provided:', eventData);
                return;
            }

            // Add timestamp for debugging and analytics
            var enrichedEventData = {};
            for (var key in eventData) {
                if (eventData.hasOwnProperty(key)) {
                    enrichedEventData[key] = eventData[key];
                }
            }
            enrichedEventData.timestamp = Date.now();
            enrichedEventData.user_agent = navigator.userAgent || 'unknown';

            window.dataLayer.push(enrichedEventData);

            // Log only in debug mode or development
            if (CONFIG.DEBUG_MODE || window.location.hostname === 'localhost') {
                console.log('[GTM] Event sent:', enrichedEventData);
            }
        } catch (error) {
            console.log('[GTM] Error sending event to dataLayer:', error);
        }
    }

    /**
     * Main click event handler that processes user interactions
     * Extracts element data, determines interaction category, and sends tracking events
     *
     * @param {Event} event - The DOM click event
     */
    function handleLinkClick(event) {
        try {
            // Get the actual clicked element (event.currentTarget is the element with the listener)
            var el = event.currentTarget;

            // Validate that we have a valid element
            if (!el || !el.tagName) {
                console.warn('[GTM] Invalid element in click handler');
                return;
            }

            // Determine if this is a link element or nested within one
            var isLink = el.tagName.toLowerCase() === 'a' || Boolean(el.closest('a'));

            // Extract href for links, ensuring it's a valid URL
            var href = '';
            if (isLink) {
                href = el.href || el.getAttribute('href') || '';
                // Sanitize href to remove sensitive parameters if needed
                if (href && href.includes('?')) {
                    // You might want to filter out sensitive query parameters here
                    // For now, we'll keep the full URL but log a warning for review
                    if (CONFIG.DEBUG_MODE) {
                        console.log('[GTM] URL with parameters detected:', href);
                    }
                }
            }

            // Extract meaningful text for the interaction label
            // Priority: aria-label > title > innerText > textContent > href
            var textSources = [
                el.getAttribute('aria-label'),
                el.getAttribute('title'),
                el.innerText,
                el.textContent,
                href
            ];

            var text = sanitizeLabel(
                (function() {
                    for (var k = 0; k < textSources.length; k++) {
                        if (textSources[k] && textSources[k].trim()) {
                            return textSources[k];
                        }
                    }
                    return 'Unknown';
                })()
            );

            // Find the drawer/section context for this element
            var section = getDrawerContext(el);

            // Get ARIA role for semantic categorization
            var role = el.getAttribute('role');

            // Generate full CSS selector path for the element
            var cssSelectorPath = generateCSSSelectorPath(el);

            // Determine the interaction category based on role or element type
            var category = determineInteractionCategory(role, isLink, el);

            // Create interaction string for drawer events
            var interaction = sanitizeLabel(href || text) + ' (' + category + ')';

            // Create comprehensive label for GTM event
            var label = section ?
                '[' + section + '] ' + (isLink ? href : 'Button') + ' (' + text + ')' :
                (isLink ? href : 'Button') + ' (' + text + ')';

            // Construct the main GTM event data
            var eventData = {
                event: 'tcl-click',                    // Event name for GTM triggers
                event_category: category,              // Interaction category
                event_action: 'click',                 // Always 'click' for this tracker
                event_label: label,                    // Descriptive label
                section: section,                      // Drawer/section context
                elementId: el.id || null,              // Element ID if available
                text: text,                            // Clean text content
                href: href,                            // Link URL if applicable
                role: role || null,                    // ARIA role if present
                tagName: el.tagName.toLowerCase(),     // HTML tag name
                classList: (el.classList && el.classList.length ? Array.from(el.classList) : []).join(' '), // CSS classes
                cssSelectorPath: cssSelectorPath,      // Full CSS selector path to element
                linkType: isLink ? 'link' : 'button', // Type of clickable element
                drawer: section, // Duplicate of section for backward compatibility
                interaction: interaction, // Formatted interaction string
                timestamp: Date.now(), // Event timestamp
                version: '2.1.0' // Script version for tracking updates
            };

            // Send main click tracking event
            sendGtagEvent(eventData);

            // Defer navigation delay logic to allow other JavaScript event handlers to run first
            Promise.resolve().then(function() {
                // Check if another handler already prevented the default action
                if (event.defaultPrevented) {
                    return; // Don't interfere with existing JavaScript functionality
                }

                // Add navigation delay for internal page changes to ensure event tracking
                var isNavigationLink = false;
                if (el.tagName.toLowerCase() === 'a' &&
                    href &&
                    (el.getAttribute('target') === null || el.getAttribute('target') === '_self') &&
                    el.getAttribute('download') === null &&
                    !event.ctrlKey && !event.metaKey && !event.shiftKey
                ) {
                    try {
                        var linkUrl = new URL(href, document.baseURI);
                        if (linkUrl.protocol === 'http:' || linkUrl.protocol === 'https:') {
                            var currentWithoutHash = location.href.split('#')[0];
                            var linkWithoutHash = linkUrl.href.split('#')[0];
                            if (linkWithoutHash !== currentWithoutHash && linkUrl.origin === location.origin) {
                                isNavigationLink = true;
                            }
                        }
                    } catch (e) {
                        // Invalid URL, skip
                    }
                }

                if (isNavigationLink && CONFIG.NAVIGATION_DELAY > 0) {
                    event.preventDefault();
                    setTimeout(function() {
                        if (href) {
                            window.location.href = href;
                        }
                    }, CONFIG.NAVIGATION_DELAY);
                }

                // Add navigation delay for external page changes to ensure event tracking
                var isExternalNavigation = false;
                if (el.tagName.toLowerCase() === 'a' &&
                    href &&
                    (el.getAttribute('target') === null || el.getAttribute('target') === '_self') &&
                    el.getAttribute('download') === null &&
                    !event.ctrlKey && !event.metaKey && !event.shiftKey
                ) {
                    try {
                        var linkUrl = new URL(href, document.baseURI);
                        if ((linkUrl.protocol === 'http:' || linkUrl.protocol === 'https:') &&
                            linkUrl.origin !== location.origin) {
                            isExternalNavigation = true;
                        }
                    } catch (e) {
                        // Invalid URL, skip
                    }
                }

                if (isExternalNavigation && CONFIG.NAVIGATION_DELAY > 0) {
                    event.preventDefault();
                    setTimeout(function() {
                        if (href) {
                            window.location.href = href;
                        }
                    }, CONFIG.NAVIGATION_DELAY);
                }

                // Add navigation delay for submit buttons/inputs that cause navigation
                var isSubmitNavigation = false;
                if ((el.tagName.toLowerCase() === 'input' && (el.type === 'submit' || el.type === 'button')) ||
                    (el.tagName.toLowerCase() === 'button' && el.type === 'submit')) {
                    var form = el.closest('form');
                    if (form && form.method.toLowerCase() !== 'dialog') { // Skip non-navigating forms
                        isSubmitNavigation = true;
                    }
                }

                if (isSubmitNavigation && CONFIG.NAVIGATION_DELAY > 0) {
                    event.preventDefault();
                    setTimeout(function() {
                        el.closest('form').submit(); // Resume form submission
                    }, CONFIG.NAVIGATION_DELAY);
                }
            });

        } catch (error) {
            // Log errors but don't break the user experience
            console.log('[GTM] Error handling click event:', error);

            // Send error event to GTM for monitoring
            try {
                sendGtagEvent({
                    event: 'gtm-error',
                    error_type: 'click_handler_error',
                    error_message: error.message || 'Unknown error',
                    error_stack: error.stack || 'No stack trace'
                });
            } catch (secondaryError) {
                console.log('[GTM] Failed to send error event:', secondaryError);
            }
        }
    }

    /**
     * Determines the appropriate interaction category based on element properties
     * Uses ARIA roles when available, falls back to element type analysis
     *
     * @param {string|null} role - The ARIA role attribute value
     * @param {boolean} isLink - Whether the element is a link
     * @param {HTMLElement} element - The DOM element for additional context
     * @returns {string} - The interaction category
     */
    function determineInteractionCategory(role, isLink, element) {
        // Use ARIA role for semantic categorization when available
        if (role) {
            switch (role.toLowerCase()) {
                case 'button':
                    return 'Button Click';
                case 'link':
                    return 'Link Click';
                case 'tab':
                    return 'Tab Click';
                case 'menuitem':
                    return 'Menu Click';
                case 'navigation':
                    return 'Navigation Click';
                case 'search':
                    return 'Search Click';
                case 'dialog':
                    return 'Dialog Click';
                default:
                    // Capitalize first letter and add 'Click'
                    return role.charAt(0).toUpperCase() + role.slice(1) + ' Click';
            }
        }

        // Fallback to element type and class-based categorization
        if (isLink) {
            return 'Link Click';
        }

        // Check for specific button types or classes
        var tagName = element.tagName.toLowerCase();
        var classList = (element.classList && element.classList.length ? Array.from(element.classList) : []).join(' ');

        if (tagName === 'input') {
            var inputType = element.getAttribute('type');
            return inputType === 'submit' ? 'Submit Click' : 'Button Click';
        }

        // Check for common UI component classes
        if (classList.includes('nav')) return 'Navigation Click';
        if (classList.includes('menu')) return 'Menu Click';
        if (classList.includes('tab')) return 'Tab Click';
        if (classList.includes('modal') || classList.includes('dialog')) return 'Dialog Click';

        // Default fallback
        return 'Button Click';
    }

    /**
     * Traverses up the DOM tree to find drawer/section context
     * Looks for drawer/section attributes on parent elements in order of priority:
     * 1. data-tcl-gtm-drawer (primary)
     * 2. data-gtm-key (backward compatibility)
     * 3. element ID (fallback)
     * This enables section-specific analytics and user flow tracking
     *
     * @param {HTMLElement} element - The starting element to search from
     * @returns {string|null} - The drawer/section identifier or null if not found
     */
    function getDrawerContext(element) {
        if (!element || typeof element.getAttribute !== 'function') {
            return null;
        }

        var currentElement = element;
        var traversalCount = 0;

        // Walk up the DOM tree looking for drawer context
        while (currentElement && currentElement !== document.body && traversalCount < CONFIG.MAX_DOM_TRAVERSAL) {
            try {
                // Priority 1: Check for primary drawer attribute
                var drawerAttr = currentElement.getAttribute(CONFIG.DRAWER_ATTRIBUTE);
                if (drawerAttr) {
                    return sanitizeLabel(drawerAttr);
                }

                // Priority 2: Check for backward compatibility data-gtm-key attribute
                var gtmKeyAttr = currentElement.getAttribute('data-gtm-key');
                if (gtmKeyAttr) {
                    return sanitizeLabel(gtmKeyAttr);
                }

                // Priority 3: Use element ID as fallback if no other attributes found
                if (currentElement.id && currentElement.id.trim()) {
                    return sanitizeLabel(currentElement.id);
                }

                currentElement = currentElement.parentElement;
                traversalCount++;
            } catch (error) {
                console.warn('[GTM] Error traversing DOM for drawer context:', error);
                break;
            }
        }

        return null;
    }

    /**
     * Attaches click event listeners to trackable elements within a container
     * Prevents duplicate listeners and handles dynamic content gracefully
     *
     * @param {HTMLElement} container - The container element to search within
     */
    function attachClickListeners(container) {
        if (!container || typeof container.querySelectorAll !== 'function') {
            console.warn('[GTM] Invalid container provided to attachClickListeners');
            return;
        }

        try {
            // Find all trackable elements within the container
            var trackableElements = container.querySelectorAll(TRACKABLE_SELECTORS);

            if (CONFIG.DEBUG_MODE) {
                console.log('[GTM] Found ' + trackableElements.length + ' trackable elements');
            }

            // Attach listeners to each element
            for (var i = 0; i < trackableElements.length; i++) {
                var element = trackableElements[i];
                var index = i;
                try {
                    // Check if listener is already attached to prevent duplicates
                    if (element.hasAttribute(CONFIG.LISTENER_ATTRIBUTE)) {
                        continue; // Skip already-instrumented elements
                    }

            // Attach the click event listener
            element.addEventListener('click', handleLinkClick, {
                passive: false, // Allow preventDefault() for navigation delay
                capture: false  // Use bubbling phase
            });

                    // Mark element as instrumented
                    element.setAttribute(CONFIG.LISTENER_ATTRIBUTE, 'true');

                } catch (elementError) {
                    console.warn('[GTM] Error attaching listener to element ' + index + ':', elementError);
                }
            }

        } catch (error) {
            console.log('[GTM] Error in attachClickListeners:', error);
        }
    }

    /**
     * Safely handles React component lifecycle events
     * Ensures that dynamically rendered components get tracking listeners
     *
     * @param {CustomEvent} event - The React component event
     */
    function handleReactComponentEvent(event) {
        try {
            // Validate event structure
            if (!event || !event.detail || !event.detail.element) {
                console.warn('[GTM] Invalid React component event received');
                return;
            }

            var element = event.detail.element;

            if (CONFIG.DEBUG_MODE) {
                console.log('[GTM] React component event:', event.type, element);
            }

            // Attach listeners to the new component
            attachClickListeners(element);

        } catch (error) {
            console.log('[GTM] Error handling React component event:', error);
        }
    }

    /**
     * Initialize the GTM click tracking system
     * Sets up event listeners for both existing and dynamic content
     */
    function initializeGTMTracking() {
        try {
            // Check for excluded domains
            var hostname = window.location.hostname;
            var domainExcluded = false;
            for (var d = 0; d < CONFIG.EXCLUDED_DOMAINS.length; d++) {
                if (CONFIG.EXCLUDED_DOMAINS[d].test(hostname)) {
                    domainExcluded = true;
                    break;
                }
            }
            if (domainExcluded) {
                console.log('[GTM] Tracking disabled for excluded domain:', hostname);
                return;
            }

            // Check for excluded regions
            if (window.i18n && window.i18n.region) {
                var regionExcluded = false;
                for (var r = 0; r < CONFIG.EXCLUDED_REGIONS.length; r++) {
                    if (CONFIG.EXCLUDED_REGIONS[r].toLowerCase() === window.i18n.region.toLowerCase()) {
                        regionExcluded = true;
                        break;
                    }
                }
                if (regionExcluded) {
                    console.log('[GTM] Tracking disabled for excluded region:', window.i18n.region);
                    return;
                }
            }
            // Set up React component lifecycle listeners for dynamic content
            // These events are fired when React components are mounted/initialized
            document.addEventListener('tcl-react-component-initialized', handleReactComponentEvent, {
                passive: true
            });

            document.addEventListener('tcl-react-component-mounted', handleReactComponentEvent, {
                passive: true
            });

            // Handle initial page load and attach listeners to existing elements
            if (document.readyState === 'loading') {
                // DOM is still loading, wait for it to be ready
                document.addEventListener('DOMContentLoaded', function() {
                    attachClickListeners(document.body);
                    console.log('[GTM] Click tracking initialized after DOMContentLoaded');
                }, { once: true }); // Use once: true to auto-remove listener
            } else {
                // DOM is already loaded, attach listeners immediately
                attachClickListeners(document.body);
                console.log('[GTM] Click tracking initialized immediately (DOM already loaded)');
            }

            // Optional: Set up MutationObserver for additional dynamic content detection
            // This catches elements added after initial load that might not trigger React events
            if (typeof MutationObserver !== 'undefined' && document.body) {
                var observer = new MutationObserver(function(mutations) {
                    for (var m = 0; m < mutations.length; m++) {
                        var mutation = mutations[m];
                        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                            for (var n = 0; n < mutation.addedNodes.length; n++) {
                                var node = mutation.addedNodes[n];
                                // Only process element nodes (not text nodes, comments, etc.)
                                if (node.nodeType === Node.ELEMENT_NODE) {
                                    attachClickListeners(node);
                                }
                            }
                        }
                    }
                });

                try {
                    // Start observing the document with the configured parameters
                    observer.observe(document.body, {
                        childList: true,
                        subtree: true
                    });

                    if (CONFIG.DEBUG_MODE) {
                        console.log('[GTM] MutationObserver initialized for dynamic content');
                    }
                } catch (observerError) {
                    console.warn('[GTM] Failed to initialize MutationObserver:', observerError);
                }
            } else if (!document.body) {
                // If document.body is not available, set up the observer after DOM is ready
                var setupObserver = function() {
                    if (typeof MutationObserver !== 'undefined' && document.body) {
                        var observer = new MutationObserver(function(mutations) {
                            for (var m = 0; m < mutations.length; m++) {
                                var mutation = mutations[m];
                                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                                    for (var n = 0; n < mutation.addedNodes.length; n++) {
                                        var node = mutation.addedNodes[n];
                                        if (node.nodeType === Node.ELEMENT_NODE) {
                                            attachClickListeners(node);
                                        }
                                    }
                                }
                            }
                        });

                        try {
                            observer.observe(document.body, {
                                childList: true,
                                subtree: true
                            });

                            if (CONFIG.DEBUG_MODE) {
                                console.log('[GTM] MutationObserver initialized after DOM ready');
                            }
                        } catch (observerError) {
                            console.warn('[GTM] Failed to initialize delayed MutationObserver:', observerError);
                        }
                    }
                };

                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', setupObserver, { once: true });
                } else {
                    // Try again after a short delay
                    setTimeout(setupObserver, 100);
                }
            }

        } catch (error) {
            console.log('[GTM] Error initializing GTM tracking:', error);

            // Send initialization error to GTM for monitoring
            try {
                sendGtagEvent({
                    event: 'gtm-error',
                    error_type: 'initialization_error',
                    error_message: error.message || 'Unknown initialization error'
                });
            } catch (sendError) {
                console.log('[GTM] Failed to send initialization error event:', sendError);
            }
        }
    }

    // Initialize the tracking system
    initializeGTMTracking();

    // Expose a global method for manual re-initialization if needed
    // This can be useful for single-page applications or complex dynamic scenarios
    if (typeof window !== 'undefined') {
        window.reinitializeGTMTracking = function() {
            console.log('[GTM] Manual re-initialization requested');
            attachClickListeners(document.body);
        };
    }

})();
}
{
/**
 *  Pricing API utilities
 * Fetches real pricing data from 's pricing gateway
 */

const stateNameMappings = {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming',
  'DC': 'District of Columbia'
}

/**
 * Fetch pricing data from 's pricing API
 * @param {Object} options - Fetch options
 * @param {string} [options.region='US'] - Region code
 * @param {string} [options.model] - Model name
 * @param {number} [options.timeout=10000] - Request timeout in milliseconds
 * @param {string} [options.state] - State code
 * @returns {Promise<Object>} Pricing response data
 */
const fetchPricing = async (region = 'US', state, parameters) => {

  try {
    // Use proxy URL for development, direct URL for production
    const baseUrl = window?.dynamic_pricing?.endpoint ?? 'https://apigateway-pricing-gateway.tesla.com/pricing/v2';

    // Encode all URL parameters
    const encodedRegion = encodeURIComponent(region);
    const encodedState = encodeURIComponent(state ?? '');

    if (!baseUrl || !encodedRegion) {
      throw new Error('Pricing API parameters are missing');
    }

    const url = baseUrl + '/' + encodedRegion + '?region=' + encodedRegion + (encodedState ? '&region=' + encodedState : '') + (parameters ? parameters : '');

    return fetch(url, {
      method: 'GET',
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Pricing request was cancelled or timed out');
      }
      throw new Error(`Failed to fetch  pricing: ${error.message}`);
    }

    throw new Error('Unknown error occurred while fetching pricing');
  }
};

const getStateFromGeoIp = () => {
  return fetch('/assets/data/city-cc24e3a7.json')
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`HTTP Response Code: ${res && res.status}`);
      }
    })
    .catch((error) => {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout: GeoIP service took too long to respond');
      }
      throw error;
    });
};

const getCookieJSON = (cookieName) => {
  // Get cookie value directly using a more modern approach
  const name = cookieName + '=';
  const cookies = document.cookie.split(';');

  for (let index = 0; index < cookies.length; index++) {
    const cookie = cookies[index];
    const trimmedCookie = cookie.trim();
    if (trimmedCookie.startsWith(name)) {
      const cookieValue = trimmedCookie.substring(name.length);

      if (cookieValue) {
        try {
          // Validate JSON string before parsing to prevent malicious input
          if (typeof cookieValue !== 'string' || cookieValue.length > 10000) {
            return false;
          }

          // Basic validation to check if it looks like valid JSON
          const trimmed = cookieValue.trim();
          if (
            !(
              (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
              (trimmed.startsWith('[') && trimmed.endsWith(']'))
            )
          ) {
            return false;
          }

          return JSON.parse(cookieValue);
        } catch (error) {
          return false;
        }
      }
    }
  }

  return false;
};

/**
 * Get state from cookie or GeoIP fallback
 * @returns {Promise<string|undefined>} State code or undefined
 */
const getStateFromCookie = async () => {
  // Define cookie priority order (highest to lowest priority)
  const cookieSources = ['preferred_address', 'device_location', 'ip_info'];

  // Try each cookie source in order of priority
  for (let index = 0; index < cookieSources.length; index++) {
    const cookieName = cookieSources[index];
    const locationData = getCookieJSON(cookieName);
    const regionCode = locationData?.countryCode === 'US' ? locationData?.region?.regionCode : null;

    if (regionCode) {
      return regionCode;
    }
  }

  // Fallback to geo IP if no valid state found in cookies
  try {
    return getStateFromGeoIp().then(geoData => {
      if (geoData?.country?.iso_code === 'US' && geoData?.subdivisions?.[0]) {
        return geoData.subdivisions[0].iso_code;
      }
      return undefined;
    });
  } catch (error) {
    console.warn('Failed to fetch location from GeoIP service:', error);
    return undefined;
  }
};


/**
 * Convert t_value string to HTML DOM element for manipulation
 * @param {string} t_value - The HTML string from TextLine component
 * @returns {HTMLElement} HTMLElement that can be used with querySelectorAll
 */
const convertTValueToHTML = (t_value) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = t_value.trim();
  return tempDiv;
};

const getPriceWithKey = (pricingData, region, state, model, variant, financeOption, getState, priceKey, fallbackToCash) => {
  let price = null;
  let regionPrice = null;
  let cashPrice = null;
  let currencyCode = null;

  const regionModelPrice = pricingData?.[region]?.[model] ?? [];
  const modelPrice =
    getState && state ? pricingData?.[state]?.[model] ?? regionModelPrice : regionModelPrice;

  for (let index = 0; index < modelPrice.length; index++) {
    const variantPrice = modelPrice[index];
    const regionVariantPrice = regionModelPrice[index];
    if (variantPrice?.variant.toLowerCase() === variant) {
      if (financeOption === 'cash') {
        price = variantPrice?.cash?.[priceKey];
        regionPrice = regionVariantPrice?.cash?.[priceKey];
      } else if (financeOption === 'loan') {
        price = variantPrice?.loan_options?.[0]?.[priceKey];
        regionPrice = regionVariantPrice?.loan_options?.[0]?.[priceKey];
      } else if (financeOption === 'lease') {
        price = variantPrice?.lease_options?.[0]?.[priceKey];
        regionPrice = regionVariantPrice?.lease_options?.[0]?.[priceKey];
        if (priceKey === 'min_down_payment' && price > variantPrice?.lease_options?.[0]?.['down_payment']) {
          throw new Error('Min Down Payment invalid');
        }
      }
      cashPrice = variantPrice?.cash?.[priceKey];
      currencyCode = variantPrice?.currency_code;
    }
  }

  if (price !== 0 && !price) {
    price = regionPrice;
  }

  if (price !== 0 && !price) {
    throw new Error('Price not found');
  }

  const intl_region = currencyCode
    ? new Intl.NumberFormat(locale.replace('_', '-'), {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
    })
    : null;

  const roundedPrice = Math.round(price);
  const formattedPrice = intl_region.format(roundedPrice);

  return formattedPrice;
};

const getPrice = async (region, state, parameters, pricingData = null) => {
  if (pricingData) {
    return pricingData;
  }
  // Initialize window.dynamic_pricing if needed
  if (!window.dynamic_pricing) {
    window.dynamic_pricing = {};
  }
  if (!window.dynamic_pricing.pricing_data) {
    window.dynamic_pricing.pricing_data = {};
  }

  const parameterKey = parameters.replaceAll('&', '').replaceAll('=', '')

  if (parameterKey in window.dynamic_pricing.pricing_data) {
    return window.dynamic_pricing.pricing_data[parameterKey];
  } else {
    return fetchPricing(region, state, parameters).then(response => {
      if (!window.dynamic_pricing) {
        window.dynamic_pricing = {};
      }
      if (!window.dynamic_pricing.pricing_data) {
        window.dynamic_pricing.pricing_data = {};
      }
      window.dynamic_pricing.pricing_data[parameterKey] = response;
      return response;
    });
  }
}

/**
 * Extract pricing data attributes from HTML string using DOM manipulation
 * @param {string} t_value - The HTML string containing pricing markup
 * @returns {Promise<string>} Extracted pricing information
 */
const extractPricingData = async (state, pricingData) => {
  try {
    // Use querySelectorAll to find pricing elements
    const pricingContainers = document.querySelectorAll(
      '[data-entity="dynamic-pricing-container-injector-2"]'
    );
    let locale = window.Tesla?.locale || 'en_US';
    locale = locale === 'en' ? 'en_US' : locale;
    const regionLocalesWhiteList = window?.dynamic_pricing?.pull_region_locales_white_list || [];
    const getState = regionLocalesWhiteList?.includes(locale.toLowerCase());
    if (!getState) {
      state = undefined;
    }

    let region = locale?.split('_')?.[1]?.toUpperCase() || 'US';

    // Extract container data and create fetch promises
    const containerData = Array.from(pricingContainers).map((container) => ({
      container,
      model: container.getAttribute('data-model').toLowerCase() || '',
      variant: container.getAttribute('data-variant').toLowerCase() || '',
      financeOption: container.getAttribute('data-finance-option').toLowerCase() || '',
      parameters: container.getAttribute('data-parameters') || '',
    }));

    // Process each container sequentially with its corresponding pricing data
    const processContainer = ({ container, model, variant, financeOption, parameters }) => {
      return getPrice(region, state, parameters, pricingData).then(pricingData => {
        try {
          if (!pricingData) {
            throw new Error('Pricing data not available');
          }
          const financeOptionCopyElements = container.querySelectorAll(
            `[data-entity="dynamic-pricing-copy"][data-copy="${financeOption}"]`
          );
          const pricingCopyElements = container.querySelectorAll(
            '[data-entity="dynamic-pricing-copy"][data-copy="price"]'
          );
          const stateCopyElements = container.querySelectorAll(
            '[data-entity="dynamic-pricing-copy"][data-copy="state"]'
          );
          for (let index = 0; index < pricingCopyElements.length; index++) {
            const pricingEle = pricingCopyElements[index];
            const priceKey = pricingEle.getAttribute('data-price-key') || 'price';
            const fallbackToCash = pricingEle.getAttribute('data-fallback-to-cash') === 'true';
            pricingEle.innerHTML = getPriceWithKey(pricingData, region, state, model, variant, financeOption, getState, priceKey, fallbackToCash);
          }
          for (let index = 0; index < financeOptionCopyElements.length; index++) {
            const financeOptionEle = financeOptionCopyElements[index];
            financeOptionEle.style.display = 'inline';
          }
          for (let index = 0; index < stateCopyElements.length; index++) {
            const stateEle = stateCopyElements[index];
            if (window.innerWidth > 600) {
              stateEle.innerHTML = stateNameMappings[state] || state.toUpperCase();
            } else {
              stateEle.innerHTML = state.toUpperCase();
            }
            stateEle.style.display = 'inline';
          }
        } catch (error) {
          const fallbackCopyElements = container.querySelectorAll(
            '[data-entity="dynamic-pricing-copy"][data-copy="fallback"]'
          );
          for (let index = 0; index < fallbackCopyElements.length; index++) {
            const fallbackEle = fallbackCopyElements[index];
            fallbackEle.style.display = 'inline';
          }
        }
      });
    };

    // Chain all container processing sequentially
    return containerData.reduce((promiseChain, containerItem) => {
      return promiseChain.then(() => processContainer(containerItem));
    }, Promise.resolve());
    // }).catch(error => {
    //   console.log('Error fetching dynamic pricing:', error);
    //   const pricingCopyElements = htmlElement.querySelectorAll(
    //     '[data-entity="dynamic-pricing-copy"][data-copy="price"]'
    //   );
    //   const fallbackCopyElements = htmlElement.querySelectorAll(
    //     '[data-entity="dynamic-pricing-copy"][data-copy="fallback"]'
    //   );
    //   for (let index = 0; index < pricingCopyElements.length; index++) {
    //     const pricingEle = pricingCopyElements[index];
    //     pricingEle.style.display = 'none';
    //   }
    //   for (let index = 0; index < fallbackCopyElements.length; index++) {
    //     const fallbackEle = fallbackCopyElements[index];
    //     fallbackEle.style.display = 'inline';
    //   }
    // });
  } catch (error) {
    console.log('Error initializing dynamic pricing:', error);
  }
};

const dynamicContent = (state) => {
  return Promise.resolve().then(() => {
    const dynamicContentContainers = document.querySelectorAll(
      '[data-entity="dynamic-content-container-injector-2"]'
    );

    dynamicContentContainers.forEach((container) => {
      const dynamicContentCopyElements = container.querySelectorAll(
        '[data-entity="dynamic-content-copy"]'
      );
      dynamicContentCopyElements.forEach((copyElement) => {
        const stateList = copyElement.getAttribute('data-state-list');
        if (stateList && !stateList.split(',').includes(state)) {
          copyElement.style.display = 'none';
          copyElement.innerHTML = '';
        } else {
          copyElement.style.display = 'inline';
          copyElement.classList.add('tcl-dynamic-content--visible');
        }
      });

    });
  });
}

let result = getStateFromCookie().then(async (state) => {
  let locale = window.Tesla?.locale || 'en_US';
  locale = locale === 'en' ? 'en_US' : locale;

  let region = locale?.split('_')?.[1]?.toUpperCase() || 'US';
  return getPrice(region, state, '&includeRegionalIncentives&includeFederalIncentives').then((pricingData) => {
    return { state, pricingData };
  });
});

(function (onReady) {
    if (document.readyState === 'complete') {
        onReady();
    } else {
        window.addEventListener('load', onReady, { once: true });
    }
})(() => {
  try {
    if (result.state) {
      Promise.all([
        dynamicContent(result.state),
        extractPricingData(result.state, result.pricingData)
      ]).then(() => {
        setTimeout(() => {
          const dynamicContentPlaceholderElements = document.querySelectorAll(
            '[data-entity="dynamic-content-placeholder"]'
          );
          dynamicContentPlaceholderElements.forEach((placeholder) => {
            placeholder.innerHTML = '';
          });
        }, 100);
      });
    } else {
      getStateFromCookie().then(fetchedState => {
        Promise.all([
          dynamicContent(fetchedState),
          extractPricingData(fetchedState, result.pricingData)
        ]).then(() => {
          setTimeout(() => {
            const dynamicContentPlaceholderElements = document.querySelectorAll(
              '[data-entity="dynamic-content-placeholder"]'
            );
            dynamicContentPlaceholderElements.forEach((placeholder) => {
              placeholder.innerHTML = '';
            });
          }, 100);
        });
      });
    }
  } catch (error) {
    console.log('Error initializing dynamic pricing:', error);
  }
});

}
