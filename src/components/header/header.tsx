import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Logo } from "../logo";
import {
  type Theme,
  getInitialTheme,
  toggleTheme,
} from "../../utils/theme";
import styles from "./header.module.css";

/**
 * Header Component
 *
 * Features:
 * - Responsive logo switching
 * - Navigation with active state highlighting
 * - Dark mode toggle
 * - Mobile hamburger menu
 * - Sticky header with shadow on scroll
 * - Full keyboard navigation support
 * - WCAG 2.1 AA compliant
 */
export const Header = component$(() => {
  const location = useLocation();
  const theme = useSignal<Theme>("light");
  const mobileMenuOpen = useSignal(false);
  const isScrolled = useSignal(false);

  // Initialize theme on client
  useVisibleTask$(async () => {
    const initialTheme = await getInitialTheme();
    theme.value = initialTheme;

    // Apply initial theme
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    // Listen for scroll events
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 10;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleThemeToggle = $(() => {
    toggleTheme(theme);
  });

  const toggleMobileMenu = $(() => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  });

  const closeMobileMenu = $(() => {
    mobileMenuOpen.value = false;
  });

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.url.pathname === "/";
    }
    return location.url.pathname.startsWith(href);
  };

  return (
    <header
      class={`${styles.header} ${isScrolled.value ? styles.scrolled : ""}`}
      role="banner"
    >
      <div class={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <a href="/" class={styles.logoLink} aria-label="Voltage Labs Home">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav
          class={styles.desktopNav}
          aria-label="Main navigation"
          role="navigation"
        >
          <ul class={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  class={`${styles.navLink} ${
                    isActiveLink(link.href) ? styles.active : ""
                  }`}
                  aria-current={isActiveLink(link.href) ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side controls */}
        <div class={styles.controls}>
          {/* Dark Mode Toggle */}
          <button
            onClick$={handleThemeToggle}
            class={styles.themeToggle}
            aria-label={`Switch to ${theme.value === "light" ? "dark" : "light"} mode`}
            type="button"
          >
            {theme.value === "light" ? (
              <span class={styles.icon} aria-hidden="true">
                ☾
              </span>
            ) : (
              <span class={styles.icon} aria-hidden="true">
                ☼
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick$={toggleMobileMenu}
            class={styles.mobileMenuToggle}
            aria-label={mobileMenuOpen.value ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen.value}
            aria-controls="mobile-menu"
            type="button"
          >
            <span class={styles.hamburger} aria-hidden="true">
              {mobileMenuOpen.value ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen.value && (
        <nav
          id="mobile-menu"
          class={styles.mobileNav}
          aria-label="Mobile navigation"
          role="navigation"
        >
          <ul class={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  class={`${styles.mobileNavLink} ${
                    isActiveLink(link.href) ? styles.active : ""
                  }`}
                  onClick$={closeMobileMenu}
                  aria-current={isActiveLink(link.href) ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
});
