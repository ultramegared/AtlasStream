/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: input.component.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders a reusable HTML input component.
 * ----------------------------------------------------------------
 */

interface InputProps {
  id?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "search"
    | "tel"
    | "url"
    | "date";
  placeholder?: string;
  value?: string;
  className?: string;
}

/**
 * Creates a reusable input component.
 *
 * @param props Input properties.
 * @returns HTML string.
 */
export default function Input({
  id = "",
  type = "text",
  placeholder = "",
  value = "",
  className = ""
}: InputProps = {}): string {
  return `
    <input
      id="${id}"
      type="${type}"
      placeholder="${placeholder}"
      value="${value}"
      class="${className}"
    />
  `;
}