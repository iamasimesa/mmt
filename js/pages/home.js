/* ============================================================
   pages/home.js — Home page render (ENHANCED)
   ============================================================ */

const HomePage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Global Procurement & Logistics Partner",
        "description": "End-to-end supply chain management for governments, UN agencies, NGOs, and humanitarian organisations. Global procurement, logistics, and emergency response across 50+ countries.",
        "url": "https://mmtalliance.com",
        "logo": "https://mmtalliance.com/assets/logo.jpg",
        "areaServed": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Core Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Procurement & Strategic Sourcing",
                "description": "Full sourcing lifecycle management with international procurement standards"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Supply Solutions",
                "description": "Medical supplies, food, shelter materials, and custom-sourced goods"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Logistics & Delivery",
                "description": "Air, sea, and land freight with customs clearance and last-mile delivery"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Response",
                "description": "Rapid-deployment crisis supply operations activated within hours"
              }
            }
          ]
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "General Enquiries",
          "email": "info@mmtalliance.com",
          "areaServed": "Worldwide"
        }
      }
      </script>

      <!-- ===== HERO SECTION ===== -->
<section class="hero hero--home" aria-label="Homepage hero">
  <div class="hero-bg-video" aria-hidden="true">
  <video autoplay muted loop playsinline>
    <source src="https://res.cloudinary.com/degxjhrsr/video/upload/q_auto/f_auto/v1775165309/task_01kn813frse4294a6t1hazpdzm_task_01kn813frse4294a6t1hazpdzm_genid_7e5fbc63-1bce-4137-b33a-08fee1ec1857_26_04_02_21_22_814231_videos_00000_780167692_md_g9j6e4.mp4" type="video/mp4">
  </video>
</div>

<div class="home-hero-overlay"></div>
  
  <div class="container hero-content">
    <div class="hero-label reveal">
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M6 10a4 4 0 0 1 8 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="10" cy="10" r="1.5" fill="currentColor"/></svg>
      <span>Trusted UN & Government Supply Partner</span>
    </div>
    
    <h1 class="hero-title reveal reveal-delay-1">
      End-to-End Procurement, Sourcing,<br>
      Supply and Delivery Partner
    </h1>
    
    <p class="hero-subtitle reveal reveal-delay-2">
      Integrated solutions for governments, NGOs, and humanitarian operations worldwide.
    </p>
    
    <div class="hero-actions reveal reveal-delay-3">
      <a href="/contact" class="btn btn-primary btn-lg">
        <span>Speak to Our Team</span>
      </a>
      <a href="/capabilities" class="btn btn-outline-white btn-lg">
        <span>Explore Capabilities</span>
      </a>
    </div>
  </div>
</section>

<!-- ===== CAPABILITIES STRIP ===== -->
<div class="capabilities-strip">
  <div class="container">
    <div class="capabilities-list">
      <div class="capability-item reveal reveal-delay-1">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span>Global Procurement</span>
      </div>
      
      <div class="capability-item reveal reveal-delay-2">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span>Humanitarian Supply</span>
      </div>
      
      <div class="capability-item reveal reveal-delay-3">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span>Infrastructure Support</span>
      </div>
      
      <div class="capability-item reveal reveal-delay-4">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span>Medical & Relief</span>
      </div>
      
      <div class="capability-item reveal reveal-delay-5">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" stroke-width="1.5"/>
          <path d="M16 8h4l3 4v4h-7V8z" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span>Logistics & Delivery</span>
      </div>
    </div>
  </div>
