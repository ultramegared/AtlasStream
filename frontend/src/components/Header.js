// frontend/src/components/Header.js

export default function Header(title = "AtlasStream") {
  return `
    <header class="header">
      <h1>${title}</h1>
    </header>
  `;
}