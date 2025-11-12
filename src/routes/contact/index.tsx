import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Layout } from "../../components/layout";
import styles from "./contact.module.css";

/**
 * Contact Page - Jotform contact form and information
 *
 * Features:
 * - Page hero section
 * - Embedded Jotform contact form
 * - Contact information
 * - Business hours
 * - Full SEO optimization
 * - WCAG 2.1 AA compliant
 */
export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    // Inject Jotform script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/253148695741062';
    script.async = true;
    document.getElementById('jotform-container')?.appendChild(script);
  });

  return (
    <Layout>
      {/* Page Hero */}
      <section class={`${styles.hero} section`} aria-label="Page Header">
        <div class="container">
          <div class={styles.heroContent}>
            <h1 class={styles.heroHeading}>Start Your Strategic Transformation</h1>
            <p class={styles.heroSubheading}>
              Let's discuss how tactical playbooks can drive measurable results
              for your organization. We're here to listen and help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section class={`${styles.contactSection} section`} aria-label="Contact">
        <div class="container">
          <div class={styles.contactLayout}>
            {/* Contact Form */}
            <div class={styles.formContainer}>
              <h2 class={styles.formTitle}>Send Us a Message</h2>
              <div id="jotform-container" class={styles.jotformContainer}></div>
            </div>

            {/* Contact Information */}
            <div class={styles.infoContainer}>
              <h2 class={styles.infoTitle}>Contact Information</h2>

              {/* Email */}
              <div class={`card ${styles.infoCard}`}>
                <h3 class={styles.infoItemTitle}>Email</h3>
                <a
                  href="mailto:contact@voltagelabs.com"
                  class={styles.infoLink}
                >
                  contact@voltagelabs.com
                </a>
              </div>

              {/* Business Hours */}
              <div class={`card ${styles.infoCard}`}>
                <h3 class={styles.infoItemTitle}>Business Hours</h3>
                <div class={styles.hours}>
                  <p>
                    <strong>Monday - Friday:</strong>
                    <br />
                    9:00 AM - 6:00 PM EST
                  </p>
                  <p class={styles.hoursNote}>
                    Closed weekends and federal holidays
                  </p>
                </div>
              </div>

              {/* Response Expectation */}
              <div class={`card ${styles.infoCard}`}>
                <h3 class={styles.infoItemTitle}>Response Time</h3>
                <p class={styles.infoText}>
                  We typically respond to inquiries within one business day
                  during standard business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Reference */}
      <section class={`${styles.servicesReference} section`} aria-label="Services">
        <div class="container">
          <h2 class={styles.sectionTitle}>Common Consultation Topics</h2>

          <div class={`grid grid-cols-3 ${styles.topicsGrid}`}>
            <article class={`card ${styles.topicCard}`}>
              <h3 class={styles.topicTitle}>Strategic Planning</h3>
              <p class={styles.topicDescription}>
                Need help transforming your strategy into executable playbooks?
                We specialize in strategic planning and playbook development.
              </p>
            </article>

            <article class={`card ${styles.topicCard}`}>
              <h3 class={styles.topicTitle}>Implementation Support</h3>
              <p class={styles.topicDescription}>
                Already have a strategy but struggling with execution? Let's
                discuss how to build accountability and momentum.
              </p>
            </article>

            <article class={`card ${styles.topicCard}`}>
              <h3 class={styles.topicTitle}>ROI Measurement</h3>
              <p class={styles.topicDescription}>
                Want to demonstrate the business impact of your transformation?
                We help establish metrics and track results.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class={`${styles.ctaSection} section`} aria-label="Call to Action">
        <div class="container">
          <div class={styles.ctaContent}>
            <h2 class={styles.ctaHeading}>
              Or Join Our Beta Program
            </h2>
            <p class={styles.ctaSubtext}>
              Get a free brand analysis, SEO report, and custom marketing content in exchange for your feedback.
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
  title: "Contact Voltage Labs | Strategic Consulting",
  meta: [
    {
      name: "description",
      content:
        "Contact Voltage Labs for strategic consulting. Schedule a consultation to discuss your business transformation needs.",
    },
    {
      name: "keywords",
      content:
        "contact voltage labs, schedule consultation, strategic consulting",
    },
    {
      property: "og:title",
      content: "Contact Voltage Labs | Strategic Consulting",
    },
    {
      property: "og:description",
      content:
        "Get in touch with our team to discuss your strategic transformation needs.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
};
