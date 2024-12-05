"use client";

import React, { useState, useEffect } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState<string>("light"); // Default theme is 'light'

  useEffect(() => {
    // Cek jika ada tema yang disimpan di localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    // Toggle tema saat tombol diklik
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Simpan tema yang dipilih
  };

  useEffect(() => {
    // Terapkan tema sesuai pilihan di className root
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="fixed top-4 right-4 z-50">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg transition-all ease-in-out duration-300"
      >
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-gray-800 dark:text-gray-200"
            fill="currentColor"
          >
            <path d="M12 3.5a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM4.22 5.636a1 1 0 011.415 0l1.415 1.415a1 1 0 11-1.415 1.415L4.22 7.05a1 1 0 010-1.415zM2 11a1 1 0 100 2h2a1 1 0 100-2H2zm15.364-5.364a1 1 0 010 1.415l-1.415 1.415a1 1 0 11-1.415-1.415l1.415-1.415a1 1 0 011.415 0zM12 18a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm7.78-2.636a1 1 0 011.415 1.415l-1.415 1.415a1 1 0 01-1.415-1.415l1.415-1.415zM20 11a1 1 0 100 2h2a1 1 0 100-2h-2z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-gray-200 dark:text-gray-800"
            fill="currentColor"
          >
            <path d="M12 3.5a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm-5.657 3.157a1 1 0 010 1.414L4.93 8.484a1 1 0 11-1.414-1.415l1.414-1.414a1 1 0 011.414 0zM3.5 11a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1zm7.071 6.364a1 1 0 01.707-.293h2a1 1 0 01.707 1.707l-1.414 1.414a1 1 0 11-1.415-1.414l.415-.415zM18.93 8.485a1 1 0 011.414 1.415l-1.414 1.414a1 1 0 01-1.414-1.415l1.414-1.414zm-1.414 8.485a1 1 0 011.414 0l1.414 1.414a1 1 0 01-1.414 1.415l-1.414-1.414a1 1 0 010-1.415z" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default ToggleTheme;
