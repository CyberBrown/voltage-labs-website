import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Layout } from "../../components/layout";
import styles from "./services.module.css";

/**
 * Services Page - Brand Fingerprint methodology and beta program
 *
 * Features:
 * - How It Works explanation
 * - Three-step process
 * - Beta tester program details
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
            <h1 class={styles.heroHeading}>How It Works: Your "Brand Fingerprint"</h1>
            <p class={styles.heroSubheading}>
              Our process is technical, but the result is simple: consistency and growth. We give your brand a voice and a plan, all driven by data.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: The Intake */}
      <section class={`${styles.processStep} section`} aria-label="Step 1">
        <div class="container">
          <div class={styles.stepContainer}>
            <div class={styles.stepNumber}>1</div>
            <h2 class={styles.stepTitle}>Step 1: The Intake</h2>
            <p class={styles.stepDescription}>
              It starts with a simple form. You can complete our 5-minute survey or, for highly improved results, the 1-hour detailed brand interview. This gives our AI the raw material.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2: The Brand Fingerprint */}
      <section class={`${styles.processStep} ${styles.processStepAlt} section`} aria-label="Step 2">
        <div class="container">
          <div class={styles.stepContainer}>
            <div class={styles.stepNumber}>2</div>
            <h2 class={styles.stepTitle}>Step 2: The Brand Fingerprint</h2>
            <p class={styles.stepDescription}>
              Our AI analyzes your business against 151 independent metrics. The output is a comprehensive brand report that covers your brand's unique attributes, tone of voice, content style, writing style, and visual style.
            </p>
          </div>
        </div>
      </section>

      {/* Step 3: The Content Engine */}
      <section class={`${styles.processStep} section`} aria-label="Step 3">
        <div class="container">
          <div class={styles.stepContainer}>
            <div class={styles.stepNumber}>3</div>
            <h2 class={styles.stepTitle}>Step 3: The Content Engine</h2>
            <p class={styles.stepDescription}>
              This "fingerprint" is now used to generate all your marketing materials. Every blog post, social media update, and email is perfectly consistent and tailored to your customer demographic.
            </p>
          </div>
        </div>
      </section>

      {/* Beta Tester Program */}
      <section class={`${styles.betaProgram} section`} aria-label="Beta Program">
        <div class="container">
          <h2 class={styles.sectionTitle}>Try It For Free: We're Looking for Beta Testers</h2>
          <p class={styles.betaIntro}>
            We want to prove our system can work for you. If you're interested, we'd like to offer you a free introductory package.
          </p>

          <div class={`grid grid-cols-2 ${styles.betaGrid}`}>
            <div class={`card ${styles.betaCard}`}>
              <h3 class={styles.betaCardTitle}>What You Get (No Cost):</h3>
              <ul class={styles.betaList}>
                <li>A comprehensive brand report that covers your brand's unique attributes</li>
                <li>A website SEO report with actionable insights</li>
                <li>10 Facebook posts (you are welcome to use them)</li>
                <li>1 blog post (you are welcome to publish it)</li>
              </ul>
            </div>

            <div class={`card ${styles.betaCard}`}>
              <h3 class={styles.betaCardTitle}>What We Ask For:</h3>
              <ul class={styles.betaList}>
                <li>If you like the product, we would love a testimonial (we will link to your website, which is great for your SEO)</li>
                <li>If you don't like it, we would ask for your honest feedback so we can improve</li>
              </ul>
            </div>
          </div>

          <div class={styles.betaCta}>
            <h3 class={styles.betaCtaTitle}>Ready to Start?</h3>
            <p class={styles.betaCtaText}>It only takes 5 minutes to get your free content.</p>
            <a href="https://form.jotform.com/253064907564058" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              Fill Out the 5-Minute Form
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
});

export const head: DocumentHead = {
  title: "How It Works | Voltage Labs Brand Fingerprint",
  meta: [
    {
      name: "description",
      content:
        "Learn how Voltage Labs uses AI to create your unique Brand Fingerprint from 151 metrics, generating consistent, on-brand marketing content.",
    },
    {
      name: "keywords",
      content:
        "brand fingerprint, AI marketing, brand analysis, content generation, beta program",
    },
    {
      property: "og:title",
      content: "How It Works | Voltage Labs Brand Fingerprint",
    },
    {
      property: "og:description",
      content:
        "Discover our 3-step process: intake, brand fingerprint analysis, and automated content generation.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
};
