/* ============================================================
   pages/case-studies.js — Projects page render (ENHANCED)
   ============================================================ */

const CaseStudiesPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Projects",
        "description": "Project delivery across roads, water, buildings, procurement, humanitarian, logistics and consultancy engagements for governments, development banks, and UN agencies.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Project Categories",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Roads Projects",
                "description": "Road construction and rehabilitation project delivery"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Water Projects",
                "description": "Water infrastructure and treatment project delivery"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Procurement Projects",
                "description": "Government and institutional procurement engagements"
              }
            }
          ]
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        }
      }
      </script>

      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--case-studies">
        <div class="hero-bg-overlay"></div>
        <div class="container page-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/" aria-label="Home">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">Projects</span>
          </nav>

          <h1 class="hero-title">
            <span class="title-line">Our</span>
            <span class="title-line">Projects</span>
          </h1>

          <p class="hero-subtitle">
            Delivery across construction, water, procurement, humanitarian, logistics and advisory
            engagements — demonstrating our capability to perform across every service line.
          </p>
        </div>
      </div>

      <!-- ===== PROJECT CATEGORIES GRID ===== -->
      <section class="section section-case-studies" aria-labelledby="cases-heading">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-label">Categories</span>
            <h2 id="cases-heading">Delivery Across Seven Categories</h2>
            <div class="divider"></div>
            <p class="section-intro">
              Our project portfolio spans construction, water infrastructure, procurement, humanitarian
              response, logistics and advisory engagements — each demonstrating the strength of our
              process and our commitment to delivery.
            </p>
          </div>

          <div class="case-studies-grid">
            <!-- Category 1: Roads -->
            <article class="case-card reveal reveal-delay-1">
              <div class="case-card-image">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=500&fit=crop" alt="Road construction and rehabilitation projects" loading="lazy" width="800" height="500">
                <div class="case-type-badge">
                  <span>Roads</span>
                </div>
              </div>
              <div class="case-card-content">
                <div class="case-meta">
                  <div class="case-sector">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>Construction</span>
                  </div>
                </div>

                <h3>Roads</h3>
                <p>Road rehabilitation, asphalt and rural roads, highway construction, pavements and bridges delivered to engineering standard.</p>

                <div class="case-tags">
                  <span class="tag">Road Rehabilitation</span>
                  <span class="tag">Highway Construction</span>
                  <span class="tag">Bridges</span>
                </div>

                <div class="case-cta">
                  <a href="/construction-infrastructure#roads" class="case-link">
                    View Road Capability
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
            </article>

            <!-- Category 2: Water -->
            <article class="case-card reveal reveal-delay-2">
              <div class="case-card-image">
                <img src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=800&h=500&fit=crop" alt="Water infrastructure projects" loading="lazy" width="800" height="500">
                <div class="case-type-badge">
                  <span>Water</span>
                </div>
              </div>
              <div class="case-card-content">
                <div class="case-meta">
                  <div class="case-sector">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>Infrastructure</span>
                  </div>
                </div>

                <h3>Water</h3>
                <p>Boreholes, water pipelines, reservoirs, water treatment and irrigation projects for communities and institutions.</p>

                <div class="case-tags">
                  <span class="tag">Boreholes</span>
                  <span class="tag">Water Treatment</span>
                  <span class="tag">Irrigation</span>
                </div>

                <div class="case-cta">
                  <a href="/construction-infrastructure#water" class="case-link">
                    View Water Capability
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
            </article>

            <!-- Category 3: Buildings -->
            <article class="case-card reveal reveal-delay-3">
              <div class="case-card-image">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop" alt="Buildings and civic infrastructure projects" loading="lazy" width="800" height="500">
                <div class="case-type-badge">
                  <span>Buildings</span>
                </div>
              </div>
              <div class="case-card-content">
                <div class="case-meta">
                  <div class="case-sector">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>Construction</span>
                  </div>
                </div>

                <h3>Buildings</h3>
                <p>Schools, hospitals, government buildings, offices and warehouses delivered from design through to handover.</p>

                <div class="case-tags">
                  <span class="tag">Schools</span>
                  <span class="tag">Hospitals</span>
                  <span class="tag">Government Buildings</span>
                </div>

                <div class="case-cta">
                  <a href="/construction-infrastructure#buildings" class="case-link">
                    View Buildings Capability
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
            </article>

            <!-- Category 4: Procurement -->
            <article class="case-card reveal reveal-delay-4">
              <div class="case-card-image">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop" alt="Procurement and supply chain projects" loading="lazy" width="800" height="500">
                <div class="case-type-badge">
                  <span>Procurement</span>
                </div>
              </div>
              <div class="case-card-content">
                <div class="case-meta">
                  <div class="case-sector">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>Supply Chain</span>
                  </div>
                </div>

                <h3>Procurement</h3>
                <p>Global sourcing, tender management and supply chain engagements for governments, UN agencies and NGOs.</p>

                <div class="case-tags">
                  <span class="tag">Strategic Sourcing</span>
                  <span class="tag">Tender Management</span>
                  <span class="tag">Warehousing</span>
                </div>

                <div class="case-cta">
                  <a href="/services#procurement" class="case-link">
                    View Procurement Capability
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
            </article>

            <!-- Category 5: Humanitarian -->
            <article class="case-card reveal reveal-delay-5">
              <div class="case-card-image">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop" alt="Humanitarian response projects" loading="lazy" width="800" height="500">
                <div class="case-type-badge case-type-urgent">
                  <span>Humanitarian</span>
                </div>
              </div>
              <div class="case-card-content">
                <div class="case-meta">
                  <div class="case-sector">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>Emergency Response</span>
                  </div>
                </div>

                <h3>Humanitarian</h3>
                <p>Rapid-deployment emergency supply and shelter operations for UN, NGO and disaster response engagements.</p>

                <div class="case-tags">
                  <span class="tag">Emergency Response</span>
                  <span class="tag">Shelter &amp; NFI</span>
                  <span class="tag">Medical &amp; WASH</span>
                </div>

                <div class="case-cta">
                  <a href="/services#humanitarian" class="case-link">
                    View Humanitarian Capability
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
            </article>

            <!-- Category 6: Logistics -->
            <article class="case-card reveal reveal-delay-1">
              <div class="case-card-image">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop" alt="Logistics and distribution projects" loading="lazy" width="800" height="500">
                <div class="case-type-badge">
                  <span>Logistics</span>
                </div>
              </div>
              <div class="case-card-content">
                <div class="case-meta">
                  <div class="case-sector">
                    <svg viewBox="0 0 24 24" fill="none"><rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M16 8h4l3 4v4h-7V8z" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>Freight &amp; Warehousing</span>
                  </div>
                </div>

                <h3>Logistics</h3>
                <p>Air, sea and land freight, warehousing and last-mile distribution engagements across complex environments.</p>

                <div class="case-tags">
                  <span class="tag">Freight</span>
                  <span class="tag">Warehousing</span>
                  <span class="tag">Last-Mile Delivery</span>
                </div>

                <div class="case-cta">
                  <a href="/services#procurement" class="case-link">
                    View Logistics Capability
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
            </article>

            <!-- Category 7: Consultancy -->
            <article class="case-card reveal reveal-delay-2">
              <div class="case-card-image">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop" alt="Advisory and consultancy engagements" loading="lazy" width="800" height="500">
                <div class="case-type-badge">
                  <span>Consultancy</span>
                </div>
              </div>
              <div class="case-card-content">
                <div class="case-meta">
                  <div class="case-sector">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 0 0 1.4 1.4l1.6-1.6a1 1 0 0 0-1.4-1.4l-1.6 1.6zM3 21l4.5-1.5L18 9l-3-3L4.5 16.5 3 21z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
                    <span>Advisory</span>
                  </div>
                </div>

                <h3>Consultancy</h3>
                <p>Project management, engineering advisory, feasibility studies and procurement advisory engagements.</p>

                <div class="case-tags">
                  <span class="tag">Feasibility Studies</span>
                  <span class="tag">Bid &amp; Tender Advisory</span>
                  <span class="tag">Contract Management</span>
                </div>

                <div class="case-cta">
                  <a href="/advisory" class="case-link">
                    View Advisory Capability
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
            </article>
          </div>

          <!-- Quote Block -->
          <div class="quote-block-large reveal">
            <svg viewBox="0 0 24 24" fill="currentColor" class="quote-icon"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p>"Every engagement—no matter the scale—is an opportunity to demonstrate that MMT Alliance delivers what it promises across construction, procurement, and advisory. These partnerships are the foundation of a long-term track record."</p>
            <div class="quote-source">
              <span>MMT Alliance</span>
              <span>Project Delivery Principle</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== DELIVERY METRICS ===== -->
      <section class="section section--alt section-delivery-metrics" aria-labelledby="metrics-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">By The Numbers</span>
            <h2 id="metrics-heading">Delivery at Scale</h2>
            <div class="divider"></div>
          </div>

          <div class="delivery-metrics-grid">
            <div class="delivery-metric reveal reveal-delay-1">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="metric-value">50+</div>
              <div class="metric-label">Countries Served</div>
            </div>

            <div class="delivery-metric reveal reveal-delay-2">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="metric-value">7</div>
              <div class="metric-label">Project Categories</div>
            </div>

            <div class="delivery-metric reveal reveal-delay-3">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <div class="metric-value">72hrs</div>
              <div class="metric-label">Emergency Activation</div>
            </div>

            <div class="delivery-metric reveal reveal-delay-4">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="metric-value">100%</div>
              <div class="metric-label">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== FAQ SECTION (SEO) ===== -->
      <section class="section section-faq" aria-labelledby="faq-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">FAQ</span>
            <h2 id="faq-heading">Project Questions</h2>
            <div class="divider"></div>
          </div>

          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">Can you provide references from past engagements?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes, we can provide references from past and current clients upon request, subject to confidentiality agreements and client approval.</p>
              </div>
            </details>

            <details class="faq-item reveal reveal-delay-2">
              <summary>
                <span class="faq-question">Do you have experience in our specific category of project?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>We deliver across roads, water, buildings, procurement, humanitarian, logistics and consultancy engagements. Contact us to discuss your specific project requirements and relevant experience.</p>
              </div>
            </details>

            <details class="faq-item reveal reveal-delay-3">
              <summary>
                <span class="faq-question">Can you operate in conflict-affected regions?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes, we have proven capability operating in complex and fragile environments with security coordination, risk mitigation protocols, and established local partner networks.</p>
              </div>
            </details>

            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">How quickly can you mobilise for a new project?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Mobilisation timelines depend on project scope, but our emergency response team can activate within hours of a crisis declaration, with typical deployment within 72 hours.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== CTA SECTION ===== -->
      <section class="cta-band cta-band--case-studies" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Become Our Next Success Story</h2>
            <p>Whether a construction project, procurement engagement, or advisory mandate—we are ready to demonstrate our capability in your context.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                Start a Conversation
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/services" class="btn btn-outline-white btn-lg">
                View What We Do
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

    // Initialize animations and FAQ
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

Router.register('/case-studies', CaseStudiesPage.render.bind(CaseStudiesPage));
