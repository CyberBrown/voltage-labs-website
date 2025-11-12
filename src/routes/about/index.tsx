import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Layout } from "../../components/layout";
import styles from "./about.module.css";

/**
 * About Page - Company information and mission
 *
 * Features:
 * - Page hero section
 * - Company background narrative
 * - Approach and philosophy
 * - Team section with placeholders
 * - Core values
 * - Full SEO optimization
 * - WCAG 2.1 AA compliant
 */
export default component$(() => {
  return (
    <Layout>
      {/* Page Hero */}
      <section class={`${styles.hero} section`} aria-label="Page Header">
        <div class="container">
          <div class={styles.heroContent}>
            <h1 class={styles.heroHeading}>Our Story</h1>
            <p class={styles.heroSubheading}>
              From a Small Business Problem to an AI-Powered Solution
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section class={`${styles.background} section`} aria-label="Origin Story">
        <div class="container">
          <div class={styles.backgroundContent}>
            <p>
              Voltage Labs was born from a common small business problem. Our founder, Chris, was running his own small business (Solamp) and needed world-class marketing. With a background at large corporations, he knew the "big company" marketing playbook, but it was too complex and expensive for an SMB.
            </p>

            <p>
              So, he built his own in-house tools to fix it.
            </p>

            <p>
              The goal: break down the corporate playbook and make it accessible. He developed an AI that could study a brand, measure it against 151 independent metrics, and create a unique "Brand Fingerprint." This fingerprint becomes the "source of truth" for generating perfectly consistent, on-brand marketing materials.
            </p>

            <p>
              The tools worked so well that colleagues started asking when they could use them for their businesses. After months of refinement, Voltage Labs was born.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section class={`${styles.caseStudy} section`} aria-label="Case Study">
        <div class="container">
          <h2 class={styles.sectionTitle}>The Proof: The Solamp Case Study</h2>
          <p class={styles.caseStudyIntro}>
            We used this exact system to grow our own business. The numbers speak for themselves.
          </p>

          <h3 class={styles.resultsTitle}>The Results (in less than two years):</h3>

          <div class={`grid grid-cols-2 ${styles.metricsGrid}`}>
            <div class={`card ${styles.metricCard}`}>
              <div class={styles.metricValue}>$0 to $1M+</div>
              <p class={styles.metricLabel}>Annual sales revenue in 18 months</p>
            </div>

            <div class={`card ${styles.metricCard}`}>
              <div class={styles.metricValue}>1M+</div>
              <p class={styles.metricLabel}>Website impressions in 18 months (from $0)</p>
            </div>

            <div class={`card ${styles.metricCard}`}>
              <div class={styles.metricValue}>275%</div>
              <p class={styles.metricLabel}>Growth in revenue (2025 Stats)</p>
            </div>

            <div class={`card ${styles.metricCard}`}>
              <div class={styles.metricValue}>10x</div>
              <p class={styles.metricLabel}>Growth in organic (non-paid) users</p>
            </div>

            <div class={`card ${styles.metricCard}`}>
              <div class={styles.metricValue}>66%</div>
              <p class={styles.metricLabel}>Engaged session rate from organic traffic</p>
            </div>

            <div class={`card ${styles.metricCard}`}>
              <div class={styles.metricValue}>441%</div>
              <p class={styles.metricLabel}>Growth in units sold vs. 188% growth in orders</p>
            </div>

            <div class={`card ${styles.metricCard}`}>
              <div class={styles.metricValue}>35%</div>
              <p class={styles.metricLabel}>Growth in average order value</p>
            </div>

            <div class={`card ${styles.metricCard}`}>
              <div class={styles.metricValue}>175%</div>
              <p class={styles.metricLabel}>Growth in new customers</p>
            </div>
          </div>

          <div class={styles.caseStudyCta}>
            <a href="/services" class="btn btn-primary">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class={`${styles.ctaSection} section`} aria-label="Call to Action">
        <div class="container">
          <div class={styles.ctaContent}>
            <h2 class={styles.ctaHeading}>Ready to Get Your Own Results?</h2>
            <p class={styles.ctaSubtext}>
              Join our beta program and get a free brand analysis, SEO report, and custom marketing content.
            </p>
            <a href="https://form.jotform.com/253064907564058" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              Become a Beta Tester
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
});

export const head: DocumentHead = {
  title: "About Voltage Labs | Strategic Consulting",
  meta: [
    {
      name: "description",
      content:
        "Voltage Labs is a strategic consulting firm helping organizations close the gap between strategy and execution. Learn about our approach, team, and mission.",
    },
    {
      name: "keywords",
      content:
        "about voltage labs, strategic consulting, business transformation, team, mission, values",
    },
    {
      property: "og:title",
      content: "About Voltage Labs | Strategic Consulting",
    },
    {
      property: "og:description",
      content:
        "We help organizations bridge the gap between strategic vision and operational execution through tactical playbooks.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
};
