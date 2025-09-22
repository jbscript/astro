import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <main className="mx-auto max-w-6xl w-full px-4">
          <App />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
