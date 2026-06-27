/* ============================================================
   pages/about.js — About page 
   ============================================================ */

const AboutPage = {
  render(container) {
    // Guard: container must be provided
    if (!container) {
      console.error('AboutPage.render(): no container element provided');
      return;
    }

    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Global Procurement & Logistics Partner",
        "description": "End-to-end procurement, sourcing, supply, and delivery partner supporting governments, UN agencies, and international organisations across 50+ countries.",
        "url": "https://mmtalliance.com/about",
        "logo": "https://mmtalliance.com/assets/logo.jpg",
        "foundingDate": "2024",
        "areaServed": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Core Capabilities",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Logistics & Supply Chain Solutions",
                "description": "International freight, warehousing, distribution, and last-mile delivery"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "General Procurement & Bulk Supply",
                "description": "Multi-category procurement and strategic sourcing across global networks"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Medical & Humanitarian Supply",
                "description": "Critical response capability for emergency and crisis situations"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Construction & Infrastructure Supply",
                "description": "Supply of construction materials and infrastructure components"
              }
            }
          ]
        },
        "parentOrganization": {
          "@type": "Organization",
          "name": "MMT Care",
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AU"
            }
          }
        }
      }
      <\/script>

      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--about">
        <div class="hero-bg-overlay"></div>
        <div class="hero-pattern"></div>
        <div class="container page-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/" aria-label="Home">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">About</span>
          </nav>
          
          <h1 class="hero-title">
            <span class="title-line">About</span>
            <span class="title-line">MMT Alliance</span>
          </h1>
          
          <p class="hero-subtitle">
            A globally positioned procurement and logistics partner, backed by institutional strength, 
            built to operate in the world's most demanding environments.
          </p>
        </div>
        
        <div class="hero-scroll-indicator">
          <span>Learn more</span>
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>


      <section class="mmt-team-about" id="team" aria-labelledby="team-heading">
  <div class="mmt-team-about__container">
    <div style="text-align: center;">
      <span class="mmt-team-about__badge">Our Team</span>
      <h2 class="mmt-team-about__title" id="team-heading">Meet the Experts</h2>
      <div class="mmt-team-about__underline"></div>
      <p class="mmt-team-about__subtitle">A diverse group of procurement, logistics, and humanitarian experts committed to delivering impact at scale.</p>
    </div>
    
    <!-- Hierarchy Level 1: Leadership -->
    <div class="mmt-team-hierarchy">
      <div class="mmt-team-hierarchy__header">
        <span class="mmt-team-hierarchy__badge">
          <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          Level 1
        </span>
        <h3 class="mmt-team-hierarchy__heading">Executive Leadership</h3>
        <div class="mmt-team-hierarchy__underline"></div>
        <p class="mmt-team-hierarchy__description">Strategic direction and organizational oversight driving global impact.</p>
      </div>
      
      <!-- Desktop Grid -->
      <div class="mmt-team-grid">
        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/ryan.jpeg" alt="Ryan Wait" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Ryan Wait</h3>
          <p class="mmt-team-card__role">Chief Executive Officer</p>
          <p class="mmt-team-card__bio">Strategic leader with extensive experience in global supply chain operations and institutional partnerships.</p>
        </article>
        
        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/abdul.png" alt="Abdulqadir" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Abdulqadir</h3>
          <p class="mmt-team-card__role">Group Director</p>
          <p class="mmt-team-card__bio">Oversees operational execution and client relationships across complex humanitarian projects.</p>
        </article>

        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/joy.jpeg" alt="Joy" loading="lazy" style="transform: scale(0.9) translateY(8%);">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Joy</h3>
          <p class="mmt-team-card__role">Executive Director – Infrastructure, Major Projects & Strategic Partnerships</p>
          <p class="mmt-team-card__bio">Leads infrastructure and major project delivery while forging strategic partnerships that expand MMT Alliance's reach and impact across global markets.</p>
        </article>
      </div>

      <!-- Mobile Carousel -->
      <div class="mmt-team-carousel" aria-label="Executive Leadership carousel">
        <button class="mmt-carousel-arrow prev" aria-label="Previous">&#10094;</button>
        <div class="mmt-carousel-track" id="carousel-leadership">
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/ryan.jpeg" alt="Ryan Wait" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Ryan Wait</h3>
              <p class="mmt-team-card__role">Chief Executive Officer</p>
              <p class="mmt-team-card__bio">Strategic leader with extensive experience in global supply chain operations.</p>
            </article>
          </div>
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/abdul.png" alt="Abdulqadir" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Abdulqadir</h3>
              <p class="mmt-team-card__role">Group Director</p>
              <p class="mmt-team-card__bio">Oversees operational execution across complex humanitarian projects.</p>
            </article>
          </div>
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/joy.jpeg" alt="Joy" loading="lazy" style="transform: scale(0.9) translateY(8%);">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Joy</h3>
              <p class="mmt-team-card__role">Executive Director – Infrastructure, Major Projects & Strategic Partnerships</p>
              <p class="mmt-team-card__bio">Leads infrastructure and major project delivery while forging strategic partnerships across global markets.</p>
            </article>
          </div>
        </div>
        <button class="mmt-carousel-arrow next" aria-label="Next">&#10095;</button>
        <div class="mmt-carousel-nav" data-carousel="leadership"></div>
      </div>
    </div>

    <!-- Hierarchy Level 2: Senior Management -->
    <div class="mmt-team-hierarchy">
      <div class="mmt-team-hierarchy__header">
        <span class="mmt-team-hierarchy__badge">
          <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Level 2
        </span>
        <h3 class="mmt-team-hierarchy__heading">Senior Management</h3>
        <div class="mmt-team-hierarchy__underline"></div>
        <p class="mmt-team-hierarchy__description">Leading commercial strategy, global operations, and digital infrastructure.</p>
      </div>
      
      <!-- Desktop Grid -->
      <div class="mmt-team-grid">
        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/Velides.jpeg" alt="Videlis" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Videlis</h3>
          <p class="mmt-team-card__role">Head of Global Tenders & Commercial Strategy</p>
          <p class="mmt-team-card__bio">Leads global tender operations and commercial strategy to secure high-value opportunities and drive sustainable growth.</p>
        </article>
        
        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/Syed.jpeg" alt="Syed" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Syed</h3>
          <p class="mmt-team-card__role">Executive Manager – Global Bidding & Commercial Strategy</p>
          <p class="mmt-team-card__bio">Oversees global bidding operations and commercial strategy, delivering competitive proposals and long-term business growth.</p>
        </article>

        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/Asim.jpeg" alt="Asim" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Asim Esa</h3>
          <p class="mmt-team-card__role">ICT & Digital Operations Manager</p>
          <p class="mmt-team-card__bio">Leads ICT infrastructure and digital operations, ensuring secure, efficient systems and reliable technology performance across the organisation.</p>
        </article>

        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/Mamoth.jpeg" alt="Mamoth" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Mamoth</h3>
          <p class="mmt-team-card__role">Executive Manager – Egypt Operations & Commercial Strategy</p>
          <p class="mmt-team-card__bio">Oversees Egypt operations and drives commercial strategy, building high-value partnerships and expanding MMT Alliance's presence across North Africa.</p>
        </article>

        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/Fredrick.jpeg" alt="Fredrick" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Fredrick</h3>
          <p class="mmt-team-card__role">Strategic Partnerships & Institutional Relations Manager – Kenya & Somalia</p>
          <p class="mmt-team-card__bio">Cultivates high-impact institutional relationships and drives strategic partnerships across Kenya and Somalia, positioning MMT Alliance as the preferred procurement partner for governments and international agencies in the region.</p>
        </article>

        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/Mustafa.png" alt="Mustafa" loading="lazy" style="object-fit: contain; object-position: center; transform: scale(1.05);">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Mustafa</h3>
          <p class="mmt-team-card__role">Strategic Partnerships & Operations Lead – Somalia</p>
          <p class="mmt-team-card__bio">Leads strategic partnerships and on-the-ground operations across Somalia, building trusted relationships with government bodies and international agencies while ensuring efficient, reliable delivery in complex environments.</p>
        </article>
      </div>

      <!-- Mobile Carousel -->
      <div class="mmt-team-carousel" aria-label="Senior Management carousel">
        <button class="mmt-carousel-arrow prev" aria-label="Previous">&#10094;</button>
        <div class="mmt-carousel-track" id="carousel-senior">
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/Velides.jpeg" alt="Videlis" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Videlis</h3>
              <p class="mmt-team-card__role">Head of Global Tenders & Commercial Strategy</p>
              <p class="mmt-team-card__bio">Leads global tender operations and commercial strategy to secure high-value opportunities.</p>
            </article>
          </div>
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/Syed.jpeg" alt="Syed" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Syed</h3>
              <p class="mmt-team-card__role">Executive Manager – Global Bidding</p>
              <p class="mmt-team-card__bio">Oversees global bidding operations and commercial strategy for competitive proposals.</p>
            </article>
          </div>
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/Asim.jpeg" alt="Asim" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Asim</h3>
              <p class="mmt-team-card__role">ICT & Digital Operations Manager</p>
              <p class="mmt-team-card__bio">Leads ICT infrastructure and digital operations for secure, efficient systems.</p>
            </article>
          </div>
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/Mamoth.jpeg" alt="Mamoth" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Mamoth</h3>
              <p class="mmt-team-card__role">Executive Manager – Egypt Operations & Commercial Strategy</p>
              <p class="mmt-team-card__bio">Oversees Egypt operations and drives commercial strategy across North Africa.</p>
            </article>
          </div>
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/Fredrick.jpeg" alt="Fredrick" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Fredrick</h3>
              <p class="mmt-team-card__role">Strategic Partnerships & Institutional Relations Manager – Kenya & Somalia</p>
              <p class="mmt-team-card__bio">Cultivates high-impact institutional relationships and drives strategic partnerships across Kenya and Somalia.</p>
            </article>
          </div>
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/Mustafa.png" alt="Mustafa" loading="lazy" style="object-fit: contain; object-position: center; transform: scale(1.05);">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Mustafa</h3>
              <p class="mmt-team-card__role">Strategic Partnerships & Operations Lead – Somalia</p>
              <p class="mmt-team-card__bio">Leads strategic partnerships and on-the-ground operations across Somalia for efficient, reliable delivery.</p>
            </article>
          </div>
        </div>
        <button class="mmt-carousel-arrow next" aria-label="Next">&#10095;</button>
        <div class="mmt-carousel-nav" data-carousel="senior"></div>
      </div>
    </div>

        <!-- Hierarchy Level 3: Specialists -->
    <div class="mmt-team-hierarchy">
      <div class="mmt-team-hierarchy__header">
        <span class="mmt-team-hierarchy__badge">
          <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>
          Level 3
        </span>
        <h3 class="mmt-team-hierarchy__heading">Specialists & Analysts</h3>
        <div class="mmt-team-hierarchy__underline"></div>
        <p class="mmt-team-hierarchy__description">Expert execution in pricing, sourcing, business development, and tender delivery.</p>
      </div>
      
      <!-- Desktop Grid -->
      <div class="mmt-team-grid">
        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/John.png" alt="John Olwande" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">John</h3>
          <p class="mmt-team-card__role">Pricing Analyst & Supplier Sourcing Specialist</p>
          <p class="mmt-team-card__bio">Optimises pricing strategies and sources trusted suppliers to ensure cost-effective, high-quality solutions.</p>
        </article>
        
        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/joye.jpeg" alt="Joyce" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Joyce</h3>
          <p class="mmt-team-card__role">Business Development & Tender Strategy</p>
          <p class="mmt-team-card__bio">Drives business growth through strategic partnerships, opportunity identification, and winning tender strategies.</p>
        </article>

        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/Wycliffe.jpeg" alt="Wycliffe" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Wycliffe</h3>
          <p class="mmt-team-card__role">Tender Specialist – Global Bid Execution</p>
          <p class="mmt-team-card__bio">Manages global tender submissions and bid execution with a focus on accuracy, compliance, and competitive outcomes.</p>
        </article>

        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/Stella.jpeg" alt="Stella" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Stella</h3>
          <p class="mmt-team-card__role">Tender Specialist – Global Bid Execution</p>
          <p class="mmt-team-card__bio">Manages global tender submissions and bid execution with a focus on accuracy, compliance, and competitive outcomes.</p>
        </article>

        <article class="mmt-team-card">
          <div class="mmt-team-card__image-wrapper">
            <div class="mmt-team-card__image">
              <img src="assets/images/team/Dorothy.jpeg" alt="Dorothy" loading="lazy">
            </div>
          </div>
          <h3 class="mmt-team-card__name">Dorothy</h3>
          <p class="mmt-team-card__role">Pricing Analyst & Supplier Sourcing Specialist</p>
          <p class="mmt-team-card__bio">Delivers precise pricing analysis and strategic supplier sourcing to ensure competitive, quality-driven procurement outcomes across all categories.</p>
        </article>
      </div>

      <!-- Mobile Carousel -->
      <div class="mmt-team-carousel" aria-label="Specialists carousel">
        <button class="mmt-carousel-arrow prev" aria-label="Previous">&#10094;</button>
        <div class="mmt-carousel-track" id="carousel-specialists">
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/John.png" alt="John Olwande" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">John</h3>
              <p class="mmt-team-card__role">Pricing Analyst & Supplier Sourcing</p>
              <p class="mmt-team-card__bio">Optimises pricing strategies and sources trusted suppliers for cost-effective solutions.</p>
            </article>
          </div>
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/joye.jpeg" alt="Joyce" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Joyce</h3>
              <p class="mmt-team-card__role">Business Development & Tender Strategy</p>
              <p class="mmt-team-card__bio">Drives business growth through strategic partnerships and winning tender strategies.</p>
            </article>
          </div>
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/Wycliffe.jpeg" alt="Wycliffe" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Wycliffe</h3>
              <p class="mmt-team-card__role">Tender Specialist – Global Bid Execution</p>
              <p class="mmt-team-card__bio">Manages global tender submissions with focus on accuracy, compliance, and competitive outcomes.</p>
            </article>
          </div>

          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/Stella.jpeg" alt="Stella" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Stella</h3>
              <p class="mmt-team-card__role">Tender Specialist – Global Bid Execution</p>
              <p class="mmt-team-card__bio">Manages global tender submissions with focus on accuracy, compliance, and competitive outcomes.</p>
            </article>
          </div>
          <div class="mmt-carousel-slide">
            <article class="mmt-team-card">
              <div class="mmt-team-card__image-wrapper">
                <div class="mmt-team-card__image">
                  <img src="assets/images/team/Dorothy.jpeg" alt="Dorothy" loading="lazy">
                </div>
              </div>
              <h3 class="mmt-team-card__name">Dorothy</h3>
              <p class="mmt-team-card__role">Pricing Analyst & Supplier Sourcing Specialist</p>
              <p class="mmt-team-card__bio">Delivers precise pricing analysis and strategic supplier sourcing for competitive procurement outcomes.</p>
            </article>
          </div>
        </div>
        <button class="mmt-carousel-arrow next" aria-label="Next">&#10095;</button>
        <div class="mmt-carousel-nav" data-carousel="specialists"></div>
      </div>
    </div>
  </div>
