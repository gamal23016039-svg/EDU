import { createContext, useState, useEffect } from "react";

export const lessonsContext = createContext();

export function AuthProvider({ children }) {
  const [lesson, setLesson] = useState(null);

  useEffect(() => {}, []);

  return (
    <lessonsContext.Provider value={{ lesson, setLesson }}>
      {children}
    </lessonsContext.Provider>
  );
}
