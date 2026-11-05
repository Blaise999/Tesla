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