</section>


      <!-- ===== COMPANY OVERVIEW ===== -->
      <section class="section section-overview" aria-labelledby="overview-heading">
        <div class="container">
          <div class="overview-grid">
            <div class="overview-content reveal">
              <span class="section-label">Company Overview</span>
              <h2 id="overview-heading">Global Procurement • Supply • Logistics • Delivery</h2>
              <div class="divider"></div>
              
              <p class="lead">
MMT Alliance is a global end-to-end procurement, sourcing, supply, and delivery partner, supporting governments, United Nations agencies, and international organisations in executing critical supply and infrastructure requirements.
              </p>
              
              <p>
                Backed by our parent company <strong>MMT Care</strong>, we bring a proven track record of delivering essential, government-funded services at scale.
              </p>
              <h3 class="subheading">MMT Care – Capability & Strength</h3>
              <p>
                Trusted and approved NDIS provider managing multi-million-dollar government funding and grants
Delivers disability and community services across multiple Australian states
Provides Supported Independent Living (SIL), in-home care, community access, and complex care
Operates with strong compliance, governance, and regulatory discipline
Focused on person-centred outcomes for individuals with complex needs
              </p>
              <h3 class="subheading">Operational & Logistics Capability</h3>
              <p>
              Coordinates large-scale workforce deployment across Australia
