/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: footer.component.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the application footer displaying
 * project information and version details.
 * ----------------------------------------------------------------
 */

import { CONFIG } from "../constants/config.constants";

/**
 * Creates the application footer.
 *
 * @returns HTML string.
 */
export default function Footer(): string {
  const year = new Date().getFullYear();

  return `
    <footer class="footer">

      <div class="footer-content">

        <p class="footer-designer">
          ${CONFIG.DESIGNER}
        </p>

        <p class="footer-copyright">
          © ${year} ${CONFIG.APP_NAME}
        </p>

        <p class="footer-version">
          Version ${CONFIG.VERSION}
        </p>

      </div>

    </footer>
  `;
}