// Contextlist.js
import React, { createContext, useState } from "react";

const NameContext = createContext();

export const Contextprovider = ({ children }) => {
  const [value, setValue] = useState([
    { id: 1, Activity: "Kumar" },
    { id: 2, Activity: "Ajay" },
    { id: 3, Activity: "Arjun" },
    { id: 4, Activity: "Mani" }
  ]);

  const [favoriteStudents, setFavoriteStudents] = useState([]);

  const handleDelete = (id, isFavorite) => {
    if (isFavorite) {
      setFavoriteStudents(favoriteStudents.filter((student) => student.id !== id));
    } else {
      const deletedStudent = value.find((student) => student.id === id);
      if (deletedStudent) {
        setFavoriteStudents([...favoriteStudents, deletedStudent]);
      }
    }
  };

  return (
    <NameContext.Provider value={{ value, setValue, favoriteStudents, handleDelete }}>
      {children}
    </NameContext.Provider>
  );
};

export { NameContext };
export default Contextprovider;
