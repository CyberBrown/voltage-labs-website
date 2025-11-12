import { component$ } from "@builder.io/qwik";
import styles from "./logo.module.css";
import { getAssetUrl } from "../../utils/assets";

interface LogoProps {
  class?: string;
}

/**
 * Voltage Labs Logo Component
 *
 * Uses SVG logo with transparent background for all modes
 *
 * @param class - Optional additional CSS classes for styling
 */
export const Logo = component$<LogoProps>(({ class: className }) => {
  return (
    <img
      src={getAssetUrl("/logos/voltage-labs-logo-only.svg")}
      alt="Voltage Labs"
      class={`${styles.logo} ${className || ""}`}
      width="48"
      height="48"
    />
  );
});