</div>

      <!-- ===== CERTIFICATIONS SECTION ===== -->
      <section class="home-cert-section" aria-labelledby="cert-heading">
        <div class="home-cert-inner">
          <p class="home-cert-label" id="cert-heading">INTERNATIONALLY CERTIFIED &middot; GLOBALLY TRUSTED</p>
          <div class="home-cert-grid">

            <div class="home-cert-item" data-cert-id="iso9001" role="button" tabindex="0" aria-label="ISO 9001:2015 – tap for details">
              <div class="home-cert-icon home-cert-icon--blue">
                <span class="hci-gcc">GCC</span>
                <span class="hci-iso">ISO</span>
                <span class="hci-num">9001</span>
              </div>
              <div class="home-cert-text">
                <strong>ISO 9001:2015</strong>
                <span>Quality Management</span>
              </div>
            </div>

            <div class="home-cert-item" data-cert-id="iso14001" role="button" tabindex="0" aria-label="ISO 14001:2015 – tap for details">
              <div class="home-cert-icon home-cert-icon--green">
                <span class="hci-gcc">GCC</span>
                <span class="hci-iso">ISO</span>
                <span class="hci-num">14001</span>
              </div>
              <div class="home-cert-text">
                <strong>ISO 14001:2015</strong>
                <span>Environmental Management</span>
              </div>
            </div>

            <div class="home-cert-item" data-cert-id="iso45001" role="button" tabindex="0" aria-label="ISO 45001:2018 – tap for details">
              <div class="home-cert-icon home-cert-icon--red">
                <span class="hci-gcc">GCC</span>
                <span class="hci-iso">ISO</span>
                <span class="hci-num">45001</span>
              </div>
              <div class="home-cert-text">
                <strong>ISO 45001:2018</strong>
                <span>Occupational Health &amp; Safety</span>
              </div>
            </div>

            <div class="home-cert-item" data-cert-id="iso22000" role="button" tabindex="0" aria-label="ISO 22000:2018 – tap for details">
              <div class="home-cert-icon home-cert-icon--orange">
                <span class="hci-gcc">GCC</span>
                <span class="hci-iso">ISO</span>
                <span class="hci-num">22000</span>
              </div>
              <div class="home-cert-text">
                <strong>ISO 22000:2018</strong>
                <span>Food Safety Management</span>
              </div>
            </div>

            <div class="home-cert-item" data-cert-id="haccp" role="button" tabindex="0" aria-label="HACCP Certified – tap for details">
              <div class="home-cert-icon home-cert-icon--teal">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style="width:20px;height:20px;color:#fff"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/></svg>
                <span style="font-size:0.55rem;font-weight:800;color:#fff;letter-spacing:0.04em">HACCP</span>
              </div>
              <div class="home-cert-text">
                <strong>HACCP Certified</strong>
                <span>Codex Alimentarius 2020</span>
              </div>
            </div>

            <div class="home-cert-divider" aria-hidden="true"></div>

            <div class="home-cert-item" data-cert-id="ungm" role="button" tabindex="0" aria-label="UNGM Registered Supplier – tap for details">
              <div class="home-cert-icon home-cert-icon--ungm">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" style="width:28px;height:28px;color:#fff">
                  <circle cx="24" cy="24" r="21" stroke="currentColor" stroke-width="2.5"/>
                  <ellipse cx="24" cy="24" rx="10" ry="21" stroke="currentColor" stroke-width="2"/>
                  <line x1="3" y1="24" x2="45" y2="24" stroke="currentColor" stroke-width="2"/>
                  <path d="M6 13 Q24 9 42 13" stroke="currentColor" stroke-width="1.5" fill="none"/>
                  <path d="M6 35 Q24 39 42 35" stroke="currentColor" stroke-width="1.5" fill="none"/>
                </svg>
              </div>
              <div class="home-cert-text">
                <strong>UNGM Registered</strong>
                <span>Supplier No. 1201966</span>
              </div>
            </div>

            <div class="home-cert-item" data-cert-id="jasanz" role="button" tabindex="0" aria-label="JAS-ANZ Accreditation – tap for details">
              <div class="home-cert-icon home-cert-icon--jasanz">
                <span style="font-size:0.6rem;font-weight:800;color:#fff;letter-spacing:0.06em;text-align:center">JAS<br>ANZ</span>
              </div>
              <div class="home-cert-text">
                <strong>JAS-ANZ</strong>
                <span>Accredited Certification Body</span>
              </div>
            </div>

          </div>
          <div class="home-cert-cta">
            <a href="/certifications" class="home-cert-link">
              View Certificates
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== CLIENT STRIP ===== -->
     <section class="trust-strip-section">
  <div class="trust-container">
    <div class="trust-header">
      <span class="pulse-dot"></span>
      <p class="trust-label">Empowering the world's most trusted institutions</p>
    </div>
    
    <div class="marquee-viewport">
      <div class="marquee-track">
        
        <div class="marquee-group">
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">United Nations</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">Governments</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">International NGOs</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">Humanitarian Orgs</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <span class="badge-text">Infrastructure Bodies</span>
          </div>
        </div>

        <div class="marquee-group" aria-hidden="true">
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">United Nations</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">Governments</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">International NGOs</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">Humanitarian Orgs</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <span class="badge-text">Infrastructure Bodies</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      <!-- ===== SERVICES OVERVIEW ===== -->
      <section class="section section-services-home" id="services-overview" aria-labelledby="services-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">What We Do</span>
            <h2 id="services-heading">Complete Supply Chain Management</h2>
            <div class="divider"></div>
            <p class="section-intro">
              We manage the entire supply chain process from sourcing to last-mile delivery 
              so your mission never stalls.
            </p>
          </div>
          
          <div class="services-grid">
            <div class="service-card reveal reveal-delay-1">
              <div class="service-card-image">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" alt="Procurement and strategic sourcing services" loading="lazy" width="600" height="400">
                <div class="service-card-overlay"></div>
              </div>
              <div class="service-card-content">
                <h3>Procurement &amp; Strategic Sourcing</h3>
                <p>Rigorous supplier identification, tender management, vendor evaluation, and contract negotiation.</p>
                <ul class="service-list">
                  <li>Supplier identification</li>
                  <li>Tender management</li>
                  <li>Vendor evaluation</li>
                  <li>Contract negotiation</li>
                </ul>
                <a href="/services#procurement" class="service-card-link">
                  Learn More
                  <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>
            
            <div class="service-card reveal reveal-delay-2">
              <div class="service-card-image">
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop" alt="Supply solutions for humanitarian organizations" loading="lazy" width="600" height="400">
                <div class="service-card-overlay"></div>
              </div>
              <div class="service-card-content">
                <h3>Supply Solutions</h3>
                <p>Medical supplies, food, shelter materials, and custom-sourced goods delivered with precision.</p>
                <ul class="service-list">
                  <li>Medical supplies</li>
                  <li>Food &amp; essential goods</li>
                  <li>Shelter &amp; infrastructure</li>
                  <li>Custom sourcing</li>
                </ul>
                <a href="/services#supply" class="service-card-link">
                  Learn More
                  <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>
            
            <div class="service-card reveal reveal-delay-3">
              <div class="service-card-image">
                <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&h=400&fit=crop" alt="Logistics and delivery services worldwide" loading="lazy" width="600" height="400">
                <div class="service-card-overlay"></div>
              </div>
              <div class="service-card-content">
                <h3>Logistics &amp; Delivery</h3>
                <p>Air, sea, and land freight with full customs clearance and assured last-mile delivery.</p>
                <ul class="service-list">
                  <li>Air / sea / land freight</li>
                  <li>Warehousing</li>
                  <li>Customs clearance</li>
                  <li>Last-mile delivery</li>
                </ul>
                <a href="/services#logistics" class="service-card-link">
                  Learn More
                  <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>
            
            <div class="service-card reveal reveal-delay-4">
              <div class="service-card-image">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" alt="Emergency response and crisis supply operations" loading="lazy" width="600" height="400">
                <div class="service-card-overlay"></div>
              </div>
              <div class="service-card-content">
                <h3>Emergency Response</h3>
                <p>Rapid-deployment crisis supply operations activated within hours for critical humanitarian needs.</p>
                <ul class="service-list">
                  <li>Rapid deployment</li>
                  <li>Crisis supply operations</li>
                  <li>24/7 coordination</li>
                  <li>Pre-positioned stock</li>
                </ul>
                <a href="/services#emergency" class="service-card-link">
                  Learn More
                  <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Mobile Carousel Indicators -->
          <div class="carousel-indicators">
            <span class="indicator active" data-index="0"></span>
            <span class="indicator" data-index="1"></span>
            <span class="indicator" data-index="2"></span>
            <span class="indicator" data-index="3"></span>
          </div>
          
        </div>
      </section>

      <!-- ===== WHY US (ENHANCED) ===== -->
      <section class="section section-why-unique" id="why-us" aria-labelledby="why-heading">
        <div class="container">
          <div class="why-layout">
            
            <!-- LEFT: CONTENT -->
            <div class="why-content-col">
              <div class="why-header reveal">
                <span class="section-label">Why MMT-Alliance</span>
                <h2 id="why-heading">Built to Win Contracts.<br>Designed to Deliver.</h2>
                <div class="divider"></div>
                <p class="why-intro">
                  Institutional credibility meets operational agility — backed by MMT Care, 
                  delivering multi-million-dollar government-funded programs across multiple states.
                </p>
              </div>

              <div class="why-features-list">
                <div class="why-feature-item reveal reveal-delay-1">
                  <div class="feature-number">01</div>
                  <div class="feature-content">
                    <h4>End-to-end supply chain management</h4>
                    <p>From requirements analysis through to last-mile delivery, we manage every stage under one accountable partner.</p>
                  </div>
                </div>

                <div class="why-feature-item reveal reveal-delay-2">
                  <div class="feature-number">02</div>
                  <div class="feature-content">
                    <h4>Proven governance & compliance frameworks</h4>
                    <p>Structured procurement processes, full audit trails, and compliance with international procurement standards.</p>
                  </div>
                </div>

                <div class="why-feature-item reveal reveal-delay-3">
                  <div class="feature-number">03</div>
                  <div class="feature-content">
                    <h4>Backed by established group (MMT Care)</h4>
                    <p>MMT Care's track record in multi-million-dollar government programmes gives us institutional credibility.</p>
                  </div>
                </div>

                <div class="why-feature-item reveal reveal-delay-4">
                  <div class="feature-number">04</div>
                  <div class="feature-content">
                    <h4>Global sourcing capability in 50+ countries</h4>
                    <p>International supplier networks enabling competitive sourcing for any product category across the globe.</p>
                  </div>
                </div>

                <div class="why-feature-item reveal reveal-delay-5">
                  <div class="feature-number">05</div>
                  <div class="feature-content">
                    <h4>Operations in complex & fragile environments</h4>
                    <p>Proven capability to operate in conflict-affected, remote, or access-challenged environments.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- RIGHT: VISUAL PANEL -->
            <div class="why-visual-col">
              <div class="why-panel reveal reveal-delay-2">
                <div class="why-panel-image">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop" alt="MMT Alliance global operations" loading="lazy" width="800" height="1000">
                  <div class="panel-overlay"></div>
                </div>
                
                <div class="why-panel-content">
                  <div class="panel-quote">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="quote-icon"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    <p>"We manage the <strong>entire supply chain process</strong> — from sourcing to last-mile delivery — so mission-critical operations never pause."</p>
                  </div>
                  
                  <div class="panel-locations">
                    <div class="location-item">
                      <span class="location-flag">🇦🇪</span>
                      <div>
                        <strong>Dubai</strong>
                        <span>Global HQ</span>
                      </div>
                    </div>
                    <div class="location-item">
                      <span class="location-flag">🇦🇺</span>
                      <div>
                        <strong>AU</strong>
                        <span>Group Base</span>
                      </div>
                    </div>
                  </div>
                  
                  <a href="/capabilities" class="btn btn-primary btn-full">
                    Explore Capabilities
                    <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ===== SECTORS ===== -->
      <section class="section section-sectors-home" id="sectors" aria-labelledby="sectors-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">Sectors We Serve</span>
            <h2 id="sectors-heading">We Understand Your World</h2>
            <div class="divider"></div>
            <p class="section-intro">
              Deep sector expertise enables us to align with procurement standards, compliance 
              requirements, and delivery timelines of each client environment.
            </p>
          </div>
          
          <div class="sectors-grid">
            <a href="/sectors#governments" class="sector-card reveal reveal-delay-1">
              <div class="sector-card-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Governments</h3>
              <p>National and regional government procurement requiring full compliance and transparency.</p>
              <span class="sector-card-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </a>
            
            <a href="/sectors#un" class="sector-card reveal reveal-delay-2">
              <div class="sector-card-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>United Nations</h3>
              <p>UN agencies and multilateral bodies with rigorous vendor standards and global reach.</p>
              <span class="sector-card-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </a>
            
            <a href="/sectors#ngos" class="sector-card reveal reveal-delay-3">
              <div class="sector-card-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>NGOs</h3>
              <p>Non-governmental organisations requiring cost-effective, accountable field supply solutions.</p>
              <span class="sector-card-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </a>
            
            <a href="/sectors#humanitarian" class="sector-card reveal reveal-delay-4">
              <div class="sector-card-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Humanitarian Relief</h3>
              <p>Crisis-ready supply chains activated rapidly to deliver essential goods in disaster-affected regions.</p>
              <span class="sector-card-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </a>
            
            <a href="/sectors#infrastructure" class="sector-card reveal reveal-delay-5">
              <div class="sector-card-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Infrastructure &amp; Development</h3>
              <p>Development banks and project developers requiring complex, multi-year supply coordination.</p>
              <span class="sector-card-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== HOW WE WORK ===== -->
