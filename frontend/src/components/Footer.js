// frontend/src/components/Footer.js

import { CONFIG } from "../constants/config";

export default function Footer() {
  return `
    <footer class="app-footer">

      <p>${CONFIG.DESIGNER}</p>

      <p>${CONFIG.COPYRIGHT}</p>

      <p>Version ${CONFIG.VERSION}</p>

    </footer>
  `;
}