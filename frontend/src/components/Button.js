// frontend/src/components/Button.js

export default function Button({
  id = "",
  text = "Botón",
  type = "button",
  className = ""
} = {}) {
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