<section class="section section-process" id="process" aria-labelledby="process-heading">
  <div class="container">
    <div class="process-header reveal">
      <h2 id="process-heading">Our Process: From Requirement to Delivery</h2>
    </div>
    
    <div class="process-steps-horizontal">
      <div class="process-step-h reveal reveal-delay-1">
        <div class="step-number-circle">1</div>
        <h3>Requirement Assessment</h3>
        <p>Procurement strategy, engaging, sourcing, engagement and finalizing priorities.</p>
      </div>
      
      <div class="process-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
      
      <div class="process-step-h reveal reveal-delay-2">
        <div class="step-number-circle">2</div>
        <h3>Strategic Sourcing</h3>
        <p>Deliver detailed requirement from contracting and supply documentation complete.</p>
      </div>
      
      <div class="process-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
      
      <div class="process-step-h reveal reveal-delay-3">
        <div class="step-number-circle">3</div>
        <h3>Procurement & Quality Control</h3>
        <p>Process, evaluate, and finalize sourcing, ordering, and quality inspection.</p>
      </div>
      
      <div class="process-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
      
      <div class="process-step-h reveal reveal-delay-4">
        <div class="step-number-circle">4</div>
        <h3>Logistics & Delivery</h3>
        <p>Supplier readiness support, contracting strategies, and final delivery.</p>
      </div>
    </div>
  </div>
