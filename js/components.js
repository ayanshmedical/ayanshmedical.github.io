const NAV_LINKS = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "products.html", label: "Products", key: "products" },
  { href: "about.html", label: "About", key: "about" },
  { href: "contact.html", label: "Contact", key: "contact" },
];

const PHONE_DISPLAY = "+91 82982 22203";
const PHONE_TEL = "+918298222203";
const PHONE_WA = "918298222203";

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const activePage = document.body.dataset.page || "";

    const links = NAV_LINKS.map(
      (link) =>
        `<li><a href="${link.href}"${link.key === activePage ? ' class="active"' : ""}>${link.label}</a></li>`
    ).join("");

    this.innerHTML = `
      <header class="site-header">
        <div class="container">
          <a class="brand" href="index.html">
            <img src="assets/images/logo/logo.png" alt="Ayansh Medical Hall logo" width="40" height="40">
            <span>Ayansh Medical Hall</span>
          </a>
          <nav>
            <ul class="nav-links" id="nav-links">
              ${links}
              <li><a href="tel:${PHONE_TEL}" class="btn btn-primary" style="padding:0.6em 1.4em;">Call Us</a></li>
            </ul>
          </nav>
          <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <a class="brand" href="index.html" style="color:#fff;">
                <img src="assets/images/logo/logo.png" alt="Ayansh Medical Hall logo" width="40" height="40">
                <span>Ayansh Medical Hall</span>
              </a>
              <p style="color:rgba(255,255,255,0.65); margin-top:1rem; max-width:32ch;">
                Trusted trading of generic medicines, ayurvedic formulations &amp; nutraceuticals from Bhagalpur, Bihar.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="products.html">Products</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>01, Jagdishpur Road, Near Petrol Pump, Baijani, Bhagalpur, Bihar &ndash; 812005</li>
                <li><a href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a></li>
                <li><a href="https://wa.me/${PHONE_WA}" target="_blank" rel="noopener">Chat on WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>&copy; ${year} Ayansh Medical Hall. All rights reserved.</span>
            <span><a href="contact.html">Get in Touch</a></span>
          </div>
        </div>
      </footer>
    `;
  }
}

class WhatsappFab extends HTMLElement {
  connectedCallback() {
    const message = encodeURIComponent(
      "Hi Ayansh Medical Hall, I'd like to enquire about your products."
    );
    this.innerHTML = `
      <a class="whatsapp-fab" href="https://wa.me/${PHONE_WA}?text=${message}" target="_blank" rel="noopener" aria-label="Chat with Ayansh Medical Hall on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.33 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.16-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2 1.11.99 2.05 1.3 2.34 1.44.3.15.47.13.64-.08.18-.2.75-.87.95-1.17.2-.29.4-.24.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.12.07.7-.17 1.38z"/></svg>
      </a>
    `;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
customElements.define("whatsapp-fab", WhatsappFab);
