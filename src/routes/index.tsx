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
              We bring executive-level AI strategy to small and midsized businesses.
            </p>
            <a href="/contact" class="btn btn-primary">
              Schedule Strategic Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section class={`${styles.servicesOverview} section`} aria-label="Services">
        <div class="container">
          <h2 class={styles.sectionTitle}>Core Services</h2>
          <p class={styles.sectionIntro}>
            Services designed to bridge the gap between
            strategy and execution.
          </p>

          <div class={`grid grid-cols-3 ${styles.servicesGrid}`}>
            {/* Service 1: AI & Marketing Implementation */}
            <article class={`card ${styles.serviceCard}`}>
              <div class={styles.serviceIcon}>📋</div>
              <h3 class={styles.serviceTitle}>AI & Marketing Implementation</h3>
              <p class={styles.serviceDescription}>
                Stop feeling overwhelmed by content demands. We use our in-house AI tools to build your marketing and content engine, or we can train your team to use our tools internally. We don't just plan; we do the work
              </p>
              <p class={styles.serviceOutcome}>

              </p>
            </article>

            {/* Service 2: Energy Efficiency Roadmap */}
            <article class={`card ${styles.serviceCard}`}>
              <div class={styles.serviceIcon}>⚙️</div>
              <h3 class={styles.serviceTitle}>Energy Efficiency Roadmap</h3>
              <p class={styles.serviceDescription}>
                We use AI-driven analysis to map your path to efficiency, control energy costs, and meet sustainability goals. This is your high-level roadmap to a better bottom line.
              </p>
              <p class={styles.serviceOutcome}>

              </p>
            </article>

            {/* Service 3: Strategic AI & Automation */}
            <article class={`card ${styles.serviceCard}`}>
              <div class={styles.serviceIcon}>📊</div>
              <h3 class={styles.serviceTitle}>Strategic AI & Automation</h3>
              <p class={styles.serviceDescription}>
               What's your AI policy? We help you cut through the jargon and find the 'low hanging fruit' where AI can immediately reduce stress, increase efficiency, and give you a competitive edge
              </p>
              <p class={styles.serviceOutcome}>

              </p>
            </article>
          </div>
        </div>
      </section>
      
      {/* Social Proof */}
      <section class={`${styles.socialProof} section`} aria-label="Client Testimonials">
        <div class="container">
          <h2 class={styles.sectionTitle}>We're Not Just Consultants. We're Entrepreneurs.</h2>
           <p class={styles.sectionIntro}>Why do we get it? Because we’ve done it. We took our own bootstrapped company from zero to $1 million in revenue in 16 months. We know the stress of running a small business. We know there are never enough people and the to-do lists are too long. We built Voltage Labs to bring the AI-powered tools and executive-level analysis—once only available to large corporations —to entrepreneurs like you</p>
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

      {/* Social Proof */}
      <section class={`${styles.socialProof} section`} aria-label="Client Testimonials">
        <div class="container">
          <h2 class={styles.sectionTitle}>Trusted by Leaders in Metro Boston</h2>

          <div class={`grid grid-cols-3 ${styles.clientGrid}`}>
            <div class={`card ${styles.clientCard}`}>
              <div class={styles.clientLogo}>
                <span class={styles.logoPlaceholder}>Client Logo 1</span>
              </div>
            </div>
            <div class={`card ${styles.clientCard}`}>
              <div class={styles.clientLogo}>
                <span class={styles.logoPlaceholder}>Client Logo 2</span>
              </div>
            </div>
            <div class={`card ${styles.clientCard}`}>
              <div class={styles.clientLogo}>
                <span class={styles.logoPlaceholder}>Client Logo 3</span>
              </div>
            </div>
          </div>

          <p class={styles.socialProofNote}>
            Client logos and testimonials coming soon. We work with established
            organizations across professional services, healthcare, manufacturing,
            and professional development sectors throughout New England.
          </p>
        </div>
      </section>

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
          <p class={styles.ctaLocation}>Metro Boston | Strategic Consulting</p>
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
