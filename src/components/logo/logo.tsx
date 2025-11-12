import { component$ } from "@builder.io/qwik";
import styles from "./logo.module.css";
import { getAssetUrl } from "../../utils/assets";

interface LogoProps {
  class?: string;
}

/**
 * Voltage Labs Logo Component
 *
 * Implements smart logo switching based on viewport size and theme:
 * - Desktop light mode: Full logo with text
 * - Desktop dark mode: Icon only
 * - Mobile (< 768px): Icon only (all modes)
 *
 * @param class - Optional additional CSS classes for styling
 */
export const Logo = component$<LogoProps>(({ class: className }) => {
  return (
    <div class={`${styles.logoContainer} ${className || ""}`}>
      {/* Desktop Light Mode - Full Logo */}
      <img
        src={getAssetUrl("/logos/full_logo_white_background_transparent.png")}
        alt="Voltage Labs"
        class={`${styles.logo} ${styles.desktopLight}`}
        width="200"
        height="60"
      />

      {/* Desktop Dark Mode - Icon Only */}
      <img
        src={getAssetUrl("/logos/voltage_labs_dark_background_logo_only.png")}
        alt="Voltage Labs"
        class={`${styles.logo} ${styles.desktopDark}`}
        width="48"
        height="48"
      />

      {/* Mobile - Icon Only (all modes) */}
      <img
        src={getAssetUrl("/logos/voltage_labs_logo_only_transparent.png")}
        alt="Voltage Labs"
        class={`${styles.logo} ${styles.mobile}`}
        width="48"
        height="48"
      />
    </div>
  );
});
