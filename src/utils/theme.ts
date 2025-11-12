import { $, type Signal } from "@builder.io/qwik";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "voltage-labs-theme";

/**
 * Get the initial theme from localStorage or system preference
 */
export const getInitialTheme = $(() => {
  if (typeof window === "undefined") return "light";

  // Check localStorage first
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored as Theme;
  }

  // Fall back to system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
});

/**
 * Apply theme to document
 */
export const applyTheme = $((theme: Theme) => {
  if (typeof window === "undefined") return;

  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Store preference
  localStorage.setItem(THEME_STORAGE_KEY, theme);
});

/**
 * Toggle theme
 */
export const toggleTheme = $((themeSignal: Signal<Theme>) => {
  const newTheme = themeSignal.value === "light" ? "dark" : "light";
  themeSignal.value = newTheme;
  applyTheme(newTheme);
});
