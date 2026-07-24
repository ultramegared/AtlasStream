// frontend/src/components/Loading.js

export default function Loading(message = "Cargando...") {
  return `
    <div class="loading">
      <p>${message}</p>
    </div>
  `;
}