import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Layout } from "../../components/layout";
import styles from "./contact.module.css";

/**
 * Contact Page - Contact form and information
 *
 * Features:
 * - Page hero section
 * - Contact form with validation
 * - Contact information (email, phone, location)
 * - Business hours
 * - Full SEO optimization
 * - WCAG 2.1 AA compliant
 * - Form state management
 */
export default component$(() => {
  const nameValue = useSignal("");
  const emailValue = useSignal("");
  const companyValue = useSignal("");
  const messageValue = useSignal("");
  const submitting = useSignal(false);
  const submitted = useSignal(false);
  const error = useSignal("");

  const validateForm = $(() => {
    const errors: string[] = [];

    if (!nameValue.value.trim()) {
      errors.push("Name is required");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue.value.trim()) {
      errors.push("Email is required");
    } else if (!emailRegex.test(emailValue.value)) {
      errors.push("Please enter a valid email address");
    }

    if (!companyValue.value.trim()) {
      errors.push("Company is required");
    }

    if (!messageValue.value.trim()) {
      errors.push("Message is required");
    } else if (messageValue.value.trim().length < 10) {
      errors.push("Message must be at least 10 characters");
    }

    return errors;
  });

  const handleSubmit = $(async (e: SubmitEvent) => {
    e.preventDefault();

    const errors = await validateForm();
    if (errors.length > 0) {
      error.value = errors.join(", ");
      return;
    }

    submitting.value = true;
    error.value = "";

    // Simulate form submission
    setTimeout(() => {
      console.log("Form Submission:", {
        name: nameValue.value,
        email: emailValue.value,
        company: companyValue.value,
        message: messageValue.value,
        timestamp: new Date().toISOString(),
      });

      submitting.value = false;
      submitted.value = true;

      // Reset form after 5 seconds
      setTimeout(() => {
        nameValue.value = "";
        emailValue.value = "";
        companyValue.value = "";
        messageValue.value = "";
        submitted.value = false;
      }, 5000);
    }, 1000);
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

              {submitted.value ? (
                <div class={`${styles.successMessage}`} role="status">
                  <div class={styles.successIcon}>✓</div>
                  <h3 class={styles.successTitle}>Message Sent Successfully</h3>
                  <p class={styles.successText}>
                    Thank you for reaching out. We'll review your message and
                    get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit$={handleSubmit}
                  class={styles.contactForm}
                  noValidate
                >
                  {error.value && (
                    <div class={styles.errorMessage} role="alert">
                      <p>{error.value}</p>
                    </div>
                  )}

                  {/* Name Field */}
                  <div class={styles.formGroup}>
                    <label for="name" class={styles.formLabel}>
                      Name <span class={styles.required}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      bind:value={nameValue}
                      placeholder="Your full name"
                      disabled={submitting.value}
                      required
                      aria-required="true"
                    />
                  </div>

                  {/* Email Field */}
                  <div class={styles.formGroup}>
                    <label for="email" class={styles.formLabel}>
                      Email <span class={styles.required}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      bind:value={emailValue}
                      placeholder="your.email@company.com"
                      disabled={submitting.value}
                      required
                      aria-required="true"
                    />
                  </div>

                  {/* Company Field */}
                  <div class={styles.formGroup}>
                    <label for="company" class={styles.formLabel}>
                      Company <span class={styles.required}>*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      bind:value={companyValue}
                      placeholder="Your company name"
                      disabled={submitting.value}
                      required
                      aria-required="true"
                    />
                  </div>

                  {/* Message Field */}
                  <div class={styles.formGroup}>
                    <label for="message" class={styles.formLabel}>
                      Message <span class={styles.required}>*</span>
                    </label>
                    <textarea
                      id="message"
                      bind:value={messageValue}
                      placeholder="Tell us about your strategic transformation needs"
                      rows={6}
                      disabled={submitting.value}
                      required
                      aria-required="true"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    class="btn btn-primary"
                    disabled={submitting.value}
                  >
                    {submitting.value ? "Sending..." : "Send Message"}
                  </button>

                  <p class={styles.formNote}>
                    We respect your privacy. Your information will only be used to
                    respond to your inquiry.
                  </p>
                </form>
              )}
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

              {/* Phone */}
              <div class={`card ${styles.infoCard}`}>
                <h3 class={styles.infoItemTitle}>Phone</h3>
                <a href="tel:+16175550100" class={styles.infoLink}>
                  (617) 555-0100
                </a>
              </div>

              {/* Location */}
              <div class={`card ${styles.infoCard}`}>
                <h3 class={styles.infoItemTitle}>Location</h3>
                <address class={styles.infoText}>
                  Metro Boston, Massachusetts
                </address>
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
              Ready to Transform Your Strategy Into Results?
            </h2>
            <p class={styles.ctaSubtext}>
              Fill out the contact form above or call us directly to schedule
              your strategic consultation.
            </p>
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
        "Contact Voltage Labs for strategic consulting in Metro Boston. Schedule a consultation to discuss your business transformation needs.",
    },
    {
      name: "keywords",
      content:
        "contact voltage labs, schedule consultation, strategic consulting, Metro Boston consulting",
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
