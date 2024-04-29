// Favouritestudents.js
import React, { useContext } from "react";
import { NameContext } from "./Contextprovider";

function Favouritestudents() {
  const { favoriteStudents, handleDelete } = useContext(NameContext);

  const deleteStudent = (id) => {
    handleDelete(id, true); // Call handleDelete with isFavorite=true to delete from favoriteStudents
  };

  return (
    <div>
      <h2 className="flex justify-center">Favorite Students</h2>
      <ul>
        {favoriteStudents.map((student, index) => (
          <p className="flex justify-between items-center ml-9 mr-9" key={student.id}>
            {index + 1}.{student.Activity}
            <button className="text-red-500" onClick={() => deleteStudent(student.id)}>Delete</button>
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Favouritestudents;
