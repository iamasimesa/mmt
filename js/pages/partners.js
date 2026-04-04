/* ============================================================
   pages/partners.js — Partners page (PROFESSIONAL LAYOUT)
   ============================================================ */

const PartnersPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== PAGE HERO ===== -->
      <section class="partners-hero">
        <div class="partners-hero-bg-overlay"></div>
        <div class="partners-hero-bg-pattern"></div>
        <div class="partners-hero-watermark">PARTNERS</div>
        
        <div class="container">
          <div class="partners-hero-content">
            <nav class="partners-breadcrumb" aria-label="Breadcrumb">
              <a href="/" aria-label="Home">Home</a>
              <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span aria-current="page">Partners</span>
            </nav>
            
            <h1 class="partners-hero-title">
              Our Partners &amp; Affiliations
            </h1>
            
            <p class="partners-hero-subtitle">
              Collaborating with global institutions to drive sustainable development, 
              gender equality, and humanitarian excellence across 50+ countries.
            </p>
          </div>
        </div>
        
        <div class="partners-hero-scroll-indicator">
          <span>Explore partnerships</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </section>

      <!-- ===== UN GLOBAL COMPACT SECTION ===== -->
      <section class="partners-section partners-section-detail" id="ungc">
        <div class="container">
          <div class="partners-detail-grid">
            <div class="partners-detail-content">
              <div class="partners-section-label">UN Partnership</div>
              <h2 class="partners-section-title">UN Global Compact Signatory</h2>
              <div class="partners-divider"></div>
              
              <p class="partners-lead">
                MMT Alliance is a proud signatory of the United Nations Global Compact, 
                committing to align our operations with universal principles on human rights, 
                labour, environment, and anti-corruption.
              </p>
              
              <div class="partners-ungc-benefits">
                <div class="partners-ungc-item">
                  <div class="partners-ungc-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="partners-ungc-text">
                    <h4>Human Rights</h4>
                    <p>Supporting and respecting the protection of internationally proclaimed human rights</p>
                  </div>
                </div>
                
                <div class="partners-ungc-item">
                  <div class="partners-ungc-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="partners-ungc-text">
                    <h4>Labour Standards</h4>
                    <p>Upholding freedom of association and eliminating forced labour and discrimination</p>
                  </div>
                </div>
                
                <div class="partners-ungc-item">
                  <div class="partners-ungc-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="partners-ungc-text">
                    <h4>Environment</h4>
                    <p>Supporting a precautionary approach to environmental challenges</p>
                  </div>
                </div>
                
                <div class="partners-ungc-item">
                  <div class="partners-ungc-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="partners-ungc-text">
                    <h4>Anti-Corruption</h4>
                    <p>Working against corruption in all its forms, including extortion and bribery</p>
                  </div>
                </div>
              </div>
              
              <a href="https://unglobalcompact.org" target="_blank" rel="noopener" class="partners-btn partners-btn-outline">
                <span>Visit UN Global Compact</span>
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </a>
            </div>
            
            <div class="partners-detail-image">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" 
                   alt="UN Global Compact Partnership" 
                   loading="lazy">
              <div class="partners-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== WEPs SECTION ===== -->
      <section class="partners-section partners-section-alt" id="weps">
        <div class="container">
          <div class="partners-detail-grid partners-detail-grid-reverse">
            <div class="partners-detail-image">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop" 
                   alt="Women's Empowerment" 
                   loading="lazy">
              <div class="partners-image-overlay"></div>
            </div>
            
            <div class="partners-detail-content">
              <div class="partners-section-label">Gender Equality</div>
              <h2 class="partners-section-title">Women's Empowerment Principles</h2>
              <div class="partners-divider"></div>
              
              <p class="partners-lead">
                We are committed to advancing gender equality and women's empowerment 
                in the workplace, marketplace, and community through the WEPs framework.
              </p>
              
              <div class="partners-weps-box">
                <h4 class="partners-weps-title">The Seven WEPs Principles:</h4>
                <ol class="partners-weps-list">
                  <li>Establish high-level corporate leadership for gender equality</li>
                  <li>Treat all women and men fairly at work — respect and support human rights and non-discrimination</li>
                  <li>Ensure health, safety and well-being of all women and men workers</li>
                  <li>Promote education, training and professional development for women</li>
                  <li>Implement enterprise development, supply chain and marketing practices that empower women</li>
                  <li>Promote equality through community initiatives and advocacy</li>
                  <li>Measure and publicly report on progress to achieve gender equality</li>
                </ol>
              </div>
              
              <a href="https://www.weps.org/#main-content" target="_blank" rel="noopener" class="partners-btn partners-btn-outline">
                <span>Learn About WEPs</span>
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
            <!-- ===== GLOBAL SUPPLIER NETWORK SECTION ===== -->
      <section class="partners-section partners-section-detail" id="suppliers">
        <div class="container">
          <div class="partners-detail-grid">
            <div class="partners-detail-content">
              <div class="partners-section-label">Global Network</div>
              <h2 class="partners-section-title">Global Supplier Network</h2>
              <div class="partners-divider"></div>
              
              <p class="partners-lead">
                Connected with verified suppliers across 50+ countries, ensuring quality, 
                compliance, and competitive sourcing for any product category worldwide.
              </p>
              
              <div class="partners-network-stats">
                <div class="partners-stat-item">
                  <div class="partners-stat-value">50+</div>
                  <div class="partners-stat-label">Countries</div>
                </div>
                <div class="partners-stat-item">
                  <div class="partners-stat-value">500+</div>
                  <div class="partners-stat-label">Verified Suppliers</div>
                </div>
                <div class="partners-stat-item">
                  <div class="partners-stat-value">100%</div>
                  <div class="partners-stat-label">Quality Assured</div>
                </div>
              </div>
              
              <div class="partners-network-features">
                <div class="partners-network-item">
                  <div class="partners-network-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="partners-network-text">
                    <h4>Pre-Qualified Suppliers</h4>
                    <p>Rigorous vetting process ensuring compliance with international standards</p>
                  </div>
                </div>
                
                <div class="partners-network-item">
                  <div class="partners-network-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="partners-network-text">
                    <h4>Competitive Pricing</h4>
                    <p>Leveraging global networks to secure best value for money</p>
                  </div>
                </div>
                
                <div class="partners-network-item">
                  <div class="partners-network-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="partners-network-text">
                    <h4>Quality Control</h4>
                    <p>Inspection and verification at every stage of the supply chain</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="partners-detail-image">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" 
                   alt="Global Supplier Network" 
                   loading="lazy">
              <div class="partners-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== LOGISTICS PARTNERS SECTION ===== -->
      <section class="partners-section partners-section-alt" id="logistics">
        <div class="container">
          <div class="partners-detail-grid partners-detail-grid-reverse">
            <div class="partners-detail-image">
              <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&h=600&fit=crop" 
                   alt="Logistics Partners" 
                   loading="lazy">
              <div class="partners-image-overlay"></div>
            </div>
            
            <div class="partners-detail-content">
              <div class="partners-section-label">Strategic Alliances</div>
              <h2 class="partners-section-title">Logistics Partners</h2>
              <div class="partners-divider"></div>
              
              <p class="partners-lead">
                Strategic alliances with leading freight forwarders and last-mile delivery 
                providers, ensuring seamless transportation across air, sea, and land.
              </p>
              
              <div class="partners-logistics-services">
                <div class="partners-logistics-item">
                  <div class="partners-logistics-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="partners-logistics-text">
                    <h4>Air Freight</h4>
                    <p>Express and standard air cargo services with major carriers</p>
                  </div>
                </div>
                
                <div class="partners-logistics-item">
                  <div class="partners-logistics-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="partners-logistics-text">
                    <h4>Ocean Freight</h4>
                    <p>Full container load (FCL) and less than container load (LCL) services</p>
                  </div>
                </div>
                
                <div class="partners-logistics-item">
                  <div class="partners-logistics-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" stroke-width="2"/>
                      <path d="M16 8h4l3 4v4h-7V8z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="partners-logistics-text">
                    <h4>Warehousing</h4>
                    <p>Storage and inventory management at strategic locations</p>
                  </div>
                </div>
                
                <div class="partners-logistics-item">
                  <div class="partners-logistics-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      <polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div class="partners-logistics-text">
                    <h4>Last-Mile Delivery</h4>
                    <p>Final delivery to end recipients with tracking and confirmation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== BECOME A PARTNER FORM ===== -->
      <section class="partners-section partners-section-form" id="partners-become-partner">
        <div class="container">
          <div class="partners-section-header partners-text-center">
            <div class="partners-section-label">Partnership Opportunities</div>
            <h2 class="partners-section-title">Become a Partner</h2>
            <div class="partners-divider partners-divider-center"></div>
            <p class="partners-section-intro">
              Join our network of strategic partners. Whether you're a supplier, logistics provider, 
              or organization seeking collaboration, we'd love to hear from you.
            </p>
          </div>
          
          <div class="partners-form-container">
            <form class="partners-form" id="partners-partnership-form">
              <div class="partners-form-grid">
                <div class="partners-form-group">
                  <label for="partners-org-name">Organization Name *</label>
                  <input type="text" id="partners-org-name" name="organizationName" required 
                         placeholder="Enter your organization name">
                </div>
                
                <div class="partners-form-group">
                  <label for="partners-type">Partnership Type *</label>
                  <select id="partners-type" name="partnershipType" required>
                    <option value="">Select partnership type</option>
                    <option value="supplier">Supplier/Vendor</option>
                    <option value="logistics">Logistics Provider</option>
                    <option value="strategic">Strategic Alliance</option>
                    <option value="ngo">NGO/Non-Profit</option>
                    <option value="government">Government Agency</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div class="partners-form-grid">
                <div class="partners-form-group">
                  <label for="partners-contact">Contact Person *</label>
                  <input type="text" id="partners-contact" name="contactName" required 
                         placeholder="Full name">
                </div>
                
                <div class="partners-form-group">
                  <label for="partners-email">Email Address *</label>
                  <input type="email" id="partners-email" name="email" required 
                         placeholder="your.email@organization.com">
                </div>
              </div>
              
              <div class="partners-form-grid">
                <div class="partners-form-group">
                  <label for="partners-phone">Phone Number</label>
                  <input type="tel" id="partners-phone" name="phone" 
                         placeholder="+27 (0) 00 000 0000">
                </div>
                
                <div class="partners-form-group">
                  <label for="partners-country">Country *</label>
                  <input type="text" id="partners-country" name="country" required 
                         placeholder="Where is your organization based?">
                </div>
              </div>
              
              <div class="partners-form-group">
                <label for="partners-description">Partnership Description *</label>
                <textarea id="partners-description" name="description" rows="5" required
                          placeholder="Tell us about your organization and how you'd like to partner with MMT Alliance..."></textarea>
              </div>
              
              <div class="partners-form-group">
                <label for="partners-website">Website URL</label>
                <input type="url" id="partners-website" name="website" 
                       placeholder="https://www.yourorganization.com">
              </div>
              
              <div class="partners-form-group partners-checkbox-group">
                <label class="partners-checkbox-label">
                  <input type="checkbox" name="consent" required>
                  <span class="partners-checkbox-custom"></span>
                  <span class="partners-checkbox-text">I agree to the processing of my personal data in accordance with the privacy policy *</span>
                </label>
              </div>
              
              <div class="partners-form-actions">
                <button type="submit" class="partners-btn partners-btn-primary partners-btn-lg">
                  <span>Submit Partnership Inquiry</span>
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
            </form>
            
            <div class="partners-form-success" id="partners-form-success" style="display:none;">
              <div class="partners-success-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="partners-success-title">Thank You for Your Interest!</h3>
              <p class="partners-success-desc">Our partnerships team will review your inquiry and get back to you within 5 business days.</p>
              <button class="partners-btn partners-btn-outline" id="partners-reset-btn">Submit Another Inquiry</button>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== PARTNERSHIP BENEFITS ===== -->
      <section class="partners-section partners-section-benefits">
        <div class="container">
          <div class="partners-section-header partners-text-center">
            <div class="partners-section-label">Why Partner With Us</div>
            <h2 class="partners-section-title">Partnership Benefits</h2>
            <div class="partners-divider partners-divider-center"></div>
          </div>
          
          <div class="partners-benefits-grid">
            <div class="partners-benefit-card">
              <div class="partners-benefit-card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="partners-benefit-card-title">Global Reach</h3>
              <p class="partners-benefit-card-desc">Access to operations across 50+ countries with established supply chain networks.</p>
            </div>
            
            <div class="partners-benefit-card">
              <div class="partners-benefit-card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="partners-benefit-card-title">Compliance & Standards</h3>
              <p class="partners-benefit-card-desc">Adherence to UN procurement guidelines, ISO standards, and international best practices.</p>
            </div>
            
            <div class="partners-benefit-card">
              <div class="partners-benefit-card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="partners-benefit-card-title">Rapid Deployment</h3>
              <p class="partners-benefit-card-desc">Ability to mobilize resources and supplies within 72 hours for emergency response.</p>
            </div>
            
            <div class="partners-benefit-card">
              <div class="partners-benefit-card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="partners-benefit-card-title">Trusted Network</h3>
              <p class="partners-benefit-card-desc">Collaboration with UN agencies, governments, and leading humanitarian organizations.</p>
            </div>
          </div>
        </div>
      </section>
    `;

    PartnersPage.initReveal();
    PartnersPage.initForm();
    PartnersPage.initSmoothScroll();
  },

  initReveal() {
    const els = document.querySelectorAll('.partners-reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('partners-visible'));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('partners-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    setTimeout(() => els.forEach(el => el.classList.add('partners-visible')), 800);
  },

  initForm() {
    const form = document.getElementById('partners-partnership-form');
    const success = document.getElementById('partners-form-success');
    const resetBtn = document.getElementById('partners-reset-btn');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Partnership inquiry:', Object.fromEntries(new FormData(form)));
        form.style.display = 'none';
        success.style.display = 'block';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (form) { form.reset(); form.style.display = 'flex'; }
        if (success) success.style.display = 'none';
      });
    }
  },

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
};

Router.register('/partners', PartnersPage.render.bind(PartnersPage));