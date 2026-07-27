/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: button.component.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders a reusable HTML button component.
 * ----------------------------------------------------------------
 */

interface ButtonProps {
  id?: string;
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

/**
 * Creates a reusable button component.
 *
 * @param props Button properties.
 * @returns HTML string.
 */
export default function Button({
  id = "",
  text = "Botón",
  type = "button",
  className = ""
}: ButtonProps = {}): string {
  return `
    <button
      id="${id}"
      type="${type}"
      class="${className}"
    >
      ${text}
    </button>
  `;
}