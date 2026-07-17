/* ============================================================
   APP.JS — Application bootstrap + Cert Modal
   ============================================================ */

/* ── Certification data ─────────────────────────────────── */
const CERT_DATA = {
  iso9001: {
    colorClass: 'blue',
    isoLabel: '9001',
    standard: 'ISO 9001:2015',
    type: 'Quality Management System',
    certNo: '1792-Q-1',
    issued: '30 June 2026',
    expires: '29 June 2029',
    issuer: 'Global Compliance Certification Pty Ltd (GCC)',
    accreditor: 'JAS-ANZ',
    desc: 'Verifies that MMT Alliance operates a robust Quality Management System — ensuring consistent, high-quality outcomes across every procurement cycle, logistics operation, and project delivery engagement worldwide.',
  },
  iso14001: {
    colorClass: 'green',
    isoLabel: '14001',
    standard: 'ISO 14001:2015',
    type: 'Environmental Management System',
    certNo: '1792-E-1',
    issued: '30 June 2026',
    expires: '29 June 2029',
    issuer: 'Global Compliance Certification Pty Ltd (GCC)',
    accreditor: 'JAS-ANZ',
    desc: 'Confirms MMT Alliance\'s structured approach to environmental responsibility — minimising ecological impact across sourcing, logistics, and supply chain operations. A critical requirement for UN and government contracts.',
  },
  iso45001: {
    colorClass: 'red',
    isoLabel: '45001',
    standard: 'ISO 45001:2018',
    type: 'Occupational Health & Safety Management System',
    certNo: '1792-S-1',
    issued: '30 June 2026',
    expires: '29 June 2029',
    issuer: 'Global Compliance Certification Pty Ltd (GCC)',
    accreditor: 'JAS-ANZ',
    desc: 'Verifies that MMT Alliance maintains robust occupational health and safety frameworks — protecting workers and partners across complex, high-risk operational environments worldwide.',
  },
  iso22000: {
    colorClass: 'orange',
    isoLabel: '22000',
    standard: 'ISO 22000:2018',
    type: 'Food Safety Management System',
    certNo: '1792-FS-1',
    issued: '30 June 2026',
    expires: '29 June 2029',
    issuer: 'Global Compliance Certification Pty Ltd (GCC)',
    accreditor: 'JAS-ANZ',
    desc: 'Certifies MMT Alliance\'s food safety management across the supply chain — essential for humanitarian food relief programmes, WFP contracts, and food commodity distribution at scale. Food Category: G.',
  },
  haccp: {
    colorClass: 'teal',
    isSpecial: 'haccp',
    standard: 'HACCP Certified',
    type: 'Hazard Analysis & Critical Control Points — Codex Alimentarius 2020',
    certNo: '—',
    issued: '—',
    expires: '—',
    issuer: 'Global Compliance Certification Pty Ltd (GCC)',
    accreditor: 'JAS-ANZ',
    desc: 'Demonstrates MMT Alliance\'s systematic approach to food safety hazard identification and control — a prerequisite for food aid and humanitarian nutrition programmes operated by WFP, UNICEF, and international relief agencies.',
  },
  ungm: {
    colorClass: 'ungm',
    isSpecial: 'ungm',
    standard: 'UNGM Registered Supplier',
    type: 'United Nations Global Marketplace — Registration No. 1201966',
    desc: 'MMT Alliance is officially registered on the UN Global Marketplace (UNGM), the procurement portal used by all UN agencies. This registration makes MMT Alliance eligible to bid on contracts from UNDP, UNICEF, WFP, UNHCR, and affiliated organisations.',
  },
  jasanz: {
    colorClass: 'jasanz',
    isSpecial: 'jasanz',
    standard: 'JAS-ANZ Accreditation',
    type: 'Joint Accreditation System of Australia & New Zealand',
    desc: 'All MMT Alliance certifications are issued by GCC, which is accredited by JAS-ANZ — the official accreditation body for Australia and New Zealand. This carries international recognition under the IAF Multilateral Recognition Arrangement (MLA), meaning our certifications are accepted globally.',
  },
};

