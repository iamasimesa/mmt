/* ============================================================
   pages/construction.js — Construction & Infrastructure page render
   ============================================================ */

const ConstructionPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Construction & Infrastructure",
        "description": "Roads, water infrastructure, buildings, civil works and bridges delivered for governments, development banks and private sector clients.",
        "areaServed": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Construction & Infrastructure Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roads", "description": "Road rehabilitation, asphalt roads, rural roads, highway construction and pavements" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Infrastructure", "description": "Boreholes, water pipelines, reservoirs, water treatment and irrigation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Buildings", "description": "Schools, hospitals, government buildings, offices and warehouses" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Civil Works", "description": "Drainage, culverts, earthworks and concrete works" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridges", "description": "Bridge design and construction" } }
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
            <span aria-current="page">Construction &amp; Infrastructure</span>
          </nav>

          <h1 class="hero-title">
            <span class="title-line">Construction &amp;</span>
            <span class="title-line">Infrastructure</span>
          </h1>

          <p class="hero-subtitle">
            Roads, water infrastructure, buildings and civil works delivered end-to-end — from
            earthworks and design through to construction supervision and handover.
          </p>
        </div>

        <div class="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>

      <!-- ===== OVERVIEW GRID ===== -->
      <section class="section section-services-overview" aria-labelledby="construction-overview-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">What We Build</span>
            <h2 id="construction-overview-heading">Five Construction Categories</h2>
            <div class="divider"></div>
            <p class="section-intro">
              A full-spectrum construction division covering roads, water infrastructure, buildings,
              civil works and bridges — delivered to engineering standard and donor compliance.
            </p>
          </div>

          <div class="services-overview-grid">
            <a href="#roads" class="service-overview-card reveal reveal-delay-1">
              <div class="card-number">01</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" alt="Road construction" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Roads</h3>
                <p>Road rehabilitation, asphalt roads, rural roads, highway construction and pavements</p>
              </div>
            </a>

            <a href="#water" class="service-overview-card reveal reveal-delay-2">
              <div class="card-number">02</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=600&h=400&fit=crop" alt="Water infrastructure construction" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Water Infrastructure</h3>
                <p>Boreholes, water pipelines, reservoirs, water treatment and irrigation</p>
              </div>
            </a>

            <a href="#buildings" class="service-overview-card reveal reveal-delay-3">
              <div class="card-number">03</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" alt="Buildings construction" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Buildings</h3>
                <p>Schools, hospitals, government buildings, offices and warehouses</p>
              </div>
            </a>

            <a href="#civil-works" class="service-overview-card reveal reveal-delay-4">
              <div class="card-number">04</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop" alt="Civil works and earthworks" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Civil Works</h3>
                <p>Drainage, culverts, earthworks and concrete works</p>
              </div>
            </a>

            <a href="#bridges" class="service-overview-card reveal reveal-delay-5">
              <div class="card-number">05</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&h=400&fit=crop" alt="Bridge construction" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Bridges</h3>
                <p>Bridge design and construction on major transport corridors</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== CATEGORY 01: ROADS ===== -->
      <section class="section sector-detail-section" id="roads" aria-labelledby="roads-heading">
        <div class="container">
          <div class="sector-detail-grid">
            <div class="sector-detail-content reveal">
              <span class="sector-label">Category 01</span>
              <h2 id="roads-heading">Roads</h2>
              <div class="divider"></div>
              <p class="lead">
                Durable, engineered road infrastructure for governments and development partners —
                from rural access roads to major highway corridors.
              </p>

              <div class="sector-features">
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Road Rehabilitation</h4><p>Restoring degraded road networks to design standard.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Asphalt Roads</h4><p>Asphalt paving for durable, high-traffic surfaces.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Rural Roads</h4><p>Access roads connecting remote communities to markets and services.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Highway Construction</h4><p>Major transport corridor construction to national road authority standards.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Pavements</h4><p>Pavement design and construction engineered for local climate and traffic loads.</p></div>
                </div>
              </div>

              <div class="sector-cta">
                <a href="/contact" class="btn btn-primary">Discuss a Road Project<svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
              </div>
            </div>

            <div class="sector-detail-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=1000&fit=crop" alt="Road construction crew at work" loading="lazy" width="800" height="1000">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== CATEGORY 02: WATER INFRASTRUCTURE ===== -->
      <section class="section section--alt sector-detail-section" id="water" aria-labelledby="water-heading">
        <div class="container">
          <div class="sector-detail-grid sector-detail-grid--reverse">
            <div class="sector-detail-visual reveal">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=800&h=1000&fit=crop" alt="Water infrastructure and borehole drilling" loading="lazy" width="800" height="1000">
              </div>
            </div>

            <div class="sector-detail-content reveal reveal-delay-2">
              <span class="sector-label">Category 02</span>
              <h2 id="water-heading">Water Infrastructure</h2>
              <div class="divider"></div>
              <p class="lead">
                Reliable water infrastructure from source to distribution — supporting public health,
                agriculture and economic development.
              </p>

              <div class="sector-features">
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Boreholes</h4><p>Drilling, equipping and commissioning of boreholes.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Water Pipelines</h4><p>Bulk and distribution pipeline networks.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Reservoirs</h4><p>Storage reservoir design and construction for bulk supply schemes.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Water Treatment</h4><p>Treatment plant construction and rehabilitation to potable standards.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Irrigation</h4><p>Irrigation infrastructure supporting agricultural production.</p></div>
                </div>
              </div>

              <div class="sector-cta">
                <a href="/contact" class="btn btn-primary">Discuss a Water Project<svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== CATEGORY 03: BUILDINGS ===== -->
      <section class="section sector-detail-section" id="buildings" aria-labelledby="buildings-heading">
        <div class="container">
          <div class="sector-detail-grid">
            <div class="sector-detail-content reveal">
              <span class="sector-label">Category 03</span>
              <h2 id="buildings-heading">Buildings</h2>
              <div class="divider"></div>
              <p class="lead">
                From schools to government offices, we deliver buildings that meet functional,
                safety and compliance requirements across the public and institutional sectors.
              </p>

              <div class="sector-features">
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Schools</h4><p>Classroom blocks and school infrastructure for education programmes.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Hospitals</h4><p>Healthcare facility construction to medical infrastructure standards.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Government Buildings</h4><p>Civic buildings delivered to government compliance and audit standards.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Offices &amp; Warehouses</h4><p>Commercial and industrial buildings for operational and storage needs.</p></div>
                </div>
              </div>

              <div class="sector-cta">
                <a href="/contact" class="btn btn-primary">Discuss a Building Project<svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
              </div>
            </div>

            <div class="sector-detail-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop" alt="Government building construction" loading="lazy" width="800" height="1000">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== CATEGORY 04: CIVIL WORKS ===== -->
      <section class="section section--alt sector-detail-section" id="civil-works" aria-labelledby="civil-heading">
        <div class="container">
          <div class="sector-detail-grid sector-detail-grid--reverse">
            <div class="sector-detail-visual reveal">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=1000&fit=crop" alt="Civil works, earthworks and drainage" loading="lazy" width="800" height="1000">
              </div>
            </div>

            <div class="sector-detail-content reveal reveal-delay-2">
              <span class="sector-label">Category 04</span>
              <h2 id="civil-heading">Civil Works</h2>
              <div class="divider"></div>
              <p class="lead">
                The foundational earthworks and structural elements that make every construction
                project possible — engineered to site-specific conditions.
              </p>

              <div class="sector-features">
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Drainage</h4><p>Stormwater and drainage systems to manage flood risk.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Culverts</h4><p>Culvert design and installation for water crossings on road networks.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Earthworks</h4><p>Site preparation, excavation and grading for construction readiness.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Concrete Works</h4><p>Structural and reinforced concrete works to engineering specification.</p></div>
                </div>
              </div>

              <div class="sector-cta">
                <a href="/contact" class="btn btn-primary">Discuss Civil Works<svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== CATEGORY 05: BRIDGES ===== -->
      <section class="section sector-detail-section" id="bridges" aria-labelledby="bridges-heading">
        <div class="container">
          <div class="sector-detail-grid">
            <div class="sector-detail-content reveal">
              <span class="sector-label">Category 05</span>
              <h2 id="bridges-heading">Bridges</h2>
              <div class="divider"></div>
              <p class="lead">
                Structural engineering and construction for bridges and crossings — connecting
                communities and keeping transport corridors open in all conditions.
              </p>

              <div class="sector-features">
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Structural Design</h4><p>Engineering design for bridges suited to local loading and hydrology.</p></div>
                </div>
                <div class="sector-feature">
                  <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg></div>
                  <div><h4>Construction &amp; Supervision</h4><p>Full construction management and site supervision through to handover.</p></div>
                </div>
              </div>

              <div class="sector-cta">
                <a href="/contact" class="btn btn-primary">Discuss a Bridge Project<svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
              </div>
            </div>

            <div class="sector-detail-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&h=1000&fit=crop" alt="Bridge construction project" loading="lazy" width="800" height="1000">
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
            <h2 id="faq-heading">Construction Questions</h2>
            <div class="divider"></div>
          </div>

          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">Do you deliver design and construction together?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>Yes. Through our Engineering &amp; Consultancy team and Frameworks &amp; Delivery Models, we offer Design &amp; Build, EPC and EPCM delivery in addition to standalone construction contracts.</p></div>
            </details>

            <details class="faq-item reveal reveal-delay-2">
              <summary>
                <span class="faq-question">What standards do your construction projects follow?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>Our projects follow FIDIC contract standards, national road and building authority specifications, and donor procurement and safeguard requirements where applicable.</p></div>
            </details>

            <details class="faq-item reveal reveal-delay-3">
              <summary>
                <span class="faq-question">Can you deliver in remote or access-challenged locations?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>Yes, our construction and logistics teams have proven capability delivering in remote, rural and access-challenged environments.</p></div>
            </details>

            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">Do you provide construction supervision for third-party contractors?</span>
                <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
              </summary>
              <div class="faq-answer"><p>Yes, our Advisory &amp; Consultancy team offers independent construction supervision and contract administration services.</p></div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== CTA SECTION ===== -->
      <section class="cta-band cta-band--services" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Ready to Break Ground?</h2>
            <p>Whether it's a road, water scheme, building or bridge, our construction team is ready to scope your project.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                Contact Our Team
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/frameworks" class="btn btn-outline-white btn-lg">
                View Delivery Models
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

Router.register('/construction-infrastructure', ConstructionPage.render.bind(ConstructionPage));