</section>
<!-- ===== PARTNERS & AFFILIATIONS ===== -->
<section class="section section-partners" id="partners" aria-labelledby="partners-heading">
  <div class="container">
    <div class="section-header section-header--center reveal">
      <span class="section-label">Partners & Affiliations</span>
      <h2 id="partners-heading">Trusted by Global Institutions</h2>
      <div class="divider"></div>
      <p class="section-intro">
        We are proud partners and signatories of leading global initiatives, 
        working together to create sustainable impact.
      </p>
    </div>
    
    <div class="partners-grid">
      <a href="/partners#ungc" class="partner-card reveal reveal-delay-1">
        <div class="partner-logo-wrapper">
          <div class="partner-logo partner-logo--ungc">
            <svg viewBox="0 0 120 60" fill="none" aria-hidden="true">
              <circle cx="30" cy="30" r="25" stroke="#003366" stroke-width="3" fill="none"/>
              <path d="M30 5 L30 15 M30 45 L30 55 M5 30 L15 30 M45 30 L55 30" stroke="#003366" stroke-width="2"/>
              <path d="M12.5 12.5 L19.5 19.5 M40.5 40.5 L47.5 47.5 M12.5 47.5 L19.5 40.5 M40.5 19.5 L47.5 12.5" stroke="#003366" stroke-width="2"/>
              <text x="65" y="28" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#003366">UN</text>
              <text x="65" y="42" font-family="Arial, sans-serif" font-size="10" fill="#003366">Global Compact</text>
            </svg>
          </div>
        </div>
        <h3>UN Global Compact</h3>
        <p>Signatory committed to responsible business practices and sustainable development goals.</p>
        <span class="partner-link">
          Learn more
          <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
      </a>
      
      <a href="/partners#weps" class="partner-card reveal reveal-delay-2">
        <div class="partner-logo-wrapper">
          <div class="partner-logo partner-logo--weps">
            <svg viewBox="0 0 120 60" fill="none" aria-hidden="true">
              <circle cx="30" cy="30" r="25" stroke="#003366" stroke-width="3" fill="none"/>
              <path d="M30 15 L35 25 L30 35 L25 25 Z" fill="#003366"/>
              <path d="M20 35 L30 40 L40 35" stroke="#003366" stroke-width="2" fill="none"/>
              <text x="65" y="28" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#003366">WEPs</text>
              <text x="65" y="42" font-family="Arial, sans-serif" font-size="9" fill="#003366">Women's Empowerment</text>
            </svg>
          </div>
        </div>
        <h3>Women's Empowerment Principles</h3>
        <p>Applicant signatory promoting gender equality and women's empowerment in the workplace.</p>
        <span class="partner-link">
          Learn more
          <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
      </a>
      
      <a href="/partners#suppliers" class="partner-card reveal reveal-delay-3">
        <div class="partner-logo-wrapper">
          <div class="partner-logo partner-logo--suppliers">
            <svg viewBox="0 0 120 60" fill="none" aria-hidden="true">
              <rect x="5" y="15" width="50" height="30" rx="3" stroke="#003366" stroke-width="2" fill="none"/>
              <path d="M15 30 L25 20 L35 30 L45 25" stroke="#003366" stroke-width="2" fill="none"/>
              <text x="65" y="28" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#003366">Global</text>
              <text x="65" y="42" font-family="Arial, sans-serif" font-size="10" fill="#003366">Supplier Network</text>
            </svg>
          </div>
        </div>
        <h3>Global Supplier Network</h3>
        <p>Connected with verified suppliers across 50+ countries ensuring quality and compliance.</p>
        <span class="partner-link">
          Learn more
          <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
      </a>
      
      <a href="/partners#logistics" class="partner-card reveal reveal-delay-4">
        <div class="partner-logo-wrapper">
          <div class="partner-logo partner-logo--logistics">
            <svg viewBox="0 0 120 60" fill="none" aria-hidden="true">
              <path d="M10 35 L25 20 L45 20 L50 35 L50 45 L10 45 Z" stroke="#003366" stroke-width="2" fill="none"/>
              <circle cx="20" cy="45" r="4" stroke="#003366" stroke-width="2" fill="none"/>
              <circle cx="40" cy="45" r="4" stroke="#003366" stroke-width="2" fill="none"/>
              <text x="65" y="28" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#003366">Logistics</text>
              <text x="65" y="42" font-family="Arial, sans-serif" font-size="10" fill="#003366">Partners</text>
            </svg>
          </div>
        </div>
        <h3>Logistics Partners</h3>
        <p>Strategic alliances with leading freight forwarders and last-mile delivery providers.</p>
        <span class="partner-link">
          Learn more
          <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
      </a>
    </div>
    
   <div class="partnership-portal-cta reveal reveal-delay-5">
  <div class="portal-inner">
    <p class="portal-text">Interested in joining our global procurement network?</p>
    <a href="/partners#partners-become-partner" class="portal-btn-primary">
      <span class="btn-label">Become a Partner</span>
      <span class="btn-icon">
        <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </span>
    </a>
  </div>
