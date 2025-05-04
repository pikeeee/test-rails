import React from "react";
import { createRoot } from "react-dom/client";
import HelloComponent from "./components/HelloComponent.jsx";

// Khi trang (DOM) đã sẵn sàng, mount React vào #root
document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  if (rootEl) createRoot(rootEl).render(<HelloComponent />);
});