Manages scheduling, service delivery, and multi-region operations
Ensures efficiency, reliability, and consistency across complex service networks
Proven capability in logistics coordination and operational execution at scale
              </p>
              <p>
              Leveraging this foundation, MMT Alliance operates with strong governance, financial credibility, and operational discipline. We specialise in rapid sourcing, strategic procurement, and reliable delivery of essential goods and services—particularly in complex, high-demand, and resource-constrained environments.
              </p>
              
              <div class="overview-highlights">
                <div class="highlight-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>End-to-end accountability</span>
                </div>
                <div class="highlight-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Asset-light, scalable model</span>
                </div>
                <div class="highlight-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Global supplier ecosystem</span>
                </div>
              </div>
            </div>
            
            <div class="overview-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://res.cloudinary.com/degxjhrsr/image/upload/q_auto/f_auto/v1775167154/photo-1486406146926-c627a92ad1ab_lobgjf.jpg" alt="MMT Alliance global operations" loading="lazy" width="800" height="1000">
                <div class="visual-overlay">
                  <div class="visual-stat">
                    <span class="stat-number">End-to-End</span>
                    <span class="stat-label">Supply Chain Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <!-- ===== BUSINESS MODEL ===== -->
      <section class="section section-business-model" aria-labelledby="model-heading">
        <div class="container">
          <div class="model-grid">
            <div class="model-content reveal">
              <span class="section-label">Business Model Advantage</span>
              <h2 id="model-heading">Asset-Light. Outcome-Focused.</h2>
              <div class="divider"></div>
              <p class="lead">
                MMT Alliance operates a non-manufacturing, asset-light model, enabling flexibility, 
                speed, and scalability across diverse client needs.
              </p>
              
              <div class="model-features">
                <div class="model-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Global Supplier Ecosystem</h4>
                    <p>Access to vetted suppliers across multiple continents for competitive sourcing.</p>
                  </div>
                </div>
                
                <div class="model-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </div>
                  <div>
                    <h4>Faster Procurement Cycles</h4>
                    <p>Streamlined processes and pre-qualified suppliers enable rapid deployment.</p>
                  </div>
                </div>
                
                <div class="model-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Competitive Pricing</h4>
                    <p>Strategic sourcing and volume aggregation deliver cost efficiency without compromising quality.</p>
                  </div>
                </div>
                
                <div class="model-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Multi-Industry Flexibility</h4>
                    <p>Capability to serve governments, UN agencies, NGOs, and private sector clients.</p>
                  </div>
                </div>
              </div>
              
              <div class="model-outcome">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <p>"This model allows us to deliver outcomes—not just products."</p>
              </div>
            </div>
            
            <div class="model-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://res.cloudinary.com/degxjhrsr/image/upload/q_auto/f_auto/v1775167201/photo-1551434678-e076c223a692_zkloss.jpg" alt="Strategic sourcing and supplier network" loading="lazy" width="800" height="1000">
                <div class="visual-badge">
                  <span>Asset-Light</span>
                  <span>Scalable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== CORE CAPABILITIES ===== -->
      <section class="section section--alt section-capabilities" aria-labelledby="capabilities-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">Core Capabilities</span>
            <h2 id="capabilities-heading">UNSPSC-Aligned Service Portfolio</h2>
            <div class="divider"></div>
            <p class="section-intro">
              Eight integrated capability areas, aligned with international procurement standards, 
              enabling us to serve diverse client needs across multiple sectors.
            </p>
          </div>
          
          <div class="capabilities-grid">
            <div class="capability-card reveal reveal-delay-1">
              <div class="capability-header">
                <span class="capability-number">01</span>
              </div>
              <h3>Logistics & Supply Chain Solutions</h3>
              <p class="capability-desc">Fully integrated logistics and supply chain services for complex environments.</p>
              <ul class="capability-list">
                <li>International freight (air, sea, land)</li>
                <li>Warehousing and inventory management</li>
                <li>Distribution and last-mile delivery</li>
                <li>Humanitarian logistics support</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-2">
              <div class="capability-header">
                <span class="capability-number">02</span>
              </div>
              <h3>General Procurement & Bulk Supply</h3>
              <p class="capability-desc">Multi-category procurement and strategic sourcing across global networks.</p>
              <ul class="capability-list">
                <li>Bulk goods sourcing and aggregation</li>
                <li>Packaging and storage solutions</li>
                <li>Strategic global supplier networks</li>
                <li>Quality verification protocols</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-3">
              <div class="capability-header">
                <span class="capability-number">03</span>
              </div>
              <h3>Construction & Infrastructure Supply</h3>
              <p class="capability-desc">Supply of construction materials and infrastructure components for large-scale projects.</p>
              <ul class="capability-list">
                <li>Construction materials sourcing</li>
                <li>Equipment for civil projects</li>
                <li>End-to-end procurement support</li>
                <li>Project coordination services</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-4">
              <div class="capability-header">
                <span class="capability-number">04</span>
              </div>
              <h3>Medical & Humanitarian Supply</h3>
              <p class="capability-desc">Critical response capability for emergency and crisis situations.</p>
              <ul class="capability-list">
                <li>Medical equipment and consumables</li>
                <li>Emergency response supplies</li>
                <li>Public health supply solutions</li>
                <li>Humanitarian aid distribution</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-5">
              <div class="capability-header">
                <span class="capability-number">05</span>
              </div>
              <h3>Food & Relief Supply</h3>
              <p class="capability-desc">High-volume deployment for food security and disaster response programs.</p>
              <ul class="capability-list">
                <li>Bulk food sourcing and distribution</li>
                <li>Emergency relief packages</li>
                <li>Refugee and crisis program support</li>
                <li>Food security solutions</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-6">
              <div class="capability-header">
                <span class="capability-number">06</span>
              </div>
              <h3>Industrial & Equipment Supply</h3>
              <p class="capability-desc">Industrial machinery, operational equipment, and technical procurement.</p>
              <ul class="capability-list">
                <li>Industrial machinery sourcing</li>
                <li>Tools and technical equipment</li>
                <li>Energy and power equipment</li>
                <li>Mining and heavy industry procurement</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-7">
              <div class="capability-header">
                <span class="capability-number">07</span>
              </div>
              <h3>Technology Supply & Services</h3>
              <p class="capability-desc">IT infrastructure, telecommunications, and technical deployment support.</p>
              <ul class="capability-list">
                <li>IT hardware and infrastructure</li>
                <li>Telecommunications systems</li>
                <li>Technology deployment services</li>
                <li>Technical operational support</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-8">
              <div class="capability-header">
                <span class="capability-number">08</span>
              </div>
              <h3>Security & Safety Supply</h3>
              <p class="capability-desc">Personal protective equipment, security systems, and safety infrastructure.</p>
              <ul class="capability-list">
                <li>Personal protective equipment (PPE)</li>
                <li>Security systems and equipment</li>
                <li>Safety infrastructure solutions</li>
                <li>Emergency response gear</li>
              </ul>
            </div>
          </div>
          
          <div class="capabilities-cta reveal">
            <a href="/services" class="btn btn-primary">
              Explore All Services
              <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== OPERATIONAL STRENGTHS ===== -->
      <section class="section section-strengths" aria-labelledby="strengths-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">Operational Strengths</span>
            <h2 id="strengths-heading">What Sets Us Apart</h2>
            <div class="divider"></div>
          </div>
          
          <div class="strengths-grid">
            <div class="strength-item reveal reveal-delay-1">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Global Supplier Network</h3>
              <p>Access to vetted suppliers across multiple continents for competitive, reliable sourcing.</p>
            </div>
            
            <div class="strength-item reveal reveal-delay-2">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <h3>Rapid Deployment</h3>
              <p>Fast turnaround for urgent procurement needs with 24/7 emergency response capability.</p>
            </div>
            
            <div class="strength-item reveal reveal-delay-3">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>End-to-End Accountability</h3>
              <p>Single point of responsibility for full delivery, from sourcing through final handover.</p>
            </div>
            
            <div class="strength-item reveal reveal-delay-4">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Scalable Operations</h3>
              <p>From small contracts to large multi-country projects, we scale to meet your demands.</p>
            </div>
            
            <div class="strength-item reveal reveal-delay-5">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Cost Efficiency</h3>
              <p>Competitive pricing through strategic sourcing and volume aggregation without quality compromise.</p>
            </div>
            
            <div class="strength-item reveal reveal-delay-6">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Complex Environment Expertise</h3>
              <p>Proven capability operating in conflict-affected, remote, and resource-constrained regions.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== GOVERNANCE & COMPLIANCE ===== -->
      <section class="section section--alt section-governance" aria-labelledby="governance-heading">
        <div class="container">
          <div class="governance-grid">
            <div class="governance-content reveal">
              <span class="section-label">Governance & Compliance</span>
              <h2 id="governance-heading">Operating to International Standards</h2>
              <div class="divider"></div>
              <p class="lead">
                MMT Alliance operates in line with international procurement and compliance standards, 
                ensuring transparency, accountability, and ethical practice across all engagements.
              </p>
              
              <div class="compliance-list">
                <div class="compliance-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Transparent procurement processes</span>
                </div>
                <div class="compliance-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Supplier due diligence and vetting</span>
                </div>
                <div class="compliance-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Ethical sourcing practices</span>
                </div>
                <div class="compliance-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Contractual accountability and reporting</span>
                </div>
                <div class="compliance-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Risk-managed delivery frameworks</span>
                </div>
              </div>
            </div>
            
            <div class="governance-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://res.cloudinary.com/degxjhrsr/image/upload/q_auto/f_auto/v1775167256/photo-1450101499163-c8848c66ca85_jwex9r.jpg" alt="Compliance and governance documentation" loading="lazy" width="800" height="1000">
                <div class="compliance-badges">
                  <span class="compliance-badge">UN Aligned</span>
                  <span class="compliance-badge">ISO Standards</span>
                  <span class="compliance-badge">Audit Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== TARGET CLIENTS & REACH ===== -->
      <section class="section section-clients" aria-labelledby="clients-heading">
        <div class="container">
          <div class="clients-grid">
            <div class="clients-content reveal">
              <span class="section-label">Who We Serve</span>
              <h2 id="clients-heading">Target Clients & Partners</h2>
              <div class="divider"></div>
              
              <div class="client-types">
                <div class="client-type">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <h4>United Nations Agencies</h4>
                </div>
                <div class="client-type">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/></svg>
                  <h4>International NGOs</h4>
                </div>
                <div class="client-type">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" stroke="currentColor" stroke-width="1.5"/></svg>
                  <h4>Government Bodies</h4>
                </div>
                <div class="client-type">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <h4>Humanitarian Organisations</h4>
                </div>
                <div class="client-type">
                  <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="1.5"/></svg>
                  <h4>Infrastructure Programs</h4>
                </div>
              </div>
            </div>
            
            <div class="geographic-reach reveal reveal-delay-2">
              <span class="section-label">Geographic Reach</span>
              <h3>Global Operations Across Key Regions</h3>
              <div class="divider"></div>
              
              <div class="regions-list">
                <div class="region-item">
                  <div class="region-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <strong>Middle East</strong>
                    <span>Hub: Dubai, UAE</span>
                  </div>
                </div>
                <div class="region-item">
                  <div class="region-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <strong>Africa</strong>
                    <span>East, West & Southern regions</span>
                  </div>
                </div>
                <div class="region-item">
                  <div class="region-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <strong>Asia-Pacific</strong>
                    <span>Including Australia (MMT Care)</span>
                  </div>
                </div>
                <div class="region-item">
                  <div class="region-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <strong>Europe</strong>
                    <span>Strategic partnerships</span>
                  </div>
                </div>
              </div>
              
              <p class="reach-note">
                With the capability to mobilise quickly into new regions based on client requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== VALUE PROPOSITION ===== -->
      <section class="section section--alt section-value-prop" aria-labelledby="value-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">Value Proposition</span>
            <h2 id="value-heading">Why Partner With MMT Alliance</h2>
            <div class="divider"></div>
          </div>
          
          <div class="value-grid">
            <div class="value-item reveal reveal-delay-1">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <h3>Speed</h3>
              <p>Rapid sourcing and execution for time-critical requirements.</p>
            </div>
            
            <div class="value-item reveal reveal-delay-2">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Reliability</h3>
              <p>Consistent delivery in all environments, from stable to complex.</p>
            </div>
            
            <div class="value-item reveal reveal-delay-3">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Flexibility</h3>
              <p>Multi-sector capability to adapt to diverse client needs.</p>
            </div>
            
            <div class="value-item reveal reveal-delay-4">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Scale</h3>
              <p>Ability to grow with project demands, from pilot to multi-country.</p>
            </div>
            
            <div class="value-item reveal reveal-delay-5">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Simplicity</h3>
              <p>One partner, full solution—eliminating coordination complexity.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== TEAM SECTION ===== -->



      <!-- ===== CONCLUSION & CTA ===== -->
      <section class="cta-band cta-band--about" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">MMT Alliance: Your Trusted Global Partner</h2>
            <p class="cta-intro">
              Positioned as a trusted global procurement and supply partner, capable of delivering 
              critical goods and services across complex environments with efficiency, reliability, and accountability.
            </p>
            <p class="cta-tagline">
              <strong>We do not simply supply products — we deliver complete solutions.</strong>
            </p>
            <div class="cta-actions">
              <a href="/capabilities" class="btn btn-primary btn-lg">
                View Full Capabilities
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/contact" class="btn btn-outline-white btn-lg">
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

    // Defer animations until after innerHTML is painted
    requestAnimationFrame(() => {
      this.initAnimations();
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
    // Trigger immediately so above-fold elements reveal without scrolling
    revealOnScroll();
  },

  initTeamCarousel() {
    // ✅ Handle ALL carousels (one per hierarchy section)
    const carousels = document.querySelectorAll('.mmt-team-carousel');

    if (!carousels.length) return;

    carousels.forEach((carousel) => {
      const track = carousel.querySelector('.mmt-carousel-track');
      const slides = track ? Array.from(track.children) : [];
      const dotsContainer = carousel.querySelector('.mmt-carousel-nav');
      const prevBtn = carousel.querySelector('.mmt-carousel-arrow.prev');
      const nextBtn = carousel.querySelector('.mmt-carousel-arrow.next');

      // Exit early if carousel elements don't exist or only one slide
      if (!track || slides.length <= 1) return;

      let currentIndex = 0;
      let autoPlay = null;

      // Create navigation dots
      slides.forEach(function (_, index) {
        const dot = document.createElement('button');
        dot.className = 'mmt-carousel-dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', 'Go to slide ' + (index + 1));
        dot.setAttribute('aria-selected', String(index === 0));
        dot.addEventListener('click', function () { goToSlide(index); });
        if (dotsContainer) dotsContainer.appendChild(dot);
      });

      const dots = dotsContainer ? Array.from(dotsContainer.children) : [];

      function updateCarousel() {
        if (!track) return;
        track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

        dots.forEach(function (dot, index) {
          const isActive = index === currentIndex;
          dot.classList.toggle('active', isActive);
          dot.setAttribute('aria-selected', String(isActive));
        });
      }

      function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
      }

      if (nextBtn) nextBtn.addEventListener('click', nextSlide);
      if (prevBtn) prevBtn.addEventListener('click', prevSlide);

      // Touch swipe support
      let touchStartX = 0;

      track.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      track.addEventListener('touchend', function (e) {
        const touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        if (touchStartX - touchEndX > swipeThreshold) nextSlide();
        if (touchEndX - touchStartX > swipeThreshold) prevSlide();
      }, { passive: true });

      // Keyboard navigation
      track.setAttribute('tabindex', '0');
      track.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      });

      // Initialize display
      updateCarousel();

      // Auto-play with pause on interaction
      function startAutoPlay() {
        autoPlay = setInterval(nextSlide, 8000);
      }

      function stopAutoPlay() {
        if (autoPlay) {
          clearInterval(autoPlay);
          autoPlay = null;
        }
      }

      track.addEventListener('mouseenter', stopAutoPlay);
      track.addEventListener('mouseleave', startAutoPlay);
      track.addEventListener('focusin', stopAutoPlay);
      track.addEventListener('focusout', startAutoPlay);

      startAutoPlay();
    });
  }
};

// ✅ Router registration - calls carousel init AFTER render
Router.register('/about', function (container) {
  AboutPage.render(container);

  // Defer carousel init until DOM is painted
  requestAnimationFrame(() => {
    AboutPage.initTeamCarousel();
  });
});