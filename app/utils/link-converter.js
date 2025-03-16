import React from "react";
import Link from "next/link";
import parse, { domToReact } from "html-react-parser";

/**
 * Converts HTML <a> tags to Next.js Link components
 * @param {string} htmlContent - HTML content containing links
 * @param {Object} [options] - Optional configuration for link conversion
 * @param {function} [options.customLinkComponent] - Custom link component
 * @param {function} [options.linkFilter] - Function to filter which links to convert
 * @param {Object} [options.defaultLinkProps] - Default props to apply to all links
 * @returns {React.ReactNode} Parsed content with converted links
 */
export function convertLinksToNextLinks(htmlContent, options = {}) {
  const {
    customLinkComponent = Link,
    linkFilter = () => true,
    defaultLinkProps = {
      className: "text-primary hover:underline",
    },
  } = options;

  return parse(htmlContent, {
    replace: (domNode) => {
      // Only process anchor tags
      if (domNode.name === "a" && domNode.attribs) {
        const { href, ...restAttributes } = domNode.attribs;

        // Determine if link should be converted
        if (!href || !linkFilter(domNode)) {
          return;
        }

        // Prepare link props
        const linkProps = {
          href,
          ...restAttributes,
          ...defaultLinkProps,
          // Merge existing class with default classes if a class already exists
          className: [defaultLinkProps.className, restAttributes.className]
            .filter(Boolean)
            .join(" "),
        };

        // Handle external vs internal links
        if (href.startsWith("http") || href.startsWith("//")) {
          linkProps.target = "_blank";
          linkProps.rel = "noopener noreferrer";
        }

        // Render the link with its children
        return React.createElement(
          customLinkComponent,
          linkProps,
          domToReact(domNode.children)
        );
      }
    },
  });
}

/**
 * Predefined link filter to only convert internal links
 * @param {Object} domNode - The DOM node to check
 * @returns {boolean} Whether the link should be converted
 */
export function internalLinksOnly(domNode) {
  const href = domNode.attribs?.href;
  return (
    href &&
    (href.startsWith("/") ||
      href.startsWith("#") ||
      href.includes(process.env.NEXT_PUBLIC_SITE_DOMAIN))
  );
}

/**
 * Predefined link filter to only convert external links
 * @param {Object} domNode - The DOM node to check
 * @returns {boolean} Whether the link should be converted
 */
export function externalLinksOnly(domNode) {
  const href = domNode.attribs?.href;
  return (
    href &&
    (href.startsWith("http") ||
      href.startsWith("//") ||
      (!href.startsWith("/") && !href.startsWith("#")))
  );
}
