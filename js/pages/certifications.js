/* ============================================================
   pages/certifications.js
   ============================================================ */

const CertificationsPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== HERO ===== -->
      <section class="cp-hero" aria-label="Certifications hero">
        <div class="cp-hero__bg" style="background-image:url('https://res.cloudinary.com/degxjhrsr/image/upload/q_auto/f_auto/v1775167256/photo-1450101499163-c8848c66ca85_jwex9r.jpg')"></div>
        <div class="cp-hero__overlay"></div>
        <div class="cp-hero__content container">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">Certifications</span>
          </nav>
          <div class="cp-hero__text">
            <span class="cp-hero__label">Independently Audited &middot; Globally Recognised</span>
            <h1 class="cp-hero__title">International<br>Certifications</h1>
            <p class="cp-hero__sub">Certified to four ISO management system standards and HACCP — demonstrating our commitment to quality, safety, environmental responsibility, and food safety across every engagement.</p>
          </div>
          <div class="cp-hero__stats">
            <div class="cp-hero__stat">
              <strong>4</strong>
              <span>ISO Standards</span>
            </div>
            <div class="cp-hero__stat-div" aria-hidden="true"></div>
            <div class="cp-hero__stat">
              <strong>HACCP</strong>
              <span>Food Safety</span>
            </div>
            <div class="cp-hero__stat-div" aria-hidden="true"></div>
            <div class="cp-hero__stat">
              <strong>UNGM</strong>
              <span>No. 1201966</span>
            </div>
            <div class="cp-hero__stat-div" aria-hidden="true"></div>
            <div class="cp-hero__stat">
              <strong>2029</strong>
              <span>Valid Until</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== ISSUER BAND ===== -->
      <div class="cp-issuer-band">
        <div class="cp-issuer-inner container">
          <div class="cp-issuer-item">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.5"/></svg>
            <div>
              <strong>Certification Body</strong>
              <span>Global Compliance Certification Pty Ltd (GCC)</span>
            </div>
          </div>
          <div class="cp-issuer-sep" aria-hidden="true"></div>
          <div class="cp-issuer-item">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 010 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
            <div>
              <strong>Accreditation Authority</strong>
              <span>JAS-ANZ (IAF MLA Recognised)</span>
            </div>
          </div>
          <div class="cp-issuer-sep" aria-hidden="true"></div>
          <div class="cp-issuer-item">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <div>
              <strong>Certificate Holder</strong>
              <span>MMT Care Pty Ltd T/A MMT Alliance — ABN 76 634 832 321</span>
            </div>
          </div>
          <div class="cp-issuer-sep" aria-hidden="true"></div>
          <div class="cp-issuer-item">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 7v5l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <div>
              <strong>Certificate Validity</strong>
              <span>Issued 30 June 2026 — Valid to 29 June 2029</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== ISO CERTIFICATES ===== -->
      <section class="cp-section cp-section--white" aria-labelledby="iso-heading">
        <div class="container">
          <div class="cp-section-hdr reveal">
            <span class="section-label">ISO Management System Certifications</span>
            <h2 id="iso-heading">Certified to Four ISO Standards</h2>
            <div class="divider"></div>
            <p class="cp-section-intro">All certifications cover the full operational scope of MMT Alliance — from procurement and strategic sourcing through to logistics, distribution, and project delivery across humanitarian, development, government, commercial, and infrastructure sectors.</p>
          </div>

          <div class="cp-iso-grid">

            <!-- ISO 9001 -->
            <article class="cp-card" data-cert-id="iso9001" role="button" tabindex="0" aria-label="View ISO 9001:2015 details">
              <div class="cp-card__stripe cp-card__stripe--blue"></div>
              <div class="cp-card__head">
                <div class="cp-card__badge cp-badge--blue">
                  <span class="cpb-gcc">GCC</span>
                  <span class="cpb-iso">ISO</span>
                  <span class="cpb-num">9001</span>
                </div>
                <div>
                  <h3 class="cp-card__std">ISO 9001:2015</h3>
                  <p class="cp-card__type">Quality Management System</p>
                </div>
              </div>
              <p class="cp-card__desc">Confirms a robust Quality Management System — ensuring consistent, high-quality outcomes across every procurement cycle, logistics operation, and project delivery engagement.</p>
              <div class="cp-card__table">
                <div class="cp-table-row"><span>Certificate No.</span><strong>1792-Q-1</strong></div>
                <div class="cp-table-row"><span>Issue Date</span><strong>30 June 2026</strong></div>
                <div class="cp-table-row"><span>Expiry Date</span><strong>29 June 2029</strong></div>
                <div class="cp-table-row"><span>Issued By</span><strong>GCC (JAS-ANZ Accredited)</strong></div>
              </div>
              <div class="cp-card__status"><span class="cp-dot"></span>Active &amp; Valid<span class="cp-card__tap-hint">Tap for details</span></div>
            </article>

            <!-- ISO 14001 -->
            <article class="cp-card" data-cert-id="iso14001" role="button" tabindex="0" aria-label="View ISO 14001:2015 details">
              <div class="cp-card__stripe cp-card__stripe--green"></div>
              <div class="cp-card__head">
                <div class="cp-card__badge cp-badge--green">
                  <span class="cpb-gcc">GCC</span>
                  <span class="cpb-iso">ISO</span>
                  <span class="cpb-num">14001</span>
                </div>
                <div>
                  <h3 class="cp-card__std">ISO 14001:2015</h3>
                  <p class="cp-card__type">Environmental Management System</p>
                </div>
              </div>
              <p class="cp-card__desc">Confirms a structured approach to environmental responsibility — minimising ecological impact across sourcing, logistics, and supply chain operations worldwide.</p>
              <div class="cp-card__table">
                <div class="cp-table-row"><span>Certificate No.</span><strong>1792-E-1</strong></div>
                <div class="cp-table-row"><span>Issue Date</span><strong>30 June 2026</strong></div>
                <div class="cp-table-row"><span>Expiry Date</span><strong>29 June 2029</strong></div>
                <div class="cp-table-row"><span>Issued By</span><strong>GCC (JAS-ANZ Accredited)</strong></div>
              </div>
              <div class="cp-card__status"><span class="cp-dot"></span>Active &amp; Valid<span class="cp-card__tap-hint">Tap for details</span></div>
            </article>

            <!-- ISO 45001 -->
            <article class="cp-card" data-cert-id="iso45001" role="button" tabindex="0" aria-label="View ISO 45001:2018 details">
              <div class="cp-card__stripe cp-card__stripe--red"></div>
              <div class="cp-card__head">
                <div class="cp-card__badge cp-badge--red">
                  <span class="cpb-gcc">GCC</span>
                  <span class="cpb-iso">ISO</span>
                  <span class="cpb-num">45001</span>
                </div>
                <div>
                  <h3 class="cp-card__std">ISO 45001:2018</h3>
                  <p class="cp-card__type">Occupational Health &amp; Safety</p>
                </div>
              </div>
              <p class="cp-card__desc">Verifies robust occupational health and safety frameworks — protecting workers and partners across complex, high-risk operational environments worldwide.</p>
              <div class="cp-card__table">
                <div class="cp-table-row"><span>Certificate No.</span><strong>1792-S-1</strong></div>
                <div class="cp-table-row"><span>Issue Date</span><strong>30 June 2026</strong></div>
                <div class="cp-table-row"><span>Expiry Date</span><strong>29 June 2029</strong></div>
                <div class="cp-table-row"><span>Issued By</span><strong>GCC (JAS-ANZ Accredited)</strong></div>
              </div>
              <div class="cp-card__status"><span class="cp-dot"></span>Active &amp; Valid<span class="cp-card__tap-hint">Tap for details</span></div>
            </article>

            <!-- ISO 22000 -->
            <article class="cp-card" data-cert-id="iso22000" role="button" tabindex="0" aria-label="View ISO 22000:2018 details">
              <div class="cp-card__stripe cp-card__stripe--orange"></div>
              <div class="cp-card__head">
                <div class="cp-card__badge cp-badge--orange">
                  <span class="cpb-gcc">GCC</span>
                  <span class="cpb-iso">ISO</span>
                  <span class="cpb-num">22000</span>
                </div>
                <div>
                  <h3 class="cp-card__std">ISO 22000:2018</h3>
                  <p class="cp-card__type">Food Safety Management System</p>
                </div>
              </div>
              <p class="cp-card__desc">Certifies food safety management across the supply chain — essential for humanitarian food relief programmes, WFP contracts, and food commodity distribution. Food Category: G.</p>
              <div class="cp-card__table">
                <div class="cp-table-row"><span>Certificate No.</span><strong>1792-FS-1</strong></div>
                <div class="cp-table-row"><span>Issue Date</span><strong>30 June 2026</strong></div>
                <div class="cp-table-row"><span>Expiry Date</span><strong>29 June 2029</strong></div>
                <div class="cp-table-row"><span>Issued By</span><strong>GCC (JAS-ANZ Accredited)</strong></div>
              </div>
              <div class="cp-card__status"><span class="cp-dot"></span>Active &amp; Valid<span class="cp-card__tap-hint">Tap for details</span></div>
            </article>

          </div>
        </div>
      </section>

      <!-- ===== HACCP + UNGM ===== -->
      <section class="cp-section cp-section--grey" aria-labelledby="other-heading">
        <div class="container">
          <div class="cp-section-hdr reveal">
            <span class="section-label">Additional Credentials</span>
            <h2 id="other-heading">HACCP &amp; UNGM Registration</h2>
            <div class="divider"></div>
          </div>
          <div class="cp-cred-grid">

            <!-- HACCP -->
            <article class="cp-cred-card reveal reveal-delay-1" data-cert-id="haccp" role="button" tabindex="0" aria-label="HACCP – tap for details">
              <div class="cp-cred-card__icon cp-cred-icon--teal">
                <svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="3"/><path d="M20 32l9 9 15-18" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div class="cp-cred-card__body">
                <div class="cp-cred-card__title-row">
                  <h3>HACCP Certified</h3>
                  <span class="cp-card__tap-hint">Tap for details</span>
                </div>
                <p class="cp-cred-card__sub">Hazard Analysis &amp; Critical Control Points — Codex Alimentarius 2020</p>
                <p class="cp-cred-card__desc">Systematic food safety hazard identification and control — a prerequisite for food aid and humanitarian nutrition programmes run by WFP, UNICEF, and international relief agencies.</p>
                <ul class="cp-cred-list">
                  <li><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>Systematic hazard analysis across all supply chain stages</li>
                  <li><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>Preventive controls for food safety risks</li>
                  <li><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>Full compliance with Codex Alimentarius 2020 standards</li>
                </ul>
              </div>
            </article>

            <!-- UNGM -->
            <article class="cp-cred-card reveal reveal-delay-2" data-cert-id="ungm" role="button" tabindex="0" aria-label="UNGM – tap for details">
              <div class="cp-cred-card__icon cp-cred-icon--navy">
                <svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="3"/><ellipse cx="32" cy="32" rx="12" ry="28" stroke="currentColor" stroke-width="2.5"/><line x1="4" y1="32" x2="60" y2="32" stroke="currentColor" stroke-width="2.5"/><path d="M8 19Q32 13 56 19" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 45Q32 51 56 45" stroke="currentColor" stroke-width="2" fill="none"/></svg>
              </div>
              <div class="cp-cred-card__body">
                <div class="cp-cred-card__title-row">
                  <h3>UNGM Registered Supplier</h3>
                  <span class="cp-card__tap-hint">Tap for details</span>
                </div>
                <p class="cp-cred-card__sub">United Nations Global Marketplace — Registration No. 1201966</p>
                <p class="cp-cred-card__desc">Officially registered on the UN procurement portal, enabling MMT Alliance to bid on and fulfil contracts from all UN agencies and affiliated organisations globally.</p>
                <ul class="cp-cred-list">
                  <li><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>Eligible to bid: UNDP, UNICEF, WFP, UNHCR &amp; more</li>
                  <li><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>Verified supplier profile with full compliance documentation</li>
                  <li><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>Registration No. 1201966 — actively maintained</li>
                </ul>
              </div>
            </article>

          </div>
        </div>
      </section>

      <!-- ===== SCOPE ===== -->
      <section class="cp-scope" aria-labelledby="scope-heading">
        <div class="container">
          <div class="cp-scope-inner reveal">
            <div class="cp-scope-text">
              <span class="section-label" style="color:rgba(255,255,255,0.5)">Certification Scope</span>
              <h2 id="scope-heading">What Our Certifications Cover</h2>
              <div class="divider" style="background:rgba(58,168,255,0.4)"></div>
              <p>All four ISO certifications and HACCP apply to the full scope of MMT Alliance operations:</p>
              <blockquote class="cp-scope-quote">
                "The procurement, strategic sourcing, warehousing, logistics, supply chain management, distribution, and project delivery support of goods, equipment, materials, commodities, and related services across humanitarian, development, government, commercial, and infrastructure sectors."
              </blockquote>
              <p class="cp-scope-note">Level 7/80 Dorcas Street, Southbank VIC 3006, Australia</p>
            </div>
            <div class="cp-scope-tags">
              <span>Procurement &amp; Sourcing</span>
              <span>Warehousing</span>
              <span>Logistics &amp; Supply Chain</span>
              <span>Distribution</span>
              <span>Last-Mile Delivery</span>
              <span>Project Delivery</span>
              <span>Humanitarian Sectors</span>
              <span>Development Sectors</span>
              <span>Government Contracts</span>
              <span>Infrastructure Projects</span>
              <span>Commercial Operations</span>
              <span>Emergency Response</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== COMPLIANCE NOTICE ===== -->
      <section class="cp-notice-section">
        <div class="container">
          <div class="cp-notice reveal">
            <svg viewBox="0 0 24 24" fill="none" class="cp-notice__icon" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/>
              <path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <div>
              <h3>Certification Mark Usage Notice</h3>
              <p>Certification marks are displayed strictly in accordance with conditions set by Global Compliance Certification Pty Ltd (GCC) and JAS-ANZ. These marks remain the property of their respective owners and are used solely to represent MMT Alliance's certified status. All certificates are subject to successful surveillance audits and remain valid only while those audits are maintained.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== CTA ===== -->
      <section class="cta-band" aria-labelledby="cert-cta-h">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cert-cta-h">Partner with a Certified, Compliant Organisation</h2>
            <p class="cta-intro">Our certifications are not badges — they are independently audited evidence of structured management systems, genuine accountability, and a commitment to quality and safety across every engagement.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                Request Our Certificates
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/compliance" class="btn btn-outline-white btn-lg">View Compliance Framework</a>
            </div>
          </div>
        </div>
      </section>
    `;

    /* Inject JSON-LD via DOM (avoids innerHTML script-parsing quirks) */
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "MMT Alliance – International Certifications",
      "description": "MMT Care Pty Ltd T/A MMT Alliance holds ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, ISO 22000:2018 and HACCP certifications, issued by GCC and accredited by JAS-ANZ.",
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "ISO 9001:2015", "credentialCategory": "certification" },
        { "@type": "EducationalOccupationalCredential", "name": "ISO 14001:2015", "credentialCategory": "certification" },
        { "@type": "EducationalOccupationalCredential", "name": "ISO 45001:2018", "credentialCategory": "certification" },
        { "@type": "EducationalOccupationalCredential", "name": "ISO 22000:2018", "credentialCategory": "certification" }
      ]
    });
    container.appendChild(ld);

    requestAnimationFrame(() => { this.initAnimations(); });
  },

  initAnimations() {
    const els = document.querySelectorAll('.reveal');
    const run = () => els.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('active');
    });
    window.addEventListener('scroll', run, { passive: true });
    run();
  }
};

Router.register('/certifications', function(container) {
  CertificationsPage.render(container);
});