</div>
  </div>
</section>

<!-- ===== TEAM OVERVIEW ===== -->

<section class="mmt-leadership-home">
  <div class="mmt-leadership-home__container">
    <div style="text-align: center;">
      <span class="mmt-leadership-home__badge">Leadership</span>
      <h2 class="mmt-leadership-home__title">Experienced Executives</h2>
      <div class="mmt-leadership-home__underline"></div>
      <p class="mmt-leadership-home__subtitle">Driving global procurement excellence with integrity and impact through strategic vision and operational expertise.</p>
    </div>
    
    <div class="mmt-leadership-home__wrapper">
      <div class="mmt-leadership-home__connector"></div>
      
      <!-- CEO Card -->
      <article class="mmt-leadership-card">
        <div class="mmt-leadership-card__image-wrapper">
          <div class="mmt-leadership-card__image">
            <img src="assets/images/team/ryan.jpeg" alt="Chief Executive Officer" loading="lazy">
          </div>
        </div>
        <h3 class="mmt-leadership-card__name">Ryan Wait</h3>
        <p class="mmt-leadership-card__role">Chief Executive Officer</p>
        <p class="mmt-leadership-card__bio">Strategic leader with extensive experience in global supply chain operations and institutional partnerships.</p>
      </article>
      
      <!-- Director Card -->
      <article class="mmt-leadership-card">
        <div class="mmt-leadership-card__image-wrapper">
          <div class="mmt-leadership-card__image">
            <img src="assets/images/team/abdul.png" alt="Director" loading="lazy">
          </div>
        </div>
        <h3 class="mmt-leadership-card__name">Abdulqadir</h3>
        <p class="mmt-leadership-card__role">Group Director</p>
        <p class="mmt-leadership-card__bio">Oversees operational execution and client relationships across complex humanitarian and government projects.</p>
      </article>
    </div>
  </div>
