/* ============================================================
   pages/advisory.js — Advisory & Consultancy page render
   ============================================================ */

const AdvisoryPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Advisory & Consultancy",
        "description": "Project management, construction supervision, engineering advisory, procurement advisory, bid & tender advisory, contract management, feasibility studies, project finance, ESG & sustainability, and capacity building services.",
        "areaServed": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Advisory & Consultancy Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Project Management", "description": "Complete project lifecycle management" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Supervision", "description": "Site supervision and contract administration" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engineering Advisory", "description": "Technical advisory and engineering support" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Procurement Advisory", "description": "Government and donor procurement support" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bid & Tender Advisory", "description": "Tender preparation and bid management" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contract Management", "description": "FIDIC and commercial contract administration" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Feasibility Studies", "description": "Technical and financial feasibility assessments" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Project Finance", "description": "Financial structuring and investment support" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ESG & Sustainability", "description": "Environmental and social advisory" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Capacity Building", "description": "Training and institutional strengthening" } }
          ]
        }
      }
      </script>

      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--services">
        <div class="hero-bg-pattern"></div>
        <div class="container page-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/" aria-label="Home">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">Advisory &amp; Consultancy</span>
          </nav>

          <h1 class="hero-title">
            <span class="title-line">Advisory &amp;</span>
            <span class="title-line">Consultancy</span>
          </h1>

          <p class="hero-subtitle">
            The specialist thinking behind every project — project management, technical advisory,
            procurement support, contract management, feasibility, finance, ESG and capacity building.
          </p>
        </div>

        <div class="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>

      <!-- ===== ADVISORY SERVICES GRID ===== -->
      <section class="section section-services-overview" aria-labelledby="advisory-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">What We Offer</span>
            <h2 id="advisory-heading">Ten Advisory &amp; Consultancy Services</h2>
            <div class="divider"></div>
            <p class="section-intro">
              Independent, specialist advisory support — whether you need us to deliver the project,
              or advise while someone else does.
            </p>
          </div>

          <div class="features-grid" style="margin-top:1rem">
            <div class="feature-item" id="project-management">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
              <div>
                <h4>Project Management</h4>
                <p>Complete project lifecycle management from mobilisation to handover.</p>
              </div>
            </div>

            <div class="feature-item" id="construction-supervision">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
              <div>
                <h4>Construction Supervision</h4>
                <p>Site supervision and contract administration on behalf of clients and funders.</p>
              </div>
            </div>

            <div class="feature-item" id="engineering-advisory">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 0 0 1.4 1.4l1.6-1.6a1 1 0 0 0-1.4-1.4l-1.6 1.6zM3 21l4.5-1.5L18 9l-3-3L4.5 16.5 3 21z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
              <div>
                <h4>Engineering Advisory</h4>
                <p>Technical advisory and engineering support across design and delivery.</p>
              </div>
            </div>

            <div class="feature-item" id="procurement-advisory">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div>
                <h4>Procurement Advisory</h4>
                <p>Government and donor procurement support and process design.</p>
              </div>
            </div>

            <div class="feature-item" id="bid-tender-advisory">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div>
                <h4>Bid &amp; Tender Advisory</h4>
                <p>Tender preparation and bid management to maximise contract win rates.</p>
              </div>
            </div>

            <div class="feature-item" id="contract-management">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div>
                <h4>Contract Management</h4>
                <p>FIDIC and commercial contract administration throughout project delivery.</p>
              </div>
            </div>

            <div class="feature-item" id="feasibility-studies">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
              <div>
                <h4>Feasibility Studies</h4>
                <p>Technical and financial feasibility assessments to de-risk investment decisions.</p>
              </div>
            </div>

            <div class="feature-item" id="project-finance">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div>
                <h4>Project Finance</h4>
                <p>Financial structuring and investment support for infrastructure programmes.</p>
              </div>
            </div>

            <div class="feature-item" id="esg-sustainability">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div>
                <h4>ESG &amp; Sustainability</h4>
                <p>Environmental and social advisory aligned to donor and lender safeguard requirements.</p>
              </div>
            </div>

            <div class="feature-item" id="capacity-building">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div>
                <h4>Capacity Building</h4>
                <p>Training and institutional strengthening for client and partner teams.</p>
              </div>
            </div>
          </div>

          <div class="service-cta service-cta--center reveal reveal-delay-4" style="margin-top:2.5rem">
            <a href="/frameworks" class="btn btn-primary btn-lg">
              Explore Frameworks &amp; Delivery Models
              <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== WHY ADVISORY ===== -->
      <section class="section section--alt section-service-detail" aria-labelledby="why-advisory-heading">
        <div class="container">
          <div class="service-detail-grid service-detail-grid--reverse">
            <div class="service-detail-visual reveal">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop" alt="Advisory team reviewing project documents" loading="lazy" width="800" height="1000">
                <div class="visual-quote">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  <p>"Most infrastructure groups only build. We also advise — an independent capability our competitors don't offer."</p>
                  <span>MMT Alliance Advisory Principle</span>
                </div>
              </div>
            </div>

            <div class="service-detail-content reveal reveal-delay-2">
              <span class="service-label">Why Advisory</span>
              <h2 id="why-advisory-heading">Independent Advice, Wherever You Are in the Project</h2>
              <div class="divider"></div>
              <p class="lead">
                Whether you need us to deliver the project end-to-end or provide independent
                oversight of a third-party contractor, our advisory team brings the same rigour
                we apply to our own construction and procurement delivery.
              </p>
              <div class="service-cta">
                <a href="/contact" class="btn btn-primary">Talk to Our Advisory Team</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== FAQ SECTION (SEO) ===== -->
      <section class="section section-faq" aria-labelledby="faq-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">FAQ</span>
            <h2 id="faq-heading">Advisory Questions</h2>
            <div class="divider"></div>
          </div>

          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">Can you advise on a project you are not constructing?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>Yes. Our advisory services — including construction supervision and contract management — are offered independently of our construction division, for clients using other contractors.</p></div>
            </details>

            <details class="faq-item reveal reveal-delay-2">
              <summary>
                <span class="faq-question">Do you support bid and tender preparation?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>Yes, our Bid &amp; Tender Advisory service supports clients and contractors through tender preparation, submission and evaluation.</p></div>
            </details>

            <details class="faq-item reveal reveal-delay-3">
              <summary>
                <span class="faq-question">Do you provide ESG and safeguard advisory for donor-funded projects?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>Yes, our ESG &amp; Sustainability service aligns projects to the environmental and social safeguard requirements of World Bank, AfDB, EU and other development partners.</p></div>
            </details>

            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">What delivery models do you support?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>We support EPC, EPCM, Design &amp; Build, Construction Management, Programme Management, PPP Advisory and donor-funded delivery models — see our <a href="/frameworks">Frameworks &amp; Delivery Models</a> page for details.</p></div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== CTA SECTION ===== -->
      <section class="cta-band cta-band--services" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Need Independent Advisory Support?</h2>
            <p>From feasibility through to contract close-out, our advisory team is ready to support your project.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                Contact Our Team
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/capabilities" class="btn btn-outline-white btn-lg">
                <svg viewBox="0 0 20 20" fill="none"><path d="M10 3v10M6 9l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="3" y="15" width="14" height="2" rx="1" fill="currentColor"/></svg>
                Download Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

    this.initAnimations();
    this.initFAQ();
  },

  initAnimations() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;

      revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  },

  initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      item.addEventListener('click', function() {
        faqItems.forEach(other => {
          if (other !== item) {
            other.removeAttribute('open');
          }
        });
      });
    });
  }
};

Router.register('/advisory', AdvisoryPage.render.bind(AdvisoryPage));
