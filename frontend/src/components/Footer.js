// frontend/src/components/Footer.js

import { CONFIG } from "../constants/config";

export default function Footer() {
  return `
    <footer class="footer">

      <div class="footer-content">

        <p class="footer-designer">
          ${CONFIG.DESIGNER}
        </p>

        <p class="footer-copyright">
          ${CONFIG.COPYRIGHT}
        </p>

        <p class="footer-version">
          Version ${CONFIG.VERSION}
        </p>

      </div>

    </footer>
  `;
}