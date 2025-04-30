
/// <reference types="vite/client" />

// Add type declaration for vanilla-tilt
interface HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  }
}
