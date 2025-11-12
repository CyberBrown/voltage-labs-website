import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Layout } from "../components/layout";
import { getAssetUrl } from "../utils/assets";
import styles from "./home.module.css";

/**
 * Homepage - Main landing page for Voltage Labs
 *
 * Features:
 * - Powerful hero section with value proposition
 * - Services overview with 3 key offerings
 * - Value proposition grid
 * - Social proof section
 * - Call-to-action section
 * - Full SEO optimization
 * - WCAG 2.1 AA compliant
 */
export default component$(() => {
  const heroImageUrl = getAssetUrl("/a-digital-art-composition-featuring-lumi_MmTzGR-oRO6vAoNlwh8Iww_9U7IXHj_Sqykb_UrkKpA4g.png");

  return (
    <Layout>
      {/* Hero Section */}
      <section
        class={`${styles.hero} section`}
        aria-label="Hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div class="container">
          <div class={styles.heroContent}>
            <h1 class={styles.heroHeading}>
              AI-Driven Playbooks. Executive-Level Results.
            </h1>
            <p class={styles.heroSubheading}>
              We built an AI that learns your brand's unique "fingerprint" from 151 independent metrics. It then generates consistent, on-brand marketing and strategy, delivering executive-level results for a fraction of the cost.
            </p>
          </div>
        </div>
      </section>

      {/* Beta Tester CTA */}
      <section class={`${styles.betaCta} section`} aria-label="Beta Program">
        <div class="container">
          <div class={styles.betaContent}>
            <h2 class={styles.betaHeading}>Get a Free Brand Report & Marketing Assets</h2>
            <p class={styles.betaDescription}>
              We are currently looking for beta testers. In exchange for your honest feedback, you will get a comprehensive brand analysis, an SEO report, 10 social media posts, and one blog post—all tailored to your brand and free to use.
            </p>
            <a href="https://form.jotform.com/253064907564058" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              Become a Beta Tester
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section class={`${styles.servicesOverview} section`} aria-label="Services">
        <div class="container">
          <h2 class={styles.sectionTitle}>Core Services</h2>
          <p class={styles.sectionIntro}>
            High-level overview of our services. Visit our Services page for detailed information.
          </p>

          <div class={`grid grid-cols-3 ${styles.servicesGrid}`}>
            {/* Service 1: AI-Driven Marketing */}
            <article class={`card ${styles.serviceCard}`}>
              <div class={styles.serviceIcon}>📋</div>
              <h3 class={styles.serviceTitle}>AI-Driven Marketing</h3>
              <p class={styles.serviceDescription}>
                We use your brand's unique fingerprint to generate content that is perfectly on-brand and tailored to your customers.
              </p>
            </article>

            {/* Service 2: Energy & Sustainability Roadmaps */}
            <article class={`card ${styles.serviceCard}`}>
              <div class={styles.serviceIcon}>⚙️</div>
              <h3 class={styles.serviceTitle}>Energy & Sustainability Roadmaps</h3>
              <p class={styles.serviceDescription}>
                We apply the same data-driven rigor to your costs, building AI-powered roadmaps for efficiency and savings.
              </p>
            </article>

            {/* Service 3: Strategic AI Implementation */}
            <article class={`card ${styles.serviceCard}`}>
              <div class={styles.serviceIcon}>📊</div>
              <h3 class={styles.serviceTitle}>Strategic AI Implementation</h3>
              <p class={styles.serviceDescription}>
                We help you build your own "Brand Fingerprint" and show you how to leverage AI across your entire business.
              </p>
            </article>
          </div>
        </div>
      </section>


      {/* Proof Section - Solamp Success Story */}
      <section class={`${styles.proofSection} section`} aria-label="Our Story">
        <div class="container">
          <div class={styles.proofContent}>
            <h2 class={styles.proofHeading}>From Zero to $1 Million in 18 Months</h2>
            <p class={styles.proofText}>
              We built these tools for our own small business, Solamp. The results? 10x growth in organic users and over $1M in annual sales revenue in our first 18 months. We're now making this playbook available to you.
            </p>
            <a href="/about" class="btn btn-secondary">
              Read Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition 
      <section class={`${styles.valueProposition} section`} aria-label="Why Tactical Playbooks Work">
        <div class="container">
          <h2 class={styles.sectionTitle}>Why Tactical Playbooks Drive Results</h2>

          <div class={`grid grid-cols-2 ${styles.valuePropGrid}`}>
            <div class={`card ${styles.valuePropCard}`}>
              <h3 class={styles.valuePropTitle}>Strategic Specificity</h3>
              <p class={styles.valuePropText}>
                Vague strategies fail. Our playbooks translate big ideas into
                specific actions with clear accountability, eliminating the gap
                between intention and execution.
              </p>
            </div> 

            <div class={`card ${styles.valuePropCard}`}>
              <h3 class={styles.valuePropTitle}>Measurable Outcomes</h3>
              <p class={styles.valuePropText}>
                We define success metrics upfront and track them continuously.
                Every tactic ties directly to ROI, making optimization data-driven
                and transparent.
              </p>
            </div>

            <div class={`card ${styles.valuePropCard}`}>
              <h3 class={styles.valuePropTitle}>Executive Alignment</h3>
              <p class={styles.valuePropText}>
                Playbooks create shared understanding across your leadership team.
                No more mixed signals. Everyone knows the priorities, the timeline,
                and the expected outcomes.
              </p>
            </div>

            <div class={`card ${styles.valuePropCard}`}>
              <h3 class={styles.valuePropTitle}>Adaptive Execution</h3>
              <p class={styles.valuePropText}>
                Markets change. Our playbooks build in structured review cycles
                to monitor performance and adjust tactics without losing strategic
                focus or timeline momentum.
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section class={`${styles.ctaSection} section`} aria-label="Call to Action">
        <div class="container">
          <div class={styles.ctaContent}>
            <h2 class={styles.ctaHeading}>Ready to Execute Your Strategy?</h2>
            <p class={styles.ctaSubtext}>
              Schedule a consultation to discuss how tactical playbooks can
              accelerate your transformation.
            </p>
            <a href="/contact" class="btn btn-primary">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
});

export const head: DocumentHead = {
  title: "Transform Strategy Into Execution | Voltage Labs",
  meta: [
    {
      name: "description",
      content:
        "Strategic consulting for SMB leaders and executives. Transform strategy into measurable results through tactical playbooks. Metro Boston-based consulting.",
    },
    {
      name: "keywords",
      content:
        "strategic consulting, business transformation, tactical playbooks, SMB consulting, Metro Boston",
    },
    {
      property: "og:title",
      content: "Transform Strategy Into Execution | Voltage Labs",
    },
    {
      property: "og:description",
      content:
        "Measurable ROI delivered through tactical playbooks. Strategic consulting for Metro Boston executives.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
};
