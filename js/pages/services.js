/* ============================================================
   pages/services.js — Services page render (ENHANCED)
   ============================================================ */

const ServicesPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO META & SCHEMA ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Infrastructure, Procurement & Project Delivery Services",
        "description": "Construction, water infrastructure, procurement, project management, engineering and humanitarian services for governments, development banks, UN agencies and private sector clients.",
        "serviceArea": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Core Service Lines",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Construction & Infrastructure",
                "description": "Roads, bridges, water infrastructure, buildings and civil works"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Water & Utilities",
                "description": "Water supply, boreholes, pipelines, sewerage and treatment systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Procurement & Supply Chain",
                "description": "Global sourcing, procurement, logistics and warehousing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Project Management",
                "description": "End-to-end project planning, delivery and supervision"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Engineering & Consultancy",
                "description": "Design management, project planning, feasibility studies and technical advisory"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Humanitarian & Emergency Response",
                "description": "UN, NGO and disaster response procurement and logistics"
              }
            }
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
            <span aria-current="page">What We Do</span>
          </nav>

          <h1 class="hero-title">
            <span class="title-line">Six Core</span>
            <span class="title-line">Service Lines</span>
          </h1>

          <p class="hero-subtitle">
            Construction, water infrastructure, procurement, project management, engineering
            and humanitarian response — delivered end-to-end for governments, development banks,
            UN agencies and private sector clients.
          </p>
        </div>

        <div class="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>

      <!-- ===== SERVICES OVERVIEW GRID ===== -->
      <section class="section section-services-overview" aria-labelledby="services-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">What We Offer</span>
            <h2 id="services-heading">Six Core Service Lines</h2>
            <div class="divider"></div>
            <p class="section-intro">
              From breaking ground to last-mile delivery, we manage every aspect of infrastructure
              and supply chain delivery with transparency, accountability, and precision.
            </p>
          </div>

          <div class="services-overview-grid">
            <a href="#construction" class="service-overview-card reveal reveal-delay-1">
              <div class="card-number">01</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" alt="Roads, bridges and civil works construction" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Construction &amp; Infrastructure</h3>
                <p>Roads, bridges, water infrastructure, buildings and civil works</p>
              </div>
            </a>

            <a href="#water" class="service-overview-card reveal reveal-delay-2">
              <div class="card-number">02</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=600&h=400&fit=crop" alt="Water supply and treatment infrastructure" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Water &amp; Utilities</h3>
                <p>Water supply, boreholes, pipelines, sewerage and treatment systems</p>
              </div>
            </a>

            <a href="#procurement" class="service-overview-card reveal reveal-delay-3">
              <div class="card-number">03</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" alt="Global procurement and supply chain" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Procurement &amp; Supply Chain</h3>
                <p>Global sourcing, procurement, logistics and warehousing</p>
              </div>
            </a>

            <a href="#project-management" class="service-overview-card reveal reveal-delay-4">
              <div class="card-number">04</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" alt="Project planning, delivery and supervision" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Project Management</h3>
                <p>End-to-end project planning, delivery and supervision</p>
              </div>
            </a>

            <a href="#engineering" class="service-overview-card reveal reveal-delay-5">
              <div class="card-number">05</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" alt="Engineering design and technical advisory" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Engineering &amp; Consultancy</h3>
                <p>Design management, project planning, feasibility studies and technical advisory</p>
              </div>
            </a>

            <a href="#humanitarian" class="service-overview-card reveal reveal-delay-6">
              <div class="card-number">06</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop" alt="Humanitarian and emergency response logistics" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Humanitarian &amp; Emergency Response</h3>
                <p>UN, NGO and disaster response procurement and logistics</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE 01: CONSTRUCTION & INFRASTRUCTURE ===== -->
      <section class="section section-service-detail" id="construction" aria-labelledby="construction-heading">
        <div class="container">
          <div class="service-detail-grid">
            <div class="service-detail-content reveal">
              <span class="service-label">Service 01</span>
              <h2 id="construction-heading">Construction &amp; Infrastructure</h2>
              <div class="divider"></div>
              <p class="lead">
                Roads, bridges, water infrastructure, buildings and civil works — delivered end-to-end
                by our construction division, from earthworks through to handover.
              </p>

              <div class="service-features">
                <h3 class="key-heading">Key Capabilities</h3>
                <div class="features-grid">
                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Roads &amp; Bridges</h4>
                      <p>Road rehabilitation, asphalt and rural roads, highway construction, pavements, and bridges</p>
                    </div>
                  </div>

                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Water Infrastructure</h4>
                      <p>Boreholes, water pipelines, reservoirs, water treatment and irrigation</p>
                    </div>
                  </div>

                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Buildings</h4>
                      <p>Schools, hospitals, government buildings, offices and warehouses</p>
                    </div>
                  </div>

                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Civil Works</h4>
                      <p>Drainage, culverts, earthworks and concrete works</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="service-cta">
                <a href="/construction-infrastructure" class="btn btn-primary">
                  See Full Construction &amp; Infrastructure Page
                  <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>

            <div class="service-detail-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=1000&fit=crop" alt="Road construction and civil works" loading="lazy" width="800" height="1000">
                <div class="visual-quote">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  <p>"Infrastructure is the foundation everything else is built on — we deliver it to last."</p>
                  <span>MMT Alliance Construction Principle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE 02: WATER & UTILITIES ===== -->
      <section class="section section--alt section-service-detail" id="water" aria-labelledby="water-heading">
        <div class="container">
          <div class="service-detail-grid service-detail-grid--reverse">
            <div class="service-detail-visual reveal">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=800&h=1000&fit=crop" alt="Water treatment and borehole infrastructure" loading="lazy" width="800" height="1000">
                <div class="visual-stats">
                  <div class="visual-stat">
                    <span class="stat-value">24/7</span>
                    <span class="stat-label">Water Access</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="service-detail-content reveal reveal-delay-2">
              <span class="service-label">Service 02</span>
              <h2 id="water-heading">Water &amp; Utilities</h2>
              <div class="divider"></div>
              <p class="lead">
                We design, build and maintain water infrastructure for communities, institutions
                and government programmes — from source to tap.
              </p>

              <div class="supply-categories">
                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <h3>Boreholes</h3>
                  <p>Drilling, equipping and commissioning of boreholes for community and institutional supply</p>
                </div>

                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16M4 12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4M4 12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <h3>Pipelines &amp; Reservoirs</h3>
                  <p>Water pipeline networks and reservoir construction for bulk supply schemes</p>
                </div>

                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </div>
                  <h3>Water Treatment</h3>
                  <p>Treatment plant construction and rehabilitation to meet potable water standards</p>
                </div>

                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <h3>Sewerage &amp; Irrigation</h3>
                  <p>Sewerage systems and irrigation infrastructure for agricultural and urban programmes</p>
                </div>
              </div>

              <div class="service-cta">
                <a href="/contact" class="btn btn-primary">Discuss a Water Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE 03: PROCUREMENT & SUPPLY CHAIN ===== -->
      <section class="section section-service-detail" id="procurement" aria-labelledby="procurement-heading">
        <div class="container">
          <div class="service-detail-grid">
            <div class="service-detail-content reveal">
              <span class="service-label">Service 03</span>
              <h2 id="procurement-heading">Procurement &amp; Supply Chain</h2>
              <div class="divider"></div>
              <p class="lead">
                Our procurement team manages the full sourcing lifecycle—from initial market analysis
                through to contract execution and last-mile delivery. We apply international procurement
                standards to ensure transparency, value, and compliance at every step.
              </p>

              <div class="service-features">
                <h3 class="key-heading">Key Capabilities</h3>
                <div class="features-grid">
                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Global Sourcing</h4>
                      <p>Supplier identification and pre-qualification across 50+ countries</p>
                    </div>
                  </div>

                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Tender Management</h4>
                      <p>Complete tender preparation, bidding, and evaluation processes</p>
                    </div>
                  </div>

                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Logistics &amp; Warehousing</h4>
                      <p>Air, sea, and land freight with warehousing at strategic distribution hubs</p>
                    </div>
                  </div>

                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Customs &amp; Contract Negotiation</h4>
                      <p>Customs clearance expertise and expert negotiation of supply agreements</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="service-cta">
                <a href="/contact" class="btn btn-primary">Discuss Your Needs</a>
              </div>
            </div>

            <div class="service-detail-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop" alt="Procurement team reviewing contracts" loading="lazy" width="800" height="1000">
                <div class="visual-quote">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  <p>"Structured procurement is the foundation of a supply chain that can be trusted under audit, under pressure, and at scale."</p>
                  <span>MMT Alliance Procurement Principle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE 04: PROJECT MANAGEMENT ===== -->
      <section class="section section--alt section-service-detail" id="project-management" aria-labelledby="pm-heading">
        <div class="container">
          <div class="service-detail-grid service-detail-grid--reverse">
            <div class="service-detail-visual reveal">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop" alt="Project management and site supervision" loading="lazy" width="800" height="1000">
                <div class="visual-stats">
                  <div class="visual-stat">
                    <span class="stat-value">100%</span>
                    <span class="stat-label">Contract-Ready</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="service-detail-content reveal reveal-delay-2">
              <span class="service-label">Service 04</span>
              <h2 id="pm-heading">Project Management</h2>
              <div class="divider"></div>
              <p class="lead">
                We manage the complete project lifecycle — from planning and mobilisation through to
                site supervision and handover — keeping every stakeholder aligned and every milestone on track.
              </p>

              <div class="supply-categories">
                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </div>
                  <h3>Project Lifecycle Management</h3>
                  <p>End-to-end planning, delivery and close-out across complex, multi-stakeholder projects</p>
                </div>

                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </div>
                  <h3>Construction Supervision</h3>
                  <p>Site supervision, quality control and contract administration</p>
                </div>

                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <h3>Programme Delivery</h3>
                  <p>Coordinated delivery across multiple concurrent projects and workstreams</p>
                </div>

                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <h3>Reporting &amp; Governance</h3>
                  <p>Full audit trails and progress reporting for funders, clients and regulators</p>
                </div>
              </div>

              <div class="service-cta">
                <a href="/advisory" class="btn btn-primary">Explore Advisory &amp; Consultancy</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE 05: ENGINEERING & CONSULTANCY ===== -->
      <section class="section section-service-detail" id="engineering" aria-labelledby="engineering-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="service-label">Service 05</span>
            <h2 id="engineering-heading">Engineering &amp; Consultancy</h2>
            <div class="divider"></div>
            <p class="section-intro">
              Design management, project planning, feasibility studies and technical advisory —
              the specialist thinking behind every project we deliver.
            </p>
          </div>

          <div class="logistics-grid">
            <div class="logistics-card reveal reveal-delay-1">
              <div class="logistics-card-image">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" alt="Design management and engineering planning" loading="lazy" width="600" height="400">
              </div>
              <div class="logistics-card-content">
                <div class="logistics-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 0 0 1.4 1.4l1.6-1.6a1 1 0 0 0-1.4-1.4l-1.6 1.6zM3 21l4.5-1.5L18 9l-3-3L4.5 16.5 3 21z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
                </div>
                <h3>Design Management</h3>
                <p>Coordinating design teams and technical specifications from concept through to construction-ready documentation.</p>
              </div>
            </div>

            <div class="logistics-card reveal reveal-delay-2">
              <div class="logistics-card-image">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" alt="Feasibility studies and technical advisory" loading="lazy" width="600" height="400">
              </div>
              <div class="logistics-card-content">
                <div class="logistics-icon">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </div>
                <h3>Feasibility Studies</h3>
                <p>Technical and financial feasibility assessments to de-risk projects before capital is committed.</p>
              </div>
            </div>

            <div class="logistics-card reveal reveal-delay-3">
              <div class="logistics-card-image">
                <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&h=400&fit=crop" alt="Technical advisory and project planning" loading="lazy" width="600" height="400">
              </div>
              <div class="logistics-card-content">
                <div class="logistics-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.5"/></svg>
                </div>
                <h3>Technical Advisory</h3>
                <p>Independent engineering advice for clients, funders and project teams throughout delivery.</p>
              </div>
            </div>

            <div class="logistics-card reveal reveal-delay-4">
              <div class="logistics-card-image">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" alt="Project planning and scheduling" loading="lazy" width="600" height="400">
              </div>
              <div class="logistics-card-content">
                <div class="logistics-icon">
                  <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.5"/></svg>
                </div>
                <h3>Project Planning</h3>
                <p>Programme scheduling, resourcing, and risk planning aligned to funder and regulatory requirements.</p>
              </div>
            </div>
          </div>

          <div class="service-cta service-cta--center reveal reveal-delay-4" style="margin-top:2.5rem">
            <a href="/advisory" class="btn btn-primary btn-lg">
              View Full Advisory &amp; Consultancy Services
              <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE 06: HUMANITARIAN & EMERGENCY RESPONSE ===== -->
      <section class="section section--alt section-service-detail" id="humanitarian" aria-labelledby="humanitarian-heading">
        <div class="container">
          <div class="emergency-hero reveal">
            <div class="emergency-content">
              <span class="service-label">Service 06</span>
              <h2 id="humanitarian-heading">Humanitarian &amp; Emergency Response</h2>
              <div class="divider"></div>
              <p class="lead">
                When disaster strikes, supply chains cannot wait. Our emergency response capability
                is designed to activate rapidly, delivering critical goods to affected areas within
                hours of mobilisation for UN agencies, NGOs and governments.
              </p>
            </div>
            <div class="emergency-stats">
              <div class="emergency-stat">
                <span class="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </span>
                <span class="stat-value">72hrs</span>
                <span class="stat-label">Average Deployment</span>
              </div>
              <div class="emergency-stat">
                <span class="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.5"/></svg>
                </span>
                <span class="stat-value">24/7</span>
                <span class="stat-label">Operations Centre</span>
              </div>
            </div>
          </div>

          <div class="emergency-features">
            <div class="emergency-feature reveal reveal-delay-1">
              <div class="feature-icon-large">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <div class="feature-content">
                <h3>Rapid Deployment</h3>
                <p>Emergency procurement and logistics activated within hours of a crisis declaration, coordinated 24/7 through our dedicated response team.</p>
              </div>
            </div>

            <div class="emergency-feature reveal reveal-delay-2">
              <div class="feature-icon-large">
                <svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="feature-content">
                <h3>Crisis Supply Operations</h3>
                <p>Medical kits, food parcels, shelter materials, and WASH supplies—pre-sourced and ready for rapid dispatch to affected regions.</p>
              </div>
            </div>

            <div class="emergency-feature reveal reveal-delay-3">
              <div class="feature-icon-large">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="feature-content">
                <h3>Complex Environment Operations</h3>
                <p>Proven capability to operate in conflict-affected, remote, or access-challenged environments with security coordination.</p>
              </div>
            </div>
          </div>

          <div class="service-cta service-cta--center reveal reveal-delay-4">
            <a href="/contact" class="btn btn-primary btn-lg">
              <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 11 19.79 19.79 0 0 1 1.27 2.2 2 2 0 0 1 3.26 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15h1z" stroke="currentColor" stroke-width="1.5"/></svg>
              Activate Emergency Response
            </a>
            <p class="cta-note">Available 24/7 for urgent humanitarian crises</p>
          </div>
        </div>
      </section>

      <!-- ===== FAQ SECTION (SEO) ===== -->
      <section class="section section-faq" aria-labelledby="faq-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">FAQ</span>
            <h2 id="faq-heading">Frequently Asked Questions</h2>
            <div class="divider"></div>
          </div>

          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">Do you deliver construction and procurement under one contract?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes. We deliver construction, water infrastructure, procurement, and project management as a single accountable partner, or as standalone service lines depending on your requirements.</p>
              </div>
            </details>

            <details class="faq-item reveal reveal-delay-2">
              <summary>
                <span class="faq-question">Which organisations do you typically work with?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>We work with governments, development banks, United Nations agencies, international NGOs, and private sector clients across 50+ countries.</p>
              </div>
            </details>

            <details class="faq-item reveal reveal-delay-3">
              <summary>
                <span class="faq-question">What compliance standards do you follow?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>We follow UN and donor procurement guidelines, FIDIC contract standards, ISO management systems, and maintain full audit-ready documentation across all service lines.</p>
              </div>
            </details>

            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">How quickly can you deploy emergency supplies?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Our emergency response team can activate within hours of a crisis declaration, with typical deployment of critical supplies within 72 hours.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== CTA SECTION ===== -->
      <section class="cta-band cta-band--services" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Need a Custom Solution?</h2>
            <p>Every project is unique. Get in touch to discuss your specific construction, procurement, project delivery, or advisory requirements with our expert team.</p>
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

Router.register('/services', ServicesPage.render.bind(ServicesPage));
