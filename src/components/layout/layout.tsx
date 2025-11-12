import { component$, Slot } from "@builder.io/qwik";
import { Header } from "../header";
import { Footer } from "../footer";
import styles from "./layout.module.css";

/**
 * Layout Component
 *
 * Main layout wrapper that includes Header and Footer.
 * Uses Slot component to render page content.
 *
 * Usage:
 * ```tsx
 * <Layout>
 *   <h1>Page Content</h1>
 * </Layout>
 * ```
 */
export const Layout = component$(() => {
  return (
    <div class={styles.layoutWrapper}>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" class="skip-to-content">
        Skip to main content
      </a>

      {/* Top Banner */}
      <div class={styles.topBanner}>
        <div class="container">
          <span class={styles.bannerText}>Voltage Labs</span>
        </div>
      </div>

      <Header />

      <main id="main-content" class={styles.main} role="main">
        <Slot />
      </main>

      <Footer />
    </div>
  );
});