/* ── Modal helpers ──────────────────────────────────────── */
function buildModalBadge(data) {
  if (data.isSpecial === 'haccp') {
    return `<div class="certm-badge certm-badge--teal">
      <svg viewBox="0 0 24 24" fill="none" style="width:22px;height:22px;color:#fff"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/></svg>
      <span style="font-size:0.5rem;font-weight:800;color:#fff">HACCP</span>
    </div>`;
  }
  if (data.isSpecial === 'ungm') {
    return `<div class="certm-badge certm-badge--ungm">
      <svg viewBox="0 0 48 48" fill="none" style="width:26px;height:26px;color:#fff">
        <circle cx="24" cy="24" r="21" stroke="currentColor" stroke-width="2.5"/>
        <ellipse cx="24" cy="24" rx="10" ry="21" stroke="currentColor" stroke-width="2"/>
        <line x1="3" y1="24" x2="45" y2="24" stroke="currentColor" stroke-width="2"/>
      </svg>
    </div>`;
  }
  if (data.isSpecial === 'jasanz') {
    return `<div class="certm-badge certm-badge--jasanz">
      <span style="font-size:0.6rem;font-weight:800;color:#fff;text-align:center;line-height:1.2">JAS<br>ANZ</span>
    </div>`;
  }
  return `<div class="certm-badge certm-badge--${data.colorClass}">
    <span style="font-size:0.42rem;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:.08em">GCC</span>
    <span style="font-size:0.75rem;font-weight:700;color:#fff">ISO</span>
    <span style="font-size:0.6rem;font-weight:700;color:rgba(255,255,255,0.9)">${data.isoLabel}</span>
  </div>`;
}

function buildModalMeta(data) {
  if (!data.certNo || data.certNo === '—') return '';
  return `<div class="certm-meta">
    <div class="certm-meta-row"><span>Certificate No.</span><strong>${data.certNo}</strong></div>
    <div class="certm-meta-row"><span>Issue Date</span><strong>${data.issued}</strong></div>
    <div class="certm-meta-row"><span>Expiry Date</span><strong>${data.expires}</strong></div>
    <div class="certm-meta-row"><span>Issued By</span><strong>${data.issuer}</strong></div>
    <div class="certm-meta-row"><span>Accredited By</span><strong>${data.accreditor}</strong></div>
  </div>`;
}

function openCertModal(certId) {
  const data = CERT_DATA[certId];
  if (!data) return;
  const overlay = document.getElementById('cert-modal');
  if (!overlay) return;

  overlay.querySelector('#certm-badge-el').innerHTML = buildModalBadge(data);
  overlay.querySelector('#certm-title').textContent = data.standard;
  overlay.querySelector('#certm-type').textContent = data.type;
  overlay.querySelector('#certm-desc').textContent = data.desc;
  overlay.querySelector('#certm-meta-el').innerHTML = buildModalMeta(data);

  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('certm-open');
  document.body.classList.add('certm-active');
  overlay.querySelector('.certm-dialog').focus();
}

function closeCertModal() {
  const overlay = document.getElementById('cert-modal');
  if (!overlay) return;
  overlay.classList.remove('certm-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('certm-active');
  /* Reset scroll AFTER the next paint — removing overflow:hidden is a CSS change
     that is pending until paint. Setting scrollTop synchronously has no effect
     while the overflow state is still being resolved by the browser. */
  requestAnimationFrame(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

/* ── Bootstrap ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  Router.init();

  /* Cert modal: event delegation so it works on dynamically rendered content */
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-cert-id]');
    if (trigger) { e.preventDefault(); openCertModal(trigger.dataset.certId); return; }
    if (e.target.id === 'cert-modal' || e.target.classList.contains('certm-overlay')) closeCertModal();
  });

  const closeBtn = document.getElementById('certm-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeCertModal);

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCertModal(); });
});
