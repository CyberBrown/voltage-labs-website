import { component$ } from "@builder.io/qwik";
import { Logo } from "../logo";
import styles from "./footer.module.css";

/**
 * Footer Component
 *
 * Features:
 * - Three column layout on desktop
 * - Stacked layout on mobile
 * - Logo and company tagline
 * - Quick navigation links
 * - Contact information
 * - Copyright notice
 * - Fully accessible with proper ARIA labels
 * - Professional, minimal design
 */
export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer class={styles.footer} role="contentinfo">
      <div class={`container ${styles.footerContainer}`}>
        {/* Column 1: Logo and Tagline */}
        <div class={styles.column}>
          <a href="/" class={styles.logoLink} aria-label="Voltage Labs Home">
            <Logo />
          </a>
          <p class={styles.tagline}>
            Empowering businesses through strategic technology solutions and
            data-driven insights.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div class={styles.column}>
          <h3 class={styles.columnTitle}>Quick Links</h3>
          <nav aria-label="Footer navigation">
            <ul class={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} class={styles.footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Column 3: Contact Information */}
        <div class={styles.column}>
          <h3 class={styles.columnTitle}>Contact</h3>
          <address class={styles.contactInfo}>
            <p class={styles.contactItem}>
              <span class={styles.contactLabel}>Email:</span>
              <a
                href="mailto:info@voltagelabs.com"
                class={styles.contactLink}
              >
                info@voltagelabs.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Copyright Bar */}
      <div class={styles.copyrightBar}>
        <div class={`container ${styles.copyrightContainer}`}>
          <p class={styles.copyright}>
            &copy; {currentYear} Voltage Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
