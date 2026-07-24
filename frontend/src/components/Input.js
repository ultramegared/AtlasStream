// frontend/src/components/Input.js

export default function Input({
  id = "",
  type = "text",
  placeholder = "",
  value = "",
  className = ""
} = {}) {
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