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
            <h1 class={styles.heroHeading}>About Voltage Labs</h1>
            <p class={styles.heroSubheading}>
              Strategic consulting firm helping established organizations bridge
              the gap between strategic vision and operational execution. Based
              in Metro Boston, serving organizations throughout New England.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section class={`${styles.background} section`} aria-label="Company Background">
        <div class="container">
          <h2 class={styles.sectionTitle}>Our Story</h2>

          <div class={styles.backgroundContent}>
            <p>
              Voltage Labs was founded on a simple observation: most organizations
              fail not because of bad strategy, but because of poor execution. The
              gap between strategic intent and operational reality is where value
              gets lost. We built Voltage Labs to close that gap.
            </p>

            <p>
              Drawing from decades of combined experience across strategy consulting,
              operations management, and organizational transformation, we've
              developed a proven methodology for translating strategy into measurable
              results. Our playbook-driven approach has helped dozens of organizations
              across professional services, healthcare, manufacturing, and professional
              development sectors accelerate their transformation initiatives.
            </p>

            <p>
              We work exclusively with established organizations and experienced
              leadership teams who understand that transformation requires rigor,
              discipline, and clear accountability. We're not here to convince you
              to change—we're here to help you execute the change you've already decided
              to make.
            </p>

            <p>
              Based in Boston, we serve organizations throughout New England. Our
              leadership team brings deep experience working with the region's premier
              organizations across sectors and company sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section class={`${styles.approach} section`} aria-label="Our Approach">
        <div class="container">
          <h2 class={styles.sectionTitle}>Our Approach</h2>

          <div class={`grid grid-cols-2 ${styles.approachGrid}`}>
            <div class={`card ${styles.approachCard}`}>
              <h3 class={styles.approachTitle}>Playbook Philosophy</h3>
              <p class={styles.approachText}>
                Strategy without execution is fantasy. We believe transformation
                happens through disciplined, sequenced action. Our playbooks translate
                strategic ambition into specific tactics, clear ownership, realistic
                timelines, and measurable outcomes. Every action maps to business
                impact.
              </p>
            </div>

            <div class={`card ${styles.approachCard}`}>
              <h3 class={styles.approachTitle}>Measurable Results</h3>
              <p class={styles.approachText}>
                We define success upfront and measure relentlessly. Vague aspirations
                become specific metrics. Progress is tracked continuously against
                baseline. Every initiative produces documented ROI. Your investment
                in transformation is quantified and credible.
              </p>
            </div>

            <div class={`card ${styles.approachCard}`}>
              <h3 class={styles.approachTitle}>Realistic Rigor</h3>
              <p class={styles.approachText}>
                We work within your organizational constraints—not around them. We
                understand the difference between textbook best practices and what
                actually works in your company. Our recommendations are grounded in
                your reality, not in consultant fantasies.
              </p>
            </div>

            <div class={`card ${styles.approachCard}`}>
              <h3 class={styles.approachTitle}>Accountability</h3>
              <p class={styles.approachText}>
                Clear ownership, structured review, and honest assessment drive
                results. We establish accountability frameworks that work in your
                culture. Progress isn't theoretical—it's documented, reviewed, and
                optimized in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Playbooks Work */}
      <section class={`${styles.whyPlaybooks} section`} aria-label="Why Playbooks Work">
        <div class="container">
          <h2 class={styles.sectionTitle}>Why Playbooks Work</h2>

          <div class={styles.whyPlaybooksContent}>
            <div class={styles.whyPlaybooksItem}>
              <h3 class={styles.whyPlaybooksTitle}>Eliminate Ambiguity</h3>
              <p>
                Vague strategies leave room for different interpretations. Playbooks
                create clarity: everyone knows what gets done, when, by whom, and why.
                No more misalignment or wasted effort on non-priorities.
              </p>
            </div>

            <div class={styles.whyPlaybooksItem}>
              <h3 class={styles.whyPlaybooksTitle}>Accelerate Execution</h3>
              <p>
                Clear sequencing, resource allocation, and dependency management
                reduce delays. Your organization moves faster because everyone
                understands what comes next and why.
              </p>
            </div>

            <div class={styles.whyPlaybooksItem}>
              <h3 class={styles.whyPlaybooksTitle}>Build Accountability</h3>
              <p>
                Clear ownership and structured review create accountability without
                blame. People know what success looks like and can measure their
                contribution to it.
              </p>
            </div>

            <div class={styles.whyPlaybooksItem}>
              <h3 class={styles.whyPlaybooksTitle}>Demonstrate ROI</h3>
              <p>
                Playbooks tie tactics to outcomes. You can demonstrate the business
                value of transformation, not just effort. Stakeholders see actual
                results, not just activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class={`${styles.team} section`} aria-label="Our Team">
        <div class="container">
          <h2 class={styles.sectionTitle}>Our Team</h2>
          <p class={styles.teamIntro}>
            Voltage Labs is led by experienced consultants and practitioners
            with deep expertise in strategic transformation and organizational
            execution. We're building a team dedicated to helping organizations
            close the strategy-execution gap.
          </p>

          <div class={`grid grid-cols-3 ${styles.teamGrid}`}>
            <article class={`card ${styles.teamCard}`}>
              <div class={styles.teamMemberPlaceholder}>Team Member 1</div>
              <h3 class={styles.teamMemberName}>Name</h3>
              <p class={styles.teamMemberRole}>Role</p>
              <p class={styles.teamMemberBio}>
                Professional background and expertise summary coming soon.
              </p>
            </article>

            <article class={`card ${styles.teamCard}`}>
              <div class={styles.teamMemberPlaceholder}>Team Member 2</div>
              <h3 class={styles.teamMemberName}>Name</h3>
              <p class={styles.teamMemberRole}>Role</p>
              <p class={styles.teamMemberBio}>
                Professional background and expertise summary coming soon.
              </p>
            </article>

            <article class={`card ${styles.teamCard}`}>
              <div class={styles.teamMemberPlaceholder}>Team Member 3</div>
              <h3 class={styles.teamMemberName}>Name</h3>
              <p class={styles.teamMemberRole}>Role</p>
              <p class={styles.teamMemberBio}>
                Professional background and expertise summary coming soon.
              </p>
            </article>
          </div>

          <p class={styles.teamNote}>
            Team bios and photos coming soon. In the meantime, we're excited to
            discuss our experience and how we can help with your transformation.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section class={`${styles.values} section`} aria-label="Our Values">
        <div class="container">
          <h2 class={styles.sectionTitle}>Our Values</h2>

          <div class={`grid grid-cols-2 ${styles.valuesGrid}`}>
            <div class={`card ${styles.valueCard}`}>
              <h3 class={styles.valueTitle}>Rigor</h3>
              <p class={styles.valueDescription}>
                Discipline in thinking, thoroughness in analysis, honesty in
                assessment. We don't cut corners or make excuses. Results speak.
              </p>
            </div>

            <div class={`card ${styles.valueCard}`}>
              <h3 class={styles.valueTitle}>Pragmatism</h3>
              <p class={styles.valueDescription}>
                Real solutions for real organizations. We work within your
                constraints and culture, not against them. Theory is great;
                what works is better.
              </p>
            </div>

            <div class={`card ${styles.valueCard}`}>
              <h3 class={styles.valueTitle}>Accountability</h3>
              <p class={styles.valueDescription}>
                We commit to outcomes, not just effort. Our recommendations are
                grounded in business impact. We measure, track, and take
                responsibility for results.
              </p>
            </div>

            <div class={`card ${styles.valueCard}`}>
              <h3 class={styles.valueTitle}>Partnership</h3>
              <p class={styles.valueDescription}>
                We succeed when you succeed. Long-term relationships built on
                trust, transparency, and mutual commitment to transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class={`${styles.ctaSection} section`} aria-label="Call to Action">
        <div class="container">
          <div class={styles.ctaContent}>
            <h2 class={styles.ctaHeading}>Let's Discuss Your Transformation</h2>
            <p class={styles.ctaSubtext}>
              If you're ready to close the gap between strategy and execution,
              we'd welcome the conversation.
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
