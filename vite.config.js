/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,  // Enables global `test` function
    environment: "jsdom", // Simulates browser environment for React
    setupFiles: "./src/setupTests.js", // Optional setup file
  },
});