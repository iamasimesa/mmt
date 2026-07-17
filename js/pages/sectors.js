/* ============================================================
   pages/sectors.js — Industries page render (ENHANCED)
   ============================================================ */

const SectorsPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Industries We Serve",
        "description": "Deep expertise across roads, water, buildings, government infrastructure, mining, energy, humanitarian, healthcare, education, agriculture, defence and industrial facilities.",
        "areaServed": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Industry Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Roads & Transport",
                "description": "Road construction, rehabilitation and transport infrastructure"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Water & Sanitation",
                "description": "Boreholes, pipelines, treatment plants and sewerage systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Government Infrastructure",
                "description": "Public buildings, offices and civic infrastructure"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Humanitarian",
                "description": "Emergency supply operations for disaster-affected regions"
              }
            }
          ]
        }
      }
      </script>

      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--sectors">
        <div class="hero-bg-overlay"></div>
        <div class="container page-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/" aria-label="Home">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">Industries</span>
          </nav>

          <h1 class="hero-title">
            <span class="title-line">Industries We</span>
            <span class="title-line">Serve</span>
          </h1>

          <p class="hero-subtitle">
            Deep technical expertise across the industries that drive infrastructure and development.
            We understand your standards, your funders, and what it takes to deliver.
          </p>
        </div>
      </div>

      <!-- ===== INDUSTRY OVERVIEW GRID ===== -->
      <section class="section section-sectors-overview" aria-labelledby="sectors-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">Our Expertise</span>
            <h2 id="sectors-heading">Twelve Core Industries</h2>
            <div class="divider"></div>
            <p class="section-intro">
              We've built deep industry-specific knowledge to ensure every construction, procurement,
              and delivery engagement meets the unique standards of your sector.
            </p>
          </div>

          <div class="sectors-overview-grid">
            <a href="#roads-transport" class="sector-overview-card reveal reveal-delay-1">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M4 20L10 4h4l6 16M7 15h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <div class="card-number">01</div>
              <h3>Roads &amp; Transport</h3>
              <p>Road construction, rehabilitation and transport infrastructure across urban and rural networks</p>
            </a>

            <a href="#water-sanitation" class="sector-overview-card reveal reveal-delay-2">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="card-number">02</div>
              <h3>Water &amp; Sanitation</h3>
              <p>Boreholes, pipelines, treatment plants and sewerage systems</p>
            </a>

            <a href="#buildings" class="sector-overview-card reveal reveal-delay-3">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="card-number">03</div>
              <h3>Buildings</h3>
              <p>Schools, hospitals, government buildings, offices and warehouses</p>
            </a>

            <a href="#government-infrastructure" class="sector-overview-card reveal reveal-delay-4">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="card-number">04</div>
              <h3>Government Infrastructure</h3>
              <p>Public buildings, offices and civic infrastructure delivered to government standards</p>
            </a>

            <a href="#mining" class="sector-overview-card reveal reveal-delay-5">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 6-3 12H7L4 8z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
              </div>
              <div class="card-number">05</div>
              <h3>Mining</h3>
              <p>Infrastructure, logistics and supply chain support for mining operations</p>
            </a>

            <a href="#energy" class="sector-overview-card reveal reveal-delay-1">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
              </div>
              <div class="card-number">06</div>
              <h3>Energy</h3>
              <p>Power infrastructure and energy project delivery support</p>
            </a>

            <a href="#humanitarian" class="sector-overview-card reveal reveal-delay-2">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="card-number">07</div>
              <h3>Humanitarian</h3>
              <p>Emergency supply operations activated within hours for disaster response</p>
            </a>

            <a href="#healthcare" class="sector-overview-card reveal reveal-delay-3">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <div class="card-number">08</div>
              <h3>Healthcare</h3>
              <p>Hospital construction alongside medical supply and equipment procurement</p>
            </a>

            <a href="#education" class="sector-overview-card reveal reveal-delay-4">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 1 3 3 8 3s8-2 8-3v-5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
              </div>
              <div class="card-number">09</div>
              <h3>Education</h3>
              <p>School construction and infrastructure for government and donor-funded programmes</p>
            </a>

            <a href="#agriculture" class="sector-overview-card reveal reveal-delay-5">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22V10M12 10c0-4 3-7 7-7-1 4-3 7-7 7zM12 14c0-3-2-5-6-5 1 3 3 5 6 5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
              </div>
              <div class="card-number">10</div>
              <h3>Agriculture</h3>
              <p>Irrigation infrastructure and agri-supply chain support</p>
            </a>

            <a href="#defence" class="sector-overview-card reveal reveal-delay-1">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
              </div>
              <div class="card-number">11</div>
              <h3>Defence</h3>
              <p>Infrastructure and logistics support for defence and security facilities</p>
            </a>

            <a href="#industrial" class="sector-overview-card reveal reveal-delay-2">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="card-number">12</div>
              <h3>Industrial Facilities</h3>
              <p>Warehouses, plants and industrial infrastructure construction</p>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== INDUSTRY 01: ROADS & TRANSPORT ===== -->
      <section class="section sector-detail-section" id="roads-transport" aria-labelledby="roads-heading">
        <div class="container">
          <div class="sector-detail-grid">
            <div class="sector-detail-content reveal">
              <span class="sector-label">Industry 01</span>
              <h2 id="roads-heading">Roads &amp; Transport</h2>
              <div class="divider"></div>
              <p class="lead">
                Governments and development partners require road infrastructure delivered on time,
                on budget, and to durable engineering standards across rural and urban networks alike.
              </p>
              <p>
                MMT Alliance delivers road rehabilitation, asphalt and rural roads, highway construction,
                pavements and bridges — backed by our project management and engineering advisory teams.
              </p>

              <div class="sector-features">
                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Full-Spectrum Road Works</h4>
                    <p>From rural roads and rehabilitation to highway construction and pavement engineering.</p>
                  </div>
                </div>

                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Bridges &amp; Structures</h4>
                    <p>Structural engineering and construction for bridges and crossings on major transport corridors.</p>
                  </div>
                </div>

                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Donor &amp; Government Compliance</h4>
                    <p>Delivery aligned to World Bank, AfDB, and government road authority standards.</p>
                  </div>
                </div>
              </div>

              <div class="sector-cta">
                <a href="/construction-infrastructure#roads" class="btn btn-primary">
                  Explore Road Construction
                  <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>

            <div class="sector-detail-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=1000&fit=crop" alt="Road construction and rehabilitation" loading="lazy" width="800" height="1000">
                <div class="visual-overlay">
                  <div class="visual-stat">
                    <span class="stat-value">50+</span>
                    <span class="stat-label">Countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== INDUSTRY 02: WATER & SANITATION ===== -->
      <section class="section section--alt sector-detail-section" id="water-sanitation" aria-labelledby="water-heading">
        <div class="container">
          <div class="sector-detail-grid sector-detail-grid--reverse">
            <div class="sector-detail-visual reveal">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=800&h=1000&fit=crop" alt="Water and sanitation infrastructure" loading="lazy" width="800" height="1000">
                <div class="visual-badge">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2"/></svg>
                  <span>WASH Aligned</span>
                </div>
              </div>
            </div>

            <div class="sector-detail-content reveal reveal-delay-2">
              <span class="sector-label">Industry 02</span>
              <h2 id="water-heading">Water &amp; Sanitation</h2>
              <div class="divider"></div>
              <p class="lead">
                Reliable water and sanitation infrastructure underpins public health, agriculture,
                and economic development. We deliver boreholes, pipelines, treatment plants and
                sewerage systems to WASH and government standards.
              </p>

              <div class="un-standards">
                <div class="standard-item">
                  <div class="standard-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Boreholes &amp; Reservoirs</h4>
                    <p>Drilling, equipping and reservoir construction for community and institutional water supply.</p>
                  </div>
                </div>

                <div class="standard-item">
                  <div class="standard-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Treatment &amp; Irrigation</h4>
                    <p>Water treatment plants and irrigation infrastructure for urban and agricultural use.</p>
                  </div>
                </div>

                <div class="standard-item">
                  <div class="standard-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Sewerage Systems</h4>
                    <p>Sanitation infrastructure delivered to public health and environmental standards.</p>
                  </div>
                </div>
              </div>

              <div class="sector-cta">
                <a href="/construction-infrastructure#water" class="btn btn-primary">
                  Explore Water Infrastructure
                  <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== INDUSTRY 03: GOVERNMENT INFRASTRUCTURE ===== -->
      <section class="section sector-detail-section" id="government-infrastructure" aria-labelledby="govt-heading">
        <div class="container">
          <div class="sector-detail-grid">
            <div class="sector-detail-content reveal">
              <span class="sector-label">Industry 03</span>
              <h2 id="govt-heading">Government Infrastructure</h2>
              <div class="divider"></div>
              <p class="lead">
                National and regional governments require infrastructure partners with proven compliance
                records, financial accountability, and the scale to deliver public buildings and civic
                infrastructure across complex, multi-stakeholder environments.
              </p>

              <div class="quote-box">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <p>"Government infrastructure demands a partner with institutional credibility and financial accountability — that's the standard we build to."</p>
                <span>MMT Alliance Approach to Government Delivery</span>
              </div>

              <div class="sector-features">
                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                  </div>
                  <div>
                    <h4>Compliance-First Approach</h4>
                    <p>Delivery structured to meet government audit and transparency requirements.</p>
                  </div>
                </div>

                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                  </div>
                  <div>
                    <h4>Financial Accountability</h4>
                    <p>Backed by an established group with a proven history of government contract delivery.</p>
                  </div>
                </div>

                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                  </div>
                  <div>
                    <h4>Scalable Delivery</h4>
                    <p>Capacity to handle large-volume, multi-country government infrastructure programmes.</p>
                  </div>
                </div>
              </div>

              <div class="sector-cta">
                <a href="/contact" class="btn btn-primary">
                  Discuss Government Infrastructure
                  <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>

            <div class="sector-detail-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop" alt="Government buildings and civic infrastructure" loading="lazy" width="800" height="1000">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== INDUSTRY 04: HUMANITARIAN ===== -->
      <section class="section section--alt sector-detail-section" id="humanitarian" aria-labelledby="humanitarian-heading">
        <div class="container">
          <div class="humanitarian-hero reveal">
            <div class="humanitarian-content">
              <span class="sector-label">Industry 07</span>
              <h2 id="humanitarian-heading">Humanitarian &amp; Disaster Relief</h2>
              <div class="divider"></div>
              <p class="lead">
                In humanitarian crises, speed and reliability are not optional. Our emergency
                supply capability is purpose-built for rapid activation in disaster-affected
                environments for UN agencies, NGOs and governments.
              </p>
            </div>
            <div class="humanitarian-stats">
              <div class="humanitarian-stat">
                <span class="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </span>
                <span class="stat-value">72hrs</span>
                <span class="stat-label">Average Deployment</span>
              </div>
              <div class="humanitarian-stat">
                <span class="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.5"/></svg>
                </span>
                <span class="stat-value">24/7</span>
                <span class="stat-label">Response Team</span>
              </div>
            </div>
          </div>

          <div class="humanitarian-cards">
            <div class="humanitarian-card reveal reveal-delay-1">
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" alt="Rapid emergency deployment" loading="lazy" width="600" height="400">
              </div>
              <div class="card-content">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </div>
                <h3>Rapid Activation</h3>
                <p>Emergency supply operations activated within hours of disaster declaration, 24/7 coordination.</p>
              </div>
            </div>

            <div class="humanitarian-card reveal reveal-delay-2">
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop" alt="Medical and WASH supplies" loading="lazy" width="600" height="400">
              </div>
              <div class="card-content">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </div>
                <h3>Medical &amp; WASH</h3>
                <p>Medical consumables, water purification, sanitation kits—sourced and dispatched for emergency response.</p>
              </div>
            </div>

            <div class="humanitarian-card reveal reveal-delay-3">
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop" alt="Shelter and NFI distribution" loading="lazy" width="600" height="400">
              </div>
              <div class="card-content">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
                </div>
                <h3>Shelter &amp; NFI</h3>
                <p>Emergency shelter materials, non-food items, and household kits delivered to distribution points.</p>
              </div>
            </div>
          </div>

          <div class="sector-cta sector-cta--center reveal reveal-delay-4">
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
            <h2 id="faq-heading">Industry-Specific Questions</h2>
            <div class="divider"></div>
          </div>

          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">Do you deliver infrastructure across multiple industries at once?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes. Our construction, water, procurement and project management teams work across roads, buildings, water, mining, energy, healthcare, education, agriculture, defence and industrial facilities simultaneously.</p>
              </div>
            </details>

            <details class="faq-item reveal reveal-delay-2">
              <summary>
                <span class="faq-question">Are you registered with UN procurement agencies?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes, we maintain active vendor registration with multiple UN agencies and follow UNGM vendor registration requirements and UN procurement guidelines.</p>
              </div>
            </details>

            <details class="faq-item reveal reveal-delay-3">
              <summary>
                <span class="faq-question">Can you support emergency humanitarian responses?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Absolutely. Our emergency response team operates 24/7 and can activate supply operations within hours of a crisis declaration, with typical deployment within 72 hours.</p>
              </div>
            </details>

            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">Do you work with development banks and donor-funded programmes?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes, we support projects funded by World Bank, African Development Bank, EU, JICA and UN agencies, with full compliance to their procurement and delivery requirements.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== CTA SECTION ===== -->
      <section class="cta-band cta-band--sectors" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">We Understand Your World</h2>
            <p>Whatever your industry, we bring the technical expertise, compliance track record, and delivery capability to support your infrastructure and procurement needs.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                Get in Touch
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/services" class="btn btn-outline-white btn-lg">
                What We Do
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

Router.register('/sectors', SectorsPage.render.bind(SectorsPage));
