/* ============================================================
   pages/frameworks.js — Frameworks & Delivery Models page render
   ============================================================ */

const FrameworksPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Frameworks & Delivery Models",
        "description": "EPC, EPCM, Design & Build, Construction Management, Programme Management, PPP Advisory, and donor-funded project delivery models.",
        "areaServed": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Delivery Models",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EPC", "description": "Engineering, Procurement, Construction" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EPCM", "description": "Engineering, Procurement, Construction Management" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Design & Build", "description": "Complete turnkey delivery" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Management", "description": "Client-side project delivery" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Programme Management", "description": "Managing multiple projects simultaneously" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPP Advisory", "description": "Public-Private Partnerships" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Donor Funded Projects", "description": "World Bank, African Development Bank, EU, JICA, UN Agencies" } }
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
            <span aria-current="page">Frameworks &amp; Delivery Models</span>
          </nav>

          <h1 class="hero-title">
            <span class="title-line">Frameworks &amp;</span>
            <span class="title-line">Delivery Models</span>
          </h1>

          <p class="hero-subtitle">
            How MMT Alliance delivers projects — from turnkey EPC contracts to client-side
            construction management, programme management, PPP advisory and donor-funded delivery.
          </p>
        </div>

        <div class="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>

      <!-- ===== DELIVERY MODELS GRID ===== -->
      <section class="section section-services-overview" aria-labelledby="frameworks-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">How We Deliver</span>
            <h2 id="frameworks-heading">Delivery Models to Fit Your Project</h2>
            <div class="divider"></div>
            <p class="section-intro">
              Every project is structured differently. We adapt our delivery model to match your
              procurement route, risk appetite, and funding source.
            </p>
          </div>

          <div class="features-grid" style="margin-top:1rem">
            <div class="feature-item" id="epc">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
              <div>
                <h4>EPC — Engineering, Procurement, Construction</h4>
                <p>Single-point accountability across design, sourcing and construction under one contract.</p>
              </div>
            </div>

            <div class="feature-item" id="epcm">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
              <div>
                <h4>EPCM — Engineering, Procurement, Construction Management</h4>
                <p>We manage engineering, procurement and construction on the client's behalf, with construction executed by third-party contractors under our supervision.</p>
              </div>
            </div>

            <div class="feature-item" id="design-build">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 0 0 1.4 1.4l1.6-1.6a1 1 0 0 0-1.4-1.4l-1.6 1.6zM3 21l4.5-1.5L18 9l-3-3L4.5 16.5 3 21z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
              <div>
                <h4>Design &amp; Build</h4>
                <p>Complete turnkey delivery — one contract covering design and construction, reducing interface risk for the client.</p>
              </div>
            </div>

            <div class="feature-item" id="construction-management">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div>
                <h4>Construction Management</h4>
                <p>Client-side project delivery, managing multiple trade contractors directly on behalf of the project owner.</p>
              </div>
            </div>

            <div class="feature-item" id="programme-management">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div>
                <h4>Programme Management</h4>
                <p>Coordinated management of multiple projects simultaneously, with consolidated reporting and risk oversight.</p>
              </div>
            </div>

            <div class="feature-item" id="ppp-advisory">
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div>
                <h4>PPP Advisory</h4>
                <p>Structuring and advisory support for Public-Private Partnership infrastructure projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== DONOR FUNDED PROJECTS ===== -->
      <section class="section section--alt section-service-detail" id="donor-funded-projects" aria-labelledby="donor-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="service-label">Delivery Model</span>
            <h2 id="donor-heading">Donor Funded Projects</h2>
            <div class="divider"></div>
            <p class="section-intro">
              We deliver and advise on projects financed by the world's leading development
              partners, aligned to each institution's procurement and safeguard requirements.
            </p>
          </div>

          <div class="logistics-grid">
            <div class="logistics-card reveal reveal-delay-1">
              <div class="logistics-card-content" style="padding-top:1.5rem">
                <h3>World Bank</h3>
                <p>Delivery and procurement aligned to World Bank procurement framework and safeguard policies.</p>
              </div>
            </div>
            <div class="logistics-card reveal reveal-delay-2">
              <div class="logistics-card-content" style="padding-top:1.5rem">
                <h3>African Development Bank</h3>
                <p>Infrastructure delivery in line with AfDB procurement and environmental &amp; social frameworks.</p>
              </div>
            </div>
            <div class="logistics-card reveal reveal-delay-3">
              <div class="logistics-card-content" style="padding-top:1.5rem">
                <h3>European Union</h3>
                <p>Project delivery compliant with EU procurement and grant-funding requirements.</p>
              </div>
            </div>
            <div class="logistics-card reveal reveal-delay-4">
              <div class="logistics-card-content" style="padding-top:1.5rem">
                <h3>JICA</h3>
                <p>Delivery aligned to Japan International Cooperation Agency procurement guidelines.</p>
              </div>
            </div>
            <div class="logistics-card reveal reveal-delay-1">
              <div class="logistics-card-content" style="padding-top:1.5rem">
                <h3>UN Agencies</h3>
                <p>UNGM-registered delivery for UNDP, UNICEF, WFP, UNHCR and affiliated agencies.</p>
              </div>
            </div>
          </div>

          <div class="service-cta service-cta--center reveal reveal-delay-4" style="margin-top:2.5rem">
            <a href="/contact" class="btn btn-primary btn-lg">
              Discuss a Donor-Funded Project
              <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== FAQ SECTION (SEO) ===== -->
      <section class="section section-faq" aria-labelledby="faq-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">FAQ</span>
            <h2 id="faq-heading">Delivery Model Questions</h2>
            <div class="divider"></div>
          </div>

          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">How do I choose between EPC and EPCM?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>EPC gives you single-point accountability under one contract; EPCM keeps construction contracts with the client while we manage engineering, procurement and construction oversight. We help you choose based on risk appetite, budget certainty, and funder requirements.</p></div>
            </details>

            <details class="faq-item reveal reveal-delay-2">
              <summary>
                <span class="faq-question">Can you deliver under a Design &amp; Build contract?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>Yes, our Engineering &amp; Consultancy and Construction teams jointly deliver Design &amp; Build contracts as a single turnkey engagement.</p></div>
            </details>

            <details class="faq-item reveal reveal-delay-3">
              <summary>
                <span class="faq-question">Do you advise on Public-Private Partnerships?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>Yes, our PPP Advisory service supports project structuring, feasibility, and procurement for Public-Private Partnership infrastructure projects.</p></div>
            </details>

            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">Which development partners have you delivered under?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>Our delivery and advisory teams work to the procurement and safeguard frameworks of the World Bank, African Development Bank, EU, JICA, and UN agencies.</p></div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== CTA SECTION ===== -->
      <section class="cta-band cta-band--services" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Not Sure Which Model Fits?</h2>
            <p>Talk to our advisory team about the right delivery model for your project, budget and funding source.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                Contact Our Team
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/advisory" class="btn btn-outline-white btn-lg">
                View Advisory &amp; Consultancy
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

Router.register('/frameworks', FrameworksPage.render.bind(FrameworksPage));