<div style="text-align: center; margin-top: 3rem;">
  <a href="/about#team" class="mmt-btn-outline">
    View Full Team
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px; vertical-align: middle;">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </a>
</div>

</section>

      <!-- ===== NEWS & MEDIA ===== -->
      <section class="section section-news-home" id="news" aria-labelledby="news-heading">
        <div class="container">
          <div class="section-header--center reveal">
            <span class="section-label">News &amp; Media</span>
            <h2 id="news-heading">Latest Updates</h2>
            <div class="divider"></div>
            <p class="section-intro">
              Insights, announcements, and developments from MMT Alliance and the 
              global supply chain sector.
            </p>
          </div>

          <!-- Desktop: grid | Mobile: carousel -->
          <div class="news-carousel-wrap">
            <div class="news-grid" id="news-grid">
              
              <article class="news-card reveal reveal-delay-1">
                <div class="news-card-image">
                  <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop" alt="UN Partnership announcement" loading="lazy" width="600" height="400">
                  <span class="news-tag">Partnership</span>
                </div>
                <div class="news-card-content">
                  <div class="news-meta">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>March 2026</span>
                  </div>
                  <h3 class="news-title">MMT Alliance Expands UN Vendor Registration Across East Africa Operations</h3>
                  <p class="news-excerpt">MMT Alliance has completed vendor registration with additional UN agencies, strengthening our ability to support humanitarian programmes across East Africa.</p>
                  <a href="/news" class="news-read-more">
                    <span>Read More</span>
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </article>

              <article class="news-card reveal reveal-delay-2">
                <div class="news-card-image">
                  <img src="https://hsiassetstorage.sfo2.digitaloceanspaces.com/transforms/blogimages/26619/emergency-response-what-to-do-when-disaster-strikes-vivid-learning-systems_d4bd353bac6a5f3a10ab94d9650d3531.jpg" alt="Emergency response deployment" loading="lazy" width="600" height="400">
                  <span class="news-tag news-tag-urgent">Emergency Response</span>
                </div>
                <div class="news-card-content">
                  <div class="news-meta">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>February 2026</span>
                  </div>
                  <h3 class="news-title">Rapid Deployment: MMT Alliance Mobilises Emergency Medical Supplies Within 72 Hours</h3>
                  <p class="news-excerpt">Following a humanitarian crisis declaration, our emergency response team successfully mobilised critical medical supplies to three distribution points within 72 hours.</p>
                  <a href="/news" class="news-read-more">
                    <span>Read More</span>
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </article>

              <article class="news-card reveal reveal-delay-3">
                <div class="news-card-image">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" alt="Industry insights and trends" loading="lazy" width="600" height="400">
                  <span class="news-tag">Industry</span>
                </div>
                <div class="news-card-content">
                  <div class="news-meta">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>January 2026</span>
                  </div>
                  <h3 class="news-title">Global Procurement Trends 2026: What Humanitarian Organisations Need to Know</h3>
                  <p class="news-excerpt">Our team shares key insights on evolving international procurement standards, supplier compliance expectations, and logistics challenges affecting humanitarian supply chains in 2026.</p>
                  <a href="/news" class="news-read-more">
                    <span>Read More</span>
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </article>

            </div>

            <!-- Mobile carousel controls -->
            <div class="carousel-controls" aria-label="News carousel controls">
              <button class="carousel-btn" id="carousel-prev" aria-label="Previous article">
                <svg viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </button>
              <div class="carousel-dots" id="carousel-dots">
                <button class="carousel-dot active" data-index="0" aria-label="Article 1"></button>
                <button class="carousel-dot" data-index="1" aria-label="Article 2"></button>
                <button class="carousel-dot" data-index="2" aria-label="Article 3"></button>
              </div>
              <button class="carousel-btn" id="carousel-next" aria-label="Next article">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== FAQ SECTION (SEO) ===== -->
      <section class="section section-faq-home" aria-labelledby="faq-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">FAQ</span>
            <h2 id="faq-heading">Frequently Asked Questions</h2>
            <div class="divider"></div>
          </div>
          
          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">Which organisations do you work with?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>We work with governments, United Nations agencies, international NGOs, humanitarian organisations, and development banks across 50+ countries.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-2">
              <summary>
                <span class="faq-question">What compliance standards do you follow?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>We follow UN procurement guidelines, ISO standards, and maintain full audit-ready documentation for all transactions and supply chain operations.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-3">
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
            
            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">Do you operate in conflict-affected regions?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes, we have proven capability operating in complex and fragile environments with security coordination and risk mitigation protocols.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== CTA BAND ===== -->
      <section class="cta-band cta-band--home" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Ready to Partner With Us?</h2>
            <p>Whether you have an active tender, a long-term supply requirement, or want to explore how MMT Alliance can support your operations, we are ready to engage.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                <span>Start a Conversation</span>
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/capability-statement" class="btn btn-outline-white btn-lg">
                <svg viewBox="0 0 20 20" fill="none"><path d="M10 3v10M6 9l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="3" y="15" width="14" height="2" rx="1" fill="currentColor"/></svg>
                <span>Download Capability Statement</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

    // Load hero video if present
    const videoWrap = document.getElementById('hero-video-wrap');
    if (videoWrap && !videoWrap.dataset.loaded) {
      const video = document.createElement('video');
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute('aria-hidden', 'true');
      video.classList.add('hero-video');

      const source = document.createElement('source');
      source.src = 'assets/hero.mp4';
      source.type = 'video/mp4';
      video.appendChild(source);

      // Fallback poster
      video.poster = 'assets/hero-poster.jpg';

      videoWrap.appendChild(video);
      videoWrap.dataset.loaded = 'true';
    }

    // Initialize all components
    HomePage.initCarousel();
    HomePage.initAnimations();
    HomePage.initFAQ();
  },

  initCarousel() {
    const grid = document.getElementById('news-grid');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dots = document.querySelectorAll('.carousel-dot');

    if (!grid || !prevBtn) return;

    let current = 0;
    const cards = grid.querySelectorAll('.news-card');
    const total = cards.length;

    function isMobile() { return window.innerWidth <= 768; }

    function goTo(idx) {
      if (!isMobile()) return;
      current = ((idx % total) + total) % total;
      grid.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.index)));

    // Touch swipe support
    let startX = 0;
    grid.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    grid.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        goTo(diff > 0 ? current + 1 : current - 1);
      }
    });

    // Handle resize
    window.addEventListener('resize', () => {
      if (!isMobile()) {
        grid.style.transform = '';
      } else {
        goTo(current);
      }
    });
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

    window.addEventListener('scroll', revealOnScroll, { passive: true });
    revealOnScroll(); // Trigger on load
  },

  initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      item.addEventListener('click', function (e) {
        // Prevent toggle if clicking a link inside
        if (e.target.closest('a')) return;

        faqItems.forEach(other => {
          if (other !== item) {
            other.removeAttribute('open');
          }
        });
      });
    });
  }
};

Router.register('/', HomePage.render.bind(HomePage));
Router.register('', HomePage.render.bind(HomePage));