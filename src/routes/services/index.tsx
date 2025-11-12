import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Layout } from "../../components/layout";
import styles from "./services.module.css";

/**
 * Services Page - Detailed explanation of Voltage Labs services
 *
 * Features:
 * - Page hero section
 * - Playbook methodology explanation
 * - Three detailed service descriptions
 * - Process visualization
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
            <h1 class={styles.heroHeading}>Services & Methodology</h1>
            <p class={styles.heroSubheading}>
              Strategic consulting grounded in a proven playbook-driven approach
              to business transformation. We bridge the gap between strategy and
              execution through structured, measurable processes.
            </p>
          </div>
        </div>
      </section>

      {/* Playbook Methodology */}
      <section class={`${styles.methodology} section`} aria-label="Playbook Methodology">
        <div class="container">
          <h2 class={styles.sectionTitle}>The Playbook Methodology</h2>
          <p class={styles.methodologyIntro}>
            Our approach transforms strategic ambition into executable reality
            through a structured methodology that eliminates ambiguity and
            maximizes accountability.
          </p>

          <div class={`grid grid-cols-3 ${styles.methodologyGrid}`}>
            <div class={styles.methodologyStep}>
              <div class={styles.stepNumber}>1</div>
              <h3 class={styles.stepTitle}>Define & Align</h3>
              <p class={styles.stepDescription}>
                We begin by deeply understanding your strategic objectives,
                current state, and organizational constraints. Through structured
                discovery, we build executive alignment on vision, priorities,
                success metrics, and timeline.
              </p>
            </div>

            <div class={styles.methodologyStep}>
              <div class={styles.stepNumber}>2</div>
              <h3 class={styles.stepTitle}>Build Playbooks</h3>
              <p class={styles.stepDescription}>
                We translate strategy into day-by-day tactical playbooks that
                specify exactly what gets done, when, by whom, and why. Every
                tactic maps directly to measurable business outcomes and ROI.
              </p>
            </div>

            <div class={styles.methodologyStep}>
              <div class={styles.stepNumber}>3</div>
              <h3 class={styles.stepTitle}>Execute & Measure</h3>
              <p class={styles.stepDescription}>
                We guide implementation with structured accountability frameworks,
                continuous performance monitoring, and systematic optimization.
                Outcomes are tracked rigorously against established baselines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Playbook Development */}
      <section class={`${styles.serviceDetail} section`} aria-label="Strategic Playbook Development Service">
        <div class="container">
          <div class={styles.serviceLayout}>
            <div class={styles.serviceInfo}>
              <h2 class={styles.serviceHeading}>Strategic Playbook Development</h2>

              <h3 class={styles.subsectionTitle}>What It Is</h3>
              <p>
                A comprehensive transformation roadmap that converts strategic
                vision into specific, sequenced tactics with clear ownership,
                timelines, and success metrics. Your playbook becomes the
                executable blueprint for organizational change.
              </p>

              <h3 class={styles.subsectionTitle}>How It Works</h3>
              <ul class={styles.processList}>
                <li>Strategic assessment and competitive positioning analysis</li>
                <li>Stakeholder interviews and alignment workshops</li>
                <li>Detailed tactical roadmap development (12-24 month horizon)</li>
                <li>
                  Resource requirement planning and implementation sequencing
                </li>
                <li>Success metric definition and baseline establishment</li>
                <li>Executive review and sign-off on complete playbook</li>
              </ul>

              <h3 class={styles.subsectionTitle}>Expected Outcomes</h3>
              <ul class={styles.outcomeList}>
                <li>Clear execution roadmap with measurable milestones</li>
                <li>
                  Aligned leadership team with shared understanding of priorities
                </li>
                <li>Defined success metrics tied to business outcomes</li>
                <li>Resource requirements clearly identified</li>
                <li>Risk mitigation strategy and contingency plans</li>
              </ul>

              <h3 class={styles.subsectionTitle}>Timeline</h3>
              <p>Typically 8-12 weeks for comprehensive playbook development</p>
            </div>

            <div class={styles.serviceMeta}>
              <div class={`card ${styles.metaCard}`}>
                <h4 class={styles.metaTitle}>Ideal For</h4>
                <ul class={styles.metaList}>
                  <li>Strategic pivots</li>
                  <li>Market expansion</li>
                  <li>Digital transformation</li>
                  <li>Operational restructuring</li>
                  <li>Growth acceleration</li>
                </ul>
              </div>

              <div class={`card ${styles.metaCard}`}>
                <h4 class={styles.metaTitle}>Typical Investment</h4>
                <p class={styles.investmentNote}>
                  Custom pricing based on scope and complexity. Starting at
                  $15,000 for focused initiatives.
                </p>
              </div>

              <div class={`card ${styles.metaCard}`}>
                <h4 class={styles.metaTitle}>Your Team Gets</h4>
                <ul class={styles.metaList}>
                  <li>Complete playbook document</li>
                  <li>Executive summary presentation</li>
                  <li>Implementation timeline</li>
                  <li>Success metric dashboard template</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Implementation */}
      <section class={`${styles.serviceDetail} section`} aria-label="Operational Implementation Service">
        <div class="container">
          <div class={styles.serviceLayout}>
            <div class={styles.serviceInfo}>
              <h2 class={styles.serviceHeading}>Operational Implementation</h2>

              <h3 class={styles.subsectionTitle}>What It Is</h3>
              <p>
                Hands-on guidance for executing your playbook. We work embedded
                within your organization, providing real-time coaching,
                accountability frameworks, and course correction to maintain
                momentum and measurable progress toward objectives.
              </p>

              <h3 class={styles.subsectionTitle}>How It Works</h3>
              <ul class={styles.processList}>
                <li>Weekly execution monitoring and performance review</li>
                <li>
                  Structured accountability frameworks (reporting, escalation)
                </li>
                <li>Team coaching on tactical execution and problem-solving</li>
                <li>Real-time course correction based on performance data</li>
                <li>Stakeholder communication and progress reporting</li>
                <li>
                  Monthly strategic reviews to assess progress and adjust
                </li>
              </ul>

              <h3 class={styles.subsectionTitle}>Expected Outcomes</h3>
              <ul class={styles.outcomeList}>
                <li>Consistent execution momentum and measurable progress</li>
                <li>Faster identification and resolution of implementation issues</li>
                <li>Documented results with weekly/monthly progress reports</li>
                <li>Team capability building through structured coaching</li>
                <li>Reduced risk of strategic drift or lost focus</li>
              </ul>

              <h3 class={styles.subsectionTitle}>Timeline</h3>
              <p>
                Flexible engagement: 3-month minimum, typically 6-12 months for
                comprehensive transformation
              </p>
            </div>

            <div class={styles.serviceMeta}>
              <div class={`card ${styles.metaCard}`}>
                <h4 class={styles.metaTitle}>Ideal For</h4>
                <ul class={styles.metaList}>
                  <li>Major transformation initiatives</li>
                  <li>Complex cross-functional projects</li>
                  <li>Building new capabilities</li>
                  <li>Scaling operations</li>
                  <li>Culture change initiatives</li>
                </ul>
              </div>

              <div class={`card ${styles.metaCard}`}>
                <h4 class={styles.metaTitle}>Typical Investment</h4>
                <p class={styles.investmentNote}>
                  Based on engagement scope and duration. Monthly retainers
                  typically $3,000-$8,000.
                </p>
              </div>

              <div class={`card ${styles.metaCard}`}>
                <h4 class={styles.metaTitle}>Your Team Gets</h4>
                <ul class={styles.metaList}>
                  <li>Dedicated implementation advisor</li>
                  <li>Weekly coaching and guidance</li>
                  <li>Monthly progress reports</li>
                  <li>Access to templates and tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Measurement & Optimization */}
      <section class={`${styles.serviceDetail} section`} aria-label="Performance Measurement Service">
        <div class="container">
          <div class={styles.serviceLayout}>
            <div class={styles.serviceInfo}>
              <h2 class={styles.serviceHeading}>Performance Measurement & ROI</h2>

              <h3 class={styles.subsectionTitle}>What It Is</h3>
              <p>
                Rigorous outcome tracking that connects every tactical action to
                measurable business impact. We establish baselines, monitor
                progress in real-time, and continuously optimize your approach
                to maximize ROI on transformation investment.
              </p>

              <h3 class={styles.subsectionTitle}>How It Works</h3>
              <ul class={styles.processList}>
                <li>Baseline metric establishment across all success measures</li>
                <li>Real-time performance dashboard and monitoring</li>
                <li>Weekly/monthly progress analysis and insights</li>
                <li>Variance analysis (actual vs. planned performance)</li>
                <li>Tactic optimization recommendations based on results data</li>
                <li>ROI calculation and executive reporting</li>
              </ul>

              <h3 class={styles.subsectionTitle}>Expected Outcomes</h3>
              <ul class={styles.outcomeList}>
                <li>Documented ROI with clear business impact quantification</li>
                <li>Data-driven decision making for optimization</li>
                <li>Transparent accountability against committed outcomes</li>
                <li>Actionable insights for process improvement</li>
                <li>Credibility with stakeholders through demonstrated results</li>
              </ul>

              <h3 class={styles.subsectionTitle}>Timeline</h3>
              <p>Continuous engagement: 6-month minimum to establish patterns</p>
            </div>

            <div class={styles.serviceMeta}>
              <div class={`card ${styles.metaCard}`}>
                <h4 class={styles.metaTitle}>Ideal For</h4>
                <ul class={styles.metaList}>
                  <li>Transformation accountability</li>
                  <li>ROI documentation</li>
                  <li>Continuous optimization</li>
                  <li>Stakeholder confidence</li>
                  <li>Process improvement</li>
                </ul>
              </div>

              <div class={`card ${styles.metaCard}`}>
                <h4 class={styles.metaTitle}>Typical Investment</h4>
                <p class={styles.investmentNote}>
                  Often bundled with implementation services. Standalone: $1,500-$3,000/month.
                </p>
              </div>

              <div class={`card ${styles.metaCard}`}>
                <h4 class={styles.metaTitle}>Your Team Gets</h4>
                <ul class={styles.metaList}>
                  <li>Custom dashboard setup</li>
                  <li>Monthly performance reports</li>
                  <li>Quarterly ROI analysis</li>
                  <li>Executive summary slides</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section class={`${styles.howWeWork} section`} aria-label="How We Work Process">
        <div class="container">
          <h2 class={styles.sectionTitle}>How We Work</h2>
          <p class={styles.howWeWorkIntro}>
            Our engagement model is structured, transparent, and results-focused.
          </p>

          <div class={`grid grid-cols-2 ${styles.processGrid}`}>
            <div class={`card ${styles.processCard}`}>
              <h3 class={styles.processTitle}>Discovery & Assessment</h3>
              <p class={styles.processDescription}>
                We invest time upfront understanding your business, strategic
                objectives, organizational structure, and constraints. This
                enables us to build playbooks that are realistic and executable
                within your context.
              </p>
            </div>

            <div class={`card ${styles.processCard}`}>
              <h3 class={styles.processTitle}>Collaborative Design</h3>
              <p class={styles.processDescription}>
                Your team is central to playbook development. Through workshops
                and iterative review, we ensure the playbook reflects your
                strategic intent, builds organizational buy-in, and identifies
                implementation risks early.
              </p>
            </div>

            <div class={`card ${styles.processCard}`}>
              <h3 class={styles.processTitle}>Structured Execution</h3>
              <p class={styles.processDescription}>
                Implementation follows a structured framework with clear
                accountability, regular monitoring, and systematic problem-solving.
                Progress is tracked against established metrics.
              </p>
            </div>

            <div class={`card ${styles.processCard}`}>
              <h3 class={styles.processTitle}>Continuous Optimization</h3>
              <p class={styles.processDescription}>
                We review results regularly and adjust tactics based on
                performance data. Your playbook evolves as you learn, markets
                change, and opportunities emerge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class={`${styles.ctaSection} section`} aria-label="Call to Action">
        <div class="container">
          <div class={styles.ctaContent}>
            <h2 class={styles.ctaHeading}>
              Ready to Discuss Your Strategic Needs?
            </h2>
            <p class={styles.ctaSubtext}>
              Schedule a consultation with our team to explore how our services
              can accelerate your transformation.
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
  title: "Services & Methodology | Voltage Labs",
  meta: [
    {
      name: "description",
      content:
        "Strategic consulting services including playbook development, operational implementation, and ROI measurement. Professional business transformation methodology.",
    },
    {
      name: "keywords",
      content:
        "strategic consulting services, business playbooks, implementation guidance, performance measurement, business transformation",
    },
    {
      property: "og:title",
      content: "Services & Methodology | Voltage Labs",
    },
    {
      property: "og:description",
      content:
        "Transform strategy into execution with our proven playbook-driven consulting approach.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
};
